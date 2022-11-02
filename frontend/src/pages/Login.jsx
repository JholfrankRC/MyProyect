import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/login.css'

const Login = () => {
  return (
    <>

      <form className='formulary'>
          <h2 className='form_title'>Iniciar sesion</h2>
          <p className='form_reg'>¿Aun no tienes cuenta? <NavLink to='/Registro' className='lentra'>Entra aqui</NavLink></p>

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
        </div> 
      </div>

      <div className='form-olvide'>

      </div>
        <NavLink to='/olvide-clave' className='lolvide'>Olvide clave</NavLink>

      <div className='container-submit'>
            <input type="submit" className='form_submit' value='Entrar'/>
      </div>

      </form>
    </>
  )
}

export default Login