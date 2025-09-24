import React from 'react'
import "./Checkout.css"

export default function Checkout({voltar, comprovante}) {
  return (
    <div className="checkout-container">
      <div className="form-container">
        <h2>Dados para Entrega</h2>
        
        <div className="form-group" style={{backgroundColor: "#27272a"}}>
          <label >Endereço Completo</label>
          <input type="text" placeholder="Ex: Rua n°, Bairro, Cidade" />
        </div>
        
        <div className="form-group" style={{backgroundColor: "#27272a"}}>
          <label >Telefone (WhatsApp)</label>
          <input type="text" placeholder="(XX) 9XXXX-XXXX" />
        </div>
        
        <div className="button-group">
          <button className="btn-back" onClick={voltar}>Voltar</button>
          <button className="btn-confirm" onClick={comprovante}>Gerar Comprovante</button>
        </div>
      </div>
    </div>
  )
}