import { Link } from "react-router-dom";
import discountAnimation from "../../assets/discount.json"
import Lottie from "lottie-react";

const Discount = () => {
    return (
        <div className="container mx-auto mt-20 flex flex-col md:flex-row items-center gap-8 border rounded-xl px-8">
            <div className="w-1/4">
            <Lottie animationData={discountAnimation} loop={true} />
            </div>
            <div className="flex flex-col">
                <h1 className="text-blue-900 text-3xl font-bold mb-5">Get Instant Discounts</h1>
                <p>Simply sign into your Explorexpert.com account and look for the <i><b>Star</b></i> logo to save</p>
                <div className="mt-10">
                <Link to="/signin" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                <span className="relative text-black">Signin</span>
                            </Link>
                            <Link to="/signup" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                <span className="relative text-black">Signup</span>
                            </Link>
                </div>
            </div>
    
        </div>
    );
};

export default Discount;