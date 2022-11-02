import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/navee.css'


const Navegacion = () => {
  return (
    <div className='navegacion'>

<div className='logo'>
 
</div>

    <nav>

      
        <NavLink to='/'
        className='link3'>
          Login
        </NavLink>
      

     
        <NavLink to='/Acerca-de'
        className='link3'>
          Acerca de nosotros
        </NavLink>
      

      
        <NavLink to='/Contacto'
        className='link3'>
          Contactanos
        </NavLink>
     

    </nav>


    </div>
  )
}

export default Navegacion