import { Routes, Route } from 'react-router-dom'
import CartPage from './pages/cart/CartPage'
import Home from './pages/home/Home'
import CotizacionArreglos from './pages/cotizacion-arreglos/CotizacionArreglos'
import CotizacionEventos from './pages/cotizacion-eventos/CotizacionEventos'
import EmailSent from './pages/email-sent/EmailSent'
import Login from './pages/login/Login'
import MyAccount from './pages/my-account/MyAccount'
import MyOrders from './pages/my-orders/MyOrders'
import NewPassword from './pages/new-password/NewPassword'
import Order from './pages/order/Order'
import ProductDetail from './pages/product-detail/ProductDetail'
import RecoveryPassword from './pages/recovery-password/RecoveryPassword'
import Register from './pages/register/Register'
import CheckOutPage from './pages/checkOutPage/checkOutPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/cotizacion-arreglos' element={<CotizacionArreglos />} />
          <Route path='/cotizacion-eventos' element={<CotizacionEventos />} />
          <Route path='/email-sent' element={<EmailSent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/new-password' element={<NewPassword />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<CheckOutPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
