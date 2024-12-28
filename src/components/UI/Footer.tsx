import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title-section">
          <h1 className="footer-title">WEB SAÚDE</h1>
          <p className="footer-copyright">
            Web Saúde © 2023 - todos os direitos reservados
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-subtitle">Fale Conosco</h2>
          <p className="footer-email">E-mail@gmail.com</p>
        </div>
        <div className="footer-about-section">
          <h2 className="footer-subtitle">Sobre Nós</h2>
          <p className="footer-about">
            O Web Saúde é uma plataforma que serve para auxiliar as pessoas que
            desconhecem informações essenciais sobre os hospitais ou clínicas
            que estão localizados na região de Picos - PI, mostrando as
            especialidades disponíveis, horário de atendimento ou até mesmo sua
            localização exata.
          </p>
        </div>
      </div>
    </footer>
  );
}
