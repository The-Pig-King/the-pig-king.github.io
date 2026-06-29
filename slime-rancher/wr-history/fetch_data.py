import json
import urllib.request
import time

def get_json(url):
    with urllib.request.urlopen(url) as r:
        return json.load(r)

# 1. Fetch all runs
runs = []
url = "https://www.speedrun.com/api/v1/runs?status=verified&orderby=date&direction=asc&game=9do79k6p&max=200"

page = 1

print("Starting run download...")

while url:
    print(f"[Runs] Fetching page {page} ...")

    data = get_json(url)

    batch = data.get("data", [])
    runs.extend(batch)

    print(f"[Runs] Page {page}: +{len(batch)} runs (total: {len(runs)})")

    url = next(
        (l["uri"] for l in data.get("pagination", {}).get("links", [])
         if l["rel"] == "next"),
        None
    )

    page += 1
    time.sleep(0.1)

print(f"Done fetching runs. Total runs: {len(runs)}")

# 2. Collect user IDs
print("Collecting user IDs...")

user_ids = set()
for run in runs:
    for p in run.get("players", []):
        if p.get("rel") == "user" and p.get("id"):
            user_ids.add(p["id"])

user_ids = list(user_ids)
print(f"Found {len(user_ids)} unique users")

# 3. Fetch user data
users = {}

print("Fetching user data...")

for i, uid in enumerate(user_ids, 1):
    print(f"[Users] {i}/{len(user_ids)}: {uid}")

    data = get_json(f"https://www.speedrun.com/api/v1/users/{uid}")
    users[uid] = data.get("data")

    time.sleep(0.1)

print("Done fetching users")

# 4. Attach user data to runs
print("Enriching runs...")

for run in runs:
    enriched_players = []

    for p in run.get("players", []):
        if p.get("rel") == "user":
            uid = p.get("id")
            enriched_players.append(users.get(uid))
        else:
            enriched_players.append(p)

    run["players_full"] = enriched_players

print("Done enriching runs")

# 5. Save
print("Saving file...")

with open("raw_data.json", "w", encoding="utf-8") as f:
    json.dump(runs, f, indent=2)

print("Saved to raw_data.json")