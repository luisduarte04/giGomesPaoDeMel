
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/CardProduct/ProductCard';
import { product } from './data';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Comprovante from './components/Comprovante/Comprovante';

function App() {
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState("home")
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  const removeToCart = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1); 
      setCart(newCart);
    }
  };
  const quantyItens = (productId) => {
    return cart.filter(item => item.id === productId).length;
  };


  const goToHome = () => setCurrentPage("home")
  const goToCheckout = () => setCurrentPage("checkout")
  const goToComprovante = () => setCurrentPage("comprovante")

  return (
    <div className='app-container'>
      <Header />
      {currentPage === "home" && (
        <>
        {product.map((item) => (
        <ProductCard 
        key={item.id} 
        product={item}
        quanty={quantyItens(item.id)}
        addToCart={() => addToCart(item)}
        removeToCart={() => removeToCart(item.id)}
        />
      ))}
        <Footer cart={cart} onCheckout={() => goToCheckout()}/>
        </>
      )}
      {currentPage === "checkout" && (
        <>
        <Checkout voltar={() => goToHome()} comprovante={() => goToComprovante()}/>
        </>
      )}
      {currentPage === "comprovante" && (
        <>
        <Comprovante voltar={() => goToCheckout()}/>
        </>
      )}

      
    </div>
  );
}

export default App;
