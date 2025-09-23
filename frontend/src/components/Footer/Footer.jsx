import React from 'react';
import "./Footer.css";

export default function Footer({ cart = [], onFinish }) {
  const groupedCart = cart.reduce((acc, item) => {
    const existing = acc.find((p) => p.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const parsePrice = (price) => {
    const normalized = String(price).replace(/R\$/g, "").replace(/\./g, "").replace(",", ".");
    return parseFloat(normalized) || 0;
  };

  const subtotal = groupedCart.reduce((acc, item) => {
    return acc + parsePrice(item.price) * item.quantity;
  }, 0);

  return (
    <div className='card-principal'>
      <div className='header-pedido'>
        <h2>Seu pedido: {cart.length}</h2>
      </div>

      <div className='cesta-pedido'>
        {groupedCart.length === 0 ? (
          <h3>Sua cesta está vazia</h3>
        ) : (
          groupedCart.map((item) => {
            const unitPrice = parsePrice(item.price);
            const lineTotal = unitPrice * item.quantity;
            const displayPrice = `R$ ${lineTotal.toFixed(2).replace(".", ",")}`;

            return (
              <div key={item.id} className='item-row'>
                <span>{item.quantity}x {item.name}</span>
                <span>{displayPrice}</span>
              </div>
            );
          })
        )}
      </div>

      <div className='subtotal'>
        <h2>Subtotal:</h2>
        <h2>R$ {subtotal.toFixed(2).replace(".", ",")}</h2>
      </div>

      <div className='finalizar'>
        <button disabled={groupedCart.length === 0} onClick={() => onFinish && onFinish()}>
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
