import React from 'react';
import './button.css'

 
 const Button = ({handle,text}) => {
   
     return (
        <button  className='buttonCount' onClick={handle}>{text} </button>   
     )
 }
 
 export default Button
 