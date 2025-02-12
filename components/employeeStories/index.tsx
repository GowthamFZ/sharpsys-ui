"use client";
import { Autoplay, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import EmployeeStories from "./employeeStories";
import { employeeStories } from "./employeeStoriesData";

const employeeTestimonial = () => {
  return (
    <>
      <section className="bg-purple">
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
          className="animate_top mx-auto max-w-c-1390"
        >
          <div id="userStories" className="swiper empTestimonial h-full mb-20 pb-22.5">

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
                  slidesPerView: 1,
                },
                // when window width is >= 988px
                988: {
                  slidesPerView: 1,
                },
              }}
            >
              {employeeStories.map((review) => (
                <SwiperSlide key={review?.id}>
                  <EmployeeStories review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </motion.div>
      </section>
    </>
  );
};

export default employeeTestimonial;
