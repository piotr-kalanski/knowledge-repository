# Script responsible for reading all tags from subfolders and creating table with links in readme

import os
import yaml

TAGS_FILE = 'tags.yml'
OUTPUT_FILE = 'tags_per_directory.md'

with open(OUTPUT_FILE, 'w') as out:
    out.write('|Directory|Tags|\n')
    out.write('|---|---|\n')

    for directory in os.listdir():
        if os.path.isdir(directory):
            if TAGS_FILE in os.listdir(directory):
                with open(os.path.join(directory, TAGS_FILE)) as f:
                    tags = yaml.safe_load(f)
                    tags_string = ','.join(tags)
                    out.write(f'|{directory}|{tags_string}|\n')
