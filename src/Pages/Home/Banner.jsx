import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const Banner = () => {
    return (
        <div id="banner" className="mt-20 md:mt-12 mb-10 ">
            <Swiper
            // navigation={true}
            pagination={true}
            modules={[Pagination,  Autoplay]}
            loop={true}
            autoplay={
                {delay:2500}
            }
            >          

                <SwiperSlide className="slide">
                    <div className='slide slide1'>
                        <h1 className="p-2 text-6xl bg-gray-300 opacity-80 text-blue-900 text-center font-bold ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="slide">
                    <div className='slide slide2'>
                    <h1 className="p-2 text-6xl font-bold bg-gray-300 opacity-80 text-blue-900 text-center ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide3'>
                    <h1 className="p-2 text-6xl font-bold bg-gray-300 opacity-80 text-blue-900 text-center ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide4'>
                    <h1 className="p-2 text-6xl font-bold bg-gray-300 opacity-80 text-blue-900 text-center ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                    </div>
                </SwiperSlide>
            </Swiper>











        </div>




    );
};

export default Banner;