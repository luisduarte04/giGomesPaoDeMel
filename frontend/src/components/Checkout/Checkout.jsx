import React from 'react'
import "./Checkout.css"

export default function Checkout({voltar}) {
  return (
    <section style={{border: "6px solid black", width:"80%", margin: "40px auto"}}>
      <div style={{border: "2px solid black", width:"80%", margin: "20px auto", padding: "10px", textAlign: "center"}}>
        <h1>Dados para Entrega</h1>
      </div>
      <div style={{display: "flex", flexDirection: "column", border: "2px solid black", padding: "10px", width:"80%", margin: "20px auto", gap: "20px"}}>
        <label htmlFor="">Endereço Completo</label>
        <input type="text" placeholder='Rua teste 123' style={{padding: "20px"}}/>
      </div>
      <div style={{display: "flex", flexDirection: "column", border: "2px solid black", padding: "10px", width:"80%", margin: "20px auto", gap: "20px"}}>
        <label htmlFor="">Número WhatsApp</label>
        <input type="text" placeholder='(11) 99392-8493' style={{padding: "20px"}}/>
      </div>
      <div style={{display: "flex", border: "2px solid black", padding: "10px", width:"50%", margin: "20px auto", justifyContent: "space-between"}} >
        <button onClick={voltar}>Teste</button>
        <button>Teste</button>
      </div>
    </section>
  )
}