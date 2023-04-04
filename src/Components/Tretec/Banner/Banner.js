import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Banner.css";

export default function Banner() {

   
    return (
        <div id='Banner'>
            <div className='Banner-container'>
                <div className='Banner-left'>
                    <div className='Banner-title'>
                        <h1>Faites passer votre<br />Entreprise au<br />Niveau<span className='red'> supérieur</span></h1>
                        <p>
                            Nous avons nommés trente les services en ingénierie informatique, 
                            services experts dans le domaine des nouvelles technologies et de l’informatique. 
                            Elle peut englober plusieurs métiers (conseil, conception et réalisation d’outils,
                             maintenance ou encore formation) et a pour objectif principal d’accompagner une société cliente dans la réalisation d’un projet.
                        </p>
                        <NavLink to={"/"}>
                            <button className='btn btn-banner'>Contact-nous</button>
                        </NavLink>
                    </div>
                </div>
                <div className='Banner-right'>
                    <img src='./assets/devoted-1-removebg-preview.png' alt='banner' />
                </div>
            </div>
        </div>
    )
}
