"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="py-11 bg-[#0B0A0A]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="mx-auto mb-2 text-xl text-white text-center">
            FAQ'S
          </h3>
          <h4 className="mx-auto mb-4 text-3xl text-center text-white font-bold dark:text-white">
            Questions we get asked
          </h4>


          <div className="flex grid grid-cols-1 mb-4 justify-center text-white gap-7.5 md:grid-cols-1 lg:grid-cols-1 xl:gap-10">
            {faqData.map((faq, key) => (
              <FAQItem
                key={key}
                faqData={{ ...faq, activeFaq, handleFaqToggle }}
              />
            ))}
          </div>
          <a
            href="#"
            className="group mt-7.5 inline-flex items-center gap-2.5 text-white hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <span className="duration-300 group-hover:pr-2">If you have more don't hesitate to <b>Contact Us</b></span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>
      </section >
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
