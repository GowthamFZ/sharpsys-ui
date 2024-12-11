"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {
  return (
    <>
      <section className="bg-white py-4 mb-10 mt-4">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h4 className="mx-auto mb-5 text-3xl text-center font-bold text-black dark:text-white">
            Our Esteemed <span className="textStartGradient">Partners</span><span className="textLastGradient"> and Stakeholders</span>
          </h4>        
<div className="swipe mb-4 pb-4">
            {/* <!-- Additional required wrapper --> */}
            
            <Swiper
              spaceBetween={0}
              slidesPerView={8}      
              // loop={true}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              //   reverseDirection:true,
              //   pauseOnMouseEnter:true
              // }}
              speed={3000}
  autoplay={{
    delay: -10,
    disableOnInteraction: false,
  }}
 
  loop={true}
              
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 2,
                },
                // when window width is >= 848px
                848: {
                  slidesPerView: 2,
                },
                // when window width is >= 988px
                988: {
                  slidesPerView: 4,
                },
              }}
            >
              {brandData.map((brand, key) => (
                <SwiperSlide key={brand?.id}>
                  <SingleBrand brand={brand} key={key}/>
                </SwiperSlide>
            ))}
            </Swiper>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Brands;
