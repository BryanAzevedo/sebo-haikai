import React, { useState } from 'react';
import './Upload.css';
import { Button, FormLabel, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import { app } from '../../../base.js';
function Upload() {
  const [photo, setPhoto] = useState({ file: null });

  function handleChange(event) {
    setPhoto({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  const handleUpload = e => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('Uploaded a file');
    });
  };

  return (
    <div>
      <FormGroup>
        <FormLabel id="form1" htmlFor="upload">
          <FormFileInput
            id="upload"
            type="file"
            onChange={(handleChange, handleUpload)}
          />
          Mande seu livro
        </FormLabel>
        <br />
        <img className="img" src={photo.file} />
      </FormGroup>
    </div>
  );
}

export default Upload;
