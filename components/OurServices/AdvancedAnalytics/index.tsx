"use client";
import React, { useState } from "react";

const ServicesAnalytics = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [activeSection, setActiveSection] = useState(null);

  // Toggle the active section
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const anchorDivClick = (elemnent) => {
    setActiveMenu(elemnent);
  }

  return (
    <>
      {/* Advanced Analytics */}
      <section id="advanced-analytics">
        <div className="py-2 px-6 bg-[url('/images/ourservices/services_bg1.jpg')] bg-cover bg-center">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-4">
                <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                  <p className="text-white text-xl">Advanced Analytics</p>
                  <h2 className="relative text-white mb-3 text-3xl font-bold text-blacktext dark:text-white xl:text-hero">
                    Revamp Your Operations with Advanced Analytics Solutions
                  </h2>
                  <p className="mb-6 text-white">
                    Optimize data management, analysis, and insights with our comprehensive analytics services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 bg-[#1A0C2F] px-6 pt-3 md:pb-5 md:pt-2 lg:pb-8 lg:pt-8">

        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-white md:w-4/5 xl:w-10/12 xl:text-sectiontitle3">
            Transform your <span className="textStartGradient"> Data into </span><span className="textLastGradient">Actionable Insights</span>
          </h2>
          <p className="text-white mb-4">
            Leverage our expertise in data migration, data analytics, ETL migration, data warehousing,
            machine learning, and consulting to unlock the full potential of your data. Gain valuable.
          </p>
        </div>
      </section>

      <div className="pb-4">
        <section className="xl:px-8 px-1">

          <div className="mx-auto max-w-c-1390 md:px-8 2xl:px-0">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div id="sectionElement1" className="w-11/12 pl-8 space-y-4 m-auto">
                {activeMenu === 1 ?
                  <>
                    <div className="animate_top text-center">
                      <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext dark:text-blacktext md:w-full xl:w-1/2 xl:text-sectiontitle2">
                        <span className="textStartGradient">Consulting</span>
                      </h2>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'consulting1' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'}`}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center font-normal text-blacktext ${activeSection === 'consulting1' ? 'text-blacktext' : 'text-gray-800'}`} onClick={() => toggleSection('consulting1')}>
                        Data Analytics Consulting: Harness Your Data’s Full Potential
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'consulting2' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('consulting2')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center text-blacktext  ${activeSection === 'consulting2' ? 'text-blacktext' : 'text-gray-800'}`}>
                        Tailored Solutions for Every Sector
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'consulting3' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('consulting3')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center text-blacktext ${activeSection === 'consulting3' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Personalize Your Data Strategy
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'consulting4' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('consulting4')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center text-blacktext  ${activeSection === 'consulting4' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Move from Reactive to Proactive Decision Making
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'consulting5' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('consulting5')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext  ${activeSection === 'consulting5' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Comprehensive Data Analytics Consulting
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'consulting6' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('consulting6')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext  ${activeSection === 'consulting6' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Best Practices for Reliable Results
                      </h3>
                    </div>
                  </> : ''}
                {activeMenu === 2 ?
                  <>
                    <div className="animate_top mx-auto text-center">
                      <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext dark:text-blacktext xl:text-sectiontitle2">
                        <span className="textStartGradient">Data Analytics</span>
                      </h2>
                    </div>

                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics1' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics1' ? ' text-blacktext' : 'text-gray-800'}`} onClick={() => toggleSection('analytics1')}>
                        Powerful Insights for Strategic Decisions
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics2' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics2')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics2' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Descriptive Analytics: Understanding Past Performance
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics3' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics3')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics3' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Predictive Analytics: Forecast Future Trends and Behaviors
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics4' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics4')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics4' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Prescriptive Analytics: Actionable Recommendations for Success
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics5' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics5')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics5' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Real-Time Analytics: React Instantly to Changing Conditions
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics6' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics6')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics6' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Business Intelligence (BI): Custom Dashboards for Performance Tracking
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics7' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics7')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics7' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Data Warehousing: Scalable Storage for Easy Access
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics8' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics8')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics8' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Big Data Solutions: Harness the Power of Large Datasets
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'analytics9' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('analytics9')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'analytics9' ? ' text-blacktext' : 'text-gray-800'}`}>
                        ETL Integration: Seamless Data Preparation for Analytics
                      </h3>
                    </div>
                  </> : ''}
                {activeMenu === 3 ?
                  <>
                    <div className="animate_top mx-auto text-center">
                      <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext dark:text-blacktext xl:text-sectiontitle2">
                        <span className="textStartGradient">ETL Migration</span>
                      </h2>
                    </div>

                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'etl1' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'etl1' ? ' text-blacktext' : 'text-gray-800'}`} onClick={() => toggleSection('etl1')}>
                        Seamless Data Transfers to Modern Platforms with ETL Migration
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'etl2' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('etl2')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'etl2' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Tailored ETL Migration Strategies
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'etl3' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('etl3')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'etl3' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Secure and Reliable Data Transfer
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'etl4' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('etl4')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'etl4' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Clean, Standardize, and Optimize
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'etl5' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('etl5')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'etl5' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Optimized for Performance and Scalability
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'etl6' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('etl6')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'etl6' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Ensuring Data Accuracy Post-Migration
                      </h3>
                    </div>
                  </> : ''}
                {activeMenu === 4 ?
                  <>
                    <div className="animate_top mx-auto text-center">
                      <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext dark:text-blacktext xl:text-sectiontitle2">
                        <span className="textStartGradient">Data Migration</span>
                      </h2>
                    </div>

                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm1' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm1' ? ' text-blacktext' : 'text-gray-800'}`} onClick={() => toggleSection('dm1')}>
                        Effortless Database Migration with ETL Expertise
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm2' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm2')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm2' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Seamless Enterprise Platform Migration: CRM, ERP, CMS & More
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm3' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm3')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm3' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Personalize Your Data Strategy
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm4' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm4')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm4' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Strategic Cloud Migration Across Leading Platforms
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm5' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm5')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm5' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Expert Application Migration to Cloud-Based Solutions
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm6' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm6')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm6' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Fast, Scalable, and Disruption-Free Storage Migration
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm7' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm7')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm7' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Streamline Complex Data Workflows With ETL Migration
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dm8' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dm8')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dm8' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Efficient and Scalable On-Premises to Cloud Migration
                      </h3>
                    </div>
                  </> : ''}
                {activeMenu === 5 ?
                  <>
                    <div className="animate_top mx-auto text-center">
                      <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext dark:text-blacktext xl:text-sectiontitle2">
                        <span className="textStartGradient">Data Warehosuing</span>
                      </h2>
                    </div>

                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw1' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'}}`}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw1' ? ' text-blacktext' : 'text-gray-800'}`} onClick={() => toggleSection('dw1')}>
                        Centralised Data for Smarter Decisions
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw2' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw2')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw2' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Data Warehouse Design and Development Tailored for Performance
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw3' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw3')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw3' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Data Integration: Unified View of Business Operations
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw4' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw4')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw4' ? ' text-blacktext' : 'text-gray-800'}`}>
                        ETL Services: Accurate Data Extraction and Loading
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw5' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw5')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw5' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Data Modelling and Optimization: Enhanced Query Performance
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw6' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw6')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw6' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Cloud Data Warehousing: Scalable and Cost-Efficient Solutions
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw7' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw7')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw7' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Data Governance and Security: Protecting Your Data
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'dw8' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('dw8')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'dw8' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Data Warehouse Migration: Seamless Transition with Minimal Disruption
                      </h3>
                    </div>
                  </> : ''}
                {activeMenu === 6 ?
                  <>
                    <div className="animate_top mx-auto text-center">
                      <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-blacktext dark:text-blacktext xl:text-sectiontitle2">
                        <span className="textStartGradient">Machine Learning</span>
                      </h2>
                    </div>

                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml1' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml1' ? ' text-blacktext' : 'text-gray-800'}`} onClick={() => toggleSection('ml1')}>
                        Machine Learning Services: Transform Your Business with AI
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml2' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml2')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml2' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Predictive Modeling: Make Data-Driven Decisions
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml3' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml3')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml3' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Natural Language Processing (NLP): Extract Insights from Text
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml4' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml4')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml4' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Recommendation Engines: Personalized Customer Experiences
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml5' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml5')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml5' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Anomaly Detection: Spot Irregularities Early
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml6' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml6')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml6' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Automation of Business Processes: Streamline Operations
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml7' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml7')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml7' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Image and Video Analysis: Unlock Visual Data Insights
                      </h3>
                    </div>
                    <div className={`pl-6 border-l-4 border-[#ccbf5a] rounded-e-lg transition ease-in-out shadow-lg ${activeSection === 'ml8' ? 'shadow-lg bg-[#fff8db]' : 'border-l-4'} }`} onClick={() => toggleSection('ml8')}>
                      <h3 className={`text-sm cursor-pointer flex p-1 justify-between items-center  text-blacktext ${activeSection === 'ml8' ? ' text-blacktext' : 'text-gray-800'}`}>
                        Deep Learning Solutions: Solving Complex Challenges
                      </h3>
                    </div>
                  </> : ''}
              </div>
              <div className="w-4/5 pl-8 m-auto">
                {/* Circular Menu */}
                <div className="links">
                  <img src="/images/services/logo_img.png" className="cn-img" />
                  <ul className="links__list" style={{ "--item-total": 6 } as React.CSSProperties}>
                    <li className="links__item" style={{ "--item-count": 1 } as React.CSSProperties}>
                      <div className={`links__link ${activeMenu === 1 ? 'activeLink' : 'bg-gradient-to-tr from-lime-400 to-yellow-400'} `} onClick={() => anchorDivClick(1)}>
                        <img src="/images/services/AA/consultation.png" className="links__icon" />
                        <span className={`links__text ${activeMenu === 1 ? 'activeText' : ''}`}>Consulting</span>
                      </div>
                    </li>
                    <li className="links__item" style={{ "--item-count": 2 } as React.CSSProperties}>
                      <div className={`links__link ${activeMenu === 2 ? 'activeLink' : 'bg-gradient-to-br from-yellow-300 to-orange-500'}`} onClick={() => anchorDivClick(2)}>
                        <img src="/images/services/AA/dataanalytics.png" className="links__icon" />
                        <span className={`links__text ${activeMenu === 2 ? 'activeText' : ''}`}>Data Analytics</span></div>
                    </li>
                    <li className="links__item" style={{ "--item-count": 3 } as React.CSSProperties}>
                      <div className={`links__link ${activeMenu === 3 ? 'activeLink' : 'bg-gradient-to-br from-orange-400 to-fuchsia-800'}`} onClick={() => anchorDivClick(3)}>
                        <img src="/images/services/AA/etlmigration.png" className="links__icon" />
                        <span className={`links__text ${activeMenu === 3 ? 'activeText' : ''}`}>ETL Migration</span></div>
                    </li>
                    <li className="links__item" style={{ "--item-count": 4 } as React.CSSProperties}>
                      <div className={`links__link ${activeMenu === 4 ? 'activeLink' : 'bg-gradient-to-bl from-fuchsia-700 to-rose-500'}`} onClick={() => anchorDivClick(4)}>
                        <img src="/images/services/AA/datamigration.png" className="links__icon" />
                        <span className={`links__text ${activeMenu === 4 ? 'activeText' : ''}`}>Data Migration</span></div>
                    </li>
                    <li className="links__item" style={{ "--item-count": 5 } as React.CSSProperties}>
                      <div className={`links__link ${activeMenu === 5 ? 'activeLink' : 'bg-gradient-to-bl from-rose-500 to-cyan-300'}`} onClick={() => anchorDivClick(5)}>
                        <img src="/images/services/AA/datawarehousing.png" className="links__icon" />
                        <span className={`links__text ${activeMenu === 5 ? 'activeText' : ''}`}>Data Warehousing</span></div>
                    </li>
                    <li className="links__item" style={{ "--item-count": 6 } as React.CSSProperties}>
                      <div className={`links__link ${activeMenu === 6 ? 'activeLink' : 'bg-gradient-to-br from-lime-300 to-cyan-300'}`} onClick={() => anchorDivClick(6)}>
                        <img src="/images/services/AA/machinelearning.png" className="links__icon" />
                        <span className={`links__text ${activeMenu === 6 ? 'activeText' : ''}`}>Machine Learning</span></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Advanced Analytics Ends*/}

    </>
  );
};

export default ServicesAnalytics;
