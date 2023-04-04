import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

export default function Header() {

    return (
        <div id='Header'>
            <div className='Header-container'>
                <div className='Header-left'>
                    <NavLink to="/">
                        <img className='logo' src="/assets/logo3.png" alt="logo zara sr" />
                        {/* <span className="logo">Zara sr</span> */}
                    </NavLink>
                </div>
                <div className='Header-right'>
                    <div className='Header-link'>
                        <ul className='NavLinks'>
                            <li>
                                <NavLink className={'link'} to="/" >Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink className={'link'} to="/about" >A Propos</NavLink>
                            </li>
                            <li>
                                <NavLink className={'link'} to="/contact" >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
