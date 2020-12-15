import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Login.css';
import api from '../../services/api';
require('typeface-quicksand');

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  function cadastre() {
    history.push('Cadastro');
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      if (email === 'admin@haikai.com') {
        history.push('adicionarexemplar');
      }

      const response = await api.post('login', { email, senha });
      localStorage.setItem('nameUser', response.data.name);

      alert('Você conseguiu!:)');
      history.push('Home');
    } catch (err) {
      alert('Falha no login.Tente novamente.Você consegue!:)');
    }
  }

  return (
    <div className="Login">
      <div className="base">
        <img className="sakura" src="/images/SakuraLoginFinal.png " />

        <div className="container">
          <div className="within">
            <img src="images/HaiKaiVetorized.png" className="HaiKai" />
            <div id="form">
              <Form className="formtext">
                <Form.Group className="forPhone" controlId="formBasicEmail">
                  <Form.Label>Enter your email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="forPhone" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    onChange={e => setSenha(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <FormGroup>
                  <Button
                    className="button"
                    variant="danger"
                    type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </FormGroup>
              </Form>
              <div className="perg">
                <Form.Label>Não possui Login?</Form.Label>
                <Button variant="dark" className="botao2" onClick={cadastre}>
                  Cadastre-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
