import React, { Component } from 'react'
import { useState } from 'react'
import "./Maintitle.css"
import {Wallet} from "../Wallet";



function Maintitle() {
    return(
        <div className="Maintitle">
            <div className="Titleimg">
                <h1>HEIST GAME</h1>
            </div>
            <div className="Subtitle">
                <h2>ON-CHAIN NFT RISK PROTOCOL</h2>
            </div>
            <Wallet/>
            
            <div className="Maintitle_Divider">
                <hr/>
            </div>
        </div>
    );
}

export default Maintitle;