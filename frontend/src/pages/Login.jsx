import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>

      <form className='formulary'>
          <h2 className='form_title'>Iniciar sesion</h2>
          <p className='form_reg'>¿Aun no tienes cuenta? <NavLink to='/Registro' className='link'>Entra aqui</NavLink></p>

      <div className="form_container">

        <div className="form_group">
          <input type="text" id='user' className='form_input' placeholder=' '/>
          <label form='name' className='form_label'>Usuario:</label>
          <span className='form_line'></span>
        </div>

        <div className="form_group">
          <input type="text" id='password' className='form_input' placeholder=' '/>
          <label form='password' className='form_label'>Contraseña:</label>
          <span className='form_line'></span>
          <NavLink to='/olvide-clave' className='link2'>Olvide clave</NavLink>
        </div> 
        
          <input type="submit" className='form_submit' value='Entrar'/>
      </div>

      </form>
    </>
  )
}

export default Login