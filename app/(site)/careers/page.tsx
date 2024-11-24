"use client";
// import { Metadata } from "next";
import { useState } from 'react';
import CareerData from "./careerMapData"
import CareerElements from "./CareerInfoData"


// export const metadata: Metadata = {
//     title: "Sharpsys",
//     description: "Sharpsys - Elevate your Business Productivity"
// };


export default function CareersPage() {

    const [activeSection, setActiveSection] = useState(null);



    // Toggle the active section
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const getSectionClassName = (section) => {
        return activeSection === section
            ? 'font-bold border-l-4 border-black shadow-lg ml-2'
            : 'font-semibold text-gray-800';
    };

    return (
        <>
            <section className="pb-10 pt-24 md:pt-28 lg:pt-32">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                        Be a <span className='bg-gradient-to-r from-green-400 via-emarald-500 via-red-500 via-orange-500 via-yellow-500 to-green-500 text-transparent bg-clip-text'>part of our proficient team</span>
                    </h2>
                </div>
                <div className="container px-12 py-4">
                    <img
                        src="/images/about/team.jpg"
                        alt="Team working"
                        className="object-cover rounded-xl w-full h-full"
                    />
                </div>
            </section>


            <section className="bg-white py-1 mb-8">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-32.5">
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">50+</h3>
                            <p className="text-lg lg:text-para2">Employees</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">10+</h3>
                            <p className="text-lg lg:text-para2">Locations</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">15+</h3>
                            <p className="text-lg lg:text-para2">Finished Projects</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">100+</h3>
                            <p className="text-lg lg:text-para2">Client across world</p>
                        </div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">11+</h3>
                            <p className="text-lg lg:text-para2">Domain Expert</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-1 mb-8">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="max-w-c-1390 max-w-6xl bg-white rounded-lg shadow-lg p-4 flex">
                        <div className="w-1/2 pr-2">
                            <h2 className="text-3xl font-bold text-black mb-4">Why <span className="bg-gradient-to-r from-orange-400 via-lime-500 via-green-500 to-teal-500 text-transparent bg-clip-text">Join Us</span></h2>
                            <p className="text-gray-600 mb-6">
                                We are committed to delivering exceptional results. We value actions and our prime focus is on quality work. Join us and be part of a team that prioritizes results and makes an impact.
                            </p>
                            <button className="bg-[#fe2f53] text-white py-2 px-8 rounded-2xl mt-4">
                                View Open Roles
                            </button>
                        </div>

                        <div className="w-1/2 pl-8 space-y-4">
                            {CareerElements.map((element) => (
                                <div
                                    key={element.id}
                                    className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out ${activeSection === element.id ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'
                                        }`}
                                >
                                    <h3
                                        onClick={() => toggleSection(element.id)}
                                        className={`cursor-pointer flex pt-3 justify-between items-center ${activeSection === element.id
                                            ? 'font-bold text-black'
                                            : 'text-gray-800'
                                            }`}
                                    >
                                        {element.title}
                                    </h3>

                                    {activeSection === element.id && (
                                        <p className="my-2 py-3 text-gray-600">{element.description}</p>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[url('/images/about/perks.png')] bg-contain bg-no-repeat">
                <h2 className="text-center text-white text-2xl font-bold mb-8">Perks & Benefits at Sharpsys</h2>
                <div className="bg-white rounded-lg shadow-lg p-4 grid md:grid-cols-2 gap-6 w-3/5 justify-items-center">
                    <div className='p-4 border-b-2 border-dashed'>
                        <h3 className="font-semibold text-black text-lg mb-2">Professional & Personal Growth:</h3>
                        <p className="text-gray-600">Invest in your growth with training and education opportunities.</p>
                    </div>
                    <div className='p-4 border-b-2 border-dashed'>
                        <h3 className="font-semibold text-black text-lg mb-2">Rewards:</h3>
                        <p className="text-gray-600">Be recognized for your hard work with performance-based incentives.</p>
                    </div>
                    <div className='p-4 border-b-2 border-dashed'>
                        <h3 className="font-semibold text-black text-lg mb-2">Financial Security:</h3>
                        <p className="text-gray-600">Enjoy the peace of mind that comes with Provident Fund benefits.</p>
                    </div>
                    <div className='p-4 border-b-2 border-dashed'>
                        <h3 className="font-semibold text-black text-lg mb-2">Work-Life Balance:</h3>
                        <p className="text-gray-600">Participate in social events and team-building activities for a well-rounded experience.</p>
                    </div>
                    <div className='p-4'>
                        <h3 className="font-semibold text-black text-lg mb-2">Family-Friendly Benefits:</h3>
                        <p className="text-gray-600">Take advantage of paid maternity benefits to support your family.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white mt-24 mb-4">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-3">
                    <h3 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-black">Explore your <span className='bg-gradient-to-r from-orange-400 via-yellow-500 via-lime-500 via-green-500 to-teal-500 text-transparent bg-clip-text'>dream career opportunities</span></h3>
                </div>
            </section>
            {CareerData.map((c) => (
                <section className="bg-white mb-4">
                    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-3">
                        <h5 className="mb-1 text-xl font-bold tracking-tight text-black dark:text-black">{c.title}</h5>
                        <div className="relative overflow-x-auto">
                            <table className="min-w-full table-fixed text-sm border text-left rtl:text-right">
                                <thead className="text-xs">
                                    <tr>
                                        <th scope="col" className="px-6 py-1 whitespace-nowrap">
                                            {c.heading.positiontitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1 whitespace-nowrap">
                                            {c.heading.locationtitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1">
                                            {c.heading.noofopeningstitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1">
                                            {c.heading.jobtypetitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1 w-9"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white text-black dark:text-black">
                                        <td className="px-6 py-1 font-medium whitespace-nowrap w-96">
                                            {c.job.position}
                                        </td>
                                        <td className="px-6 py-1">
                                            {c.job.location}
                                        </td>
                                        <td className="px-6 py-1">
                                            {c.job.noofopenings}
                                        </td>
                                        <td className="px-6 py-1">
                                            {c.job.jobtype}
                                        </td>
                                        <td className="px-6 py-1 w-9">
                                            <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                                Apply
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            ))}
        </>
    );
}
