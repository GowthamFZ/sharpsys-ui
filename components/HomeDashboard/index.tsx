"use client";
import React, { useState } from "react";
import Services from "../Services";
import UserStories from "../UserStories";
import Blog from "../Blog";
import 'react-tooltip/dist/react-tooltip.css';
import CountUp from 'react-countup';
import RenderMap from "../RenderMap";
import VisibilitySensor from 'react-visibility-sensor';
import Link from "next/link";



export default function HomeDashboard({ posts }) {
    const [startCountup, setStartCountup] = useState(false);

    return (
        <>

            <section id='why-sharpsys' className="commonBackground py-4 md:px-24">
                <div className="mx-auto max-w-c-1390 px-4 mb-8 md:px-8 2xl:px-0">
                    <h3 className="mx-auto mb-4 text-xl text-grey-400 text-center">
                        Why Sharpsys?
                    </h3>
                    <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
                        We <span className="textStartGradient">seamlessly</span><span className="textLastGradient"> unify systems</span> into one
                    </h4>

                    <div className="mt-5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-5 lg:grid-cols-2 xl:mt-7 xl:gap-12.5">
                        <div className="animate_top z-40 rounded-lg border multiBorder border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                                <img alt="title" width="48" height="48" src="/images/why/why_01.png" className="md:ml-5 md:mr-2" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Focused Roadmap</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We deliver tailored, tech-driven solutions</p>
                                </div>
                            </a>
                        </div>

                        <div className="animate_top z-40 rounded-lg border multiBorder border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                                <img alt="title" width="48" height="48" src="/images/why/why_02.png" className="md:ml-5 md:mr-2" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Reliable Predictability</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Managing scope, time and budget with precision</p>
                                </div>
                            </a>
                        </div>

                        <div className="animate_top z-40 !rounded-lg border multiBorder bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                                <img alt="title" width="48" height="48" src="/images/why/why_03.png" className="md:ml-5 md:mr-2" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Steady Performance</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We meet client demands using proven methods</p>
                                </div>
                            </a>
                        </div>

                        <div className="animate_top z-40 !rounded-lg border multiBorder border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                                <img alt="title" width="48" height="48" src="/images/why/why_04.png" className="md:ml-5 md:mr-2" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Agile Engagement</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ensuring transparency at every development</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-1 mb-8">
                <VisibilitySensor onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setStartCountup(isVisible)} partialVisibility={true}>
                    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                        <div className="flex flex-wrap justify-center gap-6 lg:gap-20">
                            <div className="animate_top text-center">
                                <h3 className="text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                                    {startCountup && <CountUp end={100} duration={3} />}+
                                </h3>
                                <p className="text-lg lg:text-xl">Client Satisfaction</p></div>
                            <div className="animate_top text-center">
                                <h3 className="text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                                    {startCountup && <CountUp end={24} duration={3} />}+
                                </h3>
                                <p className="text-lg lg:text-xl">Expert Support Team</p></div>
                            <div className="animate_top text-center">
                                <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                                    {startCountup && <CountUp end={1000} duration={3} />}+
                                </h3>
                                <p className="text-lg lg:text-xl">Sales Count</p></div>
                            <div className="animate_top text-center">
                                <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                                    {startCountup && <CountUp end={40} duration={3} />}+
                                </h3>
                                <p className="text-lg lg:text-xl">Client Worldwide</p>
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>
            </section>

            <section className="py-11 mt-4 bg-[#1F0A3C] mb-15">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
                        We are experts in
                    </h3>
                    <h4 className="mx-auto mb-4 text-3xl text-center text-white font-bold dark:text-white">
                        Microsoft Dynamics & it's services
                    </h4>
                </div>

                <div className="flex flex-col md:flex-row gap-1">
                    <div className="px-6 mx-12 rounded-lg border border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                        <div className="flex justify-center pt-2"><img width={256} height={256} src="/images/services/F&O.png" alt="product image" /></div>
                        <div className="flex flex-col items-center md:flex-row md:max-w-xl">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Microsoft Dynamics 365 F&O: Comprehensive Financial Management</h5>
                                <p className="mb-3 font-normal text-slate-400 dark:text-gray-400 text-justify">Optimize budgeting, project management, and financial operations with Microsoft Dynamics 365 Finance & Operations, tailored for large international companies.</p>
                                <Link className="underline text-black" href={"/ourservices#enterprise-solutions"}>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-6/12 px-6 mx-6 xl:pr-8">
                        <div className="mb-8 rounded-lg border border-stroke bg-slate-50 px-2 py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                            <div className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                                <img alt="title" width="128" height="128" src="/images/services/Business Central.png" className="pl-2" />
                                <h5 className="mb-2 px-2 md:text-xl xl:text-lg font-bold tracking-tight text-gray-900 dark:text-white">Microsoft Dynamics 365 Business Central: Your All-in-One Cloud Solution
                                </h5>
                            </div>
                            <p className="mb-3 mx-6 xl:text-sm text-slate-400 dark:text-gray-400 text-justify">Empower your small to medium-sized business with Microsoft Dynamics 365 Business Central, a comprehensive cloud-based platform for seamless management and growth.
                            </p>
                            <Link className="ml-6 underline text-black" href={"/ourservices#enterprise-solutions"}>Know More</Link>
                        </div>
                        <div className="rounded-lg border border-stroke bg-slate-50 p-1 py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
                            <div className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                                <img alt="title" width="128" height="128" src="/images/services/Dynamics 365.png" className="pl-6 md:w-128 md:h-128" />
                                <h5 className="mb-2 px-4 md:text-xl xl:text-lg font-bold tracking-tight text-gray-900">Microsoft Power Platform: Unlock Data-Driven Insights</h5>
                            </div>
                            <p className="mb-3 mx-6 xl:text-sm text-slate-400 dark:text-gray-400 text-justify">Harness the power of data with Microsoft Power Platform. Build apps, automate workflows, and gain insights to drive smarter, faster business decisions.
                            </p>
                            <Link className="ml-6 underline text-black" href={"/ourservices#enterprise-solutions"} >Know More</Link>
                        </div>

                    </div>

                </div>
            </section>
            <Services />

            {/* Our Implementation */}
            <section className="py-11 mt-4 bg-[#0B0A0A] mb-15">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex items-center gap-1 lg:gap-32.5">
                        <div className="animate_left relative mx-auto md:block md:w-1/2">
                            <h4 className="relative mb-3 text-lg font-bold text-white dark:text-white lg:text-4xl">
                                Our <span className="textStartGradient">Imp</span><span className="textLastGradient">lementation</span> Strategy
                            </h4>
                        </div>
                        <div className="animate_right relative mx-auto md:block md:w-1/2">
                            <p className="relative mb-3 text-sm p-0 text-white dark:text-white sm:text-sm">
                                Our approach blends traditional waterfall, Microsoft's Sure Step, and agile methods to ensure
                                precise, timely, and flexible project delivery.
                            </p>
                        </div>
                    </div>

                    <div className="relative mx-auto bg-[#0B0A0A] mt-5 max-w-[1207px] px-4 md:px-5 xl:mt-5 xl:px-0">
                        <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                            <div className="w-full max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                <img className="p-8 rounded-t-lg mb-4" src="/images/imple1.png" alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold text-white dark:text-white">Classic Implementation</h5>
                                    <div className="flex justify-between">
                                        A structured, step-by-step approach using the traditional waterfall model, ensuring thorough,
                                        sequential project completion.
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="p-8 rounded-t-lg" src="/images/imple2.png" alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold text-white dark:text-white">Standard Methodology</h5>
                                    <div className="flex justify-between">
                                        Microsoft's Sure Step Methodology guarantees precise scoping and timelines, offering clarity at
                                        every stage of implementation.
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm">
                                <img className="p-8 rounded-t-lg mb-7" src="/images/imple3.png" alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold text-white dark:text-white">Modern Methodology</h5>
                                    <div className="flex justify-between">
                                        Agile/Rapid Implementation enables faster go-live with iterative development, enhancing
                                        flexibility and quicker business outcomes.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* User Stories */}
            <UserStories pageRoot={"home"} />
            <RenderMap renderFrom='home' />

            {/* Homescreen career */}
            <section className="commonBackground p-12">
                <div className="flex flex-wrap xl:px-12 xl:mx-24">
                    <div className="xl:w-1/2">
                        <img className="w-80 h-80" src={"/images/career/career.png"} alt={""} />

                    </div>
                    <div className="xl:w-1/2 xl:my-12">
                        <section>
                            <header>Life at Sharpsys</header>
                            <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                Grow your<span className="textLastGradient"> career with us</span>
                            </h4>
                            <p className="font-normal text-sm text-slate-700 text-justify mb-12">
                                Join Sharpsys and thrive in a dynamic, collaborative environment where innovation and growth are at the forefront. Build your career with us, embrace new challenges, and be part of a team that values creativity, dedication, and success.
                            </p>
                            <Link href={"/careers/#careers-open"}>
                                <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                    Career at Sharpsys
                                </button></Link>
                        </section>
                    </div>
                </div>
            </section>

            {/* Blog */}
            {<Blog props={posts} />}
        </>
    );
};
