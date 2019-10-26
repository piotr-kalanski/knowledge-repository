import boto3

client = boto3.client('dynamodb', endpoint_url='http://localhost:4569')

client.create_table(
    AttributeDefinitions=[
        {
            'AttributeName': 'user_id',
            'AttributeType': 'S'
        }
    ],
    TableName='users',
    KeySchema=[
        {
            'AttributeName': 'user_id',
            'KeyType': 'HASH'
        }
    ]
)


client.put_item(
    TableName='users',
    Item={
        'user_id': {
            'S': 'user1'
        },
        'user_name': {
            'S': 'Piotrek'
        }
    }
)

client.put_item(
    TableName='users',
    Item={
        'user_id': {
            'S': 'user2'
        },
        'user_name': {
            'S': 'Pawel'
        }
    }
)

response = client.get_item(
    TableName='users',
    Key={
        'user_id': {
            'S': 'user1'
        }
    }
)

print(response['Item'])

response = client.scan(
    TableName='users'
)

print(response['Items'])
