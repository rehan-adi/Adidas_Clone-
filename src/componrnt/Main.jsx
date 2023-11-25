import React from 'react'
import './Style.css'
import Footerf from './Footerf';

function Main() {
  return (
    <>
    <main className='container'>
        <div className='heading-element'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit, atque nemo incidunt fuga ratione aliquam consequatur temporibus fugiat recusandae nam!</p>
            <div className='button'>
            <button className='but1'>Shop</button>
            <button className='but2'>Visit</button>
        </div>
        </div >
        <div>
            <img src="src/Imagess/Nike-image.webp" alt="Nike-Shoe-Image" />
        </div>
    </main>
        <Footerf />
        </>
  )
}

export default Main;
