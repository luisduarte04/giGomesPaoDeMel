import React from 'react';
import './DevFooter.css';

export default function DevFooter() {


  return (
    <footer className="dev-footer">
      <div className="dev-footer-container">
        <p className="dev-name">Desenvolvido por Luis Guilherme</p>
        <div className="dev-links">
          <a 
            href="https://www.linkedin.com/in/luis-guilherme-duarte/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dev-link linkedin"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a 
            href="https://wa.me/5511993918104" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dev-link whatsapp"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}