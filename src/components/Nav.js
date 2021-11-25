import React from 'react'
import logo from '../images/logoFast.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import '../css/nav-main.css'
import NavMenu from './NavMenu'
import { useState, useRef } from 'react'

const Nav = () => {
   const menuRef = useRef(null);
   const activeRef = useRef(null);
   const [clicked, setClicked] = useState();
   function toggleMenu(){
      setClicked(!clicked);

      activeRef.current.childNodes[1].classList.toggle('icon-on');
      menuRef.current.classList.toggle('menu-on');
   }

   return (
      <nav className='nav-main'>
         <div className='nav-img'>
            <img src={ logo } alt='Logo' />
         </div>
         <ul className='outer-ul'>
            <li> <a href='/'>Home</a> </li>
            <li> <a href='/'>Order</a> </li>
            <li> <a href='/'>About</a> </li>
            <li> <a href='/'>Contact</a> </li>
         </ul>
         <div className='nav-icons'>
            <div ref={ activeRef }>
               <BsCart2 />
               <AiOutlineMenu onClick={ toggleMenu } />   
            </div> 
               <NavMenu reference={ menuRef } />
         </div>
      </nav>
   )
}

export default Nav
