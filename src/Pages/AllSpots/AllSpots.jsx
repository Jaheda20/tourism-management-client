import { Link, useLoaderData } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";


const AllSpots = () => {
    const allSpots = useLoaderData();
    const [sortBy, setSortBy] = useState("");

    const handleSorting = e => {
        setSortBy(e.target.value)
        console.log(e.target.value)
        
        
    }  
    const sorted = allSpots.sort((a, b) => {
        if (sortBy === 'Ascending') {
            return a.cost - b.cost
        }
        else if (sortBy === 'Descending') {
            return b.cost - a.cost
        }
        return ;
    })
    console.log(sorted)
    

    
    
    


    return (
        <div className="container mx-auto">
            <div className="container mx-auto pt-14 flex flex-col items-center text-center gap-6 mb-5 ">
                <h1 className="mt-8 font-bold text-4xl text-blue-900">Explore Europe: Unveiling Spectacular Destinations</h1>
                <p className="font-inter font-normal text-lg max-w-5xl ">Embark on a global journey through captivating destinations, from the majestic Tower of London steeped in history to the vibrant hues of Keukenhof's tulip fields. Discover cultural treasures at the British Museum and witness the northern lights in Kiruna, Sweden. Let each destination paint a unique story of beauty and wonder.</p>
            </div>

            <div className="flex justify-end items-end mr-4 mt-10">
                <select value={sortBy} onChange={handleSorting} className="select select-bordered select-lg text-orange-500 text-lg font-bold rounded-xl bg-blue-200 max-w-xs">
                    <option value="">Sort By Cost</option>
                    <option value="Ascending">Lowest First</option>
                    <option value="Descending">Highest First</option>
                </select>

            </div >

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-10">
                {
                    allSpots.map(spot =>
                        <div key={spot._id}>
                            <Slide direction="top">
                            <div className="card bg-base-100 shadow-2xl mx-4 border-2 border-orange-400">
                                <figure className="px-10 pt-10">
                                    <img src={spot.photo} alt="" className="rounded-xl h-52" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-blue-900 font-bold">{spot.spotName}</h2>
                                    <div className="flex gap-6">
                                        <p className="flex items-center gap-2"><FaCoins />
                                            {spot.cost}$</p>
                                        <p className="flex items-center gap-2"><IoIosPeople />
                                            {spot.visitors}</p>
                                    </div>

                                    <p>Duration of Stay: {spot.duration}</p>

                                    <p> Seasonal Wonders: {spot.season} Season</p>
                                    <div className="card-actions">
                                        <Link to={`/spotDetails/${spot._id}`}>
                                            <button className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                                <span className="relative text-black">View Details</span></button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            </Slide>

                        </div>)
                }
            </div>



        </div>
    );
};

export default AllSpots;