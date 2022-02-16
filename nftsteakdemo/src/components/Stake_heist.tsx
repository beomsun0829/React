import React, { Component } from 'react'
import { useState } from 'react'
import "./Stake_heist.css"



function Stake_heist() {
    return(
        <div className="Stake_heist">
            <div className="Stake_heist_title">
                <hr/>
                <span>HEIST GANG</span>
                <hr/>
            </div>

            <p>1. SELECT A HEIST YOU WANT TO JOIN THE GANG AND START TO ROB</p>

            <div className="Stake_heist_connectwallet">
                <span>CONNECT WALLET</span>
            </div>

            <div className="Stake_heist_stakeheist">
                <div className="Stake_heist_stakeheist_progressbar">
                    <span>TOTAL HEIST : 0 / STAKED HEIST : 0</span>
                </div>
                
                <div className="Stake_heist_stakeheist_button">
                    <button>STAKE HEISTS</button>
                </div>
            </div>

        </div>
    );
}

export default Stake_heist;