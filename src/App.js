import React from 'react'
import { Possibility, Blog, Features, Header, Footer, WhatGPT } from "./containers"
import { CTA, Navbar, Brand } from "./components"
import "./App.css"
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
    </div>
      <Brand />
      <WhatGPT />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App