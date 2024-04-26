import Lottie from "lottie-react";
import errorAnimation from "../assets/404error.json"
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-96 pt-12">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            <Link to="/" className="pt-10 hover:underline hover:text-indigo-800 flex items-center"> <span className="mr-3"> <FaArrowCircleLeft /> </span>Back to Homepage</Link>

        </div>
    );
};

export default ErrorPage;