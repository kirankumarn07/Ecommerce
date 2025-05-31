import React from 'react'
import logo from '../assests/logo.png'
import cart from '../assests/cart.jpg'
const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
              <div className='title'>
                <img src={logo} alt='logo'/>
              </div>
        </div>
        <div className='center'>
              <ul>
                <li>MEN</li>
                <li>WOMAN</li>
                <li>KIDS</li>
                <li>BEAUTY</li>
              </ul>
        </div>
        <div className="seacrh">
            <input type='text' placeholder='seacrh....'/>
        </div>
        <div className='right'>
            <div className="signin">
                Sign-In / Sign-Up
            </div>
            <div className="cart">
                <img src={cart} alt='cart'/>
            </div>
        </div>
      
    </div>
  )
}

export default Header
