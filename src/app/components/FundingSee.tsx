import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const FundingSee = () => {
    return (
        <div className={`pl-[20px] pr-[20px]`}>
            <div className={`flex items-center mt-[20px]`}>
                <Link href={'home'}>
                    <IoIosArrowBack className={`text-white text-start`} size={32}/>
                </Link>
                <div className={`flex w-full justify-center items-center mr-[30px]`}>
                    <h1 className={`text-white font-medium text-[24px]`}>펀딩</h1>
                </div>
            </div>
            <div>T
            </div>
        </div>
    )
}

export default FundingSee;
