import React,{ useContext } from 'react'
import { ThemeContext } from '../context/Context';
import firstPic from "../Images/front-logo.png";
import Services from './Services';

const LandingPage = () => {

    const { theme } = useContext(ThemeContext);
    let desc;

    if (theme === "dark") {
        desc= { color: "#dcdcdc"};
    }
    else if (theme === "light") {
        desc = {color: "#808080"};
    }



    return (
        <>
            <section className="relative">
                <div className="container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:mt-28">
                    {/* Upper Content */}
                    <div className="flex flex-col items-center flex-1 lg:items-start">
                        <h2 className="mb-10 text-3xl text-center font-bioRhyme md:text-4 text-lightGB lg:text-5xl lg:text-left">
                            Qbroz
                        </h2>
                        <p style={desc} className="mb-10 text-lg text-center text-gray-400 font-mont lg:text-left">
                        Every work is different so are the challenges. Our aim is to provide  solution that is tailored to each client’s writing as well as design needs.
                        No matter the budget, we deliver only the best.<br/><br/> We furnish full assistance in the academic ghost writing and publications to make you a virtuous
                        scientific author.   

                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="#services" className="font-bold btn btn-2 bg-lightGB hover:text-gray-100">OUR SERVICES</a>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="z-10 flex justify-center flex-1 mb-10 lg:justify-end md:mb-16 lg:mb-0">
                        <img className="w-5/6 rounded-md h-5/6 sm:w-5/6 sm:h-5/6 md:w-5/6 md:h-full" src={firstPic} alt="Cover PIC" />
                    </div>
                </div>
                {/* Image design */}
                <div className="absolute right-0 hidden w-2/4 overflow-hidden rounded-l-full bg-lightGB top-44 h-80 md:block lg:right-0">
                </div>
            </section>
            <Services />
        </>
    )
}

export default LandingPage
