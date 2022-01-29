import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'


interface Subjectprops {
  title: string;
  sub: string;
}





function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>

    </div>
  )
}

export default App
