"use client"
import UserStories from "@/components/UserStories";
import milestones from "./milestoneData";
import dynamic from 'next/dynamic';

// Dynamically import react-chrono with ssr set to false
const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), {
  ssr: false, // This disables SSR for this component
});

export default function AboutUsPage() {
  return (
    <>
      <section className="overflow-hidden pb-1 pt-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center mb-4">
            <h2 className="mx-auto mb-2 text-2xl text-center font-bold text-blacktext dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              Ultimate Solutions For All Your<span className="textStartGradient"> Dynamic </span><span className="textLastGradient">Business Needs</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              Scale your business with data-driven insights to optimize workflows, boost productivity, and
              achieve sustainable growth.
            </p>
          </div>
          <div className="container mb-4">
            <img
              src="/images/about/about_us.png"
              alt="Team working"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 mb-5 md:grid-cols-1 lg:mt-10 lg:grid-cols-3 xl:mt-20 xl:gap-12">
            <div className="border p-6 rounded-xl bg-[#E6BD00C9] textJustify">
              <h3 className="text-2xl font-bold text-blacktext text-center">100%</h3>
              <h5 className="text-lg font-semibold text-blacktext text-center">Successful Project Implementaion Track Record</h5>
              <p className="text-gray-600 mt-2 text-sm">We pride ourselves on a flawless 100% project implementation success rate. Our expertise ensures your business objectives are achieved seamlessly, every time.</p>
            </div>
            <div className="border p-4 rounded-lg bg-[#E6BD00C9] textJustify">
              <h3 className="text-2xl font-bold text-blacktext text-center">24 Hrs</h3>
              <h5 className="text-lg font-bold text-blacktext text-center">Round-The-Clock Support</h5>
              <p className="text-gray-600 mt-2 text-sm">Our dedicated support team is available 24/7 to provide assistance whenever you need it. We are committed to keeping your operations running smoothly without downtime.</p>
            </div>
            <div className="border p-4 rounded-lg bg-[#E6BD00C9] textJustify">
              <h3 className="text-2xl font-bold text-blacktext text-center">80+</h3>
              <h5 className="text-lg font-bold text-blacktext text-center">Challenging Projects Completed On-Time</h5>
              <p className="text-gray-600 mt-2 text-sm">With over 80+ complex projects delivered on-time and on-budget, we bring unmatched reliability and excellence to every engagement.</p>
            </div>
          </div>

          <section className="pb-16 pt-15 rounded-lg mb-10 bg-purple md:pb-15 md:pt-15 lg:pb-15 lg:pt-15">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-12">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
                <div className="animate-left md:w-1/4 lg:w-2/5 mt-0">
                  <h1 className="mx-auto mb-2 text-3xl font-bold text-white 2xl:text-sectiontitle1">
                    Transforming <br /><span className="textStartGradient">Businesses</span><span className="textLastGradient"> with Data</span>
                  </h1>
                </div>
                <div className="animate-right mb-2 md:w-3/4 lg:w-3/5 text-white">
                  Empowering businesses with data-driven ERP solutions, revitalizing industries through actionable insights, streamlined processes, and
                  sustainable growth.
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-3 lg:mt-15 lg:grid-cols-3 xl:mt-10 xl:gap-10">
                <div className="ml-0 border contactDialogue rounded-lg p-3 pt-3">
                  <img
                    src="/images/about/ERPSolutions.png"
                    alt="ERP Solutions"
                    className="w-40 h-40 p-4 object-cover"
                  />
                  <h2 className="text-2xl font-semibold text-blacktext">Innovative ERP Solutions</h2>
                  <p className="text-sm text-normalGray">We deliver customized ERP solutions tailored to the unique needs of each client, helping
                    businesses improve operational efficiency, optimize workflows, and achieve long-term,
                    sustainable growth.
                  </p>
                </div>

                <div className="ml-0 border contactDialogue rounded-lg p-3 pt-3">
                  <img
                    src="/images/about/Data_driven.png"
                    alt="Data Driven"
                    className="w-40 h-40 p-4 object-cover"
                  />
                  <h2 className="text-2xl font-semibold text-blacktext">Data-Driven Decisions</h2>
                  <p className="text-sm text-normalGray">Our mission is to empower companies with advanced data analytics, enabling them to make
                    informed decisions, identify opportunities, mitigate risks, and enhance overall business
                    performance and agility.
                  </p>
                </div>
                <div className="ml-0 border contactDialogue rounded-lg p-3 pt-3">
                  <img
                    src="/images/about/Customer_centered.png"
                    alt="Customer Centered"
                    className="w-40 h-40 p-4 object-cover"
                  />
                  <h2 className="text-2xl font-semibold text-blacktext">Customer-Centered Approach</h2>
                  <p className="text-sm text-normalGray">We prioritize customer needs by providing personalized services and innovative solutions,
                    ensuring businesses can overcome challenges, streamline operations, and succeed in a
                    competitive marketplace.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <div className="container mx-auto mb-10 mt-15">
            <div className="animate_top mx-auto mb-4 text-center">
              <h2 className="mx-auto mb-2 text-2xl mb-10 text-center font-bold text-blacktext md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
                Meet our <span className="textLastGradient">Founder</span>
              </h2>
            </div>


            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
                <div className="animate-left md:w-2/5 mt-0">
                  <img
                    src="/images/about/Founder.png"
                    alt="Founder"
                    className="w-full h-auto object-cover p-4"
                  />
                </div>
                <div className="animate-right md:w-3/4 lg:w-3/5">
                  <h2 className="mb-2 text-2xl mb-10 font-bold text-blacktext md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
                    How it started
                  </h2>
                  <p className="mb-5 text-blacktext text-justify">Sharpsys was established in 2011 by Mr. Narayanan, who began his professional journey in
                    1993 as an extraordinary Mathematics teacher. Transitioning into the corporate world in 1998 as
                    a software engineer, Mr. Narayanan faced numerous challenges but steadily rose through the
                    ranks. In 2004, he became a Technical Consultant at Firstware, progressed to Associate
                    Manager at Sundaram Infotech in 2005, advanced to Senior Consultant at GSR in 2008, and
                    ultimately attained the role of Delivery Head at Jean Martin, a US-based company, in 2010.<br />
                    With over 15 years of expertise as a technical specialist, Mr. Narayanan founded Sharpsys
                    Software Solutions (I) Pvt Ltd, providing tailored ERP solutions to businesses of all sizes.
                    Tragically, Mr. Narayanan passed away from COVID-19 at the age of 52 on 30th August 2020.<br />
                    Despite the founder’s loss, Sharpsys continues to flourish under the leadership of Mrs.
                    Hemalatha Narayanan, Mr. Javagal Srinath Narayanan and Mr. Harikrishnan Indrababu. Driven
                    by a commitment to excellence and innovation, the company remains dedicated to delivering
                    cutting-edge technological solutions that empower businesses to succeed.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAFAFA] pb-1 pt-6 mb-10 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 ">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-2xl text-center font-bold text-blacktext dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              The<span className="textLastGradient"> Sharpsys Story</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              A testament to the power of perseverance
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-4 lg:mt-15 lg:grid-cols-4 xl:mt-10 xl:gap-10 ">
            <div className="ml-0 relative border bg-gray rounded-2xl text-center group/story">
              <img
                src="/images/about/Experience_bg.png"
                alt="Experience"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/story:scale-125">
                <h2 className="font-bold text-white text-7xl">15+</h2>
                <p className="text-white">Years of experience</p>
              </div>

            </div>

            <div className="relative ml-0 border bg-white rounded-2xl text-center group/story">
              <img
                src="/images/about/projects_bg.jpg"
                alt="Projects"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/story:scale-125">
                <h2 className="font-bold text-white text-7xl">50+</h2>
                <p className="text-white">Successful Projects</p>
              </div>
            </div>
            <div className="relative ml-0 border bg-white rounded-2xl text-center group/story">
              <img
                src="/images/about/Domain_experts_bg.jpg"
                alt="Domain Experts"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/story:scale-125">
                <h2 className="font-bold text-white text-7xl">60+</h2>
                <p className="text-white">Domain Experts</p>
              </div>
            </div>
            <div className="relative ml-0 border bg-white rounded-2xl text-center group/story">
              <img
                src="/images/about/Multiple_countries_bg.jpg"
                alt="Multuple Countries"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center group-hover/story:scale-125">
                <h2 className="font-bold text-white text-7xl">9+</h2>
                <p className="text-white">Countries</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="pb-16 px-8 pt-15 mb-10 md:pb-15 md:pt-15 lg:pb-15 lg:pt-15">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
            <div className="animate-left md:w-1/4 lg:w-2/5 mt-0">
              <h1 className="mx-auto mb-2 text-3xl font-bold text-blacktext 2xl:text-sectiontitle1">
                The milestones that shaped us
              </h1>
            </div>
            <div className="animate-right mb-2 md:w-3/4 lg:w-3/5 text-normalGray">
              From our first project to our latest breakthrough, each of the milestones is a testament to our
              resilience, innovation, and unwavering commitment to excellence.
            </div>
          </div>
        </div>
        <div className="sm:px-4 md:px-16 xl:px-28 py-8">
          <Chrono items={milestones}
            mode="HORIZONTAL"
            showAllCardsHorizontal="true"
            toolbarPosition="bottom"
            scrollable={{ scrollable: true }}
            cardWidth={170}
            cardHeight={200}
            theme={{
              primary: "#4d2d79",
              secondary: "#f9f3ff",
              cardBgColor: "#f9f3ff",
              iconBackgroundColor: "#4d2d79",
              titleColor: "#4d2d79",
              cardTitleColor: "#000000",
              cardDetailsColor: "#817b87",
            }}
          />
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-11 mt-4 mb-5 text-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-2xl text-center font-bold text-white dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              Our <span className="textStartGradient">Dedicated </span><span className="textLastGradient">Crew</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              The team of experts who go the extra mile for every client.
            </p>

          </div>
          <div className="px-4 mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-4 lg:mt-15 lg:grid-cols-4 xl:mt-10 xl:gap-5 ">
            <div className="relative ml-0 border bg-white rounded-lg text-left">
              <img
                src="/images/employees/JAVAGAL SRINATH NARAYANAN.jpg"
                alt="Team working"
                className="w-full h-full bg-contain rounded-lg"
              />
              <div className="absolute bottom-0 w-full bg-darkBlack opacity-75 rounded-lg">
                <h2 className="text-white px-2 text-lg">Javagal Srinath Narayanan</h2>
                <p className="px-2 text-white text-sm">Chief Executive Officer</p>
              </div>
            </div>

            <div className="relative ml-0 border bg-white rounded-lg text-left">
              <img
                src="/images/employees/HARIKRISHNAN INDRABABU.jpg"
                alt="Team working"
                className="w-full h-full bg-contain rounded-lg"
              />
              <div className="absolute bottom-0 w-full bg-darkBlack opacity-75 rounded-lg">
                <h2 className="text-white px-2 text-lg">Harikrishnan Indrababu</h2>
                <p className="px-2 text-white text-sm">Chief Administrative Officer</p>
              </div>
            </div>
            <div className="relative ml-0 border bg-white rounded-lg text-left">
              <img
                src="/images/employees/HEMALATHA_NARAYANAN.jpg"
                alt="Team working"
                className="w-full h-full bg-cover rounded-lg"
              />
              <div className="absolute bottom-0 w-full bg-darkBlack opacity-75 rounded-lg">
                <h2 className="text-white px-2 text-lg">Hemalatha Narayanan</h2>
                <p className="px-2 text-white text-sm">Chief Operating Officer</p>
              </div>
            </div>
            <div className="relative ml-0 border rounded-lg text-left">
              <img
                src="/images/employees/JAY PRASAAND.jpg"
                alt="Team working"
                className="w-full h-full bg-contain rounded-lg"
              />
              <div className="absolute bottom-0 w-full bg-darkBlack opacity-75 rounded-lg">
                <h2 className="text-white px-2 text-lg">Jay Prasaand</h2>
                <p className="px-2 text-white text-sm">Vice President - Sales</p>
              </div>
            </div>
          </div>
          <div className="container mx-auto mb-4 p-6">
            <div className="relative text-center">
              <img
                src="/images/about/team.jpg"
                alt="Team working"
                className="object-cover rounded-xl w-full h-full"
              />
              <div className="absolute bottom-0 w-full bg-darkBlack opacity-75 rounded-lg py-2">
                <h2 className="text-white px-2 text-3xl">Our Sharpsys Team</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* User Stories */}
      <UserStories pageRoot={"aboutus"} />

    </>
  );
}
