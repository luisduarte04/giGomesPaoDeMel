import React from "react";
import logo from "../../assets/logo.png"
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import "./ProductCard.css"

export default function ProductCard() {
  return (
    <div className="cards">
        <div >
            <img src={logo} alt="Imagem do pão de mel" />
        </div>
        <div className="descriptionCard">
            <h1>Pão de mel - brigadeiro</h1>
            <p>Massa deliciosa sabor chocolate amargo</p>
            <strong>
              R$9,00
            </strong>
        </div>
        <div className="addAndRemove">
          <button>
            +
          </button>
          <p>0</p>
          <button>
            -
          </button>
        </div>

    </div>
    
  )
}