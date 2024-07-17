'use client'

import { useState } from 'react';
import CircleTab from "@/app/components/CircleTab";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDateRange, MdOutlineShoppingBag } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import Link from "next/link";

const data = [
    {
        icon: IoMdHome,
        path: '/home',
    },
    {
        icon: CgProfile,
        path: '/proflie',
    },
    {
        icon: MdOutlineDateRange,
        path: '/event',
    },
    {
        icon: MdOutlineShoppingBag,
        path: '/shop',
    },
    {
        icon: BiDonateHeart,
        path: '/seeMore/2',
    },
]

const BottomTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="fixed bottom-[4px] mt-[30px] flex justify-center items-center mb-[20px] z-50">
            <div className="w-[90vw] h-[65px] bg-[#D8D8D8] rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <div className="flex w-full h-full justify-center gap-[13px] items-center">
                    {data.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Link href={item.path} key={index}>
                                <CircleTab
                                    isActive={activeTab === index}
                                    onClick={() => setActiveTab(index)}
                                    icon={<IconComponent size={30} color={activeTab === index ? 'black' : 'white'} />}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BottomTab;
