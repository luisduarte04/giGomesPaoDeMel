import React, { useState } from "react";
import logo from "../../assets/logo.png"
import "./ProductCard.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { product } from "../../data";

export default function ProductCard() {
  const [quantidade, setQuantidade] = useState(0)
  const handleIncrement = () => {
    setQuantidade(prev => prev + 1)
  }
  const handleDecrement = () => {
    setQuantidade(prevent => (prevent > 0 ? prevent - 1 : 0))
  }
  return (
    <div className="cards">
        <div style={{backgroundColor:"#27272a"}} >
            <img  src={logo} alt="Imagem do pão de mel" />
        </div>
        <div  className="descriptionCard">
            <h1>{product[0].name}</h1>
            <p style={{color:" #9CA3AF"}}>{product[0].description}</p>
            <strong style={{color: "#FACC15", fontSize: "20px"}}>{product[0].price}</strong>
        </div>
        <div className="addAndRemove">
          <button style={{borderRadius:" 100%", padding: "10px", backgroundColor:"#18181b"}} onClick={handleDecrement}>
            <RemoveIcon/>
          </button>
          <p style={{color: "white", fontSize:"30px", backgroundColor: "#27272a"}} >{quantidade}</p>
          <button style={{borderRadius:" 100%", padding: "10px", backgroundColor: "yellow"}} onClick={handleIncrement}>
            <AddIcon style={{backgroundColor: "yellow"}}/>
          </button>
        </div>

    </div>
    
  )
}