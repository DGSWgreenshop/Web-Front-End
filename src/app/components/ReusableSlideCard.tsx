import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import ReusableCard from "@/app/components/ReusableCard";
import re1 from '../../../public/Images/re1.png'
import re2 from '../../../public/Images/re2.png'
import re3 from '../../../public/Images/re3.png'
import re4 from '../../../public/Images/re4.png'
import re5 from '../../../public/Images/re5.png'
import 'swiper/css/navigation'
import 'swiper/css';


const ReusableSlideCard = () => {
    return (
        <div className={`justify-center flex items-center`}>
            <Swiper slidesPerView={1} style={{ width: '190px' }} modules={[Navigation]} navigation={true}>
                <SwiperSlide>
                    <ReusableCard image={re1} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReusableCard image={re2} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReusableCard image={re3} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReusableCard image={re4} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReusableCard image={re5} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ReusableSlideCard;
