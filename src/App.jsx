import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import Products from "./pages/Products";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

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
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App