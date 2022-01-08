import React, { useContext, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import navIcon from "../Images/Qbros_final_-01.png";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/Context';

const Navbar = () => {
    const { setTheme } = useContext(ThemeContext);
    const [mmenu, setmmenu] = useState(false);

    const switchThemeToLight = () => {
        setTheme("light");
    }

    const switchThemeToDark = () => {
        setTheme("dark");
    }

    function mobileMenu() {
        setmmenu(!mmenu);
    }

    return (
        <>
            <div className="container flex items-center py-4 mt-4 sm:mt-4">
                {mmenu === true ? (
                    <div className="md:hidden">
                        <div className="z-50 w-screen h-full mobile-menu">
                            <ul className="text-center">
                                <li className="active"><Link onClick={mobileMenu} to="/" className="block px-2 py-4 text-sm font-semibold text-white bg-yellow-400">Home</Link></li>

                                {/* <li>
                                    <div className="px-2 py-4 text-sm font-semibold">
                                        <div className="dropdown">
                                            <button className="font-bold uppercase">Theme</button>
                                            <div onClick={mobileMenu} className="dropdown-content">
                                                <button onClick={switchThemeToLight}>Light</button>
                                                <button onClick={switchThemeToDark}>Dark</button>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <div className="dropdown">
                                        <div className="m-1 btn">Theme</div>
                                        <ul onClick={mobileMenu} className="w-full p-2 shadow menu dropdown-content bg-base-100 rounded-box">
                                            <li>
                                                <button className="w-full text-center" onClick={switchThemeToLight}>Light</button>
                                            </li>
                                            <li>
                                                <button className="w-full text-center" onClick={switchThemeToDark}>Dark</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li><Link to="about" onClick={mobileMenu} className="block px-2 py-4 text-sm transition duration-300 hover:bg-yellow-400">About</Link></li>
                                <li><Link to="contactus" onClick={mobileMenu} className="block px-2 py-4 text-sm transition duration-300 hover:bg-yellow-400">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                <div className={mmenu === false ? ("h-2/6 w-2/6 md:w-1/6 md:h-2/6") : ("lg:h-2/6 lg:w-2/6 md:w-1/6 md:h-2/6 hidden")}>
                    <Link to="/"><img className="w-2/6 rounded-lg h-1/6" src={navIcon} alt="Icon"></img></Link>

                    {/* <FcGlobe className="text-3xl"/> */}
                </div>
                <div className={mmenu === false ? (" navName") : ("lg:navName hidden")}>
                    <div className="text-green"><span className='text-3xl'>Q</span>broz <span className="hidden lg:inline-block">Design and Publishing Services</span></div>
                </div>

                <ul className="items-center justify-end flex-1 hidden gap-12 text-xs font-bold text-blue-400 uppercase sm:flex">
                    <li className="cursor-pointer"><Link to="/about">About</Link></li>
                    <div className="dropdown">
                        <button className="font-bold uppercase">Theme</button>
                        <div className="dropdown-content">
                            <button onClick={switchThemeToLight}>Light</button>
                            <button onClick={switchThemeToDark}>Dark</button>
                        </div>
                    </div>
                    <Link to="contactus" className="py-3 text-white uppercase transition duration-300 rounded-md bg-neon-green px-7 hover:bg-green-400">Contact US</Link>
                </ul>

                <div className={mmenu === false ? ("flex justify-end flex-1 z-60 sm:hidden") : ("hidden")}>
                    <HiMenu className="text-3xl cursor-pointer" onClick={mobileMenu} />
                </div>
            </div>
        </>
    )
}

export default Navbar
