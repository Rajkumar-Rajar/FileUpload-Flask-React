from importlib.resources import path
import os
from flask import Flask, flash, request, redirect, url_for, session, send_from_directory
from werkzeug.utils import secure_filename
import logging






UPLOAD_FOLDER = 'static/filess'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST',"GET"])
def fileUpload():
    

    if request.method=="POST":
        name={"txt":"TEXT","js":"JAVA SCRIPT","PHP":"PHP","docx":"DOCX","css":"CSS","jpg":"JPG","pdf":"PDF","json":"JSON","jpeg":"JPEG"}
        file= request.files['file'] 
        filename = secure_filename(file.filename)

        path=os.path.join(app.config['UPLOAD_FOLDER'],filename)
        file.save(path)
        n=filename
        b=n.split(".")
    
        return    ( {
        "file_path": path,
        "extention" :name[b[1]]
        })
   
    
        
    
@app.route('/data')
def fileUpload1():
    b="/static/file/photo-1420593248178-d88870618ca0.jpeg"
    path1= session.get("path_12")
   
    return {
        'Name':"---------------------------------"
        }



if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True)
