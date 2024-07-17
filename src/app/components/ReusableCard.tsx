import Image from "next/image";
import {FC} from "react";

interface ReusableCardProps {
    image: any
}

const ReusableCard: FC<ReusableCardProps> = ({ image }) => {
    return (
        <div className={`w-[190px] h-[200px]`}>
            <Image src={image} alt={'reusable-img'} className={`w-full h-full rounded-xl`} />
        </div>
    )
}

export default ReusableCard;
