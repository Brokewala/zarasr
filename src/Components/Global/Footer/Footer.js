import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, LinkedIn, Google, LocationOn } from "@mui/icons-material"
import { NavLink } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css";

export default function Footer() {

  return (
    <div id='Footer' >
      <div className='Footer-container' >
        <div className='Footer-left'>
          <div className='Footer-left-blog1'>
            <NavLink to="/">
              <span className="logo">Zara sr</span>
            </NavLink>
          </div>
          <div className='Footer-left-blog3'>
            <div className='Footer-left-blog3-contact'>
              <LocationOn className='icon_footer ' sx={{ fontSize: "40px" }} />
              <span className="Footer_Lot">Lot: IIE2YWA Ambatokaranana,<br/> 101 Antananarivo Madagascar</span>
            </div>
            <div className='Footer-left-blog3-contact'>
              <EmailIcon className='icon_footer ' sx={{ fontSize: "40px" }} />
              <span>info.zara@gmail.com</span>
            </div>
            <div className='Footer-left-blog3-contact'>
              <CallIcon className='icon_footer' sx={{ fontSize: "40px" }} />
              <ul className='Footer_ul_num'>
                <li>
                  <span>(+261) 32 04 806 28</span>
                </li>
                <li>
                  <span>(+261) 34 40 558 33</span>
                </li>
                <li>
                  <span>(+261) 33 11 417 07</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='Footer-left-blog2'>
            <ul>
              <li>
                <Facebook className="down iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <Twitter className="up iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <Instagram className="down iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <LinkedIn className="up iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <Google className="down iconW" sx={{ fontSize: "40px" }} />
              </li>
            </ul>
          </div>
        </div>
        <div className='Footer-center'>
          <h1 className='Footer-title'>Menu</h1>
          <ul>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/mada-randonne" >
                <span>Randonne</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/mada-tretec" >
                <span>Mada tretec</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/find-job" >
                <span>Travail a l'etrange</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/about" >
                <span>A propos</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/contact" >
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='Footer-right'>
          <h1 className='Footer-title'>Nos services</h1>
          <ul>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/mada-tretec" >
                <span>Conseil et formation en nouvelle technologie</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/mada-tretec" >
                <span>Développement et création du site web</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/find-job" >
                <span>Aide les jeunes malagasy pour trouver  un travail à l'étranger</span>
              </NavLink>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <NavLink to="/mada-randonne" >
                <span>Découverte ile de Madagascar au randonne </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='Footer-copyright'>
        <p>&copy; Copyright ZARA-S.R 2023 -Mentions Légales <i>@lodphon-broke </i></p>
      </div>
    </div>
  )
}
