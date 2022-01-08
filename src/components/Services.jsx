import React, { useContext } from 'react'
import services1 from "../Images/writing-publishing.png";
import services from "../Images/design-services.png";
import { ThemeContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Services = () => {

    const { theme } = useContext(ThemeContext);
    let style, desColor2, desText2;

    if (theme === "dark") {
        style = { background: "linear-gradient(168deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(34,34,34,0.8970938717283788) 69%)", color: "white" };
        desColor2 = { background: "#ECDBBA" };
        desText2 = { color: "#ECDBBA" }
    }
    else if (theme === "light") {
        style = { color: "black" };
        desColor2 = { background: "#FF10F0" };
        desText2 = { color: "#FF10F0" }

    }

    return (
        <div style={style} className="pt-20 pb-40 mt-20 bg-gray-50 lg:mt-60" id="services">
            <div className="px-2 mx-auto sm:w-3/4 lg:w-5/12">
                <h1 className="text-3xl text-center text-blue-400">OUR SERVICES</h1>
                <p className="mt-4 text-center text-gray-400">We commit to give 100% quality services and customer support.</p>
            </div>

            <div className="relative mt-20 lg:mt-24">
                {/* Service - Content */}

                {/* Design */}
                <div className="container flex flex-col items-center justify-center lg:flex-row gap-x-28">
                    {/* IMage */}
                    <div className="z-10 flex justify-center flex-1 mb-10 lg:mb-0">
                        <img className="w-3/4 ml-0 border-2 border-black rounded-md h-3/4 lg:w-3/6 lg:h-3/6 md:w-full md:h-full" src={services} alt="Cover PIC" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-1 text-center lg:items-start">
                        <Link to="services" className="mb-10 text-3xl font-bold text-neon-green">Design Services</Link>
                        <p className="my-4 text-center text-gray-400 lg:text-left md:text-center md:w-full sm:w-3/4">Blogs, Brochure, Banners, E book cover,
                            Instagram Posts, Facebook posts, Product packaging, Billboard, Kiosk, Leaflets</p>
                    </div>
                    {/* Image design */}
                    <div className="absolute right-0 hidden w-2/4 overflow-hidden rounded-r-full bg-neon-green lg:left-0 lg:top-20 h-80 lg:block">
                    </div>
                </div>

                {/* Writing */}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col items-center justify-center lg:flex-row-reverse gap-x-24">
                        {/* IMage */}
                        <div className="z-10 flex justify-center flex-1 mb-10 lg:mb-0">
                            <img className="w-3/4 ml-0 border-2 border-black rounded-md lg:ml-20 h-3/4 lg:w-3/6 lg:h-3/6 md:w-full md:h-full" src={services1} alt="Cover PIC" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col flex-1 text-center lg:items-start">
                            <Link to="writings" style={desText2} className="mb-10 text-3xl font-bold text-ECDBBA">Technical Writing &#38; Publications </Link>
                            <p className="my-4 text-center text-gray-400 lg:text-left md:text-center md:w-full sm:w-3/4">
                                Be it assistance in Design works or academic related query.
                                By outsourcing your design and paper publishing work to us, you can focus on what you do best running your business.
                            </p>
                        </div>
                        {/* Image design */}
                        <div style={desColor2} className="absolute right-0 hidden w-2/4 overflow-hidden rounded-l-full lg:right-0 lg:top-20 h-80 lg:block hover:transform">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
