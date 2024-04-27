import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className="">
            <div className="container mx-auto pt-14 flex flex-col items-center text-center gap-6 mb-5">
                <h1 className="mt-8 font-bold text-4xl">What Our Customers Say About Us?</h1>
                <p className="font-inter font-normal text-lg max-w-5xl ">Discover why our customers love us! Dive into the testimonials and experiences shared by our satisfied clients. Get inspired by real-life experiences and join the community of happy customers who trust us for their needs.</p>
            </div>

            <div id="parent" className="swiper-container mb-10">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView='3'
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    className="mySwiper"
                >
                    <div className="">
                        {reviews.map(review => <SwiperSlide key={review.id} review={review}>
                            <div className="mt-8 space-y-3">
                                <div className="flex flex-col items-end">
                                    <h1 className="font-bold md:text-lg">{review.name}</h1>
                                    <p className="font-normal md:font-semibold">Visited: {review.visited_location}</p>
                                </div>

                                <p className="text-xs md:text-base"><i>"{review.testimonial}"</i></p>
                                <p className=" text-xs md:text-base" ><b>Ratings:  {review.rating}/5</b></p>

                            </div>
                        </SwiperSlide>)}
                    </div>

                </Swiper>

            </div>
        </div >
    );
};

export default CustomerReview;