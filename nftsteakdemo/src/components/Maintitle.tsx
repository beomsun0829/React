import React, { Component } from 'react'
import { useState } from 'react'
import "./Maintitle.css"
import {Wallet} from "../Wallet";



function Maintitle() {
    return(
        <div className="Maintitle">
            <div className="Titleimg">
                <img src='/src/img/Main_Title.png'/>
            </div>
            <div className="Subtitle">
                <span>ON-CHAIN NFT RISK PROTOCOL</span>
            </div>
            <Wallet/>
            
            <div className="Maintitle_Divider">
                <hr/>
            </div>
        </div>
    );
}

export default Maintitle;