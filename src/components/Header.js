import React from 'react'
import '../css/header-main.css'
import fastImg from '../images/fast.png'

const Header = () => {
   return (
      <header className='header-main'>
         <section className='text-hed'>
            <h1>Order your food</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className='st'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> <span className='nd'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
         </section>

         <section className='img-hed'>
            <img src={ fastImg } alt='fastfood' />
         </section>
      </header>
   )
}

export default Header
