import React, { useState, useEffect } from "react";
import "./Livros.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import CustomizedRatings from "../Rating/Rating";
import DefaultRate from "../../DefaultRating";
import api from "../../../services/api";

function Livros() {
  const [books, setBooks] = useState([]);

  const obterLivros = async () => {
    const resultado = await api.get("books");
    console.log(resultado);
    setBooks(resultado.data);
  };

  useEffect(() => {
    obterLivros();
  }, []);

  const history = useHistory();

  function handleClick(books) {
    history.push({
      position: window.scrollTo(0, 0),
      pathname: "/resumo",
      state: { books },
    });
  }

  return (
    <>
      {books.map((listItem) => {
        return (
          <div className="livro">
            <div className="hover03">
              <img className="img-format" src={listItem.foto} />
            </div>

            <div className="titulo-livro">{listItem.nome}</div>

            <div className="autor-livro">{listItem.autor}</div>
            <div>
              <h6 className="aval">Avaliação da crítica</h6>
              <DefaultRate rate={listItem.rate} />
            </div>
            <div className="ver-livro">
              <Button
                className="botao format"
                variant="light"
                onClick={() => handleClick(listItem)}
              >
                Ver Livro
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Livros;
