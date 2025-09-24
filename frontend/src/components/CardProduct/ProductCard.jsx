
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
        <h1>{product.name}</h1>
        <p style={{ color: "#9CA3AF" }}>{product.description}</p>
        <strong>{product.price}</strong>
      </div>
      <div className="addAndRemove">
        <button
          className="action-button remove-button"
          onClick={removeCart}
          aria-label="Remover item"
        >
          <RemoveIcon className="icon" />
        </button>
        <p 
          className={quanty > 0 ? "quantity quantity-animated" : "quantity"}
        >
          {quanty}
        </p>
        <button
          className="action-button add-button"
          onClick={addCart}
          aria-label="Adicionar item" 
        >
          <AddIcon className="icon" />
        </button>
      </div>
    </div>
  );
}