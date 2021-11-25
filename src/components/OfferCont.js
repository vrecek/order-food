import React from 'react'
import '../css/offer-cont.css'
import Offer from './Offer'

const OfferCont = () => {
   return (
      <section className='offer-cont'>
         <h2>What do we offer ?</h2>
         <article>
            <Offer title='Burgers' src='https://wallpaperaccess.com/full/5220468.png' />

            <Offer title='Tacos' src='https://mpng.subpng.com/20180315/gte/kisspng-taco-mexican-cuisine-fast-food-junk-food-clip-art-cartoon-taco-pictures-5aaa8b0808b4c5.2938303815211261520357.jpg' />

            <Offer title='Hot-Dogs' src='https://st2.depositphotos.com/3259223/5925/v/600/depositphotos_59252767-stock-illustration-hot-dog.jpg' />

            <Offer title='Drinks' src='https://previews.123rf.com/images/juliarstudio/juliarstudio1601/juliarstudio160102444/51730474-cola-or-soda-cartoon-sign-on-transparent-background.jpg'  />

            <Offer title='Pizzas' src='https://www.kindpng.com/picc/m/346-3468759_hand-drawn-cartoon-pizza-decoration-vector-free-vector.png' />
            
            <Offer title='Tortillas' src='https://st2.depositphotos.com/1432405/11907/v/950/depositphotos_119074454-stock-illustration-shawarma-icon-in-cartoon-style.jpg' />
         </article>
      </section>
   )
}
//https://previews.123rf.com/images/juliarstudio/juliarstudio1601/juliarstudio160102444/51730474-cola-or-soda-cartoon-sign-on-transparent-background.jpg
export default OfferCont
