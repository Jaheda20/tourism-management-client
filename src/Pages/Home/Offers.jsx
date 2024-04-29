
const Offers = () => {
    return (
        <div className="container mx-28">
            <div>
                <h2 className="text-3xl font-bold dark:text-blue-400  text-blue-900 mb-2">Offers</h2>
                <p className="mb-6">Promotions, deals, and special offers for you</p>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-row-reverse w-full md:w-1/2 border items-center justify-around rounded-xl p-3">
                    <div>
                        <h1 className="text-xl text-blue-800 font-bold mb-2">Fly Away to your dream vacation</h1>
                        <p className="mb-4">Get inspired-compare and book flights with flexibility</p>
                        <button className="btn bg-blue-400 text-orange-700"><a href="https://www.momondo.se/flights?lang=sv&skipapp=true&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk84m1pq4y43CpD4a_evHRnNwLIDc0aGhAby8PdsPwauBsBjUfkPCp48aAoYREALw_wcB"> Search for Flights</a>
                            </button> 
                    </div>
                    <img src="https://i.ibb.co/nwCm6vG/plane.jpg" alt="" className="w-52" />
                </div>
                
                <div className="md:ml-10 flex flex-row-reverse w-full md:w-1/2 border items-center justify-around rounded-xl p-3">
                    <div>
                        <h1 className="text-xl text-blue-800 font-bold mb-2">Planning for Olympic 2024?</h1>
                        <p className="mb-4">Book your flights early today</p>
                        <button className="btn bg-blue-400 text-orange-700"><a href="https://www.momondo.se/flights?lang=sv&skipapp=true&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk84m1pq4y43CpD4a_evHRnNwLIDc0aGhAby8PdsPwauBsBjUfkPCp48aAoYREALw_wcB"> Search for Flights</a>
                            </button> 
                    </div>
                    <img src="https://i.ibb.co/2YqTDs8/photo-1684332078402-2a91dd7d0c6e-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-24" />
                </div>
            </div>


        </div>
    );
};

export default Offers;