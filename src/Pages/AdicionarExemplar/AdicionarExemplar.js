import React from 'react';
import './adicionar.css';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Upload from '../Components/UploadPhoto/Upload';
import { Comment } from '../Components/Comments/Comments.js';
import SimpleRating from '../Components/Rating/Rating';
import CustomizedRatings from '../Components/Rating/Rating';
import api from '../../services/api';
require('typeface-quicksand');

function AdicionarExemplar() {
  const history = useHistory();
  function Home() {
    alert('Exemplar cadastrado com sucesso!');
  }

  const [Nome, setNome] = useState();
  const [Autor, setAutor] = useState();
  const [Resumo, setResumo] = useState();

  async function handleExemplar(e) {
    try {
      Home();
    } catch (err) {
      alert('Erro.Tente novamente.Você consegue!:)');
    }
  }

  return (
    <div className="AdicionarEx">
      <div className="background">
        <div className="background2">
          <div className="container">
            <div className="base" />
            <h1 className="textbook">
              Adicione um novo exemplar!
              <br />
            </h1>

            <div class="card border">
              <div class="card-body">
                <h5 class="card-title">Cadastro de Livro</h5>

                <label class="card-text" />
                <table
                  class="table table-hover table-bordered table-responsive"
                  id="tblLivro"
                >
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Autor</th>
                      <th>Resumo</th>
                      <th>Foto do livro</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          id="Nome"
                          type="text"
                          value={Nome}
                          onChange={e => setNome(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          id="Nome"
                          type="text"
                          value={Autor}
                          onChange={e => setAutor(e.target.value)}
                        />
                      </td>
                      <td>
                        <textarea
                          rows="11"
                          id="Resumo"
                          value={Resumo}
                          onChange={e => setResumo(e.target.value)}
                        />
                      </td>
                      <td>
                        <div>
                          <Upload nome={Nome} autor={Autor} resumo={Resumo} />
                        </div>
                      </td>
                      <td>
                        <Button variant="dark" onClick={handleExemplar}>
                          Adicionar exemplar!
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdicionarExemplar;
