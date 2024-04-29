import Banner from "./Banner";
import Countries from "./Countries";
import CustomerReview from "./CustomerReview";
import Destinations from "./Destinations";
import Discount from "./Discount";
import './slide.css';

const HomePage = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Destinations></Destinations>
            <Countries></Countries>
            <Discount></Discount>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default HomePage;