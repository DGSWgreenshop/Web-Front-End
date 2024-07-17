import {FC} from "react";
import SlideCard from "@/app/components/SlideCard";

const Home = () => {
    return (
        <div>
            <div className={`flex flex-col pl-[40px] pr-[40px]`}>
                <h1 className={`text-start mt-[40px] text-3xl text-white font-semibold`}>추천 상품</h1>
            </div>
            <SlideCard />
        </div>
    )
}

export default Home;
