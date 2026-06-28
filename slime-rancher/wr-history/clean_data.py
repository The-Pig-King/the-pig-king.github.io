import json

CATEGORY_MAP = {
    'q258nxj2': 'any-glitchless',
    'zdnrjnn2': 'all-gordos',
    '5dwyog0k': 'slimepedia-glitchless',
    '02q8n972': 'pink-gordo',
    '824m7le2': 'vacpack',
    '7dg4nogd': 'any-glitched',
    'xk98r4v2': 'slimepedia-glitched'
}

VALUE_MAP = {
    'subcategory': {
        '5le899pl': '1.0.1-1.4.4',
        'klr78yoq': '1.0.0',
        '4lx70erq': 'twinkle',
        '21g4ydo1': '1.0.1-1.4.4-glitchless',
        'jqz5kekq': '1.0.1-1.2.0-glitched',
        'gq7pw0dq': 'rush-mode',
        '5lemnw51': '1.4.0-1.4.4',
        'klr0n4wl': '1.2.0-1.3.2',
        'mln0rmnq': '1.1.0-1.1.2',
        '4qyy3odq': '1.0.1',
        '9qj4jnoq': '1.3.2-1.4.4',
        'jq6x3roq': '1.0.1-1.3.0',
        '5lm4z60l': '1.0.1-1.4.4-glitchless',
        '81wd3o6q': '1.0.1-1.4.4-glitched',
        '5le4dr61': '1.0.1-1.2.0',
        '0q55knvq': '1.0.0',
        'zqo3do4q': '1.2.0',
        '013m37yl': '1.1.0-1.1.2',
        'rqvr3oyl': '1.0.1',
    },

    'version': {
        '814mdde1': '1.4.4',
        'gq7jv6rq': '1.4.3',
        '81p8myvl': '1.4.2',
        '21gogo8q': '1.4.1',
        '0q5g40ml': '1.4.0',
        '5le4dz61': '1.3.2',
        '0q55kzvq': '1.3.0',
        '81p08onq': '1.2.2',
        'xqk4704l': '1.2.1',
        '4lx83og': '1.2.0',
        'p12w3m21': '1.1.2',
        'gq74kdrq': '1.1.0',
        '814v3gk1': '1.0.1',
        'z1997y41': '1.0.0',
    },
}

INPUT_FILE = 'raw_data.json'
OUTPUT_FILE = 'data.json'


def clean_player(player):
    if not isinstance(player, dict):
        return player

    cleaned = {}

    allowed_fields = [
        'id',
        'names',
        'assets',
        'location',
        'style'
    ]

    for k in allowed_fields:
        if k in player:
            cleaned[k] = player[k]

    # strip any URL/URI fields recursively
    def strip_urls(obj):
        if isinstance(obj, dict):
            return {
                k: strip_urls(v)
                for k, v in obj.items()
                if 'url' not in k.lower() and 'uri' not in k.lower()
            }
        elif isinstance(obj, list):
            return [strip_urls(v) for v in obj]
        return obj

    return strip_urls(cleaned)


def clean_run(run):
    # map category id → category name
    category_id = run.get('category')
    mapped_category = CATEGORY_MAP.get(category_id, category_id)

    raw_values = run.get('values', {})

    subcategory = None
    version = None

    if isinstance(raw_values, dict):
        for v in raw_values.values():

            if v in VALUE_MAP.get('subcategory', {}):
                subcategory = VALUE_MAP['subcategory'][v]

            elif v in VALUE_MAP.get('version', {}):
                version = VALUE_MAP['version'][v]

    elif isinstance(raw_values, list):
        for v in raw_values:

            if v in VALUE_MAP.get('subcategory', {}):
                subcategory = VALUE_MAP['subcategory'][v]

            elif v in VALUE_MAP.get('version', {}):
                version = VALUE_MAP['version'][v]

    return {
        'id': run.get('id'),
        'weblink': run.get('weblink'),
        'category': mapped_category,
        'videos': run.get('videos'),
        'comment': run.get('comment'),
        'date': run.get('date'),
        'primary_t': run.get('times', {}).get('primary_t'),
        'platform': run.get('platform'),

        # split fields (single value each)
        'subcategory': subcategory,
        'version': version,

        'players_full': [
            clean_player(p)
            for p in run.get('players_full', [])
        ]
    }


def main():
    print('Loading file...')

    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        runs = json.load(f)

    total = len(runs)
    print(f'Loaded {total} runs')

    cleaned = []

    print('Starting cleanup...\n')

    for i, run in enumerate(runs, 1):
        cleaned.append(clean_run(run))

        # progress log
        if i % 1000 == 0 or i == total:
            percent = (i / total) * 100
            print(f'[{i}/{total}] ({percent:.2f}%) processed')

    print('\nWriting output file...')

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(cleaned, f, indent=2)

    print(f'Done → {OUTPUT_FILE}')


if __name__ == '__main__':
    main()