import React, { useState } from 'react'
import "./Checkout.css"

export default function Checkout({voltar, comprovante}) {
  const [endereco, setEndereco] = useState("")
  const [telefone, setTelefone] = useState("")
  const [error, setError] = useState("")

  const handleEndereco = (e) => {
    setEndereco(e.target.value)
    console.log(endereco)
  }

  const formatTelefone = (value) => {
    return value
      .replace(/\D/g, "") 
      .slice(0, 11) 
      .replace(/(\d{2})(\d{0,5})?(\d{0,4})?/, (match, p1, p2, p3) => {
        if (p3) return `(${p1})${p2}${p3}`;
        if (p2) return `(${p1})${p2}`;
        if (p1) return `(${p1}`;
        return match;
      });
  };

  const handleTelefone = (e) => {
    const formattedValue = formatTelefone(e.target.value);
    setTelefone(formattedValue);
    console.log(formattedValue);
  }

  const handleComprovante = () => {
    if (!endereco.trim() || !telefone.trim()) {
      setError("Por favor, preencha todos os campos.")
      return;
    }
    setError("")
    comprovante(endereco, telefone)
  }

  return (
    <div className="checkout-container">
      <div className="form-container">
        <h2>Dados para Entrega</h2>
        
        <div className="form-group" style={{backgroundColor: "#27272a"}}>
          <label >Endereço Completo *</label>
          <input value={endereco} onChange={handleEndereco} type="text" placeholder="Ex: Rua n°, Bairro, Cidade" />
        </div>
        
        <div className="form-group" style={{backgroundColor: "#27272a"}}>
          <label >Telefone (WhatsApp) *</label>
          <input value={telefone} onChange={handleTelefone} type="text" placeholder="(XX) 9XXXX-XXXX" />
        </div>
        
        {error && <p className="error-message">{error}</p>}
        
        <div className="button-group">
          <button className="btn-back" onClick={voltar}>Voltar</button>
          <button className="btn-confirm" onClick={handleComprovante}>Gerar Comprovante</button>
        </div>
      </div>
    </div>
  )
}