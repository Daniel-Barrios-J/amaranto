import React from 'react';

//styles
import '../../styles/css/components/pure/resumeOrder.css'


const ResumeOrder = ({order}) => {

  const totalResume = () => {
    let priceArray = order.map((product)=>product.price)
    if (priceArray.length === 0) {
      return '0'
     }
    let totalTemp = priceArray.reduce((a, b)=>a + b)
    return totalTemp
  }

  return (
    <div className="resume-order">
      <p>
        <span>{order.length} Artículos</span>
      </p>
      <p>
        <span>Total:</span>
        <span>${totalResume()}.00</span>
      </p>
    </div>
  );
}

export default ResumeOrder;
