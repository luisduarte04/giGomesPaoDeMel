
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/CardProduct/ProductCard';
import { product } from './data';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Comprovante from './components/Comprovante/Comprovante';
import DevFooter from './components/DevFooter/DevFooter';

function App() {
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

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
  const goToComprovante = () => setCurrentPage("comprovante");

  const handleComprovante = (address, phone) => {
    setSelectedProducts(cart);
    setEndereco(address);
    setTelefone(phone);
    goToComprovante();
  };

  return (
    <div className='app-container'>
      <Header home={() => goToHome()} />
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
        <Checkout voltar={() => goToHome()} comprovante={handleComprovante}/>
        </>
      )}
      {currentPage === "comprovante" && (
        <>
        <Comprovante 
          voltar={() => goToCheckout()} 
          products={selectedProducts} 
          endereco={endereco}
          telefone={telefone}
        />
        </>
      )}
      
      <DevFooter />
    </div>
  );
}

export default App;
