import React from 'react';

export default function advancedAnalytics() {
  return (
    <>
      <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-white dark:text-white font-bold'>Data Related</h4></header>
      <div className='flex flex-row'>
        <div className=" p-2">
          <div className="p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/AA consulting.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Consulting
                <p className="menuSubContent !w-72">Expert advice to harness the full potential of your data</p>
              </div>

            </a>
          </div>
          <div className="w-9/12 p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/AA Analytics.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Data Analytics
                <p className="menuSubContent !w-72">Meaningful insights for data-driven decision making</p>
              </div>

            </a>
          </div>
          <div className="w-9/12 p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/AA etlmigration.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                ETL Migration
                <p className="menuSubContent !w-72">Move, transform, and load data with minimal disruption</p>
              </div>

            </a>
          </div>
        </div>
        <div className="p-2">
          <div className="w-full p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/AA datamigration.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Data Migration
                <p className="menuSubContent !w-72">Risk-free migration strategies for your archiving and migration needs</p>
              </div>

            </a>
          </div>
          <div className="w-full p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/AA datawarehousing.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Data Warehousing
                <p className="menuSubContent !w-72">Data warehousing services to manage, store and access large volume of data</p>
              </div>

            </a>
          </div>
          <div className="w-full p-1">
            <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
              <img alt="title" width="36" height="36" src="/images/services/AA machinelearning.png" className="mx-4" />
              <div className="mb-0.5 text-base text-white">
                Machine Learning
                <p className="menuSubContent !w-72">Improve performances with machine learning algorithms</p>
              </div>

            </a>
          </div>
        </div>
        <div className='vertical-center !top-48 bg-green w-4 h-4 !translate-y-3/4'></div>
      </div>
    </>

  )
};
