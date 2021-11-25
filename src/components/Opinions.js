import React from 'react'
import '../css/opinions-main.css'
import Opinion from './Opinion'

const Opinions = () => {
   return (
      <section className='opinions'>
         <h2>Opinions</h2>
         <section>
            <Opinion num='4' src='https://www.w3schools.com/howto/img_avatar.png' />
            <Opinion num='5' src='https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1' />
         </section>  
         <p className='read-more'>For more customer left opinions visit <span>separate section</span> </p>  
      </section>
   )
}

export default Opinions
