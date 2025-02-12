"use client";
import React from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="salesContact" className="py-6 px-8 mt-4 mb-15 commonBackground">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-1 lg:gap-32.5">
            <div className="animate_left relative mx-auto hidden md:block md:w-1/2">
              <h4 className="relative mb-6 text-sectiontitle4 font-bold text-blacktext dark:text-white lg:text-sectiontitle4">
                Get expert advice—fill out the <span className="textStartGradient"> form for your</span><span className="textLastGradient"> free consultation.</span>
              </h4>
            </div>
            <div className="animate_right relative mx-auto hidden md:block md:w-1/2 w-1/4">
              <p className="relative mb-6 text-slate-400 text-sm p-0 dark:text-white sm:text-sm">
                Fill out the form below to schedule a free consultation and receive personalized advice tailored
                to your specific needs. Take your business to the next level with our expertise.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black">
              <h2 className="mb-7 text-2xl font-semibold text-black dark:text-white xl:text-3xl">Reach us out</h2>
              <form action="" method="POST">
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input placeholder="Full name" className="w-full pb-2 pl-1  pt-2  rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2" type="text" />
                  <input placeholder="Email address" className="w-full pb-2 pl-1 pt-2  rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2" type="email" />
                </div>
                <div className="mb-11.5 flex">
                  <textarea placeholder="Message" rows={4} className="w-full border rounded-lg pl-1 bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"></textarea>
                </div>
                <div className="flex flex-wrap gap-4 xl:justify-center ">
                  <button aria-label="send message" className="inline-flex items-center gap-2.5 rounded-lg buttoncolor-bg px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
                    Request a Demo
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
