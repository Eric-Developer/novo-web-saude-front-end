import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Button from "./Button";
type Comentario = {
  nome: string;
  comentario: string;
  data: string;
  imagem?: string;
};

const comentarios: Comentario[] = [
  {
    nome: "Eduarda Alencar Gonçalves",
    comentario: "Hospital limpo e cheiroso, também gostei bastante do atendimento!",
    data: "12/07/2024",
    imagem: "https://via.placeholder.com/40",
  },
  {
    nome: "Barão Duarte de Sousa",
    comentario:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum sit amet nunc mollis condimentum.",
    data: "23/05/2024",
  },
];

export default function Comentarios() {
  return (
    <div className="container">
      <h2 className="title">Comentários</h2>
      <Button className="comment-button">Comentar</Button>
      <div>
        {comentarios.map((comentario, index) => (
          <div key={index} className="comment-card">
            <div className="comment-content">
              {comentario.imagem ? (
                <img
                  src={comentario.imagem}
                  alt={`${comentario.nome}'s avatar`}
                  className="comment-avatar"
                />
              ) : (
                <FaUserCircle className="user-icon" />
              )}
              <div>
                <p className="comment-name">{comentario.nome}</p>
                <p className="comment-text">{comentario.comentario}</p>
              </div>
            </div>
            <span className="comment-date">{comentario.data}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
