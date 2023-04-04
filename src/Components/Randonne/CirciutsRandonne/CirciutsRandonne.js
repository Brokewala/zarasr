import React from 'react';
import { NavLink } from "react-router-dom"
import "./CirciutsRandonne.css"

export default function CirciutsRandonne() {
    return (
        <div id='CirciutsRandonne'>
            <div className='CirciutsRandonne-container'>
                <div className='CirciutsRandonne-card'>
                    <div className='CirciutsRandonne-card-left'>
                        <div className='CirciutsRandonne-card-left-title'>
                            <h1>Partez en famille</h1>
                        </div>
                        <hr />
                        <div className='CirciutsRandonne-card-left-info'>
                            <p>
                            Offrez le meilleur à ceux que vous aimez et partagez des moments fabuleux!
                            </p>
                            <div className='CirciutsRandonne-btn'>
                                <NavLink to="/contact">
                                    <button className='btn-randonne-info'>Plus d'info</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='CirciutsRandonne-card-right'>
                        <img src="/assets/sac.jpg" alt="image1" />
                    </div>
                </div>
                <div className='CirciutsRandonne-card'>
                    <div className='CirciutsRandonne-card-left'>
                        <div className='CirciutsRandonne-card-left-title'>
                            <h1>Envie de s'evader</h1>
                        </div>
                        <hr />
                        <div className='CirciutsRandonne-card-left-info'>
                            <p>
                            Parfois un peu d'évasion serait la bienvenue et ferait le plus grand bien
                            </p>
                            <div className='CirciutsRandonne-btn'>
                                <NavLink to="/contact">
                                    <button className='btn-randonne-info'>Plus d'info</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='CirciutsRandonne-card-right'>
                        <img src="/assets/avion.jpg" alt="image1" />
                    </div>
                </div>
            </div>
        </div>
    )
}
