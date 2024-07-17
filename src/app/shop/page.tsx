import Link from "next/link";
import ProdSlideCard from "@/app/components/ProdSlideCard";
import cap1 from "../../../public/Images/cap1.png";
import cap2 from "../../../public/Images/cap2.png";
import cap3 from "../../../public/Images/cap3.png";
import cap4 from "../../../public/Images/cap4.png";
import re1 from "../../../public/Images/re1.png";
import re2 from "../../../public/Images/re2.png";
import re3 from "../../../public/Images/re3.png";
import re4 from "../../../public/Images/re4.png";
import re5 from "../../../public/Images/re5.png";
import re6 from "../../../public/Images/re6.png";
import re7 from "../../../public/Images/re7.png";
import re8 from "../../../public/Images/re8.png";

const data = [
    {
        image: cap1
    },
    {
        image: cap2
    },
    {
        image: cap3
    },
    {
        image: cap4
    },
];

const data1 = [
    {
        image: re1
    },
    {
        image: re2
    },
    {
        image: re3
    },
    {
        image: re4
    },
    {
        image: re5
    },
    {
        image: re6
    },
    {
        image: re7
    },
    {
        image: re8
    },
]

const Shop = () => {
    return (
        <div>
            <h1 className={`text-[24px] text-white font-medium text-center mt-[20px]`}>그린 샵</h1>
            <div>
                <div className={`flex justify-between items-center pl-[20px] pr-[20px]`}>
                    <h1 className={`text-start mt-[25px] text-3xl text-white font-semibold`}>최근 본 상품</h1>
                </div>
                <div className={`flex justify-center items-center mt-[25px]`}>
                    <ProdSlideCard data={data}/>
                </div>
                <div className={`flex justify-between items-center pl-[20px] pr-[20px] mt-[25px]`}>
                    <h1 className={`text-start mt-[25px] text-3xl text-white font-semibold`}>인기 친환경 제품</h1>
                    <Link href={'seeMore/1'}>
                        <h2 className={`text-end mt-[20px] text-md text-white font-medium self-center`}>더보기</h2>
                    </Link>
                </div>
                <div className={`flex justify-center items-center mt-[25px]`}>
                    <ProdSlideCard data={data}/>
                </div>
                <div className={`flex justify-between items-center pl-[20px] pr-[20px] mt-[25px]`}>
                    <h1 className={`text-start mt-[25px] text-3xl text-white font-semibold`}>다회용품</h1>
                    <Link href={'seeMore/1'}>
                        <h2 className={`text-end mt-[20px] text-md text-white font-medium self-center`}>더보기</h2>
                    </Link>
                </div>
                <div className={`flex justify-center items-center mt-[25px] mb-[110px]`}>
                    <ProdSlideCard data={data1}/>
                </div>
            </div>
        </div>
    )
}

export default Shop;
