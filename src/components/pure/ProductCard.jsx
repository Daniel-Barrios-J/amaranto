import React from 'react';
import '../../styles/css/productCard.css'

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="product-img" />
      <div className="product-info">
        <div className='data-info'>
          <p>$120.00</p>
          <p>Lampara</p>
        </div>
        {/* todo classe condicional segun se agrega al carrito */}
        <div className='cart-logo-info'>
          <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
