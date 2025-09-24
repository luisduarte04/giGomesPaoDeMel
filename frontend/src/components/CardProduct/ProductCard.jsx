
import "./ProductCard.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProductCard({product, quanty, addToCart, removeToCart}) {


  const addCart = () => {
    addToCart()
  }
  const removeCart = () => {
    removeToCart()
  }

  return (
    <div className="cards">
      <div style={{ backgroundColor: "#27272a" }}>
        <img src={product.image} alt={`Imagem de ${product.name}`} />
      </div>
      <div className="descriptionCard">
        <h1>{product.description}</h1>
        <p style={{ color: "#9CA3AF" }}>{product.description}</p>
        <strong style={{ color: "#FACC15", fontSize: "20px" }}>{product.price}</strong>
      </div>
      <div className="addAndRemove">
        <button
          style={{ borderRadius: "100%", padding: "10px", backgroundColor: "#18181b" }}
          onClick={removeCart}
        >
          <RemoveIcon />
        </button>
        <p 
          style={{ color: "white", fontSize: "30px", backgroundColor: "#27272a" }}
          className={quanty > 0 ? "quantity-animated" : ""}
        >
          {quanty}
        </p>
        <button
          style={{ borderRadius: "100%", padding: "10px", backgroundColor: "#FACC15" }}
          onClick={addCart} 
        >
          <AddIcon style={{ backgroundColor: "#FACC15" }} />
        </button>
      </div>
    </div>
  );
}