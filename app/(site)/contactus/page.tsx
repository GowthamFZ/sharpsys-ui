import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import RenderMap from "@/components/RenderMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharpsys",
  description: "Sharpsys - Elevate your Business Productivity"
};

export default function ContactUsPage() {
  return (
    <>
      <section className="pb-16 pt-30 contactBg md:pb-40 md:pt-28 lg:pb-30 lg:pt-32">
        <div className="container mx-auto py-2">
          <h1 className="mx-auto mb-2 text-4xl font-bold text-white text-center xl:text-sectiontitle3">
            Let's connect!
          </h1>
          <p className="text-white text-center">Share your story with us, and let's explore the possibilities together.</p>
        </div>
        <div className="gap-4 xl:justify-center text-center">
          <button aria-label="Contact US" className="inline-flex items-center gap-2.5 rounded-lg buttoncolor-contactus-bg px-2 py-1 text-black duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
            Contact us
          </button>
        </div>
      </section>

      <section className="pb-1 pt-4 bg-white md:pb-2 md:pt-4 lg:pb-4 lg:pt-2">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-12">
          <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
            <div className="animate-right mb-2 md:w-3/4 lg:w-3/5 text-white">
              <img src="/images/contactus/Contactus1.png" alt="About" className="py-12" />
            </div>
            <div className="animate-left md:w-1/4 lg:w-2/5 mt-0"            >
              <span className="font-medium text-black dark:text-black">
                <span className="mb-4 underline text-black ">
                  New User
                </span>
              </span>
              <h2 className="relative mb-3 text-2xl font-bold text-blacktext dark:text-white xl:text-sectiontitle4">
                Partner with Us for <span className="textLastGradient">Tailored</span><span className="textStartGradient"> Tech Solutions Today</span>
              </h2>
              <p className="mb-4 text-normalGray">
                Looking for solutions to transform your business digitally? Reach out to us, and let’s customize
                the perfect solution for your business.
              </p>
              <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-1 pt-5 rounded-lg bg-[#E6BD00] md:pb-2 md:pt-5 lg:pb-4 lg:pt-2">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-12">
          <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
            <div className="animate-left md:w-1/4 lg:w-2/5 mt-0">
              <span className="font-medium text-blacktext underline dark:text-black md:mt-5">
                For Support
              </span>
              <h1 className="mx-auto mb-2 text-3xl font-bold text-blacktext 2xl:text-sectiontitle1">
                Need Assistance? We're Here for Your Tech Support
              </h1>
              <p className="mb-4 text-normalGray">
                If you are already using our solutions, discuss your technical setbacks with us. Connect with our
                support team for quick solutions to your technical challenges.
              </p>
            </div>
            <div className="animate-right mb-2 md:w-3/4 lg:w-3/5 text-white">
              <img src="/images/contactus/Contactus2.png" alt="About" className="w-full h-full" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-10 xl:gap-10">
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/images/contactus/inquiry.png"
                alt="Inquiry"
                className="w-20 h-20 p-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-blacktext">For General Inquiries</h2>
              <div className="border border-2 border-yellow-400 w-24 mb-4"></div>
              <p className="text-sm text-normalGray text-justify">We’re here to sort your queries about the digital evolution of your business. Reach out, and we’ll
                provide the details you need.
              </p>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row mb-2">
                  <img
                    src="/images/contactus/phone.png"
                    alt="Phone"
                    className="w-6 h-6 mr-2"
                  /><p className="text-xs mt-1">+91 8220933382</p></div>
                <div className="flex flex-row break-all">
                  <img
                    src="/images/contactus/message.png"
                    alt="Email"
                    className="w-6 h-6 mr-2"
                  /><p className="text-xs">contactus@sharpsyssoft.com</p></div>
              </div>
            </div>

            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/images/contactus/demo.png"
                alt="Inquiry"
                className="w-20 h-20 p-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-blacktext">For Demo Requests</h2>
              <div className="border border-2 border-green-700 w-24 mb-4"></div>
              <p className="text-sm text-normalGray text-justify">Explore our solutions in action. Contact our team and we'll schedule a personalized walkthrough
                for you.
              </p>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row mb-2">
                  <img
                    src="/images/contactus/phone.png"
                    alt="Phone"
                    className="w-6 h-6 mr-2"
                  /><p className="text-xs mt-1">+91 8220933384</p></div>
                <div className="flex flex-row break-all">
                  <img
                    src="/images/contactus/message.png"
                    alt="Email"
                    className="w-6 h-6 mr-2"
                  /><p className="text-xs">jay.p@sharpsyssoft.com</p></div>
              </div>
            </div>
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/images/contactus/sales.png"
                alt="Inquiry"
                className="w-20 h-20 p-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-blacktext">For Sales Inquiry</h2>
              <div className="border border-2 border-pink-700 w-24 mb-4"></div>
              <p className="text-sm text-normalGray text-justify">We will help you choose the right solution and pricing for your business. Connect with us for
                your automation requirements.
              </p>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row mb-2">
                  <img
                    src="/images/contactus/phone.png"
                    alt="Phone"
                    className="w-6 h-6 mr-2"
                  /><p className="text-xs mt-1">+91 8220933384</p></div>
                <div className="flex flex-row break-all">
                  <img
                    src="/images/contactus/message.png"
                    alt="Email"
                    className="w-6 h-6 mr-2"
                  /><p className="text-xs">jay.p@sharpsyssoft.com</p></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="pb-1 pt-4 bg-white md:pb-2 md:pt-4 lg:pb-4 lg:pt-2">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:p-6">
          <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-0.5">
            <div className="animate_top z-40">
              <span className="font-medium text-blacktext underline dark:text-white md:mt-5">
                Our Locations
              </span>
              <h3 className="text-2xl font-semibold text-blacktext dark:text-white xl:text-sectiontitle4">We <span className="textStartGradient">Work</span><span className="textLastGradient"> Here</span></h3>
            </div>

            <div className="animate_top">
              <img alt="title" loading="lazy" width="36" height="36" src="/images/icon/indiaflag.png" />
              <h3 className="text-sm font-semibold text-blacktext mt-2">Sharpsys Software Solutions [l] Pvt. Ltd.,</h3>
              <p className="text-sm font-medium text-normalGray">No.14,Venu's Building,
                Extension III,<br />
                Mahalakshmi Nagar Main Road, Nandivaram,<br />
                Guduvanchery-603 202.<br />Tamil Nadu, India.</p>
            </div>

            <div className="animate_top z-40">
              <img alt="title" loading="lazy" width="36" height="36" src="/images/icon/usaflag.png" />
              <h3 className="text-sm font-semibold text-blacktext mt-2">Sharpsys Software Solutions [l] Pvt. Ltd.,</h3>
              <p className="text-sm font-medium text-normalGray">66 West Flagler Street,<br /> Suite 900 Miami, FL 33130.</p></div>
          </div>
        </div>
      </section>
      {/* Geo Location */}
      <section className="mx-10">
        <RenderMap renderFrom='contactus' />
      </section>

      <section id="requestdemo" className="pb-5 pt-10 md:pb-10 md:pt-18 lg:pb-14 lg:pt-12">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
      <FAQ />
    </>
  );
}
