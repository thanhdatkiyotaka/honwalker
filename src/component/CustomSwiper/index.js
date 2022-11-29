import { Navigation, Pagination, A11y, EffectCards } from 'swiper';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.css';


function CustomSwiper({children, slidesPerView, breakpoints}) {
    return (  
        <Swiper
            modules={[Navigation, Pagination, A11y, EffectCards]}
            spaceBetween={20}
            breakpoints={breakpoints}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log()}
            onSlideChange={()=>console.log()}
        
        >
            {children}
        </Swiper>
    );
}

export default CustomSwiper;