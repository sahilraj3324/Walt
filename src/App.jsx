import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Secp from './components/Secp'
import Pics from './components/Pics'
import Image from './components/Image'
import Main from './components/Main'
import New from './components/New'
import Main2 from './components/Main2'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Nav />
     <Hero />
     <New />
     <Pics />
     <Main />
     <Secp />
     <Main2 />
     <Footer />
    </>
  )
}

export default App
