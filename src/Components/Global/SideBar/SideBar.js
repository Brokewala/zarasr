import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"
import { Cancel } from "@mui/icons-material"

export default function SideBar({hanleActive}) {
    return (
        <div id="SideBar">
            <div className="SideBar_container">
                <div className="SideBar_header">
                    <div className="SideBar_left">
                        <Cancel onClick={hanleActive} />
                    </div>
                    <div className="SideBar_right">
                        <img className='logo' src="/assets/logo3.png" alt="logo zara sr" />
                    </div>
                </div>
                <div className="SideBar_content">
                    <Link to="/">
                        <div className='SideBar_link'>
                            <Cancel className='SideBar_icon' />
                            <span>Homme</span>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className='SideBar_link'>
                            <Cancel className='SideBar_icon'/>
                            <span>Aboute</span>
                        </div>
                    </Link>
                    
                    <Link to="/mada-tretec">
                        <div className='SideBar_link'>
                            <Cancel/>
                            <span>Mada Tretec</span>
                        </div>
                    </Link>
                    <Link to="/mada-randonne">
                        <div className='SideBar_link'>
                            <Cancel className='SideBar_icon'/>
                            <span>Randonne</span>
                        </div>
                    </Link>
                    <Link to="/find-job">
                        <div className='SideBar_link'>
                            <Cancel className='SideBar_icon'/>
                            <span>Travail</span>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className='SideBar_link'>
                            <Cancel className='SideBar_icon'/>
                            <span>Contact</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
