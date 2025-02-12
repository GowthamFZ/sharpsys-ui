import React from 'react'

export default function enterpriseSolution() {
  return (
    <>
      <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-white dark:text-white font-bold'>Business Intelligence</h4></header>
      <div className='grid grid-cols-3 gap-1'>
        <div className="col-span-2 p-1">
          <div className="w-full p-2">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="52" height="52" src="/images/services/BI powerbi.png" className="mx-4 rounded-sm" />
              <div className="mb-0.5 text-base text-white">
                Power BI
                <p className="menuSubContent">Comprehensive Power Bi solutions and services for data management and reporting</p>
              </div>

            </a>
          </div>
          <div className="w-full p-2">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="52" height="52" src="/images/services/BI tableau.png" className="mx-4 rounded-sm" />
              <div className="mb-0.5 text-base text-white">
                Tableau
                <p className="menuSubContent">Intuitive cloud platform for actionable insights</p>
              </div>

            </a>
          </div>

        </div>
        <div className='vertical-center !top-65 bg-green w-4 h-4 !translate-y-3/4'></div>
      </div>
    </>

  )
};
