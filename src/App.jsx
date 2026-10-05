import "./styles/store.css";

import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import Products from "./pages/Products";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccsess from "./pages/OrderSuccsess";

import { CartProvider } from './context/CartProvider';

function App() {

  return(
    <div>
      <CartProvider>

      <Navbar/>

      <Routes>
      <Route
          path='/products'
         element={<Products/>}
       />
       <Route
        path='/products/:id'
        element={<ProductDetails/>}
       />
       <Route
        path='/cart'
        element={<Cart/>}
       />
       <Route
       path="/checkout"
       element={<Checkout/>}
       />
       <Route
       path="/order-success"
       element={<OrderSuccsess/>}/>
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App