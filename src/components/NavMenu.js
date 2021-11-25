import React from 'react'
import '../css/nav-menu.css'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { AiFillInfoCircle } from 'react-icons/ai'
import { MdContactPage, MdPrivacyTip, MdMiscellaneousServices } from 'react-icons/md'
import { BiMailSend } from 'react-icons/bi'

const NavMenu = ({ reference }) => {
   return (
      <nav ref={ reference } className='nav-menu'>
         <ul>
            <li> <BsFillHouseDoorFill /> <a href='/'>Homepage</a> </li>
            <li> <ImLocation /> <a href='/'>Localization</a> </li>
            <li> <BiMailSend /> <a href='/'> Send opinion</a> </li>
            <li> <MdMiscellaneousServices /> <a href='/'>Terms&amp;Services</a> </li>
            <li> <MdPrivacyTip /> <a href='/'>Privacy policy</a> </li>
            <li> <AiFillInfoCircle/> <a href='/'>About</a> </li>
            <li> <MdContactPage /> <a href='/'>Contact</a> </li>
         </ul>
      </nav>
   )
}

export default NavMenu
