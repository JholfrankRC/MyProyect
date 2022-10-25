import React from 'react'
import { Outlet } from 'react-router-dom'
import '../assets/css/navegacion.css';

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navegacion from '../components/Navegacion'


const Layout = () => {
  return (
    <>
        <Header/>
        <Navegacion/>

        {/* {Contenido central} */}

        <div className='main'>
          <p>hola cachon</p>

            <Outlet/>

        </div>

        {/* {Fin de contenido Central} */}
        <Footer/>
    </>
  )
}

export default Layout