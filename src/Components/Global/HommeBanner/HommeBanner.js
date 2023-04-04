import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HommeBanners.css"

export default function HommeBanner() {
    return (<div id="HommeBanners">
        <Swiper
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"

        >
            <SwiperSlide style={{ background: 'url(/assets/pexels-fauxels-3184339.jpg) center/cover no-repeat ', }} className="silde1 silde">
                <div className="silde1_content">
                    <div className="silde1_content_left">
                        <h1>Zara SR, votre partenaire pour une croissance professionnelle réussie</h1>
                        <p>
                            Nous offrons une expérience unique pour les jeunes Malgaches qui souhaitent explorer le monde en utilisant la technologie pour organiser des randonnées passionnantes. De plus, nous offrons des conseils professionnels pour aider les jeunes à trouver des opportunités de travail à l'étranger et à bâtir une carrière réussie. Joignez-vous à nous pour découvrir le monde, acquérir des compétences et élargir vos horizons professionnels.
                        </p>
                        <button>Faites Nous Part de votre Projet</button>
                    </div>
                    <div className="silde1_content_right"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ background: 'url(/assets/altumcode-dMUt0X3f59Q-unsplash.jpg) center/cover no-repeat ', }} className="silde2 silde">
                <div className="silde1_content">
                    <div className="silde1_content">
                        <div className="silde1_content_left">
                            <h1>La technologie pour votre succès</h1>
                            {/* <h1>Innovez, créez, réussissez avec notre expertise technologique</h1> */}
                            <p>
                                Innovez, créez, réussissez avec notre expertise technologique"
                                Description: Nous sommes votre partenaire de confiance dans tous les aspects de la technologie, offrant des services de conseil, de développement et de maintenance de sites web, d'applications et de logiciels. Nous sommes passionnés par l'innovation et nous sommes déterminés à vous aider à atteindre vos objectifs technologiques et à réussir dans un monde en constante évolution. Faites confiance à notre expertise pour améliorer votre entreprise et votre vie professionnelle.
                            </p>
                            <button>Faites Nous Part de votre Projet</button>
                        </div>
                        <div className="silde1_content_right"></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ background: 'url(/assets/pexels-eric-sanman-1365425.jpg) center/cover no-repeat ', }} className="silde3 silde">
                <div className="silde1_content">
                    <div className="silde1_content">
                        <div className="silde1_content_left">
                            <h1> Explorez Madagascar à pied avec Zara SR</h1>
                            <p>
                                Partez à l'aventure avec Zara SR et découvrez les trésors cachés de Madagascar lors de nos randonnées. Que vous soyez novice ou expérimenté, nos guides locaux expérimentés vous emmèneront hors des sentiers battus pour explorer les paysages naturels, les villages traditionnels et la faune unique de Madagascar. Reconnectez-vous avec la nature, vivez des expériences inoubliables et créez des souvenirs durables avec Zara SR.
                            </p>
                            <button>Faites Nous Part de votre Projet</button>

                        </div>
                        <div className="silde1_content_right"></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ background: 'url(/assets/pexels-cottonbro-studio-7429461.jpg) center/cover no-repeat ', }} className="silde4 silde">
                <div className="silde1_content">
                    <div className="silde1_content">
                        <div className="silde1_content_left">
                            <h1>Trouvez votre opportunité professionnelle à l'étranger avec Zara SR</h1>
                            <p>
                                Zara SR est votre partenaire pour une carrière réussie à l'étranger.
                                Nous offrons des services de conseil personnalisé pour aider les jeunes Malgaches à trouver des opportunités de travail à l'international
                                Nous vous aidons également à obtenir les visas nécessaires pour travailler légalement. Avec Zara SR,
                                vous pouvez réaliser vos rêves professionnels et découvrir de nouvelles cultures tout en gagnant en expérience.
                            </p>
                            <button>Faites Nous Part de votre Projet</button>
                        </div>
                        <div className="silde1_content_right"></div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>)
}