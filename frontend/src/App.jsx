import './App.css'
import Header from './components/Header/Header'
import ProductCard from './components/CardProduct/ProductCard'

function App() {

  return (
    <div className='app-container'>
      <Header/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default App
