import React from 'react';
import { Link } from "react-router-dom";
import "./BannerAbout.css"

export default function BannerAbout() {
    return (
        <div id="BannerAbout" style={{ background: 'url(/assets/pexels-fauxels-3184339.jpg) center/cover no-repeat ', }}>
            <div className="BannerAbout_content">
                <div className='BannerAbout_card_content'>
                    <div className='BannerAbout_card'>
                        <span className="about_span_we">NOUS VOUS AIDONS</span>
                        <h1>À PROPOS DE NOUS</h1>
                        <h3>
                            Le côté le plus proéminent est <br />
                            les fonctionnalités des <span>services dédiés</span>
                        </h3>
                        <Link to="/contact" className="about_contact_savoir">Savoire plus</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
