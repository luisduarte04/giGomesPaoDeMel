import React from 'react';
import { getCartSummary } from '../../utils/cartUtils';
import './Comprovante.css';

export default function Comprovante({voltar, products, endereco, telefone}) {
  const cartSummary = getCartSummary(products);
  

  const createWhatsAppMessage = () => {
    let message = `Olá! Gostaria de fazer um pedido:\n\n`;
    
    cartSummary.items.forEach(item => {
      message += `${item.displayText} - ${item.formattedLineTotal}\n`;
    });
    
    message += `\nEndereço para entrega: ${endereco}\n`;
    message += `Telefone para contato: ${telefone}\n`;
    message += `\nSubtotal: ${cartSummary.formattedSubtotal}`;
    
    return encodeURIComponent(message);
  };
  
  const whatsappNumber = "5511983577616"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage()}`;
  
  return (
    <div className="checkout-container">
      <div className="form-container">
        <h2>✨ Descrição do Pedido ✨</h2>
        
        <div className="form-group" style={{backgroundColor: "#27272a"}}>
          <label style={{textAlign: "center"}}>Para iniciar o pedido, envie a mensagem abaixo para nosso WhatsApp</label>
          <div className='itens'>
            <p>Olá! Gostaria de fazer um pedido:</p>
            <br />
            {cartSummary.items.map((item) => (
              <p key={item.id}>
                {item.displayText} - {item.formattedLineTotal}
              </p>
            ))}
            <br />
            <p>Endereço para entrega: {endereco}</p>
            <p>Telefone para contato: {telefone}</p>
            <p className="subtotal-comprovante">
              Subtotal: {cartSummary.formattedSubtotal}
            </p>
          </div>
        </div>
        
        <div className="button-group">
          <button className="btn-back" onClick={voltar}>Voltar</button>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            <i className="bi bi-whatsapp"></i> 
            <span>Enviar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
