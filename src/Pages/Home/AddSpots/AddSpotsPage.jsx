

const AddSpotsPage = () => {
    return (
        <div className="flex flex-col items-center my-10">
            <h2 className="text-3xl font-bold my-5">Add New Tourist Spot</h2>

            <div className="card border-2 shrink-0 w-full md:w-4/5 px-2 mx-2 md:mx-8 shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control flex flex-row gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control flex flex-row gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="text" placeholder="Country Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Location" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control flex flex-row gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <select className="select select-bordered select-lg text-gray rounded-xl w-full">
                                <option className="text-xs" value="">Choose a season</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                            </select>

                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="text" placeholder="Duration" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control flex flex-row gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">No. of Visitors Per Year</span>
                            </label>
                            <input type="text" placeholder="Total Visitors Per Year" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control flex flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Description" rows={6}  ></textarea>
                        </div>
                    </div>
                    <div className="form-control flex flex-row gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="User Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full" required />
                        </div>
                    </div>


                    <div className="form-control mt-6 flex items-center">

                        <button className="mr-2 w-full md:w-1/2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-3 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                            <span className="relative text-black">Add</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSpotsPage;