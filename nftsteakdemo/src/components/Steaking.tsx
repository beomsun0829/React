import React, { Component } from 'react'
import { useState } from 'react'
import "./Steaking.css"



function Steaking() {
    return(
        <div className="Steaking">  
            <div className="Heistgang">
                <div className="Heistgang_title">
                    <span>HEIST GANG</span>
                </div>

                <img src="/src/img/Heist_Gang.png"/>

                <div className="Heistgang_description">
                    <span>EARN $HEIST BY STAKING YOUR HEIST</span>
                </div>
                
                <div className="Heistgang_steakbox">
                    <h2>AVAILABLE</h2>
                    <h1>NO NFTS</h1>
                    <hr/>

                    <div className="Heistgang_steakbox_button">
                        <button>COLLECT $HEIST</button>
                        <button>UNSTAKE HEIST</button>
                    </div>

                </div>
            </div>

            <div className="Steaking_divider">
            </div>

            <div className="Swatteam">
                <div className="Swatteam_title">
                    <span>S.W.A.T TEAM</span>
                </div>

                <img src="/src/img/SWAT_TEAM.png"/>

                <div className="Swatteam_description">
                    <span>EARN $HEIST BY STAKING YOUR S.W.A.T</span>
                </div>


                <div className="Swatteam_steakbox">
                    <h2>AVAILABLE</h2>
                    <h1>NO NFTS</h1>
                    <hr/>

                    <div className="Swatteam_steakbox_button">
                        <button>COLLECT $HEIST</button>
                        <button>UNSTAKE HEIST</button>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Steaking;