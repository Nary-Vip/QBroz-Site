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
        style = { background: "linear-gradient(315deg, #485461 0%, #28313b 74%)", color: "white" };
    }
    else if (theme === "light") {
        style = { color: "black" };
    }

    return (
        <div style={style} className="py-8 bg-gray-500" id="contactus">
            <div className="container flex flex-col items-center md:flex-row">
                <div className="flex flex-wrap items-center justify-center flex-1 gap-12 md:justify-start">
                    <img className="w-1/6 rounded-md h-1/6 md:w-1/6 md:h-1/6" src={compIcon} alt="Icon"></img>
                    <Link to="/"><h2 className="text-xl font-bold text-white font-pacifo"><span className="text-2xl font-bioRhyme">Q</span>broz <span className="hidden lg:inline-block">Design and Publishing Services</span></h2></Link>
                </div>
                <div className="px-10 mt-10 text-xl font-bold text-white font-pacifo md:mt-0 lg:mt-0">
                    Connect with us
                </div>
                <ul className="flex mt-12 gap-7 md:mt-0">
                    <li><a href="https://www.twitter.com" target="block"><IoLogoTwitter className="text-4xl text-blue-500"/></a></li>
                    <li><a href="https://www.instagram.com/qbrozdesignandpublishing/" target="block"><IoLogoInstagram className="text-4xl text-pink-500"/></a></li>
                    <li><a href="https://www.facebook.com" target="block"><FaFacebook className="text-4xl text-blue-500"/></a></li>
                    <li><button target="block" onClick={()=>{window.open("mailto:mail@qbroz.com")}}><FiMail className="text-4xl text-red-600"/></button></li>
                    <li><a href="https://api.whatsapp.com/send?phone=917200893834" target="block"><FaWhatsappSquare className="text-4xl text-green-500"/></a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Footer
