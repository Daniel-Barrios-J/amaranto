import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
