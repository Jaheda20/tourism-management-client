import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Destinations = () => {
    const [mySpots, setMySpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myList/jahedasultana20@gmail.com')
            .then(res => res.json())
            .then(data => {
                setMySpots(data)
            })
    }, [])



    return (
        <div className="mt-5 mb-10 container mx-auto">
            <div className="container mx-auto pt-14 flex flex-col items-start text-center gap-6 mb-5 ">
                <h1 className="mt-8 font-bold text-4xl dark:text-blue-400 text-blue-900">Trending Destinations</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-4 gap-4">
                {
                    mySpots.map(spot => <div key={spot._id}>
                        <Zoom>
                        <div className="card w-96 bg-base-100 shadow-xl" style={{ backgroundImage: `url(${spot.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
                            <div className="card-body w-full " >
                                <div className="bg-gray-300 w-full rounded-xl p-1 opacity-80">
                                    <h2 className="card-title text-black">{spot.spotName}</h2>
                                    <div className="flex">
                                        <p className="text-black">{spot.location}, {spot.country}</p>
                                        
                                    </div>


                                </div>

                                <div className="card-actions justify-end mt-10">
                                <Link to={`/spotDetails/${spot._id}`}>
                                            <button className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                                <span className="relative text-black">View Details</span></button>
                                        </Link>

                                </div>
                            </div>
                        </div>
                        </Zoom>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Destinations;