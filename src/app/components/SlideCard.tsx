'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import Eximg from '../../../public/Images/Group 392@4x.png'
import Eximg1 from '../../../public/Images/Group 394@1x.png'
import Eximg2 from '../../../public/Images/Group 396@1x.png'

const SlideCard = () => {
    return (
        <div className={`flex justify-center items-center`}>
            <Swiper
                slidesPerView={1}
                style={{ width: '320px' }} // Swiper의 너비를 이미지와 동일하게 설정
                loop={true}
            >
                <SwiperSlide>
                    <Image src={Eximg} alt={'slide-img'} width={320} height={170} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Eximg1} alt={'slide-img'} width={320} height={170} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Eximg2} alt={'slide-img'} width={320} height={170} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlideCard;
