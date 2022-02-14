import React, { Component } from 'react'
import { useState } from 'react'
import "./Minted_bar.css"



function Minted_bar() {
    return(
        <div className="Minted_bar">
            <img src="/src/img/GangHand.png" className="Minted_bar_img"/>
            <div className="Minted_bar_bar">
                <div className="Minted_bar_bar_blackborder">
                    <span>0/10000&nbsp;</span>
                    <span>GEN 0&nbsp;</span>
                    <span>MINTED</span>
                </div>
            </div>
        </div>
    );
}

export default Minted_bar;