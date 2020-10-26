import React from 'react'
import "./cadastro.css"
import {Form, FormGroup} from 'react-bootstrap' 
import Button from 'react-bootstrap/Button' 
require('typeface-quicksand')

function Cadastro() {
    return(
    
        <div className="Cadastro">
            <div className ="background">
                <div className = "background2">
                        <div className = "container">
                            <div className = "base">

                            <h1 className = "textbook">
                                Comece sua história no Sebo Hai Kai!
                                <br/>
                            </h1>

                            <div className = "containbook">
                                <Form className = "dados1">
                                    
                                    <Form.Group controlId="nome"> 
                                        <Form.Label >Nome</Form.Label> 
                                        <Form.Control plaintext size="sm" placeholder="Seu nome"/> 
                                    </Form.Group> 
                                    
                                    <Form.Group controlId="email"> 
                                        <Form.Label>Email</Form.Label> 
                                        <Form.Control plaintext size="sm" placeholder="name@example.com.br" /> 
                                    </Form.Group> 
                                    
                                    <Form.Group controlId="endereço"> 
                                        <Form.Label>Endereço</Form.Label> 
                                        <Form.Control plaintext size="sm" placeholder="Rua das flores, 100" /> 
                                    </Form.Group>
                                    
                                </Form>
                            
                                <Form className = "dados2">
                                
                                    <Form.Group controlId="tcontato"> 
                                        <Form.Label>Telefone de contato</Form.Label> 
                                        <Form.Control plaintext size="sm" placeholder="31992404607" /> 
                                    </Form.Group>
                                    
                                    <Form.Group controlId="lfav"> 
                                        <Form.Label>Livro favorito</Form.Label> 
                                        <Form.Control plaintext size="sm" placeholder="A garota no trem" /> 
                                    </Form.Group>
                                    
                                    <Form.Group controlId="CEP"> 
                                        <Form.Label>CEP</Form.Label> 
                                        <Form.Control plaintext size="sm" placeholder="00000-000" /> 
                                    </Form.Group>
                                </Form>
                                <div className ="posicaocaneta">
                                    <img alt="imagem" src="/images/canetahaikai.png" className = "caneta"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro;