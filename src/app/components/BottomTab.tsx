'use client'

import { useState } from 'react';
import CircleTab from "@/app/components/CircleTab";

const BottomTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={`mt-[30px] flex justify-center items-center`}>
            <div className={`w-[90vw] h-[65px] bg-gray-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100`}>
                <div className={`flex w-full h-full justify-center gap-[10px] items-center`}>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <CircleTab
                            key={index}
                            isActive={activeTab === index}
                            onClick={() => setActiveTab(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BottomTab;
