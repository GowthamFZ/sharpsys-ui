import React from 'react'

export default function crmSolution() {
    return (
        <>
            <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-white font-bold'>CRM</h4></header>
            <div className='grid grid-cols-3 gap-2'>
                <div className="col-span-2 mb-8">
                    <div className="w-full p-1">
                        <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                            <img alt="title" width="36" height="36" src="/images/menu/menuIcons/CRM Engagement.png" className="mx-4" />
                            <div className="mb-0.5 text-base text-white">
                                Microsoft 365 Customer Engagement
                                <p className="menuSubContent">Cloud Solution to boost customer retention</p>
                            </div>

                        </a>
                    </div>
                    <div className="w-full p-1">
                        <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                            <img alt="title" width="36" height="36" src="/images/menu/menuIcons/CRM salesforce.png" className="mx-4" />
                            <div className="mb-0.5 text-base text-white">
                                Salesforce
                                <p className="menuSubContent">Centralized platform that integrates data from various departments for CRM
                                </p>
                            </div>

                        </a>
                    </div>
                </div>
                <div className='vertical-center !top-33 bg-green w-4 h-4 !translate-y-3/4'></div>

            </div>
        </>

    )
};
