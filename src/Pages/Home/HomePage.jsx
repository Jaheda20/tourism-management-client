import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import Destinations from "./Destinations";
import './slide.css';

const HomePage = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Destinations></Destinations>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default HomePage;