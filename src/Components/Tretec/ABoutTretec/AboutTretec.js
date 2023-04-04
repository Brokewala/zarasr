import React from 'react';
import "./AboutTretec.css";

export default function AboutTretec() {
    return (
        <div id="AboutTretec">
            <div className="AboutTretec-container">
                <div className='AboutTretec-title'>
                    <div className='AboutTretec-title-content'>
                        <h1>Les activites de mada tretec</h1>
                        <span className='AboutTretec_line'></span>
                    </div>
                </div>
                <div className='AboutTretec-info-tretec'>
                    <p>
                        Tretec est un service en ingénierie spécialisée en services numériques répondant aux
                        besoins d'externalisation des expertises, des services et des projets informatiques
                        des directions informatiques des entreprises.

                        Tretec peut par exemple réaliser un logiciel, un site web ou l'exploitation d'une
                        infrastructure informatique.


                        Tretec apporte de la valeur ajoutée à ses clients essentiellement à travers le
                        savoir-faire et l'expertise numérique de ses salariés. Il s'agit donc d'une
                        entreprise de services, financièrement faiblement capitalisée, mais dont la valeur
                        est générée par son capital immatériel.
                    </p>
                </div>
                <div className="AboutTretec-Conseil-container">
                    <div className='AboutTretec-Conseil-left'>
                        <h1>Tretec offre des Conseils comme:</h1>
                        <div className="AboutTretec-info-list">
                            <ul>
                                <li>Conseil en organisation</li>
                                <li>Conseil en processus métier</li>
                                <li>Conseil en conduite du changement</li>
                                <li>Conseil technique et R&D externalisé</li>
                            </ul>
                        </div>
                    </div>
                    <div className='AboutTretec-Conseil-right'>
                        <img className='anime' src='/assets/ffff.jpg' alt="Conseil en technologie" />
                    </div>
                </div>
                <div className='AboutTretec-web-container'>
                    <div className='AboutTretec-web-left'>
                        <img className='anime' src='/assets/video.png' alt="Conseil en technologie" />
                    </div>
                    <div className='AboutTretec-web-right'>
                        <h1>Developpement web</h1>
                        <ul>
                            <li>Creation de site vitrine</li>
                            <li>Creation de site e-commerce</li>
                            <li>Creation d'application web</li>
                        </ul>
                    </div>
                </div>
                {/* Formation web ,on a commenter pour le momment car on va utilise sur le procaise etape */}
                {/* <div className='AboutTretec-formation'>
                    <div className='AboutTretec-formation-left'>
                        <h1>Formation web</h1>
                        <p>
                            L'offre de Developpement web est beaucoup plus demande et notre societ va permetre a jeune malagasy
                            povoir creer une site web dinamique
                        </p>
                        <ul>
                            <li>Creation de site web</li>
                            <li>Creation d'application web</li>
                        </ul>
                    </div>
                    <div className='AboutTretec-formation-right'>
                        <img className='anime' src='/assets/produit.png' alt="Conseil en technologie" />
                    </div>
                </div> */}
                {/* fin de formation comment */}
                <div className='AboutTretec-auther'>
                    <div className='AboutTretec-auther-title'>
                        <h1>On offre aussi preseque tous les service informatique</h1>
                    </div>
                    <div className='AboutTretec-auther-container'>
                        <div className='AboutTretec-auther-right'>
                            <ul>
                                <li>
                                    Solutions de communication entre divers systèmes informatiques hétérogènes
                                </li>
                                <li>
                                    Tierce maintenance applicative (TMA) : maintenance et évolution applicative
                                </li>
                                <li>
                                    Tierce recette applicative (TRA) et testing : gestion externalisée des tests et de la
                                    qualité logicielle
                                </li>
                                <li>
                                    Gestion des infrastructures : support aux utilisateurs, maintenance, hébergement,
                                    gestion des systèmes et réseaux, gestion de la sécurité des systèmes
                                </li>
                                <li>
                                    BPO : externalisation de processus métier (RH, comptabilité…)formation,
                                    assistance aux utilisateurs
                                </li>
                            </ul>
                        </div>
                        <div className='AboutTretec-auther-mix'>
                            <div className='AboutTretec-auther-center'>
                                <img className='anime' src='/assets/bg1.jpg' alt="Conseil en technologie" />
                            </div>
                            <div className='AboutTretec-auther-left'>
                                <ul>
                                    <li>Assistance technique</li>
                                    <li>Mise en place de PGI/ERP</li>
                                    <li>l'intégration de systèmes</li>
                                    <li>
                                        Vente de licences de logiciels
                                    </li>
                                    <li>
                                        L'infogérance (externalisation ou outsourcing)
                                    </li>
                                    <li>
                                        Développement d'applications/ingénierie logicielle
                                    </li>
                                    <li>
                                        Architecture et urbanisation des systèmes d'informations (conception, choix
                                        techniques…)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='AboutTretec-last'>
                    <p>
                        BPO : externalisation de processus métier (RH, comptabilité…)formation,
                        assistance aux utilisateurs
                        Tretec se distinguent notamment par le degré d'intégration du travail individuel
                        de chaque employé ou de l'entreprise dans le service qu'elle rend à chacun de ses
                        clients.
                    </p>
                </div>
            </div>
        </div>
    )
}
