import { Link } from "react-router-dom";
import registerPhoto from "../../../public/images/regPic.jpg"

const SignUp = () => {
    return (
        <div className="hero mt-12 mb-20 flex flex-col md:flex-row items-center justify-center md:px-12">
            <div className="md:w-1/2">
                <img src={registerPhoto} alt="" className="w-80" />
            </div>
            <div className="md:w-1/2 w-full px-2 flex-col">
                <div className="text-center">
                    <h1 className="text-2xl md:text-5xl font-bold mb-5">Sign Up now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm md:max-w-4xl shadow-2xl bg-base-100">
                    <form className=" card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" name="name" placeholder="Enter your fullname" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="email" placeholder="Photo url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                <span className="relative text-black">Sign Up</span> </button>
                        </div>
                    </form>
                    <p className="pl-8 pb-10">Already have an account? <Link to="/signin" className="text-indigo-900 font-semibold underline">Sign in</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;