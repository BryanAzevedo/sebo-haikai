import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import Comments from "../Components/Comments/Comments";
import CustomizedRatings from "../Components/Rating/Rating";
import "./Resumo.css";
import api from "../../services/api";

require("typeface-quicksand");

function Resumo(props) {
  const [books, setBooks] = useState([]);

  const obterLivros = async () => {
    const resultado = await api.get("books");
    console.log(resultado);
    setBooks(resultado.data);
  };

  useEffect(() => {
    obterLivros();
  }, []);

  return (
    <>
      {books.map((listItem) => {
        return (
          <div className="resumo">
            <div className="imagem-livro">
              <div class="hover01">
                <img className="img-format" src={listItem.foto} />
              </div>
            </div>

            <div className="dados">
              <div className="titulo-livro">{listItem.name}</div>

              <div className="autor-livro">{listItem.autor}</div>

              <div className="descricao-livro">{listItem.resumo}</div>
              <div>
                <h5 className="Rating">Já leu este livro? Dê uma avaliação!</h5>
                <CustomizedRatings />
              </div>
            </div>
          </div>
        );
      })}
      <Footer />)
    </>
  );
}

export default Resumo;
