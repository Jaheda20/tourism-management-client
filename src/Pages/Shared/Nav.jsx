import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.jpg"
import useAuth from "../../Hooks/useAuth";
import defaultImage from "../../../public/images/user.png";

const Nav = () => {

    const { user, signOutUser } = useAuth();

    const navLinks =
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-200 font-bold' : "font-bold"} to="/" >Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-200 font-bold' : "font-bold"} to="/about">About Us</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-200 font-bold' : "font-bold"} to="/addSpots">Add Spots</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-200 font-bold' : "font-bold"} to="/allSpots">All Tourist Spots</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-200 font-bold' : "font-bold"} to="/myList">My List</NavLink></li>

        </>


    return (

        <div className="navbar bg-base-100 mb-8 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl gap-0 flex items-center"><img src={logo} alt="" className="w-8 md:w-12 md:mr-2 " /> <span className="md:text-3xl text-orange-500">Explore</span> <span className="md:text-4xl text-blue-500">Xpert</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-2">
                            <div className="tooltip flex" data-tip={user?.displayName || 'Unknown User'}>
                                <img className="w-8 md:w-12 rounded-full" src={user?.photoURL ||  defaultImage } alt="" />
                            </div>

                            <button onClick={signOutUser} className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                <span className="relative text-black">Signout</span>
                            </button>
                        </div>
                        :
                        <div>
                            <Link to="/signin" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                <span className="relative text-black">Signin</span>
                            </Link>
                            <Link to="/signup" className="mr-2 relative inline-flex items-center justify-center p-2 px-3 md:px-5 py-2 overflow-hidden text-xs md:text-base md:font-medium transition duration-400 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-orange-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-200 via-sky-500 to-sky-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-7s0 group-hover:rotate-90 ease"></span>
                                <span className="relative text-black">Signup</span>
                            </Link>
                        </div>

                }

            </div>
        </div>
    );
};

export default Nav;