import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {

    const singleSpot = useLoaderData();
    const { _id, photo, spotName, country, location, season, duration, visitors, cost, description, userName, email } = singleSpot;

    return (
        <div className="mt-20 mb-10 container mx-auto">
            <Helmet>
                <title>Spot Details : {_id}</title>
            </Helmet>
            <div className="flex flex-col items-center">
                <h2 className="text-6xl font-bold text-blue-900">{spotName}</h2>
                <div className="flex gap-2 text-2xl mt-5 mb-10 font-bold">
                    <p>{country},</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={photo} alt="" className="w-3/4 rounded-2xl shadow-xl" />
            </div>
            <div className="mt-10 mx-10 md:mx-40 flex flex-col md:flex-row justify-around">
                <div>
                <p className="text-lg md:w-1/2"><b>Description: </b>
                    <br />
                    <span className="mt-2">{description}</span>
                </p>
                <div className="mt-8 space-y-2">
                    <p><b>Tour time:</b> {season} season</p>
                    <p><b>Duration of Stay:</b> {duration}</p>
                    <p><b>Total Visitors per year:</b> {visitors}</p>
                    <p><b>Avg. cost :</b> {cost}</p>
                </div>
                </div>
           
                <div className="flex flex-col mt-5 md:w-1/2 border shadow-xl h-32 p-4">
                    <p><b>For more details contact-</b></p>
                    <p className="mt-2">{userName}</p>
                    <p>Email: {email} </p>
                </div>
                

            </div>

        </div>
    );
};

export default SpotDetails;