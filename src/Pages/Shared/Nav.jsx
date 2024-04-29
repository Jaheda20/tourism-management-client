import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.jpg"
import useAuth from "../../Hooks/useAuth";
import defaultImage from "../../../public/images/user.png";
import { useEffect, useState } from "react";

const Nav = () => {

    const { user, signOutUser } = useAuth();
    const [theme, setTheme] = useState('light');

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

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
                <label className="cursor-pointer grid place-items-center mr-2">
                    <input type="checkbox" onChange={handleToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {
                    user ?
                        <div className="flex gap-2">
                            <div className="tooltip flex" data-tip={user?.displayName || 'Unknown User'}>
                                <img className="w-8 md:w-12 rounded-full" src={user?.photoURL || defaultImage} alt="" />
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