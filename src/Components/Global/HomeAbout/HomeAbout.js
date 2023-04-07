import React from 'react';
import { NavLink } from "react-router-dom"
import "./HomeAbout.css";


export default function HomeAbout() {

  return (
    <div id="HomeAbout">
      <div className="HomeAbout-container">
        <div className='HomeAbout-title'>
          <h1>Nos services</h1>
          <span className='HomeAbout_underline'></span>
        </div>
        <div className='HomeAbout-content'>
          {/* liste service */}
          <div className='HomeAboutCard'>
            <div className='HomeAbout-card-title'>
              <h1>
                Découverte ile de Madagascar au randonne
              </h1>
            </div>
            <div className='HomeAbout-card-body'>
              <p>
                Vos êtes passionnée a la randonnée et découverte, les montagnes imposantes rien que pour vous
                et vous serez accompagne par nos guides .veuillez nous laisser un message et restons
                À votre disposition pour toutes autres questions éventuelles et On vous
                contactera en respectant vos souhaits.
              </p>
            </div>
            <div className="HomeAbout-card-bts">
              <NavLink to="/mada-randonne">
                <button className='btn_savoir'>Savoir plus</button>
              </NavLink>
            </div>
          </div>
          <div className='HomeAboutCard'>
            <div className='HomeAbout-card-title'>
              <h1>Trouver de travail </h1>
            </div>
            <div className='HomeAbout-card-body'>
              <p>
                Vous êtes jeune et vous voulez bouter votre confiance en vous? ZARA SR offre une formation et
                technique pour que les jeunes aient un travail, qui permet à un demandeur d'emploi
                d'acquérir le savoir-faire et le savoir-être nécessaire à l'exercice d'un métier
                ou une activité professionnelle.
              </p>
            </div>
            <div className="HomeAbout-card-bts">
              <NavLink to="/travail">
                <button className='btn_savoir'>Savoir plus</button>
              </NavLink>
            </div>
          </div>
          <div className='HomeAboutCard'>
            <div className='HomeAbout-card-title'>
              <h1>Conseil aux nouveau technologies</h1>
            </div>
            <div className='HomeAbout-card-body'>
              <p>
                Nous sommes spécialisées en services numériques répondant aux besoins d'externalisation des expertises;
                des services et des projets informatiques des entreprises. Par exemple, on peut  réaliser un logiciel;
                un site web ou l'exploitation d'une infrastructure informatique.
              </p>
            </div>
            <div className="HomeAbout-card-bts">
              <NavLink to="/mada-tretec">
                <button className='btn_savoir'>Savoir plus</button>
              </NavLink>
            </div>
          </div>

          <div className='HomeAboutCard'>
            <div className='HomeAbout-card-title'>
              <h1>Création de sites  Internet et Intranet</h1>
            </div>
            <div className='HomeAbout-card-body'>
              <p>
                Si vous souhaitez réaliser votre site internet  ou intranet sans vous prendre la tete;
                n'hésite pas à nous contacter, à prix abordables incluant tout: création, hébergement
                (grossiste, boutique, vent en ligne, restaurant, immobilier, salon de beauté, ...)
              </p>
            </div>
            <div className="HomeAbout-card-bts">
              <NavLink to="/mada-tretec">
                <button className='btn_savoir'>Savoir plus</button>
              </NavLink>
            </div>
          </div>
          <div className='HomeAboutCard'>
            <div className='HomeAbout-card-title'>
              <h1>Développement web</h1>
            </div>
            <div className='HomeAbout-card-body'>
              <p>
                Si vos êtes a la recherche du développeur d'applications web où mobile,
                nous sommes spécialisé dans la création d'application web avec technologie (comme:
                html, CSS, PHP, Javascript, Bootstrap, Python, React, Django, Vuejs, Laravel, ...).
                Nous vous accompagnons dans la stratégie de communication.

              </p>
            </div>
            <div className="HomeAbout-card-bts">
              <NavLink to="/mada-tretec">
                <button className='btn_savoir'>Savoir plus</button>
              </NavLink>
            </div>
          </div>
          <div className='HomeAboutCard'>
            <div className='HomeAbout-card-title'>
              <h1>Formation web</h1>
            </div>
            <div className='HomeAbout-card-body'>
              <p>
                L'offre création du site web  est de plus en plus demandée par des sociétés de nos jours;
                c'est pour cela que ZARA SR vous offre des formations web.
                Vous êtes passionné par le développement web, création cite ou application web.
                vous aurez une évaluation et une attestation à la fin de la formation.
              </p>
            </div>
            <div className="HomeAbout-card-bts">
              <NavLink to="/mada-tretec">
                <button className='btn_savoir'>Savoir plus</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


