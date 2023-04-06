import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"
import { Cancel } from "@mui/icons-material"
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import HikingIcon from '@mui/icons-material/Hiking';
import DvrIcon from '@mui/icons-material/Dvr';

export default function SideBar({hanleActive}) {
    return (
        <div id="SideBar">
            <div className="SideBar_container">
                <div className="SideBar_header">
                    <div className="SideBar_left">
                        <Cancel className='SideBar_icon_top' onClick={hanleActive} />
                    </div>
                    <div className="SideBar_right">
                        <img className='logo' src="/assets/logo3.png" alt="logo zara sr" />
                    </div>
                </div>
                <div className="SideBar_content">
                    <Link to="/">
                        <div className='SideBar_link'>
                            <HomeIcon className='SideBar_icon' />
                            <span>Accueil</span>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className='SideBar_link'>
                            <InfoIcon className='SideBar_icon'/>
                            <span>À propos</span>
                        </div>
                    </Link>
                    
                    <Link to="/mada-tretec">
                        <div className='SideBar_link'>
                            <DvrIcon className='SideBar_icon' />
                            <span>Mada Tretec</span>
                        </div>
                    </Link>
                    <Link to="/mada-randonne">
                        <div className='SideBar_link'>
                            <HikingIcon className='SideBar_icon'/>
                            <span>Randonnée</span>
                        </div>
                    </Link>
                    <Link to="/find-job">
                        <div className='SideBar_link'>
                            <Cancel className='SideBar_icon'/>
                            <span>Travail à l'étranger</span>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className='SideBar_link'>
                            <ContactPageIcon className='SideBar_icon'/>
                            <span>Contact</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
