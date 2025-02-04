import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/loginAnimation.json"
import Lottie from "lottie-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialSignIn from "./SocialSignIn";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const SignIn = () => {

    const { signInUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully signed in",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate (location?.state || '/')
            })
            .catch(error => {
                console.error(error)
                toast.error('Invalid Credentials')
            })
    }



    return (
        <div className="w-full p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 flex flex-col md:flex-row mt-8 pt-10">
            <Helmet>
                <title>ExloreXpert || Sign in</title>
            </Helmet>
            <div className="md:w-1/2 flex flex-col items-center">
                <h2 className="mb-5 text-3xl font-semibold text-center text-indigo-800">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to="/signup" className="focus:underline hover:underline ml-3 text-indigo-700">Sign up</Link>
                </p>
                <div className="w-4/5">
                    <SocialSignIn></SocialSignIn>
                </div>

                <div className="flex items-center w-4/5 my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-4/5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-800">This field is required</span>}
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-4" >
                            {
                                showPassword ? <FaRegEye size={18} />
                                    : <FaRegEyeSlash size={18} />
                            }
                        </span>
                    </div>
                    <button className="mr-2 w-full relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                        <span className="relative text-black">Sign in</span> </button>

                </form>

            </div>

            <div className="pt-12">
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;