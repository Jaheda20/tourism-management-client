import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcCallback } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-4 md:p-10 bg-blue-100 text-base-content">
                <div className="flex flex-col md:flex-row">
                    <div className="gap-2 flex flex-col mr-20">
                        <p className="text-3xl font-bold text-orange-500">Explore<span className="md:text-4xl text-blue-500">Xpert</span> </p>
                        <p className="w-72">Check and fix your holiday destination with ExploreXpert</p>
                        <div className="mt-8">
                            <h2 className="mb-3 font-bold">Contact info</h2>
                            <p className="flex items-center gap-2">
                                <FcCallback size={20} />
                                <span className="text-sm">077-196 3343</span>
                            </p>
                            <p className="flex items-center mt-3 gap-2">
                                <AiTwotoneMail size={20} color="blue" />
                                <span className="text-sm">explorxpert@explorexpert.se</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-0">
                        <div className="flex flex-col space-y-2">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Our partners</a>
                            <a className="link link-hover">List your property</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Advertising</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Accessibility</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                            <a className="link link-hover">Content guidelines</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h6 className="footer-title">Help</h6>
                            <a className="link link-hover">FAQ</a>
                            <a className="link link-hover">Press kit</a>
                            <a className="link link-hover">Feedback</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h6 className="footer-title">Get the ExploreXpert App</h6>
                            <div className="flex flex-col gap-3">
                                <button className="border border-indigo-900 rounded-xl w-32 py-1 text-xs">Get it on
                                    <span className="flex items-center justify-center gap-1 text-base"><FaGooglePlay />
                                        Google Play</span></button>
                                <button className="border border-indigo-900 rounded-xl w-32 py-1 text-xs ">Download on the
                                    <span className="flex items-center justify-center gap-1 text-base"><FaApple />
                                        App Store</span></button>
                                <div className="flex gap-1 items-center justify-center mt-5">
                                    <h1>Follow us-</h1>
                                    <p><FaFacebookSquare size={30} color="blue" />
                                    </p>
                                    <p><FaSquareInstagram size={30} color="red" />
                                    </p>
                                    <p><FaSquareXTwitter size={30} color="black" />

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center py-3 px-10 bg-blue-200">
                <div>
                    <p className="text-xs md:text-base">Copyright © 2024 - All right reserved by ExploreXpert</p>
                </div>
                
            </div>
        </div>



    );
};

export default Footer;