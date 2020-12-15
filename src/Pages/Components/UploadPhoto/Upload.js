import React, { useState } from 'react';
import './Upload.css';
import { Button, FormLabel, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import { app } from '../../../base.js';
function Upload() {
  const [photo, setPhoto] = useState({ file: null });

  const handleUpload = async e => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    setPhoto({
      file: URL.createObjectURL(file),
    });
    await fileRef.put(file);
    const fileURL = await fileRef.getDownloadURL();
    window.alert(fileURL);
  };

  return (
    <div>
      <FormGroup>
        <FormLabel id="form1" htmlFor="upload">
          <FormFileInput id="upload" type="file" onChange={handleUpload} />
          <strong>Clique para adicionar uma imagem</strong>
        </FormLabel>

        <br />
        <img className="img" src={photo.file} />
      </FormGroup>
    </div>
  );
}

export default Upload;
