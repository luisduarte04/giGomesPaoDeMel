import React, { useState } from "react";
import "./ProductCard.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProductCard({name, description, price, image, addToCart, removeToCart}) {
  const [quantidade, setQuantidade] = useState(0);

  const handleIncrement = () => {
    setQuantidade(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantidade(prev => (prev > 0 ? prev - 1 : 0));
  };

  const addCart = () => {
    handleIncrement()
    addToCart()
  }
  const removeCart = () => {
    handleDecrement()
    removeToCart()
  }

  return (
    <div className="cards">
      <div style={{ backgroundColor: "#27272a" }}>
        <img src={image} alt={`Imagem de ${name}`} />
      </div>
      <div className="descriptionCard">
        <h1>{name}</h1>
        <p style={{ color: "#9CA3AF" }}>{description}</p>
        <strong style={{ color: "#FACC15", fontSize: "20px" }}>{price}</strong>
      </div>
      <div className="addAndRemove">
        <button
          style={{ borderRadius: "100%", padding: "10px", backgroundColor: "#18181b" }}
          onClick={removeCart}
        >
          <RemoveIcon />
        </button>
        <p style={{ color: "white", fontSize: "30px", backgroundColor: "#27272a" }}>
          {quantidade}
        </p>
        <button
          style={{ borderRadius: "100%", padding: "10px", backgroundColor: "yellow" }}
          onClick={addCart} 
        >
          <AddIcon style={{ backgroundColor: "yellow" }} />
        </button>
      </div>
    </div>
  );
}