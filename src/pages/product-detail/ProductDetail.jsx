import React from 'react';
import '../../styles/css/productDetail.css'

const ProductDetail = () => {
  return (
    <aside class="product-detail">
    <div class="product-detail-close">
      <img src="../icons/icon_close.png" alt="close" />
    </div>
    <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img" />
    <div class="product-info">
      <p>$19.00</p>
      <p>Lamp room</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita molestiae cum perferendis, debitis culpa labore veritatis nostrum, corrupti odio iure fuga, iusto hic? Assumenda quia veniam quas cupiditate dolores!</p>
      <button class="primary-button add-to-cart-button">
        <img src="../icons/bt_add_to_cart.svg" alt="add to cart icon" />
        Add to cart
      </button>
    </div>
  </aside>
  );
}

export default ProductDetail;