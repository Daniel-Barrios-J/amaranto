//react, hooks, router
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//redux (state)
import { addItem } from '../../store/cartState/reducer';
import { setDetails } from '../../store/producDetailState/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//components
import ProductCard from '../pure/ProductCard';
import ProductDetailContainer from './ProductDetailContainer';

//styles
import '../../styles/css/components/containers/productCardsContainer.css'


const ProductCardsContainer = ({productList}) => {
  
  //estado global
  const details = useSelector(state => state.detailState)

  //estado local
  const [width, setWidth] = useState(0);
  
  //--
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const itemDetails = (product) => {
    dispatch(
      setDetails(
        {
          detailsClick: true,
          product: {
            "name": product.first_name,
            "description": product.last_name,
            "price": product.id,
            "imgProduct": product.avatar,
            "id": product.id
          }
        }
      )
    )
    if (width < 720) {
     return navigate('/product-detail')
    }
  }

  return (
    <div className='product-cards-container'>
      <div className="cards-container">
        {
          width > 720 &&
        <ProductDetailContainer 
          onClickClose={()=>dispatch(setDetails({...details, detailsClick: false}))} 
          classNameDetail={details.detailsClick ? 'product-detail-click' : ''}
          onClickAdd={()=>dispatch(addItem(details.product))}
          price={details.product.price}
          name={details.product.name}
          description={details.product.description}
          image={details.product.imgProduct}
        />
        }
        {
          productList.map((product, index)=>{
            return <ProductCard
              onClickInfo={()=>itemDetails(product)} 
              onClickCart={()=>dispatch(addItem({name: product.first_name, description: product.last_name, price: product.id, imgProduct: product.avatar, id: product.id}))}
              name={product.first_name}
              description={product.last_name}
              price={product.id}
              image={product.avatar}
              key={product.id}/>
          })
        }
      </div>
    </div>
  );
}

export default ProductCardsContainer;
