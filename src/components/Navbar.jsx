import React, { useContext } from 'react'
import { HiMenu } from "react-icons/hi";
import navIcon from "../Images/qbroz.ico";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/Context';


const Navbar = () => {
    const { setTheme } = useContext(ThemeContext);
    const switchThemeToLight = ()=>{
        setTheme("light");
    }

    const switchThemeToDark = ()=>{
        setTheme("dark");
    }
    return (
        <>
            <div className="container flex items-center py-2 mt-4 sm:mt-12">
                <div>
                    <img className="w-1/6 rounded-full h-1/6" src={navIcon} alt="Icon"></img>
                    {/* <FcGlobe className="text-3xl"/> */}
                </div>
                <ul className="items-center justify-end flex-1 hidden gap-12 text-xs text-blue-400 uppercase sm:flex">
                    <li className="cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="cursor-pointer"><a href="#services">Services</a></li>
                    <div className="dropdown">
                        <button className="uppercase">Theme</button>
                        <div className="dropdown-content">
                            <button onClick={switchThemeToLight}>Light</button>
                            <button onClick={switchThemeToDark}>Dark</button>
                        </div>
                    </div>
                    <a href="#contactus" className="py-3 text-white uppercase transition duration-300 rounded-md bg-neon-green px-7 hover:bg-green-400">Contact US</a>
                </ul>
                <div className="flex justify-end flex-1 sm:hidden">
                    <HiMenu className="text-3xl" />
                </div>
            </div>
        </>
    )
}

export default Navbar
