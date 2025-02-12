"use client";

import { Autoplay, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import UserStories from "./userStories";
import { userStoriesData } from "./userStoriesData";

const DashboardCarousel = (props) => {
  const slideRenderedPage = props.pageRoot;
  return (
    <>
      <section id="testimonials">
        <h3 className="mx-auto mb-4 text-xl text-grey-400 text-center">
          Discover user success stories
        </h3>
        <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
          Hear <span className="textStartGradient">about us</span> from <span className="textLastGradient"> our happy clients</span>
        </h4>
      </section>
      <section className="userStoriesBackground">
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
          <div id="userStories" className="swiper testimonial-02 h-full mb-20 pb-22.5">

            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              centeredSlidesBounds={true}

              watchSlidesProgress
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                // reverseDirection:true,
                pauseOnMouseEnter: true
              }}



              pagination={{

              }}

              modules={[Autoplay, Pagination, Thumbs]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 848px
                848: {
                  slidesPerView: slideRenderedPage === 'home' ? 2 : 1,
                },
                // when window width is >= 988px
                988: {
                  slidesPerView: slideRenderedPage === 'home' ? 2 : 1,
                },
              }}
            >
              {userStoriesData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <UserStories review={review} customSlide={slideRenderedPage} />
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
