"use client";
import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { servicesDataMap } from "./serviceDataMap";
import { Item } from "@/types/services";


const Services = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(servicesDataMap)[0]);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    useEffect(() => {
        const firstItem = servicesDataMap[activeTab]?.[0];
        if (firstItem) {
            setSelectedItem(firstItem);
        }
    }, [activeTab]);

    return (
        <section className="commonBackground min-h-64">
            <div className="w-full bg-gray-50 flex flex-col items-center p-6">
                <h3 className="mx-auto mb-4 text-xl text-gray-400  text-center">
                    Our Services
                </h3>
                <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
                    We deliver <span className="textStartGradient">exceptionally</span> <span className="textLastGradient"> in the below</span> services too
                </h4>
                <div className="w-full mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    {/* Navbar */}
                    <nav className="flex flex-wrap rounded mb-14 justify-center">
                        {Object.keys(servicesDataMap).map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 rounded ${activeTab === tab ? "bg-[#3a7f26] text-white transition rounded" : "bg-[#f4f9f3]"}`}
                                onClick={() => setActiveTab(tab)} > {tab}
                            </button>
                        ))}
                    </nav>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 border-t-2">
                            {servicesDataMap[activeTab].map((item) => (
                                <div
                                    key={item.id}
                                    className={`p-2 border-b cursor-pointer hover:bg-gray-200 text-left`}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <h4 className="text-xs">{item.order}</h4>
                                    <h2 className={`${selectedItem?.id === item.id ? "text-lg font-bold text-black" : ""}`}>{item.name}</h2>
                                    {item.description && selectedItem?.id === item.id && <p className="text-sm">{item.description}</p>}
                                </div>
                            ))}
                        </div>
                        <div className="border-2 rounded-2 rounded-2xl w-full md:w-96 h-96 md:h-96 border-l-red-500 border-t-yellow-500 border-r-teal-500 border-b-lime-500">
                            {selectedItem ? (
                                <img
                                    src={selectedItem.img}
                                    alt={selectedItem.name}
                                    className="w-full h-full rounded-xl bg-cover p-1"
                                />
                            ) : (
                                <p className="text-gray-500 text-center ">Select an item to view details</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
