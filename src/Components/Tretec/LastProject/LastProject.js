import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./LastProject.css"
import { TretecData } from '../../../Helpers/TretecData';
export default function LastProject() {

    return (
        <div id='LastProject'>
            <div className='LastProject_content'>
                <div className='LastProject_title'>
                    <h1>Découvrez nos dernier realisations.</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}          
                    slidesPerView={3}
                    className="tretec_swiper"
                    breakpoints={{
                        640:{
                            slidesPerView:1,
                            spaceBetween:10
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:10
                        },
                        1024:{
                            slidesPerView:3,
                            spaceBetween:20
                        }
                    }}
                >
                    {
                        TretecData.map((data,index)=>(
                            <SwiperSlide key={index} className="slide_img ">
                                <div className="tretect_img_content">
                                    <img src={data.image} alt={index} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}
