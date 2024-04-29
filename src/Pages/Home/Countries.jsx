import { useEffect, useState } from "react";


const Countries = () => {
    const [displayCountry, setDisplayCountry] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDisplayCountry(data)
        })
    }, [])

    return (
        <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-blue-900">Trending Destinations</h2>
            <div>
                {
                   displayCountry.map(country => <div key ={country._id}>
                    <div>
                        <img src={country.image} alt="" className="w-96" />
                        <h1>{country.country}</h1>
                        <p>{country.description}</p>
                    </div>
                   </div>) 
                }
            </div>

        </div>
    );
};

export default Countries;