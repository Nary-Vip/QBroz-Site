import React,{ useContext } from 'react'
import { ThemeContext } from '../context/Context';
import firstPic from "../Images/coverPic.jpg";
import Services from './Services';

const LandingPage = () => {

    const { theme } = useContext(ThemeContext);
    let desc, topic, desColor1, btnBg;

    if (theme === "dark") {
        desc= { color: "#dcdcdc"};
        topic = {color: "#E94560"};
        desColor1 = { background: "#E94560"};
        btnBg = {background: "#E94560"};
    }
    else if (theme === "light") {
        desc = {color: "#808080"};
        topic = {color: "#DF00FE"};
        desColor1 = { background: "#DF00FE"};
        btnBg = { background: "#DF00FE"};
    }



    return (
        <>
            <section className="relative">
                <div className="container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:mt-28">
                    {/* Upper Content */}
                    <div className="flex flex-col items-center flex-1 lg:items-start">
                        <h2 style={topic} className="mb-10 text-3xl text-center font-bioRhyme md:text-4 lg:text-5xl lg:text-left">
                            Qbroz
                        </h2>
                        <p style={desc} className="mb-10 text-center text-gray-400 font-mont text-l lg:text-left">
                        Every work is different so are the challenges. Our aim is to provide  solution that is tailored to each client’s writing as well as design needs.
                        No matter the budget, we deliver only the best.<br/><br/> We furnish full assistance in the academic ghost writing and publications to make you a virtuous
                        scientific author.   

                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a style={btnBg} href="#services" className="btn btn-2 hover:text-gray-100">OUR SERVICES</a>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="z-10 flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
                        <img className="w-5/6 pt-5 border-2 border-black border-solid rounded-md h-5/6 sm:w-3/4 sm:h-3/4 md:w-5/6 md:h-5/6" src={firstPic} alt="Cover PIC" />
                    </div>
                </div>
                {/* Image design */}
                <div style={desColor1} className="absolute right-0 hidden w-2/4 overflow-hidden rounded-l-full top-40 h-80 md:block lg:right-0">
                </div>
            </section>
            <Services />
        </>
    )
}

export default LandingPage
