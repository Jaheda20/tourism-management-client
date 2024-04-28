import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";



const MyListPage = () => {
    const { user } = useAuth() || {};
    const [mySpots, setMySpots] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMySpots(data)
            })
    }, [user])
    return (
        <div className="container mx-auto text-center flex flex-col items-center">
            <h2 className="text-4xl text-blue-900 mt-20 mb-14">My Listed Tourist Spots</h2>
            <div className="overflow-x-auto mb-10 border border-orange-400 rounded-xl p-4 ">
                        <table className="table-auto">
                            
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Spot Name</th>
                                    <th>Country</th>
                                    <th>Duration of Stay</th>
                                    <th>Average Cost</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mySpots.map(mySpot => <tr key={mySpot._id}>
                                        <th></th>
                                        <td>{mySpot.spotName}</td>
                                        <td>{mySpot.country}</td>
                                        <td>{mySpot.duration}</td>
                                        <td>{mySpot.cost}$</td>
                                        <td><Link to="/updatePage"><button className="flex items-center gap-2 font-bold text-blue-600 btn"><GrUpdate />
                                            Update</button></Link></td>
                                        <td><button className="flex items-center gap-2 font-bold text-orange-600 btn"><TiDeleteOutline />
                                            Delete</button></td>
                                    </tr>)
                                }

                                
                            </tbody>
                        </table>
                    </div>
            
        </div>
    );
};

export default MyListPage;