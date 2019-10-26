from dynaconf import settings

print(f'port={settings.API_PORT}')
print(f'host={settings.API_HOST}')
