import pandas as pd
import numpy as np

df1 = pd.DataFrame(
        {
            'id': ['1', '2', '3'],
            'Feature1': ['K', 'M', 'O'],
            'Feature2': ['L', 'N', 'P']
        },
        columns = ['id', 'Feature1', 'Feature2']
)
print('Left df:')
print(df1)
#   id Feature1 Feature2
# 0  1        K        L
# 1  2        M        N
# 2  3        O        P


df2 = pd.DataFrame(
        {
            'id': ['3', '4'],
            'Feature1': ['O (updated)', 'Q'],
            'Feature2': ['P (updated)', 'R']
        },
        columns = ['id', 'Feature1', 'Feature2']
)
print('\n\nRight df:')
print(df2)
#   id     Feature1     Feature2
# 0  3  O (updated)  P (updated)
# 1  4            Q            R


columns = df1.columns
df_result = pd.merge(df1, df2, on='id', how='outer')
for c in columns:
    if c != 'id':
        df_result[c] = df_result[c + '_y'].combine_first(df_result[c + '_x'])
df_result = df_result[columns]
print('\n\nResult of merging:')
print(df_result)
#   id     Feature1     Feature2
# 0  1            K            L
# 1  2            M            N
# 2  3  O (updated)  P (updated)
# 3  4            Q            R