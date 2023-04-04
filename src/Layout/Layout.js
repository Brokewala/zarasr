import React, { useEffect } from 'react';
import Footer from '../Components/Global/Footer/Footer';
import Header from '../Components/Global/Header/Header';
import Nav from '../Components/Global/Nav/Nav';
import "./Layout.css";

export default function Layout({ children }) {

    useEffect(() => {
        return () => {
            // cursor
            const cursor = document.querySelector(".cursor");
            window.addEventListener('mousemove', (e) => {
                cursor.style.left = e.pageX + "px"
                cursor.style.top = e.pageY + "px"
            })

            // NavLinks
            const NavLinks = document.querySelectorAll(".NavLinks li");
            NavLinks.forEach(link => {
                link.addEventListener('mouseover', () => {
                    // cursor
                    cursor.style.transform = 'scale(0.5) translate(-90%, -90%)'
                    cursor.style.opacity = '0.9'
                    // link
                    link.style.transition = '0.3s ease-out'
                    link.style.zIndex = 3000
                })
                link.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1) translate(-45%, -45%)'
                    cursor.style.background = 'transparent'
                })
            })

        }
    }, [])


    return (
        <div id="Layout">
            <div className="cursor"></div>
            <div className='Layout-header'>
                <Header />
                <Nav />
            </div>
            <div className="Layout-container">
                {children}
            </div>
            <Footer />
        </div>
    )
}
