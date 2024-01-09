import React from 'react'
import { useState } from 'react'
import Footerf from './Footerf';
import { FaShoppingCart } from "react-icons/fa"


function Shoes() {
  const [counter, setcounter] = useState([]);

  const FucncC = (product) => {
    setcounter([...counter, product]);
  }

  const add = () => {
    FucncC('Adidas Galaxy 5');
  };
  const add1 = () => {
    FucncC('Adidas Galaxy Prime 9');
  };
  const add2 = () => {
    FucncC('Avryn Shoes');
  };
  const add3 = () => {
    FucncC('Ultraboost 1.O shoes');
  };
  const add4 = () => {
    FucncC('Galaxy Star Shoes');
  };
  const add5 = () => {
    FucncC('y-3-itogo');
  };


  return (
    <>
      <div className='shoe-container'>
        <div className='shoe-second'>
          <h1>SHOES AND ALL ACCESSORIES SALE: UP TO 60% OFF <span>[4,164]</span></h1>
          <div className='cart-icon'>
              <FaShoppingCart className='fxc' />
              <sup>{counter.length}</sup>
          </div>
        </div>
        <div className='t-shoe'>
          <div className='img-div'>
            <img src="src/Imagess/tr-ss23-outlet-iwp-men-d_tcm209-982161.avif" width="185px" height="120px" className='img' />
            <div className='MEN'>
              MEN
            </div>
          </div>
          <div className='img-div1'>
            <img src="src/Imagess/tr-ss23-outlet-iwp-women-d_tcm209-982190.avif" width="185px" height="120px" className='img'></img>
            <div className='women'>
              WOMEN
            </div>
          </div>
          <div className='img-div1'>
            <img src="src/Imagess/footwere.jpeg" width="185px" height="120px" className='img'></img>
            <div className='women'>
              SPORTS
            </div>
          </div>
        </div>
        <div className='shoes-section'>
          <div className='shoes-item'>
            <img src="src/Imagess/Nike-image.webp" width='300' />
            <p className='p'>Price : $10.00</p>
            <p className='Q'>Adidas Galaxy 5</p>
            <button id='i' onClick={add}>ADD-TO-CART</button>
          </div>
          <div className='shoes-item2'>
            <img src="src/Imagess/galaxy-6-shoes.jpg" width='300' />
            <p className='p'>Price : $15.00</p>
            <p className='Q'>Adidas Galaxy Prime 9</p>
            <button id='i' onClick={add1}>ADD-TO-CART</button>
          </div>
          <div className='shoes-item3'>
            <img src="src/Imagess/Adidas 1.jpg" width='300' />
            <p className='p'>Price : $15.99</p>
            <p className='Q'>Avryn Shoes</p>
            <button id='i' onClick={add2}>ADD-TO-CART</button>
          </div>
        </div>
        <div className='shoes-section1'>
          <div className='shoes-item4'>
            <img src="src/Imagess/nike.avif" width='300' />
            <p className='p'>Price : $5.99</p>
            <p className='Q'>Ultraboost 1.O shoes</p>
            <button id='i' onClick={add3}>ADD-TO-CART</button>
          </div>
          <div className='shoes-item5'>
            <img src="src/Imagess/nike11.avif" width='300' />
            <p className='p'>Price : $50.99</p>
            <p className='Q'> Galaxy Star Shoes</p>
            <button id='i' onClick={add4}>ADD-TO-CART</button>
          </div>
          <div className='shoes-item6'>
            <img src="src/Imagess/y-3-itogo.avif" width='300' />
            <p className='p'>Price : $50000.99</p>
            <p className='Q'> y-3-itogo</p>
            <button id='i' onClick={add5}>ADD-TO-CART</button>
          </div>
        </div>
        <Footerf />
      </div>
    </>
  )
}

export default Shoes