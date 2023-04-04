import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../Helpers/AppContext';
import "./GlobalAboutTretec.css";

export default function GlobalAboutTretec() {
  const { setCursor } = useContext(AppContext);

  useEffect(() => {
    return () => {
      let paras = document.querySelectorAll("p")
      paras.forEach(para => {
        para.addEventListener("mouseover", () => {
          para.classList.add("hovered-link ")
          setCursor('para_hover')
        })
        para.addEventListener("mouseleave", () => { })
      })
    }
  }, [setCursor])


  return (
    <div id="GlobalAboutTretec">
      <div className="GlobalAboutTretec-container">
        <h1>Mada tretec</h1>
        <div className='GlobalAboutTretec-content'>
          <div className="GlobalAboutTretec-content-left">
            <p>
              Tretec est une société de services en ingénierie informatique,
              services experte dans le domaine des nouvelles technologies et de
              l’informatique. Elle peut englober plusieurs métiers (conseil, conception et
              réalisation d’outils, maintenance ou encore formation) et a pour objectif
              principal d’accompagner une société cliente dans la réalisation d’un projet.
            </p>
            <p>
              Elle se distingue du métier d'éditeur de logiciel et de celui de la société de
              conseil en technologie spécialisée en maîtrise d'ouvrage, ces trois activités
              formant le secteur des activités informatiques.
            </p>
            <p>
              Tretec est une entreprise spécialisée en services numériques répondant aux
              besoins d'externalisation des expertises, des services et des projets informatiques
              des directions informatiques des entreprises.
            </p>
            <p>
              Tretec peut par exemple réaliser un logiciel, un site web ou l'exploitation d'une
              infrastructure informatique.
            </p>
            <p>
              Tretec apporte de la valeur ajoutée à ses clients essentiellement à travers le
              savoir-faire et l'expertise numérique de ses salariés. Il s'agit donc d'une
              entreprise de services, financièrement faiblement capitalisée, mais dont la valeur
              est générée par son capital immatériel.

            </p>
            <p></p>
          </div>
          <div className='GlobalAboutTretec-content-right'>
            <img className='anime' src='/assets/video.png' alt="apropos-mada-tretec" />
          </div>
        </div>
      </div>
    </div>
  )
}
