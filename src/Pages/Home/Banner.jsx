import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const Banner = () => {
    return (
        <div id="banner" className="mt-20 md:mt-12 mb-10 bg-green-600 ">
            <Swiper
            // navigation={true}
            pagination={true}
            modules={[Pagination,  Autoplay]}
            loop={true}
            autoplay={
                {delay:2500}
            }
            >
                
                

                <SwiperSlide>
                    <div className='slide slide1'>
                        <h1>Slide 1</h1>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='slide slide2'>
                        <h1>slide 2</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slide slide3'>
                        <h2>slide 3</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slide slide4'>
                        <h3>slide 4</h3>
                    </div>
                </SwiperSlide>
            </Swiper>











        </div>




    );
};

export default Banner;