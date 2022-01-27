import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'
import Mainbox from './components/Mainbox'
import Testicon from './components/Testicon'


interface Subjectprops {
  title: string;
  sub: string;
}



class Subject extends Component<Subjectprops> {
  render(){
    return(
      <div className='App'>
        <div className='Header'>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </div>

        <div>
          <Mainbox />
          <Testicon />
        </div>
      </div>
    );
  }
}



function App() {

  return (
    <div className="App">
      <Subject title = "PROPS" sub = "THIS IS REACT PROPS"></Subject>


    </div>
  )
}

export default App
