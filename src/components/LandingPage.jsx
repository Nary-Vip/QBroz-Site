import React from 'react'
import firstPic from "../Images/coverPic.jpg";
import Services from './Services';

const LandingPage = () => {
    return (
        <>
            <section className="relative">
                <div className="container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:mt-28">
                    {/* Upper Content */}
                    <div className="flex flex-col items-center flex-1 lg:items-start">
                        <h2 className="mb-10 text-3xl text-center md:text-4 lg:text-5xl lg:text-left">
                            Qbroz
                        </h2>
                        <p className="mb-10 text-lg text-center text-gray-400 lg:text-left">
                            We are a team of professionals with expertise in publishing and designing.
                            Our strength lies in quality, professionalism, experience and affordability.
                            Our squad is comprised of Academicians, Research Scholars and Industry Professionals.

                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="#services" className="btn btn-2 hover:bg-neon-dark-purple">OUR SERVICES</a>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="z-10 flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
                        <img className="w-5/6 pt-5 border-2 border-black border-solid rounded-md h-5/6 sm:w-3/4 sm:h-3/4 md:w-5/6 md:h-5/6" src={firstPic} alt="Cover PIC" />
                    </div>
                </div>
                {/* Image design */}
                <div className="absolute right-0 hidden w-2/4 overflow-hidden rounded-l-full bg-neon-purple top-40 h-80 md:block lg:right-0">
                </div>
            </section>
            <Services />
        </>
    )
}

export default LandingPage
