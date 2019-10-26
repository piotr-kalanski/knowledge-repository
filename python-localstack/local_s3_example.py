import boto3

client = boto3.client('s3', endpoint_url='http://localhost:4572')

client.create_bucket(
    Bucket='test-bucket'
)


client.put_object(
    Body=b'123',
    Bucket='test-bucket',
    Key='test_key'
)

response = client.get_object(
    Bucket='test-bucket',
    Key='test_key'
)

print(response['Body'].read())
