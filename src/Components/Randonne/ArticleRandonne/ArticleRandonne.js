import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ArticleRandonne.css";

export default function ArticleRandonne() {
    return (
        <div id={"ArticleRandonne"}>
            <div className={"ArticleRandonne-container"}>
                <div className='ArticleRandonne-title'>
                    <h1>Decouvrire nos dernier voyage et randonne</h1>
                </div>
                <div className='ArticleRandonne-card-container'>
                    <div className={"ArticleRandonne-card"}>
                        <div className={"ArticleRandonne-card-img"}>
                            <img src="/assets/r-1.jpg" alt="mandraka" />
                        </div>
                        <div className={"ArticleRandonne-card-info"}>
                            <div className={"ArticleRandonne-card-detail"}>
                                <h1>Mandraka</h1>
                                <p>
                                    Vous allez  profiter pleinemet de la nature et decouvrir la diversite
                                    de la flore dans la foret,une jolie marche dans la foret .
                                </p>
                            </div>
                            <div className={"ArticleRandonne-card-btn"}>
                                <NavLink to="/articles">
                                    <button className='btn-randonne'>Savoir plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={"ArticleRandonne-card"}>
                        <div className={"ArticleRandonne-card-img"}>
                            <img className="img_center" src="/assets/s1.jpg" alt="mandraka" />
                        </div>
                        <div className={"ArticleRandonne-card-info"}>
                            <div className={"ArticleRandonne-card-detail"}>
                                <h1>Rova d'Ambohimanga</h1>
                                <p>
                                    La colline royale d'Ambohimanga se compose d'une cite royale et d'un ensemble de lieux sacres.
                                    Depuis quelque 500 ans.
                                </p>
                            </div>
                            <div className={"ArticleRandonne-card-btn"}>
                                <NavLink to="/articles">
                                    <button className='btn-randonne'>Savoir plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={"ArticleRandonne-card"}>
                        <div className={"ArticleRandonne-card-img"}>
                            <img src="/assets/s2.jpg" alt="mandraka" />
                        </div>
                        <div className={"ArticleRandonne-card-info"}>
                            <div className={"ArticleRandonne-card-detail"}>
                                <h1>Montagne d'Antongona</h1>
                                <p>
                                    la montagne d'Antongona se situe 36 KM de la capital(Antananarivo).
                                    Le paysage est domine par des collines ,rizieres,d'impressionnantes falaises des granites,
                                    charette a zebu.
                                </p>
                            </div>
                            <div className={"ArticleRandonne-card-btn"}>
                                <NavLink to="/articles">
                                    <button className='btn-randonne'>Savoir plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
