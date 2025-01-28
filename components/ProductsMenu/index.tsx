import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";


import serviceMenuData from "./productMenuData";
import Enterprisesolution from '../EnterpriseSolution';
import CRMSolution from '../CRMSolution';
import AdvancedAnalytics from '../AdvancedAnalytics';
import BusinessIntelligence from '../BusinessIntelligence';
import StaffAugmentation from '../StaffAugmentation';
import productsMenuData from './productMenuData';


// export default function ServicesMenu() {
const ProductsMenu = () => {

  return (
    <>
      <header><h3 className='text-metatitle2 pl-2 text-black dark:text-white font-bold'>Our Products</h3></header>
      <main className='flex-1 bg-white rounded-lg'>
        <div className='grid grid-cols-4 gap-2 bg-white rounded-lg'>
          <div className="col-span-2 p-1">
            <div className="w-full p-2 rounded-lg hover:bg-headerbg group/menu">
              <a href="/ourproducts#drag-drop" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/drag-and-drop.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black mt-3 group-hover/menu:text-white">
                  Drag and Drop
                  <p className="menuSubContent !w-72">We deliver tailored, tech-driven solutions</p>
                </div>
              </a>
            </div>
            <div className="w-full p-2 rounded-lg hover:bg-headerbg group/menu">
              <a href="/ourproducts#e-invoice" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/e-invoice.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black mt-3 group-hover/menu:text-white">
                  E-Invoice Integration
                  <p className="menuSubContent !w-72">We deliver tailored, tech-driven solutions</p>
                </div>

              </a>
            </div>

          </div>
          <div className="col-span-2">
            <div className="w-full p-2 rounded-lg hover:bg-headerbg group/menu">
              <a href="/ourproducts#e-invoice" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/quotation.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black mt-3 group-hover/menu:text-white">
                  Quote Engine
                  <p className="menuSubContent !w-72">We deliver tailored, tech-driven solutions</p>
                </div>

              </a>
            </div>

          </div>

        </div>
        <div className='w-auto border-b border-grey-600 ml-4 mr-4'></div>
        <section className='w-11/12 p-2 mt-2 relative'>
          <span className='pl-2 w-full flex'>
            <h3 className="ml-2 mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
              Need Different Solution?
            </h3>
            <Link href='/contactus#requestdemo'>
              <button
                aria-label="talk to sales button"
                className="absolute border-l-red-500 border-t-yellow-500 border-r-teal-500 border-b-lime-500 right-0 rounded-full bg-transparent px-3.5 py-1 text-black text-xs border-2 border-black duration-300 ease-in-out hover:bg-headerbg hover:text-white"
              >
                Talk to Sales
              </button>
            </Link>
          </span>
          <p className='ml-4 menuSubContent text-black'>Please contact our sales team.</p>
        </section>

      </main>
    </>
  )
}
export default ProductsMenu;
