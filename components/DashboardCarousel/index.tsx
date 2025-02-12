"use client";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import Details from "./Details";
import { detailsData } from "./detailsData";

const DashboardCarousel = () => {
  return (
    <>
      <section>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-8 max-w-c-1235 px-4 md:px-8 xl:mt-16 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}

            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              initialSlide={2}
              centeredSlides={true}


              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: true,
                pauseOnMouseEnter: true
              }}

              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 848px
                848: {
                  slidesPerView: 2,
                },
                // when window width is >= 988px
                988: {
                  slidesPerView: 3,
                },
              }}
            >
              {detailsData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <Details review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </motion.div>
      </section>
    </>
  );
};

export default DashboardCarousel;
