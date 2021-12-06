import React from 'react'
import firstPic from "../Images/firstPic.png";

const LandingPage = () => {
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:mt-28">
                {/* Upper Content */}
                <div className="flex flex-col items-center flex-1 lg:items-start">
                    <h2 className="mb-6 text-3xl text-center text-black md:text-4 lg:text-5xl lg:text-left">
                        Qobruz
                    </h2>
                    <p className="mb-6 text-lg text-center text-gray-400 lg:text-left">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea minus velit ut dolorem quod sequi, consequuntur amet architecto nulla repellendus earum ratione sapiente at commodi modi officia voluptate exercitationem.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button type="button" className="btn btn-2 hover:bg-purple-500">OUR SERVICES</button>
                    </div>
                </div>
                {/* Image */}
                <div className="z-10 flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-5/6 md:h-5/6" src={firstPic} alt="Cover PIC"/>
                </div>
            </div>
            {/* Image design */}
            <div className="absolute right-0 hidden w-2/4 overflow-hidden bg-purple-500 rounded-l-full top-32 h-80 md:block lg:-bottom-28 lg:-right-36">
            </div>
        </section>
    )
}

export default LandingPage
