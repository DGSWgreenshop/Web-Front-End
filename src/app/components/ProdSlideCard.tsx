'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ProductionCard from "@/app/components/ProductionCard";
import cap1 from '../../../public/Images/cap1.png';
import cap2 from '../../../public/Images/cap2.png';
import cap3 from '../../../public/Images/cap3.png';
import cap4 from '../../../public/Images/cap4.png';
import {FC} from "react";

interface ProdSlideCard {
    data: any;
}

const ProdSlideCard: FC<ProdSlideCard> = ({ data }) => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                style={{ width: '440px' }} // Swiper의 너비를 이미지와 동일하게 설정
                loop={true}
            >
                {data.map((item: any, idx: number) => {
                    return (
                        <SwiperSlide key={idx}>
                            <ProductionCard image={item.image} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default ProdSlideCard;
