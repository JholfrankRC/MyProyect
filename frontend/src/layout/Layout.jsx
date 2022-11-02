import React from 'react'
import { Outlet } from 'react-router-dom'


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
            <Outlet/>
        </div>

        {/* {Fin de contenido Central} */}
        <Footer/>
    </>
  )
}

export default Layout