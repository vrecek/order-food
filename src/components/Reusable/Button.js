import React from 'react'

const Button = ({ text, action, classn }) => {
   return (
      <button style={ !classn ? defStyle : null } onClick={ action }>
         <span> { text } </span>
      </button>
   )
}

Button.defaultProps = {
   text: "Button",
   action: () => { console.log('Button clicked!') }
}

const defStyle = {
   width: '50%',
   display: 'block',
   margin: '1em auto',
   padding: '.5em 0',
   borderRadius: '.3em',
   background: 'none',
   border:'2px solid blue',
   color: 'blue'
}

export default Button
