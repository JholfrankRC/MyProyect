import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/registro.css'

const Registro = () => {
  return (
  
      <>
      
      <form className='registro-formulary'>
          <h2 className='form_title'>REGISTRO</h2>
      <div className="form_container">

        <div className="form_group">
          <input type="text" id='user' className='form_input' placeholder=' '/>
          <label form='name' className='form_label'>Usuario:</label>
          <span className='form_line'></span>
        </div>

        <div className="form_group">
          <input type="text" id='direccion' className='form_input' placeholder=' '/>
          <label form='password' className='form_label'>Dirección:</label>
          <span className='form_line'></span>
        </div> 

        <div className="form_group">
          <input type="text" id='telefono' className='form_input' placeholder=' '/>
          <label form='name' className='form_label'>Telefóno:</label>
          <span className='form_line'></span>
        </div>

        <div className="form_group">
          <input type="text" id='correo' className='form_input' placeholder=' '/>
          <label form='name' className='form_label'>Correro:</label>
          <span className='form_line'></span>
        </div>

        <div className="form_group">
          <input type="text" id='password' className='form_input' placeholder=' '/>
          <label form='name' className='form_label'>Contraseña:</label>
          <span className='form_line'></span>
        </div>
        
          <input type="submit" className='form_submit' value='Registrar'/>
      </div>

      </form>
      
      </>

  )
}

export default Registro