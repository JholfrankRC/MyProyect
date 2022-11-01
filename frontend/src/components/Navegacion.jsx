import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/navee.css'


const Navegacion = () => {
  return (
    <div className='navegacion'>

    
      <div>
        <NavLink to='/'
        className='link3'>
          Login
        </NavLink>
      </div>

      <div>
        <NavLink to='/Acerca-de'
        className='link3'>
          Acerca de nosotros
        </NavLink>
      </div>

      <div>
        <NavLink to='/Contacto'
        className='link3'>
          Contactanos
        </NavLink>
      </div>



    </div>
  )
}

export default Navegacion