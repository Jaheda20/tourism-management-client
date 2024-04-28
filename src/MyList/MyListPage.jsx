import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyListPage = () => {
    const { user } = useAuth() || {};
    const [mySpots, setMySpots] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMySpots(data)
            })
    }, [user, control])

    const handleDelete = (id) =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if(result.isConfirmed){
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your spot has been deleted.",
                        icon: "success"
                    });
                    setControl(!control)
                    
            })
        }
    
        })

    }


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
                                        <td><Link to={`/updatePage/${mySpot._id}`}><button className="flex items-center gap-2 font-bold text-blue-600 btn"><GrUpdate />
                                            Update</button></Link></td>
                                        <td><button onClick={()=>handleDelete(mySpot._id)} className="flex items-center gap-2 font-bold text-orange-600 btn"><TiDeleteOutline />
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