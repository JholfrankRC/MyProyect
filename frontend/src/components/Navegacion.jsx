import React from 'react'
import { NavLink } from 'react-router-dom'


const Navegacion = () => {
  return (
    <div className='navegacion'>

    
      <div>
        <NavLink to='/'>
          Login
        </NavLink>
      </div>

      <div>
        <NavLink to='/Acerca-de'>
          Acerca de nosotros
        </NavLink>
      </div>

      <div>
        <NavLink to='/Contacto'>
          Contactanos
        </NavLink>
      </div>



    </div>
  )
}

export default Navegacion