import React from 'react';
import "./Footer.css";
import { getCartSummary } from '../../utils/cartUtils';

export default function Footer({ cart = [], onCheckout }) {
  const cartSummary = getCartSummary(cart);
  
  return (
    <div className='card-principal'>
      <div className='header-pedido'>
        <h2>Seu pedido: {cart.length}</h2>
      </div>

      <div className='cesta-pedido'>
        {cartSummary.isEmpty ? (
          <h3>Sua cesta está vazia</h3>
        ) : (
          cartSummary.items.map((item) => (
            <div key={item.id} className='item-row'>
              <span>{item.displayText}</span>
              <span>{item.formattedLineTotal}</span>
            </div>
          ))
        )}
      </div>

      <div className='subtotal'>
        <h2>Subtotal:</h2>
        <h2>{cartSummary.formattedSubtotal}</h2>
      </div>

      <div className='finalizar'>
        <button disabled={cartSummary.isEmpty} onClick={onCheckout}>
          Adicionar Pedido
        </button>
      </div>
    </div>
  );
}
