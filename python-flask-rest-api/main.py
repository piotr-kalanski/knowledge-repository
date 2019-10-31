import flask
from flask import Flask
from flask_restplus import Api, Resource
import os

app = Flask(__name__)
api = Api(
    app,
    version='0.1',
    title='Example API',
    description='Example API description',
    doc='/swagger-ui.html'
)

@api.route('/hello')
@api.doc()
class HealthCheckResource(Resource):
    @api.response(200, 'Healthy')
    def get(self):
        return {
            "message": "Hello world!"
        }

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True) 
