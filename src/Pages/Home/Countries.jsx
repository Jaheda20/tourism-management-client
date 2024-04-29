import { useEffect, useState } from "react";
import { JackInTheBox } from "react-awesome-reveal";


const Countries = () => {
    const [displayCountry, setDisplayCountry] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDisplayCountry(data)
            })
    }, [])

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-5">Explore Europe</h2>
            <div className="grid grid-cols-5 gap-4">
                {
                    displayCountry.map(country => <div key={country._id}>
                        <div className="shadow-md border p-2 rounded-lg">
                        <JackInTheBox>
                            <img src={country.image} alt="" className="h-40" />
                        </JackInTheBox>
                            <div>
                                <h1 className="font-bold text-blue-900">{country.country}</h1>
                                <p className="text-xs"><i>{country.description}</i></p>
                            </div>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Countries;