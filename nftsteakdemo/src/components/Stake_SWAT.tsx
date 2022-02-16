import React, { Component } from 'react'
import { useState } from 'react'
import "./Stake_SWAT.css"



function Stake_SWAT() {
    return(
        <div className="Stake_SWAT">
            <div className="Stake_SWAT_title">
                <hr/>
                <span>S.W.A.T</span>
                <hr/>
            </div>

            <p>
                1.SLECT A S.W.A.T YOU WANT TO JOIN THE S.W.A.T
                <br/>
                AND START TO TAKE A BRIDE AND CONFISCATE
            </p>

            <div className="Stake_SWAT_connectwallet">
                <span>CONNECT WALLET</span>
            </div>

            <div className="Stake_SWAT_stakeheist">
                <div className="Stake_SWAT_stakeheist_progressbar">
                    <span>TOTAL S.W.A.T : 0 / STAKED S.W.A.T : 0</span>
                </div>
                
                <div className="Stake_SWAT_stakeheist_button">
                    <button>STAKE S.W.A.T</button>
                </div>
            </div>

        </div>
    );
}

export default Stake_SWAT;