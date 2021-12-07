import React from 'react'
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import compIcon from "../Images/qbroz.ico";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="py-8 bg-yellow-100" id="contactus">
            <div className="container flex flex-col items-center md:flex-row">
                <div className="flex flex-wrap items-center justify-center flex-1 gap-12 md:justify-start">
                <img className="w-1/6 rounded-full h-1/6"  src={compIcon} alt="Icon"></img>
                    <Link to="/"><h2 className="text-4xl font-pacifo">Qbroz&reg;</h2></Link>
                </div>
                <div className="px-10 text-xl font-bold text-gray-600">
                    Follow US 
                </div>
                <ul className="flex gap-10 mt-12 md:mt-0">
                    <li><a href="https://www.twitter.com" target="block"><IoLogoTwitter className="text-4xl text-blue-400"/></a></li>
                    <li><a href="https://www.instagram.com" target="block"><IoLogoInstagram className="text-4xl text-pink-300"/></a></li>
                    <li><a href="https://www.facebook.com" target="block"><FaFacebook className="text-4xl text-blue-600"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
