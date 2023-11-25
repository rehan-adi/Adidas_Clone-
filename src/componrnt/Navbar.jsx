import React from 'react'
import './style.css'
import { useState } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RiShoppingBag3Fill } from "react-icons/ri";


function Navbar() {

  const items = useSelector((state) => state.cart )
  
  const [use, setUse] = useState(false);
  const button = () => {
    setUse(!use)
  }

  return (
    <>
    <div className='nav-div'>
    <nav>
        <div className='Logo-Container'>   
            <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg" width={60}><path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
        </div>
  
    <ul>
        <li className='Black'><Link to='/' className='pao '>Page </Link></li>
        <li className='Black'><Link to='/shoes' className='pao'>Shoes </Link></li>
        <li className='Black'><Link to='/Men' className='pao' >Men </Link></li>
        <li ><Link to='/sports' className='pao' >Sports </Link></li>
        <li className='Red'>Brands</li>
        <li className='Black'><Link to='/CartI' className='paoo' >< RiShoppingBag3Fill className='iconn' /> <sup>{items.length} </sup> </Link></li>
    </ul>
    <Link  to='/LoginPage' className='zo'>
      Login
      </Link>
    </nav>
    </div>
    {use && <Form onClose={button}/>}
    </>
  )
}

export default Navbar;