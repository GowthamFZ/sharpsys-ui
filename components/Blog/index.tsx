import React from "react";
import BlogItem from "./BlogItem";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";



const Blog = ({ props }) => {
  return (
    <>
      <section id="homeBlog">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <header>Blogs & Posts</header>
            <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
              What<span className="textLastGradient"> we got </span>to say
            </h4>
          </div>
        </div>
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
            <div className="swiper testimonial-01 mb-20 pb-22.5">

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
                  reverseDirection: true,
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
                    slidesPerView: 2,
                  },
                  // when window width is >= 988px
                  988: {
                    slidesPerView: 2,
                  },
                }}
              >
                {props.map((review) => (
                  <SwiperSlide key={review.slug}>
                    <BlogItem allPosts={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default Blog;
