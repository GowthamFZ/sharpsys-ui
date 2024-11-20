import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sharpsys",
    description: "Sharpsys - Elevate your Business Productivity"
};

export default function OurProdcutsPage() {
    return (
        <>
            <section className="pb-20 pt-3 bg-[#2B1A46] md:pb-20 md:pt-2 lg:pb-20 lg:pt-20">
                <div className="container mx-auto">
                    <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                        <div className="flex flex-wrap gap-1 md:flex-nowrap md:gap-10 md:items-center mt-20">
                            <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                                <p className="text-white text-xl">Drag and Drop</p>
                                <h2 className="relative text-white mb-3 text-1xl font-bold text-black dark:text-white xl:text-hero">
                                    Simplify Your DMS with Intuitive Drag-and-Drop
                                </h2>
                                <p className="mb-25 text-white">
                                    Enhance your DMS with a user-friendly drag-and-drop feature. Streamline file uploads, preview
                                    files before uploading, and reduce manual effort.
                                </p>
                            </div>
                            <div className="animate-right md:w-1/4 lg:w-2/5">
                                <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black">
                                    <h2 className="mb-7 text-2xl font-semibold text-black dark:text-white xl:text-3xl">Get Started with us</h2>
                                    <form action="https://formbold.com/s/unique_form_id" method="POST">
                                        <div className="mb-4 flex">
                                            <input placeholder="Full name" className="w-full pb-2 pl-1  pt-2 rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white" type="text" />
                                        </div>
                                        <div className="mb-4 flex">
                                            <input placeholder="Email address" className="w-full pb-2 pl-1 pt-2 rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white" type="email" />
                                        </div>
                                        <div className="mb-4 flex">
                                            <input placeholder="Mobile Number" className="w-full pb-2 pl-1 pt-2 rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white" type="email" />
                                        </div>
                                        <div className="mb-4 flex">
                                            <textarea placeholder="Message" rows="4" className="w-full border rounded-lg pl-1 bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"></textarea>
                                        </div>
                                        <div className="flex flex-wrap gap-4 xl:justify-center">
                                            <button aria-label="send message" className="inline-flex items-center gap-2.5 rounded-lg buttoncolor-bg px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
                                                Request a Demo
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section><br />

            <Brands />

            <section className="pb-20 pt-3 bg-[#1A0C2F] md:pb-20 md:pt-2 lg:pb-20 lg:pt-2">
                <div className="container mx-auto">
                    <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                        <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-20">
                            <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                                <h2 className="relative text-white mb-3 text-1xl font-bold text-black dark:text-white xl:text-hero">
                                    Elevate Your<span className="textStartGradient"> DMS To </span><span className="textLastGradient">Optimize Productivity</span>
                                </h2>
                                <p className="text-white mb-4">
                                    Simplify the business processes and easily create and manage invoices and quotes, saving
                                    time and boosting efficiency.
                                </p>
                            </div>
                            <div className="animate-right md:w-1/4 lg:w-2/5">
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 md:gap-20">
                            <button aria-label="send message" className="inline-flex items-center rounded-2xl px-6 border py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark">
                                Drag and Drop
                            </button>
                            <button aria-label="send message" className="inline-flex items-center rounded-2xl px-6 border py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark">
                                E-Invoice Integration
                            </button>
                            <button aria-label="send message" className="inline-flex items-center rounded-2xl px-6 border py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark">
                                Quote Engine
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pb-10 pt-3 md:pb-10 md:pt-2 lg:pb-10 lg:pt-20">
                <div className="container mx-auto">
                    <div className="animate_top mx-auto text-center">
                        <h2 className="mx-auto mb-2 text-1xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
                            <span className="textStartGradient">Microsoft </span><span className="textLastGradient">Dynamics 365</span>  for Finance and operations
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-10 md:flex-nowrap md:items-center mt-20">
                        <div className="animate-left md:w-1/4 lg:w-2/5 bg-[#F4F1F8] rounded-lg mt-0">
                            <img
                                src="/path/to/your-image.jpg"
                                alt="Team working"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="animate-right md:w-3/4 lg:w-3/5 bg-white pl-3">
                            <h2 className="relative text-black mb-3 text-xl font-bold text-black dark:text-black xl:text-hero">
                                Boost DMS Efficiency with User Friendly Drag-and-Drop Solution
                            </h2>
                            <p className="text-black mb-4">
                                Synchronize your document management with our intuitive drag-and-drop feature. Easily drag
                                and drop multiple files from your desktop into your DMS, preview them before uploading, and
                                receive clear error messages for unsupported files. This user-friendly interface significantly
                                reduces the time spent on file uploads, allowing you to focus on your core tasks. Our custom
                                control for D365 F&O automates document handling and can be further enhanced with
                                customizable features for an even more seamless experience.
                            </p>
                        </div>
                    </div>


                </div>
            </section>


            <section className="pb-20 pt-3 md:pb-10 md:pt-2 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <div className="animate_top mx-auto text-center">
                        <h2 className="mx-auto mb-2 text-1xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
                            Other products<span className="textStartGradient"> that could be a perfect </span><span className="textLastGradient">fit for your business</span>
                        </h2>
                        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
                            Explore our products that can help you create and manage simplified document management
                            systems for your business.
                        </p>
                    </div>


                    <div className="mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-10 xl:gap-10">
                        <div className="ml-0 border bg-[#2A1A46] rounded-lg p-5 pt-5">
                            <h2 className="text-2xl font-semibold text-white">E-Invoicing</h2>
                            <p className="text-white">Our E-Invoicing solution simplifies your invoicing process, ensuring accuracy and compliance
                                while saving you time.
                            </p>
                            <img
                                src="/path/to/your-image.jpg"
                                alt="Team working"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="ml-0 border bg-[#2A1A46] rounded-lg p-5 pt-5">
                            <h2 className="text-2xl font-semibold text-white">Quote Engine</h2>
                            <p className="text-white">Generate professional quotes in seconds with our Quote Engine. Customize templates,
                                calculate pricing, and send quotes effortlessly
                            </p>
                            <img
                                src="/path/to/your-image.jpg"
                                alt="Team working"
                                className="w-full h-auto object-cover"
                            />
                        </div>


                    </div>


                </div>
            </section>
            <FAQ />
        </>
    );
}