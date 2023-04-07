import React from 'react'
import { NavLink } from 'react-router-dom'
import "./BannerRandonne.css";

export default function BannerRandonne() {
    return (
        <div id="BannerRandonne">
            <div className="BannerRandonne-container">
                <div className='BannerRandonne-card'>
                    <div className='BannerRandonne-info'>
                        {/* <h3>Organisez votre</h3> */}
                        <h2>Reconnectez-vous </h2>
                        {/* <h2>Randonne sur mesure</h2> */}
                        <h3>avec la nature lors de nos randonnées</h3>
                    </div>
                    <div className='BannerRandonne-btn'>
                        <NavLink to="/contact">
                            <button className='btn-randonne'>Randonne avec nous</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
