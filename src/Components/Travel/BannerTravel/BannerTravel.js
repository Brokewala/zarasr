import React from 'react';
import { NavLink } from 'react-router-dom';
import "./BannerTravel.css"

export default function BannerTravel() {
    return (
        <div id="BannerTravel" style={{ background: 'url(/assets/pexels-andrea-piacquadio-3801451.jpg) center/cover no-repeat ', }}>
            <div className='BannerTravel_container' >
                <div className='BannerTravel-container' >
                    <div className='BannerTravel-content-left'>
                        <h1>Nous offre des conseils pour trouver un travail </h1>
                        <p>
                            vous pourrez vous ouvrir des opportunités de carrière à l'international et vous pourrez ainsi élargir vos horizons professionnels.</p>
                        <p>
                            Nous sommes spécialisés dans le recrutement des jeunes pour l’obtention travaille, une opportunité de bâtir une carrière.</p>
                        <NavLink to="/contact">
                            <button className='btn_BannerTravel'>Contact-nous</button>
                        </NavLink>
                    </div>
                    <div className='BannerTravel-content-right'> </div>
                </div>
            </div>
        </div>
    )
}
