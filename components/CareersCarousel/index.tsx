"use client";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
    "/images/career/team/team_1.jpg",
    "/images/career/team/team_2.jpg",
    "/images/career/team/team_3.jpg",
    "/images/career/team/team_4.jpg",
    "/images/career/team/team_5.jpg",
    "/images/career/team/team_6.jpg",
    "/images/career/team/team_7.jpg",
    "/images/career/team/team_9.jpeg",

];

const CareersCarousel = () => {

    return (
        <>
            <section>
                <div id="userStories" className="swiper h-full">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        watchSlidesProgress
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                            // reverseDirection:true,
                            pauseOnMouseEnter: true
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            // when window width is >= 640px
                            0: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 848px
                            848: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 988px
                            988: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col ${index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}`}>

                                    <div className="w-full h-full">
                                        <img
                                            src="/images/career/team/carousel_background.png"
                                            alt="Background Image"
                                            className="w-96 h-full object-cover object-contain rounded-lg"
                                        />
                                    </div>

                                    <div className="w-full h-auto py-4">
                                        <img
                                            src={src}
                                            alt="Image"
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                </div>

                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default CareersCarousel;
