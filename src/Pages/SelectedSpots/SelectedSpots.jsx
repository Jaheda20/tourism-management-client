import { useLoaderData } from "react-router-dom";


const SelectedSpots = () => {
    const spots = useLoaderData([]);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold dark:text-blue-400  text-blue-900 mb-5">Tourist Spots </h2>
            <div className="">
                {
                    spots.map(spot => <div key={spot._id}>
                        <div className="my-5 border rounded-lg border-orange-500 flex items-center">
                            <img src={spot.photo} alt="" className="w-2/5 p-4 rounded-lg" />
                            <div className="ml-8 flex flex-col w-3/4 space-y-2">
                            <h1 className="text-3xl">{spot.spotName}</h1>
                            <div className="flex gap-1">
                                <p>{spot.location},</p>
                                <p>{spot.country}</p>
                            </div>
                            <div>
                            <p>Tour Time: {spot.season} Season</p>
                            <p>Average Cost: {spot.cost} $</p>
                            </div>
                            <p className="w-4/5">{spot.description}</p>
                            </div>
                            
                            
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default SelectedSpots;