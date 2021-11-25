import React from 'react'
import '../css/Footer.css'
import { AiFillFacebook, AiFillYoutube, AiFillGooglePlusSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
   return (
      <footer className='footer-c'>
         <div>
            <a href='/'><AiFillFacebook /> </a>
            <a href='/'><FaGithubSquare /> </a>
            <a href='/'><AiFillYoutube /> </a>
            <a href='/'><AiFillGooglePlusSquare /> </a>
         </div>
         <div className='ft-text'>
            <h2>Links</h2>
            <ul>
               <li><a href='/'>Privacy</a></li>
               <li><a href='/'>Cookies</a></li>
               <li><a href='/'>Contact</a></li>
               <li><a href='/'>Partnership</a></li>
            </ul>
         </div>
         <p>&copy; All rights reserved  &copy; </p>
         <p className='red'>Lorem ipsum 21-100 Dolore 12</p>
      </footer>
   )
}

export default Footer
