import React from 'react'
import '../css/offerItem.css'
import Button from './Reusable/Button'

const Offer = ({ title, text, src }) => {
   return (
      <section className='offerItem'>
         <div className='img-div'>
            <img src={ src } alt='dish' />
         </div>

         <div className='text-cont'>
            <h1>{ title }</h1>

            <p>{ text }</p>

            <div className='btn-div'>
               <Button classn='offer-btn' text='Check out' />
            </div>
         </div>
      </section>
   )
}

Offer.defaultProps = {
   title: "Fast-Foods",
   text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
   src:'https://previews.123rf.com/images/juliarstudio/juliarstudio1601/juliarstudio160102444/51730474-cola-or-soda-cartoon-sign-on-transparent-background.jpg'
}

export default Offer
