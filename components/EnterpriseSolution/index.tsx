import React from 'react'

export default function enterpriseSolution() {
  return (
    <>
      <header><h3 className='text-metatitle3 px-4 py-2 h-10 text-white dark:text-white font-bold'>Enterprise Solution</h3></header>
      <div className='grid grid-cols-3 gap-2'>
        <div className="col-span-2 border-r border-grey-600">
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
        <div className='flex flex-col relative mt-0 w-full'>
          <div className='absolute w-4/5'>
            <video className="h-42 w-42 rounded-lg" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute mt-28'>
            <p className='text-sm text-white'>Learn more about features</p>
            <ul className='list-disc ml-6'>
              <li className='text-xs text-secondaryTextColor'>Feature  1</li>
              <li className='text-xs text-secondaryTextColor'>Feature  2</li>
              <li className='text-xs text-secondaryTextColor'>Feature  3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};
