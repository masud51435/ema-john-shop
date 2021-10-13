import React from 'react';

const ReviewItem = (props) => {
  console.log(props.product)
  const { name, price, quantity, key, img } = props.product;
const { handleRemove } =props;
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
      <h4 className='product-name'>{name}</h4>
      <p>price: $ {price}</p>
      <p>quantity: {quantity}</p>
      <button onClick={()=>handleRemove(key)} className='btn-regular'>remove item</button>
     </div>
    </div>
  );
};

export default ReviewItem;