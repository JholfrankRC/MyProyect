import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      Login


      <input type="text" placeholder='cachon'/>
      <input type="text" placeholder='cachona'/>

      <div>
        <button>
          Ingresar
        </button>
      </div>


      <div>
        <NavLink to='/Registro'>
          Si no tienes cuenta, registrate
        </NavLink>
      </div>

      <div>
        <NavLink to='/olvide-clave'>
          Olvide clave
        </NavLink>
      </div>


    </>
  )
}

export default Login