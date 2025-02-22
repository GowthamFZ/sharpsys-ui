import React from 'react'

export default function enterpriseSolution() {
  return (
    <>
      <header><h3 className='text-metatitle3 px-4 py-2 h-10 text-white dark:text-white font-bold'>Enterprise Solution</h3></header>
      <div className='grid grid-cols-3 gap-2'>
        <div className="col-span-2">
          <div className="w-full p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/D365 F&O.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Microsoft Dynamics 365 Finance &amp; Operations
                <p className="menuSubContent">Comprehensive ERP solution for supply chain, finance, operations, and production</p>
              </div>

            </a>
          </div>
          <div className="w-full p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/D365 BC.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Microsoft Dynamics 365 Business Central
                <p className="menuSubContent">All-in-one business management solution designed to unify your financials, operations, sales, and customer service
                </p>
              </div>

            </a>
          </div>
          <div className="w-full p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/D365 PP.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Microsoft Power Platform
                <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
};
