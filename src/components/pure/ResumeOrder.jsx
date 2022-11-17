import React from 'react';
import '../../styles/css/components/pure/resumeOrder.css'

const ResumeOrder = ({order}) => {

  // const totalResume = () => {
  //   let priceArray = cartState.products.map((product)=>product.price)
  //   if (priceArray.length === 0) {
  //     return '0'
  //    }
  //   let totalTemp = priceArray.reduce((a, b)=>a + b)
  //   return totalTemp
  // }

  return (
    <div className="resume-order">
      <p>
        <span>Fecha</span>
        <span>n Articulos</span>
      </p>
      <p>
        ${'640'}.00
      </p>
    </div>
  );
}

export default ResumeOrder;
