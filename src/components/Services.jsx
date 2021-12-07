import React from 'react'
import services1 from "../Images/services1.png";
import services from "../Images/services.png";

const Services = () => {
    return (
        <div className="pt-20 pb-40 mt-20 bg-gray-50 lg:mt-60" id="services">
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
                        <img className="md:w-full sm:w-3/4 sm:h-3/4 lg:w-6/8 lg:h-5/6" src={services} alt="Cover PIC" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-1 text-center lg:items-start">
                        <h1 className="mb-10 text-3xl text-neon-green">Design Services</h1>
                        <p className="my-4 text-center text-gray-400 lg:text-left sm:w-3/4">Blogs, Brochure, Banners, E book cover,
                            Instagram Posts, Facebook posts, Product packaging, Billboard, Kiosk, Leaflets</p>
                    </div>
                    {/* Image design */}
                    <div className="absolute right-0 hidden w-2/4 overflow-hidden rounded-r-full bg-neon-green lg:left-0 lg:top-32 h-80 lg:block">
                    </div>
                </div>

                {/* Writing */}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col items-center justify-center lg:flex-row-reverse gap-x-24">
                        {/* IMage */}
                        <div className="z-10 flex justify-center flex-1 mb-10 lg:mb-0">
                            <img className="w-5/6 ml-10 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={services1} alt="Cover PIC" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col flex-1 text-center lg:items-start">
                            <h1 className="mb-10 text-3xl text-neon-pink">Technical Writing &#38; Publications </h1>
                            <p className="my-4 text-center text-gray-400 lg:text-left sm:w-3/4">Technical Writing &#38; Publications
                            </p>
                        </div>
                        {/* Image design */}
                        <div className="absolute right-0 hidden w-2/4 overflow-hidden rounded-l-full bg-neon-pink lg:right-0 lg:top-20 h-80 lg:block hover:transform">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
