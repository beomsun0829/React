import React, { Component } from 'react'
import { useState } from 'react'
import "./Wallet_Mintingbox.css"



function Wallet_Mintingbox() {
    return(
        <div className="Wallet_Mintingbox">
            <div className="Wallet_box">
                <div className="Wallet_Address">
                    WALLET ADDRESS
                </div>
                <div className="Unclaimed_Heist">
                    <p>Unclaimed $ Heist</p>
                    <h2>0</h2>
                </div>
            </div>

            <div className="Minting_box">
                <div className="Minting_title">
                    MINTING
                </div>

                <div className="Minting_content">

                    <div className="Minting_content_gen0">
                        GEN 0
                        <br/>
                        0%
                    </div>
                    <div className="Minting_content_gen1">
                        GEN 1 <span className="Minting_content_heistprice">(20k $HEIST)</span>
                        <br/>
                        0%
                    </div>
                    <div className="Minting_content_gen2">
                        GEN 2 <span className="Minting_content_heistprice">(40k $HEIST)</span>
                        <br/>
                        0%
                    </div>
                    <div className="Minting_content_gen3">
                        GEN 3 <span className="Minting_content_heistprice">(80k $HEIST)</span>
                        <br/>
                        0%
                    </div>

                </div>
                
                <div className="Minting_content_button">
                        <button className="Minting_content_button_mint">MINT</button>
                    </div>

            </div>
        </div>
    );
}

export default Wallet_Mintingbox;