'use client'

import FundingSee from "@/app/components/FundingSee";
import ProdSee from "@/app/components/ProdSee";
import {useParams} from "next/navigation";
import ReusableSee from "@/app/components/ReusableSee";

const SeeMore = () => {
    const params = useParams(); // URL에서 매개변수 가져오기
    const id = params?.id; // id 값 추출
    console.log(id)

    if (id === '1') {
        return (
            <div>
                <ProdSee />
            </div>
        )
    } else if (id === '2') {
        return (
            <div>
                <FundingSee/>
            </div>
        )
    } else if (id === '3') {
       return (
           <div>
               <ReusableSee/>
           </div>
       )
    }

}

export default SeeMore;
