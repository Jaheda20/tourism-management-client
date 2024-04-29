import { useEffect, useState } from "react";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import { Link } from "react-router-dom";



const Countries = () => {
    const [displayCountry, setDisplayCountry] = useState([]);
    

    useEffect(() => {
        fetch('https://tourism-management-project-server.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDisplayCountry(data)
            })
    }, [])

    console.log(displayCountry)



    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold dark:text-blue-400  text-blue-900 mb-5">Explore Europe</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2">
                {
                    displayCountry.map(country => <div key={country._id}>
                        <Link to={`/selectedSpots/${country.country}`}>
                        <div className="shadow-md border p-2 rounded-lg">
                            <JackInTheBox>
                                <img src={country.image} alt="" className="h-40" />
                            </JackInTheBox>
                            <Fade>
                                <div>
                                    <h1 className="font-bold dark:text-blue-400 text-blue-900">{country.country}</h1>
                                    <p className="text-xs"><i>{country.description}</i></p>
                                </div>
                            </Fade>
                        </div>
                        </Link>
                    </div>
                    )
                }
            </div>
            

        </div>
    );
};

export default Countries;