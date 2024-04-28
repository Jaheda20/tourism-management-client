import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import Destinations from "./Destinations";
import Discount from "./Discount";
import Slider from "./Slider";
import './slide.css';

const HomePage = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Slider></Slider>
            <Destinations></Destinations>
            <Discount></Discount>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default HomePage;