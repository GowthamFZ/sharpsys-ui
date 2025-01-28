import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";


import serviceMenuData from "./serviceMenuData";
import Enterprisesolution from '../EnterpriseSolution';
import CRMSolution from '../CRMSolution';
import AdvancedAnalytics from '../AdvancedAnalytics';
import BusinessIntelligence from '../BusinessIntelligence';
import StaffAugmentation from '../StaffAugmentation';


// export default function ServicesMenu() {
const ServicesMenu = (props) => {
    const [isHovered, setIsHovered] = useState(0);
    const [active, setActive] = useState("");
    const isOpen = props.menuOpen;
    const handleMouseOver = (e) => {
        switch (e.target.getAttribute('data-key')) {
            case "0":
                setIsHovered(1)
                setActive("Enterprise Solution")
                break
            case "1":
                setIsHovered(2)
                setActive("CRM")
                break
            case "2":
                setIsHovered(3)
                setActive("Advanced Analytics")
                break
            case "3":
                setIsHovered(4)
                setActive("Business Intelligence")
                break
            case "4":
                setIsHovered(5)
                setActive("Staff Augumentation")
                break
        }
    }

    const handleMouseOut = (key) => {
        // setIsHovered(0); 
        // setActive("Enterprise Solution")
    }

    useEffect(() => {
        !isOpen ?
            setIsHovered(0) : ''
    })

    return (
        <>
            <header><h3 className='text-metatitle2 pl-2 text-black font-bold'>Our Services</h3></header>
            <div className='flex flex-col md:flex-row flex-1 gap-8'>
                {/* Nav Menu Start   */}
                <aside className='w-full md:w-60'>
                    <ul className='group'>
                        {serviceMenuData.map((menuItem, key) => (
                            <div key={key} className='relative group/menu'>
                                <Link href={`${menuItem.path}`}>

                                    <li key={key} data-key={key} className={`px-2.5 py-4 menu cursor-pointer flex gap-2 hover:bg-headerbg hover:text-white rounded-lg ${active === menuItem.title ? 'headerbg' : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                                        <img src={menuItem.image} width={32} height={32} />
                                        {menuItem.title}
                                        <div key={key} className={`vertical-center w-4 h-4 right-0 group-hover/menu:bg-headerbg `}></div>

                                    </li>

                                </Link>
                            </div>
                        ))}
                    </ul>

                </aside>
                <main className='flex-1 bg-headerbg rounded-lg'>
                    {(isHovered === 0 && <Enterprisesolution /> ||
                        isHovered === 1 && <Enterprisesolution /> ||
                        isHovered === 2 && <CRMSolution /> ||
                        isHovered === 3 && <AdvancedAnalytics /> ||
                        isHovered === 4 && <BusinessIntelligence /> ||
                        isHovered === 5 && <StaffAugmentation />
                    )}
                    <div className='w-auto border-b border-grey-600 ml-4 mr-4 mt-9'></div>
                    <section className='w-11/12 p-2 relative'>
                        <span className='pl-2 w-full flex'>
                            <h3 className="ml-2 mb-0.5 text-segmenttitle text-white dark:text-white font-semibold">
                                Need Different Solution?
                            </h3>
                            <Link href='/contactus#requestdemo'>
                                <button
                                    aria-label="talk to sales button"
                                    className="absolute border-l-red-500 border-t-yellow-500 border-r-teal-500 border-b-lime-500 right-0 rounded-full px-3.5 py-1 text-white text-xs border-2 border-black duration-300 ease-in-out hover:bg-white hover:text-headerbg"
                                >
                                    Talk to Sales
                                </button>
                            </Link>
                        </span>
                        <p className='ml-4 menuSubContent text-black'>Please contact our sales team.</p>
                    </section>

                </main>
            </div>
        </>
    )
}
export default ServicesMenu;
