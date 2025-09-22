import React from 'react';
import "./Footer.css";

export default function Footer({cart}) {
    
  return (
    <div className='CardPrincipal'>
      <div className='headerPedido'>
        <h2 style={{backgroundColor: "#27272a"}}>Seu pedido: {cart.length}</h2>
      </div>
      <div style={{backgroundColor: "#27272a"}} className='cestaPedido'>
        <h3 style={{backgroundColor: "#27272a"}}>Sua cesta está vazia</h3>
      </div>
      <div style={{backgroundColor: "#27272a"}} className='carrinhoPedido'>
        <h2 style={{backgroundColor: "#27272a"}}>Subtotal:</h2>
        <h2 style={{backgroundColor: "#27272a"}}>R$ 0,00</h2>
      </div>
      <div  className='finalizarPedido'>
        <button disabled >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
