import React, {useState} from 'react';

//redux
import { addItem } from '../../store/cartState/reducer';
import { useDispatch } from 'react-redux';

//componentes
import ProductCard from '../pure/ProductCard';
import ProductDetailContainer from './ProductDetailContainer';

//estilos
import '../../styles/css/productCardsContainer.css'

//base datos local
import products from '../../products.json'

const ProductCardsContainer = () => {

  const dispatch = useDispatch();

  const initialDetial = {
    detailsClick: false,
    product: {
      "first_name": "ejemplo",
      "last_name": "ejemplo",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }
  }

  const [details, setDetails] = useState(initialDetial);

  const itemDetails = (product) => {
    console.log('seteando detalles')
    setDetails(
      {
        ...details,
        detailsClick: true,
        product
      }
    );
  }

  return (
    <div className="cards-container">
      <ProductDetailContainer 
        onClickClose={()=>{setDetails({...details, detailsClick: false});console.log('cerrando detalles')}} 
        classNameDetail={details.detailsClick ? 'product-detail-click' : ''}
        onClickAdd={()=>console.log(details)}
        price={details.product.first_name}
        description={details.product.last_name}
        image={details.product.avatar}
      />
      {
        products.map((product, index)=>{
          return <ProductCard
            onClickImg={()=>itemDetails(product)} 
            onClickCart={()=>dispatch(addItem(product))}
            name={product.first_name}
            description={product.last_name}
            price={product.id} image={product.avatar}
            key={index}/>
        })
      }
    </div>
  );
}

export default ProductCardsContainer;
