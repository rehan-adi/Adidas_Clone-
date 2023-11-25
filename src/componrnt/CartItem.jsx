import React from 'react';
import './style.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FaRupeeSign } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { remove } from './store/cartSlice';

function CartItem() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart);
  const buttonClick = () => {
       alert("Your order is placed and will be delivered within three days")
  }

  const removeButton = (productId) => {
     dispatch(remove(productId))
  }

  return (
    <div className='vxc'>
      <h1 className='CartI'>Cart Item</h1>
      {products.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div>
          {products.map(product => (
            <div key={product.id} className='Main-div'>
              <img src={product.image} alt="image" width={150} />
              <h2> <FaRupeeSign className='vo' /> {product.price}</h2>
              <h3>{product.title}</h3>
              <h4>{product.description}</h4>
              <div>
                <button className='long' onClick={() => removeButton(product.id)}>Remove</button>
                <button className='pagolchoda' onClick={buttonClick}>Order Placed</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartItem;
