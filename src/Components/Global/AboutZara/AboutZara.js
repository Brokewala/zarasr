import React from 'react'
import "./AboutZara.css"

const TeamAbout = () => (
    <div id="TeamAbout">
        <div className="TeamAbout_content">
            <div className="TeamAbout_img1 TeamAbout_img">
                <img src="/team/lodphin.jpg" alt="randonne" />
                <div className='TeamAbout_dec'>
                    <h4>JACQUES Jean Lodphin</h4>
                    <h3>Developpeur Web</h3>
                </div>
            </div>
            <div className="TeamAbout_img2 TeamAbout_img">
                <img src="/team/sa.jpg" alt="randonne" />
                <div className='TeamAbout_dec'>
                    <h4>JACQUES Jean Lodphin</h4>
                    <h3>Developpeur Web</h3>
                </div>
            </div>
            <div className="TeamAbout_img3 TeamAbout_img">
                <img src="/team/ste.jpg" alt="randonne" />
                <div className='TeamAbout_dec'>
                    <h4>JACQUES Jean Lodphin</h4>
                    <h3>Developpeur Web</h3>
                </div>
            </div>
            <div className="TeamAbout_img4 TeamAbout_img">
                <img src="/articles/IMG_20221119_094315.jpg" alt="randonne" />
                <div className='TeamAbout_dec'>
                    <h4>JACQUES Jean Lodphin</h4>
                    <h3>Developpeur Web</h3>
                </div>
            </div>
        </div>
    </div>
)

export default function AboutZara() {
    return (
        <div id="AboutZara">
            <div className="AboutZara_content">
                <div className="AboutZara_title">
                    <h1>Qui somme Nous ?</h1>
                </div>
                <div className="AboutZara1_left">
                    <p>
                        Nous aidons également les jeunes Malgaches à trouver des emplois à l'étranger grâce à notre service de recrutement personnalisé. Si vous avez besoin d'aide pour votre demande de travail, pour obtenir un visa ou pour être orienté dans la bonne direction, notre cabinet est là pour vous aider
                        Chez Zara S.R, notre objectif est de vous offrir un service personnalisé selon vos besoins. Nous sommes spécialisés dans le recrutement de jeunes pour l'obtention d'un travail à l'étranger, et nous sommes déterminés à vous offrir une opportunité de bâtir une carrière réussie.
                    </p>
                    <p>
                        Une perspecctive d'evaluation avoir une relation,capable d'evaluer leurs propres competences profrssionnelles.
                        La  plupart des jeunes,le plus grand craint n'est pas d'avoire un but trop elever et ne pas l'atteinte.
                        Pour Zara S.R ,celui qui veut reussir trouve un moyen et on est la pour vous aider et orienter
                    </p>
                </div>
            </div>
            <div className='AboutZara_container'>
                <div className='AboutZara_left'></div>
                <TeamAbout />
                <div className='AboutZara_right'></div>
            </div>
            <div className="AboutZara_foot_content">
                <div className="AboutZara_foot_dec">
                    <p>
                        Zara S.R est une entreprise qui propose une grande variété de services pour aider les jeunes Malgaches à atteindre leurs objectifs professionnels. Avec notre expérience et notre expertise, nous sommes en mesure de vous offrir une relation personnalisée qui vous permettra d'évaluer vos compétences professionnelles et de trouver un moyen de réussir dans votre carrière.
                    </p>
                    <p>
                        Nous proposons des activités de randonnée pour vous aider à vous ressourcer et à vous épanouir personnellement, ainsi que des services technologiques tels que la création de sites web, la formation web et des services d'externalisation des expertises informatiques pour les entreprises.
                    </p>
                    <p>
                        Si vous avez des questions ou des préoccupations concernant votre demande de travail ou le processus en général, vous pouvez nous consulter sans avoir à retenir nos services complets. Nous sommes là pour vous aider à trouver des réponses à toutes vos questions et à vous fournir des conseils utiles pour réussir dans votre carrière.
                    </p>
                    <p>
                        Nous vous invitons à nous contacter par e-mail pour nous envoyer votre question et tous les documents pertinents. Notre consultant prendra connaissance des informations et vous répondra avec ses commentaires et conseils une fois que tout est clair.
                        En résumé, chez Zara S.R, nous sommes là pour vous aider à réussir dans votre carrière et à atteindre vos objectifs professionnels. Nous sommes là pour vous accompagner tout au long du processus et pour vous offrir un service personnalisé selon vos besoins.
                    </p>
                </div>
            </div>
        </div>
    )
}
