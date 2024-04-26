import { Link } from "react-router-dom";
import registerPhoto from "../../../public/images/regPic.jpg"
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


const SignUp = () => {

    const { createUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) =>{
        const {email, password} = data;
        if(password.length < 6){
            toast.error('Your password must be of at least 6 characters')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error('Your password must include an Uppercase letter')
            return;
        }
        else if(!/[a-z]/.test(password)){
            toast.error('Your password must include an Lowercase letter')
            return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your account has been created successfully",
                showConfirmButton: false,
                timer: 1500
              });
            reset();
        })
        .catch(error =>{
            console.error(error)
            toast.error('Email already in use')
        })
      }

    

    return (
        <div className="hero mt-12 mb-20 flex flex-col md:flex-row items-center justify-center md:px-12">
            <div className="md:w-1/2">
            <div className="text-center">
                    <h1 className="text-2xl md:text-5xl font-bold mb-5 text-blue-900">Join with us</h1>
                    <p className="text-xs px-2">By registering with us, you gain access to a suite of tools designed to elevate your travel adventures. Join our community of travelers today and embark on unforgettable journeys with ease!</p>
                </div>
                <img src={registerPhoto} alt="" className="w-96" />
            </div>
            <div className="md:w-1/2 w-full px-2 flex-col">
                <div className="card shrink-0 w-full max-w-sm md:max-w-4xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className=" card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-800">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" {...register("photo")} />
                        </div>
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
            <ToastContainer />
        </div>
    );
};

export default SignUp;