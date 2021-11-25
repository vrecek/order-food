import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Opinion = ({ src, num }) => {
   const stars = [];
   for(let i=0; i<5; i++){
      if(i < num) stars.push(<AiOutlineStar key={i} style={{background:'yellow'}} />)
      else stars.push(<AiOutlineStar key={i} />);
   }

   return (
      <article>
         <div className='img'>
            <img src={ src } alt='ex' />
         </div>

         <div className='text'>  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>

         <div className='grade'>
            { stars }
            <p>{ num } / 5</p>
         </div>
      </article>
   )
}

export default Opinion
