import React from 'react'

export default function crmSolution() {
    return (
        <>
            <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-white font-bold'>CRM</h4></header>
            <div className='grid grid-cols-3 gap-2'>
                <div className="col-span-2 border-r border-grey-600 mb-8">
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
                    <div className='absolute mt-27'>
                        <p className='text-sm text-white'>Learn more about features</p>
                        <ul className='list-disc ml-6'>
                            <li className='text-xs text-secondaryTextColor'>Feature  1</li>
                            <li className='text-xs text-secondaryTextColor'>Feature  2</li>
                            <li className='text-xs text-secondaryTextColor'>Feature  3</li>
                        </ul>
                    </div>
                </div>



                <div className='vertical-center !top-33 bg-green w-4 h-4 !translate-y-3/4'></div>

            </div>
        </>

    )
};
