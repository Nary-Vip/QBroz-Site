import React,{ useContext } from 'react'
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaWhatsappSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import compIcon from "../Images/Qbros_final_-01.png";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/Context';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    let style;

    if (theme === "dark") {
        style = { background: "linear-gradient(168deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(42,36,36,0.8970938717283788) 61%", color: "white" };
    }
    else if (theme === "light") {
        style = { color: "black" };
    }

    return (
        <div style={style} className="py-8 bg-yellow-100" id="contactus">
            <div className="container flex flex-col items-center md:flex-row">
                <div className="flex flex-wrap items-center justify-center flex-1 gap-12 md:justify-start">
                    <img className="w-1/6 rounded-md h-1/6"  src={compIcon} alt="Icon"></img>
                    <Link to="/"><h2 className="text-3xl font-pacifo">Qbroz</h2></Link>
                </div>
                <div className="px-10 mt-10 text-xl font-bold md:mt-0 lg:mt-0">
                    Connect with us
                </div>
                <ul className="flex gap-10 mt-12 md:mt-0">
                    <li><a href="https://www.twitter.com" target="block"><IoLogoTwitter className="text-4xl text-blue-400"/></a></li>
                    <li><a href="https://www.instagram.com" target="block"><IoLogoInstagram className="text-4xl text-pink-300"/></a></li>
                    <li><a href="https://www.facebook.com" target="block"><FaFacebook className="text-4xl text-blue-600"/></a></li>
                    <li><button target="block" onClick={()=>{window.open("mailto:mail@qbroz.com")}}><FiMail className="text-4xl text-red-600"/></button></li>
                    <li><a href="https://api.whatsapp.com/send?phone=91999999999" target="block"><FaWhatsappSquare className="text-4xl text-green-600"/></a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Footer
