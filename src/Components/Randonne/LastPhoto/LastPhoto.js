import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PhotoData } from '../../../Helpers/PhotoData';
import "./LastPhoto.css"

export default function LastPhoto() {

    return (
        <div id='LastPhoto'>
            <div className='LastPhoto_content'>
                <div className='LastPhoto_title'>
                    <h1>Découvrez quelques-unes de nos photos de randonnées et voyages.</h1>
                </div>
                <Swiper
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 1
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 5
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                >
                    {
                        PhotoData.map((data, index) => (
                            <SwiperSlide key={index} className="slide_img ">
                                <div className="slide_img_content">
                                    <img src={data.image} alt={data.title} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}
