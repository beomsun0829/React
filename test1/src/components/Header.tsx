import React, { Component } from 'react'
import './Header.css'

class Headertop extends Component{
    render(){
        return(
            <div className='header'>
                <div className='Title'>
                    <h1>PAYDAY NFT</h1>
                </div>

                <div className='social-wrap'>
                    <a href=''>
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" width = "50px" height = "50px" alt="Discord icon"/>
                    </a>
                    <a href=''>
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" width = "50px" height = "50px" alt="Discord icon"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Headertop;