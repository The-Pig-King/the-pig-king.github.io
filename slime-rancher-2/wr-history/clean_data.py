import json

CATEGORY_MAP = {
    'n2y0xr7d': 'any',
    'q25nw5j2': 'all-gordos',
    'jdr56wnk': 'slimepedia',
}

VALUE_MAP = {
    'subcategory': {
        '1dkg5wgl': 'glitchless',
        'q8k8po6q': 'glitched',
    },

    'version': {
        'lmopo701': '1.2.3',
        'ln89496l': '1.2.2',
        'qox0gx2q': '1.2.0',
        'ln8n4gnl': '1.1.1',
        'lx5pdv21': '1.1.0',
        'q5vz387l': '1.0.3',
        'lr349mwl': '1.0.2',
        'qzne9dkq': '1.0.1',
        '1gnd57ol': '1.0.0',
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
        'pronouns',
        'weblink',
        'name-style',
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
        'status': run.get('status', {}).get('status'),
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
    skipped = 0

    print('Starting cleanup...\n')

    for i, run in enumerate(runs, 1):

        # Skip runs dated 22 September 2025 or earlier (before version 1.0)
        run_date = run.get('date')
        if run_date and run_date <= '2025-09-22':
            skipped += 1
            continue

        cleaned.append(clean_run(run))

        # Progress log
        if i % 1000 == 0 or i == total:
            percent = (i / total) * 100
            print(f'[{i}/{total}] ({percent:.2f}%) processed | skipped: {skipped}')

    print(f'\nSkipped {skipped} old runs')

    print('\nWriting output file...')

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(cleaned, f, indent=2)

    print(f'Done → {OUTPUT_FILE}')


if __name__ == '__main__':
    main()