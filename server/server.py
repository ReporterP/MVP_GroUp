import os
from flask import Flask, request, abort, send_file, jsonify
from werkzeug.utils import secure_filename
from flask.helpers import make_response, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="front/build", static_url_path="")
app.config.from_object(os.environ['APP_SETTINGS'])
print(os.environ['APP_SETTINGS'])

@app.route('/', methods=['GET'])
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    app.run(threaded=True)