import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

export default function Nav() {
    return (
        <div id='Nav'>
            <div className='Nav-container'>
                <ul className='NavLinks'>
                    <li>
                        <NavLink className={'link'} to='/mada-randonne'>Randonne</NavLink>
                    </li>
                    <li>
                        <NavLink className={'link'} to='/mada-tretec'>Mada tretec</NavLink>
                    </li>
                    <li>
                        <NavLink className={'link'} to='/travail'>Trouver de travail</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
