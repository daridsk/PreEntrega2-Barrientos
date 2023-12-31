import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Error from './Componentes/Error/Error';
import CartProvider from './Componentes/CartContext/CartContext';
import Cart from './Componentes/Cart/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar/>

      <Routes>

        <Route path={'/'} element={<ItemListContainer/>}/>
        <Route path={'/category/:id'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'*'} element={<Error/>}/>

      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
