import { useEffect, useRef } from "react";
import slide1 from "../../../public/images/slide1.jpg"
import slide2 from "../../../public/images/slide2.jpg"
import slide3 from "../../../public/images/slide3.jpg"
import slide4 from "../../../public/images/slide4.jpg"

const Slider = () => {

    // const intervalRef = useRef(null);

    // useEffect(() => {
    //     // Function to handle automatic slide transition
    //     const handleAutomaticTransition = () => {
    //         const carouselItems = document.querySelectorAll(".carousel-item");
    //         let currentIndex = 0;

    //         // Function to show the next slide
    //         const showNextSlide = () => {
    //             carouselItems[currentIndex].style.display = "none";
    //             currentIndex = (currentIndex + 1) % carouselItems.length;
    //             carouselItems[currentIndex].style.display = "block";
    //         };

            
    //         intervalRef.current = setInterval(showNextSlide, 3000); // 
    //     };

        
    //     handleAutomaticTransition();
    //     return () => clearInterval(intervalRef.current);
    // }, []); 



    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="item1" className="carousel-item w-full">
                    <img src={slide1} className="w-full bg-cover bg-center" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slide2}className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slide3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slide4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;