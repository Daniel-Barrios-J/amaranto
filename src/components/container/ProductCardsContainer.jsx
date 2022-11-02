//react, hooks, router
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { addItem } from '../../store/cartState/reducer';
import { setDetails } from '../../store/producDetailState/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//componentes
import ProductCard from '../pure/ProductCard';
import ProductDetailContainer from './ProductDetailContainer';

//estilos
import '../../styles/css/productCardsContainer.css'

//base de datos local
import products from '../../products.json'

const ProductCardsContainer = () => {
  
  const [width, setWidth] = useState(0);
  const details = useSelector(state => state.detailState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const itemDetails = (product) => {
    dispatch(
      setDetails(
        {
          ...details,
          detailsClick: true,
          product
        }
      )
    )
    console.log(details);
    if (width < 720) {
     return navigate('/product-detail')
    }
  }

  return (
    <div className="cards-container">
      {
        width > 720 &&
      <ProductDetailContainer 
        onClickClose={()=>{dispatch(setDetails({...details, detailsClick: false}));console.log('cerrando detalles')}} 
        classNameDetail={details.detailsClick ? 'product-detail-click' : ''}
        onClickAdd={()=>console.log(details)}
        price={details.product.first_name}
        description={details.product.last_name}
        image={details.product.avatar}
      />
      }
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
