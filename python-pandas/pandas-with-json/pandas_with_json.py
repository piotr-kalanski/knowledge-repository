import pandas as pd


df = pd.read_json('data.json', lines=True)

df.to_json('out.json', orient='records', lines=True)