import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const Banner = () => {
    return (
        <div id="banner" className="mt-20 md:mt-12 mb-10 ">
            <Swiper
            pagination={true}
            modules={[Pagination,  Autoplay]}
            loop={true}
            autoplay={
                {delay:2500}
            }
            >          

                <SwiperSlide className="slide">
                    <div className='slide slide1 flex flex-col gap-4 item-center justify-center'>
                        <h1 className="p-2 text-3xl md:text-6xl bg-gray-300 opacity-80 text-blue-900 text-center font-bold ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                        
                        <Link to="/allspots" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                            <span className="relative text-black">All Destinations</span>
                        </Link>
                        
                    </div>
                </SwiperSlide>


                <SwiperSlide className="slide">
                    <div className='slide slide2 flex flex-col gap-4'>
                    <h1 className="p-2 text-3xl md:text-6xl bg-gray-300 opacity-80 text-blue-900 text-center font-bold ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                        
                        <Link to="/allspots" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                            <span className="relative text-black">All Destinations</span>
                        </Link>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide3 flex flex-col gap-4'>
                    <h1 className="p-2 text-3xl md:text-6xl bg-gray-300 opacity-80 text-blue-900 text-center font-bold ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                        
                        <Link to="/allspots" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                            <span className="relative text-black">All Destinations</span>
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide4 flex flex-col gap-4'>
                    <h1 className="p-2 text-3xl md:text-6xl bg-gray-300 opacity-80 text-blue-900 text-center font-bold ">Beyond Borders: 
                        <br></br>Discover Unique Destinations with ExploreXpert</h1>
                        
                        <Link to="/allspots" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                            <span className="relative text-black">All Destinations</span>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>











        </div>




    );
};

export default Banner;