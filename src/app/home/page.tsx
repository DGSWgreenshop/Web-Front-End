import {FC} from "react";
import SlideCard from "@/app/components/SlideCard";
import BottomTab from "@/app/components/BottomTab";
import ProductionCard from "@/app/components/ProductionCard";

const Home = () => {
    return (
        <div>
            <div className={`flex flex-col pl-[40px] pr-[40px]`}>
                <h1 className={`text-start mt-[40px] text-3xl text-white font-semibold`}>추천 상품</h1>
            </div>
            <SlideCard/>
            <div className={`flex flex-col pl-[40px] pr-[40px]`}>
                <h1 className={`text-start mt-[20px] text-3xl text-white font-semibold`}>인기 상품</h1>
                <ProductionCard />
            </div>
            <BottomTab/>
        </div>
    )
}

export default Home;
