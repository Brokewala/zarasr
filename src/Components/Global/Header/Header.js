import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';

const HeaaderLink = () => (
    <div className='Header-link'>
        <ul className='NavLinks'>
            <li>
                <NavLink className={'link'} to="/" >Accueil</NavLink>
            </li>
            <li>
                <NavLink className={'link'} to="/a-propos" >A Propos</NavLink>
            </li>
            <li>
                <NavLink className={'link'} to="/contact" >Contact</NavLink>
            </li>
        </ul>
    </div>
)

export default function Header() {
    const [ActiveSideBar, setActiveSideBar] = useState(false)

    const hanleActive=()=>{
        setActiveSideBar(!ActiveSideBar)
    }
    return (
        <div id='Header'>
            <div className='Header-container'>
                <div className='Header-left'>
                    <NavLink to="/">
                        <img className='logo' src="/assets/logo3.png" alt="logo zara sr" />
                    </NavLink>
                </div>
                <div className='Header-right'>
                    <HeaaderLink/>
                </div>
                <div className='Header_sidebar'>
                    <MenuIcon className='Header_menu' onClick={hanleActive} />
                    {ActiveSideBar && <SideBar hanleActive={hanleActive} />}
                </div>
            </div>
        </div>
    )
}
