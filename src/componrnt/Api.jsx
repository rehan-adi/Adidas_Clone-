import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './style.css'
import { useDispatch } from 'react-redux'
import { FaRupeeSign } from "react-icons/fa"
import { add } from './store/cartSlice'

function Api() { 
  const Dispatch = useDispatch();
  const [value, setValue] = useState([])
    useEffect (() => {
         axios.get('https://fakestoreapi.com/products')
         .then(response => {
            setValue(response.data)
         })
         .catch(error => {
          console.error('Error fetching data:', error);
         })
    },[])

    const handelSubmit = (products) => {
        Dispatch(add(products));
    }


  return (
    <div className='boka'>
    {value.map((item, index) => (
       <div key={index} className='boka1'>
        <img src={item.image} className='img' />
        <h2> <FaRupeeSign className='vo' /> {item.price}</h2>
        <p>{item.category}</p>
        <button className='button1' onClick={() => handelSubmit(item)} >Add To Cart</button>
       </div>
    ))}
    </div>
  )
}

export default Api;