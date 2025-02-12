import React from "react";

const ServicesStaffAugmentation = () => {
  return (
    <>
      {/* Staff Augmentation */}
      <section id="staff-augmentation">
        <div className="py-2 px-6 bg-[url('/images/ourservices/services_bg1.jpg')] bg-cover bg-center">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-4">
                <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                  <p className="text-white text-xl">Staff Augmentation</p>
                  <h2 className="relative text-white mb-3 text-3xl font-bold text-black dark:text-white xl:text-hero">
                    Our Staff Augmentation services offer the agility to expand your team as your project demands.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 bg-[#1A0C2F] px-6 pt-3 md:pb-5 md:pt-2 lg:pb-8 lg:pt-8">
        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-white md:w-4/5 xl:w-10/12 xl:text-sectiontitle3">
            Dedicated experts <span className="textStartGradient">for your </span><span className="textLastGradient">Microsoft Dynamics Projects</span>
          </h2>
        </div>
      </section>
      <section className=" py-1 mb-8">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="max-w-c-1390 max-w-6xl p-4 flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 pr-2 flex items-center justify-center">
              <div >
                <img
                  src="images/ourservices/staff_augmentation/Staff_Augmentation.jfif"
                  alt="Staff Augmentation"
                  className="w-full h-auto pl-6 object-cover"
                />
              </div>
            </div>

            <div className="w-3/5 pl-8 space-y-4">
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Flexible Staff Augmentation for Your Project Demands
                </h2>
                <p className="text-black text-sm">
                  Our Staff Augmentation services offer the agility to expand your team as your project demands
                  evolve. Whether you require dedicated experts for long-term support or ad-hoc resources for
                  specific tasks, we provide the right talent to seamlessly integrate with your team and drive
                  success.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Versatile Engagement Models for Microsoft Dynamics Support
                </h2>
                <p className="text-black text-sm">
                  Choose the engagement model that fits your business needs. Our options include dedicated
                  resources for ongoing projects, flexible time & material models for evolving scopes, and cost-
                  effective package models for ad-hoc support or AMCs. Tailored SLAs and ticketing integration
                  ensure seamless support.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Dedicated Resource Model
                </h2>
                <p className="text-black text-sm">
                  Fixed Cost Model Secure long-term, full-time Microsoft Dynamics professionals at a fixed cost.
                  Ideal for businesses requiring consistent, dedicated expertise to manage ongoing projects with
                  full-time support and predictability.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Time & Material Model
                </h2>
                <p className="text-black text-sm">
                  Flexible and adaptable, this model allows you to pay for services based on actual hours worked.
                  It’s perfect for dynamic projects with evolving requirements, ensuring efficient use of resources
                  and budget control.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Package Models for Ad-Hoc and AMC Support
                </h2>
                <p className="text-black text-sm">
                  Tailored for businesses with irregular support needs or Annual Maintenance Contracts (AMCs),
                  our package models provide a cost-effective approach, delivering expert support as and when
                  required.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Flexible SLAs & Integrated Ticketing System
                </h2>
                <p className="text-black text-sm">
                  We offer customizable Service Level Agreements (SLAs) and seamless integration with your
                  existing ticketing systems, ensuring personalized, transparent, and efficient issue resolution for
                  every business requirement.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-[#4d2d79] hover:scale-105 hover:shadow-xl">
                <h2 className="relative text-black font-bold">
                  Ultimate Solutions For All Your Dynamic Business Needs
                </h2>
                <p className="text-black text-sm">
                  Scale your business with data-driven insights to optimize workflows, boost productivity, and
                  achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Staff Augmentation Ends */}
    </>
  );
};

export default ServicesStaffAugmentation;
