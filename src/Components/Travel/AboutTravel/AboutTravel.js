import React from 'react';
import { Link } from "react-router-dom"
import "./AboutTravel.css"

export default function AboutTravel() {
    return (
        <div id="AboutTravel">
            <div className='AboutTravel-container'>
                <div className='AboutTravel-title'>
                    <h1>Pourquoi travailler à l’étranger ?</h1>
                    <span className='AboutTravel_underline'></span>
                </div>
                <div className='AboutTravel_conclusion'>
                    <div className='AboutTravel_conclusion_content'>
                        <div className='AboutTravel_conclusion1'>
                            <p>
                                Vous êtes jeunes et dynamiques, mais vous ne trouvez pas d'opportunités de travail satisfaisantes à Madagascar ? Pourquoi ne pas envisager de travailler à l'étranger ? Cette expérience peut être extrêmement enrichissante sur le plan professionnel et personnel.
                                En travaillant à l'étranger, vous pourrez découvrir de nouvelles cultures, apprendre de nouvelles compétences, améliorer votre niveau de langue, et vous ouvrir à de nouvelles opportunités de carrière. De plus, vous pouvez également gagner un salaire plus élevé, qui vous permettra de mieux soutenir votre famille.
                            </p>
                            <p>
                                Bien sûr, travailler à l'étranger peut être intimidant, mais ne vous inquiétez pas. Nous sommes là pour vous aider à trouver le travail qui convient le mieux à vos compétences et à votre expérience. Nous sommes spécialisés dans l'aide aux jeunes Malgaches à trouver du travail à l'étranger, et nous sommes fiers de notre taux de réussite élevé.
                                Alors, si vous êtes prêt à relever ce défi passionnant, n'hésitez pas à nous contacter. Nous serons heureux de répondre à toutes vos questions et de vous guider tout au long du processus de recherche d'emploi à l'étranger.
                            </p>
                        </div>

                        <div className='AboutTravel_img_content'>
                            <div className='AboutTravel_img_left'>
                                <img src="/assets/pexels-thirdman-8485596.jpg" alt="about_image" />
                            </div>
                            <div className='AboutTravel_img_right'>
                                <div className='AboutTravel_img_top'>
                                    <img src="/assets/pexels-christina-morillo-1181605.jpg" alt="about_image" />
                                </div>
                                <div className='AboutTravel_img_bottom'>
                                    <img src="/assets/pexels-anamul-rezwan-1216589.jpg" alt="about_image" />
                                </div>
                            </div>
                        </div>
                        <div className="AboutTravel_conclusion2">
                            <Link to="/contact">
                                <button>Nos offres d'emploi</button>
                            </Link>
                        </div>
                        <div className='AboutTravel_conclusion3'>
                            <div className="AboutTravel_conclusion3_left">
                                <p>
                                    Une année sabbatique ne signifie pas toujours voyager avec un petit budget et parcourir les îles (aussi bien que cela puisse être)! En effet, vous n’avez pas nécessairement besoin de négliger vos perspectives de carrière : obtenez le meilleur des deux mondes en combinant une expérience de travail rémunérée dans un pays qui vous attire ! Votre carrière professionnelle n’est plus limitée par les opportunités disponibles dans votre pays d’origine ; le marché mondial du travail est beaucoup plus accessible que vous ne le pensez. Si vous voulez acquérir une expérience professionnelle intéressante tout en explorant de nouveaux endroits, vous devriez partir travailler à l’étranger !
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
