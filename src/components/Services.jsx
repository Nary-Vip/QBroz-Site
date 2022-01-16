import React, { useContext } from 'react'
import services1 from "../Images/writing-publishing.png";
import services from "../Images/design-services.png";
import { ThemeContext } from '../context/Context';
import ServiceTiles from './ServiceTiles';
import { designs } from '../Services';
import { writings } from '../Services';

const Services = () => {

    const { theme } = useContext(ThemeContext);
    let style, desColor2, desText2;
    let desColor1 = { background: "#E94560"};

    if (theme === "dark") {
        style = { background: "linear-gradient(168deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(34,34,34,0.8970938717283788) 69%)", color: "white" };
        desColor2 = { background: "#ECDBBA" };
        desText2 = { color: "#ECDBBA" };
        desColor1 = { color: "white", background: "black" };
    }
    else if (theme === "light") {
        style = { color: "black" };
        desColor2 = { background: "#7197c0" };
        desText2 = { color: "#7197c0" };
        desColor1 = { color: "black" };
    }

    return (
        <div style={style} className="pt-20 pb-40 mt-20 bg-gray-50 lg:mt-60" id="services">
            <div className="relative mt-20 lg:mt-4">
                {/* Service - Content */}

                {/* Design */}
                <div className="container flex flex-col items-center justify-center lg:flex-row">
                    {/* IMage */}
                    <div className="z-10 flex justify-center flex-1 mb-10 lg:justify-start lg:mb-0">
                        <img className="w-3/4 border-2 border-black rounded-md md:w-3/5 h-3/5 lg:w-3/6 lg:h-3/6" src={services} alt="Cover PIC" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-1 w-5/6 text-center lg:items-start">
                        <div className="w-full mb-10 text-3xl font-bold text-center text-oragish1">Design Services</div>
                        <div className="grid w-full gap-4 my-5 h-4/6 md:grid-cols-2">
                            {designs.map((design) => (
                                <div style={desColor1}
                                    className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
                                    key={design.title}
                                >
                                    <ServiceTiles service={design} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Image design */}
                    <div className="absolute right-0 hidden w-2/5 overflow-hidden rounded-r-full bg-oragish1 lg:left-0 lg:top-52 h-80 lg:block">
                    </div>
                </div>

                {/* Writing */}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col items-center justify-center lg:flex-row-reverse">
                        {/* IMage */}
                        <div className="z-10 flex justify-center flex-1 mb-10 lg:justify-end lg:mb-0">
                            <img className="w-3/4 border-2 border-black rounded-md md:w-3/5 lg:ml-20 h-3/5 lg:w-3/6 lg:h-3/6" src={services1} alt="Cover PIC" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col flex-1 w-5/6 text-center lg:items-start">
                            <div style={desText2} className="w-full mb-10 text-3xl font-bold text-center text-bluish">Technical Writing &#38; Publications </div>
                            <div className="grid w-full gap-4 my-5 h-4/6 md:grid-cols-2">
                                {writings.map((design) => (
                                    <div style={desColor1}
                                        className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
                                        key={design.title}
                                    >
                                        <ServiceTiles service={design} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Image design */}
                        <div style={desColor2} className="absolute right-0 hidden w-2/5 overflow-hidden rounded-l-full lg:right-0 lg:top-48 h-80 lg:block hover:transform">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
