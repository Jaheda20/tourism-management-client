import Banner from "./Banner";
import Countries from "./Countries";
import CustomerReview from "./CustomerReview";
import Destinations from "./Destinations";
import Discount from "./Discount";
// import Slider from "./Slider";
import './slide.css';

const HomePage = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            {/* <Slider></Slider> */}
            <Countries></Countries>
            <Destinations></Destinations>
            <Discount></Discount>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default HomePage;