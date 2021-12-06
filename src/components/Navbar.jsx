import React from 'react'
import { FcGlobe } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    return (
        <>
            <div className="container flex items-center py-2 mt-4 sm:mt-12">
                <div className="">
                    <FcGlobe className="text-3xl"/>
                </div>
                <ul className="items-center justify-end flex-1 hidden gap-12 text-xs text-blue-400 uppercase sm:flex">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <button className="py-3 text-white uppercase transition duration-300 rounded-md bg-neon-green px-7 hover:bg-green-400">Contact US</button>
                </ul>
                <div className="flex justify-end flex-1 sm:hidden">
                    <HiMenu className="text-3xl"/>
                </div>
            </div>
        </>
    )
}

export default Navbar
