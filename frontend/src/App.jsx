import React from 'react'

import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom"

import Layout from './layout/Layout'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contactos'
import Login from './pages/Login'
import OlvideClave from './pages/OlvideClave'
import Resgistro from './pages/Registro'


const App = () => {
  return (
    <>
    
    <BrowserRouter>
        {/* {Rutas Publicas} */}
      <Routes>
        <Route  path='/' element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route  path='acerca-de' element={<AcercaDe/>}/>
            <Route  path='Contacto' element={<Contacto/>}/>
            <Route  path='olvide-clave' element={<OlvideClave/>}/>
            <Route  path='Registro' element={<Resgistro/>}/>
        </Route>
      </Routes>
        {/* {Rutas Privadas} */}
    </BrowserRouter>
    
    </>
  )
}

export default App
