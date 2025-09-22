
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/CardProduct/ProductCard';
import { product } from './data';
import Footer from './components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([])
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

  return (
    <div className='app-container'>
      <Header />
      {product.map((item) => (
        <ProductCard 
        key={item.id} 
        name={item.name} 
        description={item.description}
        price={item.price}
        image={item.image}
        addToCart={() => addToCart(item)}
        removeToCart={() => removeToCart(item.id)}
        
        />
      ))}
      <Footer cart={cart}/>
    </div>
  );
}

export default App;
