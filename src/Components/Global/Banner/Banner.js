import React from 'react'
import { NavLink } from "react-router-dom"
import "./Banner.css";

export default function Banner() {
    return (
        <div id="Banner">
            <div className="Banner-container">
                <div className="Banner-content">
                    <div className='Banner-card-left'>
                        <h1>Un travail de qualite au meilleur <span className='red'>prix</span> </h1>
                        <div className='Banner-card-info'>
                            <p>
                                Bienvenue sur le site web de Zara sr, votre partenaire pour une croissance professionnelle réussie. Nous sommes fiers de vous offrir des services de conseil en technologie, de création de sites web, de développement web, de formation web, de randonnée et d'aider les jeunes Malagasy pour trouver un emploi.
                            </p>
                        </div>
                        <div className='Banner-btn-card'>
                            <NavLink to="/contact" >
                                <button className='btn-Banner'>Qu'est qu'on peut faire pour vous ?</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='Banner-card-right'>
                        <img src="/assets/produit.png" alt="logo " />
                    </div>
                </div>
            </div>
            <div className='Banner-box'></div>
        </div>
    )
}
