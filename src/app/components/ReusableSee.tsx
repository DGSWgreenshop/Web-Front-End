import Link from "next/link";
import {IoIosArrowBack} from "react-icons/io";
import ReusableCard from "@/app/components/ReusableCard";
import Eximg from '../../../public/Images/re2.png'
import ReusableSlideCard from "@/app/components/ReusableSlideCard";

const ReusableSee = () => {
    return (
        <div>
            <div className={`flex items-center mt-[20px] pl-[20px] pr-[20px]`}>
                <Link href={'/shop'}>
                    <IoIosArrowBack className={`text-white text-start`} size={32}/>
                </Link>
                <div className={`flex w-full justify-center items-center mr-[30px]`}>
                    <h1 className={`text-white font-medium text-[22px]`}>다회용품 대여</h1>
                </div>
            </div>
            <div className={`justify-center flex items-center mt-[25px]`}>
                <ReusableSlideCard />
            </div>
        </div>
    )
}

export default ReusableSee;
