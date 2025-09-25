import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header';
import ProductCard from './components/CardProduct/ProductCard';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Comprovante from './components/Comprovante/Comprovante';
import DevFooter from './components/DevFooter/DevFooter';
import ErrorPage from "./error-page";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
