import React from "react";

const ServicesCRM = () => {
  return (
    <>
      {/* CRM Section */}
      <section id="services-crm">
        <div className="py-2 px-6 bg-[url('/images/ourservices/services_bg1.jpg')] bg-cover bg-center">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-4">
                <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                  <p className="text-white text-xl">CRM</p>
                  <h2 className="relative text-white mb-3 text-3xl font-bold text-black dark:text-white xl:text-hero">
                    Elevate Your Customer Relationships with All-in-One CRM Solutions
                  </h2>
                  <p className="mb-6 text-white">
                    Optimize sales, marketing, and customer service with Microsoft Dynamics 365's cloud-powered CRM solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 bg-[#1A0C2F] px-6 pt-3 md:pb-5 md:pt-2 lg:pb-8 lg:pt-8">
        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-white md:w-4/5 xl:w-10/12 xl:text-sectiontitle3">
            Integrate<span className="textStartGradient"> CRM to </span><span className="textLastGradient">Maximize Customer Relationships</span>
          </h2>
          <p className="text-white mb-4">
            Transform your business into a customer-centric powerhouse with Microsoft Dynamics 365.
          </p>
        </div>
      </section>
      <section>
        <div className="pb-8 pt-3 md:pb-5 md:pt-2 lg:pb-8 lg:pt-8">
          <div className="container mx-auto">
            <div className="animate_top mx-auto text-center">
              <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext md:w-4/5 xl:w-9/12 xl:text-sectiontitle2">
                Microsoft Dynamics 365 for <span className="textStartGradient">Customer Relationship Management </span><span className="textLastGradient">and Salesforce</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-10 md:flex-nowrap md:items-center mt-10">
              <div className="animate-left md:w-1/4 lg:w-2/5 bg-[#F4F1F8] rounded-lg mt-0">
                <img
                  src="images/ourservices/crm/CRM.jfif"
                  alt="Microsoft Dynamics Business"
                  className="w-full h-80 p-10 rounded-lg object-cover"
                />
              </div>
              <div className="animate-right md:w-3/4 lg:w-3/5 pl-3">
                <h2 className="relative text-blacktext mb-3 text-xl font-bold xl:text-3xl pr-1">
                  Revolutionize customer engagement with Microsoft Dynamics 365's comprehensive CRM solutions.
                </h2>
                <p className="text-normalGray mb-4 pr-1">
                  Streamline sales, marketing, customer service, and field service operations on a single platform.
                  Gain enhanced visibility into customer interactions, improve lead management, and optimize
                  customer service processes to drive faster growth and outpace your competition.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 md:flex-nowrap md:items-center mt-10">
              <div className="animate-right md:w-3/4 lg:w-3/5 bg-white pl-3">
                <h2 className="relative text-blacktext mb-3 text-xl font-bold dark:text-black xl:text-3xl">
                  Empower Your Business with Expert Salesforce Solutions
                </h2>
                <p className="text-normalGray mb-4">
                  Salesforce solutions for expert guidance, tailored solutions, and proven results. Our certified
                  team leverages best practices and advanced technology to deliver scalable, reliable, and secure
                  solutions that drive revenue growth and improve operational efficiency. With a focus on
                  customer satisfaction and success, we're dedicated to helping you achieve your business goals
                  through innovative Salesforce implementations.
                </p>
              </div>
              <div className="animate-left md:w-1/4 lg:w-2/5 bg-[#F4F1F8] rounded-lg mt-0">
                <img
                  src="images/ourservices/crm/D365_CRM.jfif"
                  alt="Business Central"
                  className="w-full h-80 p-10 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CRM Section Ends */}
    </>
  );
};

export default ServicesCRM;
