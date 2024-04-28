import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
    const singleSpot = useLoaderData();
    // const { _id } = useParams();
    // // const inInt = parseInt(id)
    // const spot = singleSpot.find(spot => spot._id===_id)
    

    return (
        <div>
            <h2>Details:{singleSpot.country}</h2>
        </div>
    );
};

export default SpotDetails;