import { Fragment, useState } from 'react'
import Header from './componentes/Header.jsx'
import Section from './componentes/Section.jsx'
import Proyectos from './componentes/Proyectos.jsx'
import ContactForm from './componentes/ContactForm.jsx'
import Footer from './componentes/Footer.jsx'
// import Web from './componentes/Web.jsx'
import './App.css'
import './componentes/styleComponents.css'

import 'animate.css';


function App() {


  return (
    <Fragment>
      {/* <Web /> */}
      <Header/>
      <Section/>
      <Proyectos/>
      <ContactForm/>
      <Footer/>

    </Fragment>

  )
}

export default App
