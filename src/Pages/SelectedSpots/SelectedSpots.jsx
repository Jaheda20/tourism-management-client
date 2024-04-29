import { Zoom } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";


const SelectedSpots = () => {
    const spots = useLoaderData([]);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold dark:text-blue-400  text-blue-900 mb-5">Tourist Spots </h2>
            <div className="">
                {
                    spots.map(spot => <div key={spot._id}>
                        <Zoom>
                        <div className="my-5 border rounded-lg border-orange-500 flex items-center mx-4 flex-col md:flex-row">
                            <img src={spot.photo} alt="" className="md:w-2/5 p-4 rounded-lg" />
                            <div className="ml-8 flex flex-col md:w-3/4 space-y-2 my-4">
                            <h1 className="text-3xl">{spot.spotName}</h1>
                            <div className="flex gap-1">
                                <p>{spot.location},</p>
                                <p>{spot.country}</p>
                            </div>
                            <div>
                            <p><b>Tour Time:</b> {spot.season} Season</p>
                            <p><b>Average Cost:</b> {spot.cost} $</p>
                            </div>
                            <p className="w-4/5">{spot.description}</p>
                            <Link to={`/spotDetails/${spot._id}`}>
                                            <button className="mr-2 relative inline-flex items-center justify-center p-2 px-3 w-56 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                                <span className="relative text-black">View Details</span></button>
                                        </Link>
                            </div>
                            
                            
                            
                        </div>
                        </Zoom>


                    </div>)
                }
            </div>
        </div>
    );
};

export default SelectedSpots;