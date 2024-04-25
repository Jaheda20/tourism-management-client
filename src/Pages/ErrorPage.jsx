import Lottie from "lottie-react";
import errorAnimation from "../assets/404error.json"

const ErrorPage = () => {
    return (
        <div>
           <Lottie animationData={errorAnimation} loop={true} />;
        </div>
    );
};

export default ErrorPage;