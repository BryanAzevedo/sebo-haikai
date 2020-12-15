import React from 'react';
import './cadastro.css';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import alertify from 'alertifyjs';
import { useState } from 'react';
import api from '../../services/api';
require('typeface-quicksand');

function Cadastro() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [book, setBook] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  function Home() {
    history.push('Home');
  }

  async function handleRegister() {
    const data = { name, email, senha, telefone, book, cep, endereco };

    try {
      const response = await api.post('users', data);
      alert(
        `Yeah! Você foi cadastrado com sucesso, seja bem vindo ao nosso sebo!`,
      );
      Home();
    } catch (err) {
      alertify.error('Teve um erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="Cadastro">
      <div className="button">
        <Button
          className="butao"
          type="submit"
          variant="danger"
          onClick={handleRegister}
        >
          Cadastrar!
        </Button>
      </div>
      <div className="background">
        <div className="background2">
          <div className="container">
            <div className="base">
              <h1 className="textbook">
                Comece sua história no Sebo Hai Kai!
                <br />
              </h1>

              <div className="containbook">
                <img className="livrao" src="/images/LivroFinal2Cadastro.jpg" />
                <div className="dados1aux">
                  <Form className="dados1" onSubmit={handleRegister}>
                    <Form.Group controlId="nome">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="Seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="name@example.com.br"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="senha">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        type="password"
                        plaintext
                        size="sm"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="senhaconf">
                      <Form.Label>Confirme sua senha</Form.Label>
                      <Form.Control
                        type="password"
                        plaintext
                        size="sm"
                        placeholder="Senha"
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="dados2aux">
                  <Form className="dados2">
                    <Form.Group controlId="tcontato">
                      <Form.Label>Telefone de contato</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="31992404607"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="lfav">
                      <Form.Label>Livro favorito</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="A garota no trem"
                        value={book}
                        onChange={e => setBook(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="CEP">
                      <Form.Label>CEP</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="00000-000"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="endereço">
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="Rua das flores, 100"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="posicaocaneta">
                  <img
                    alt="imagem"
                    src="/images/canetahaikai.png"
                    className="caneta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
