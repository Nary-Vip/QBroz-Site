import React, { useContext } from 'react'
import { ThemeContext } from '../context/Context';
// import aboutPic from "../Images/about.jpg";
import corPic from "../Images/project-managemnt.png";

const About = () => {
    const { theme } = useContext(ThemeContext);
    let style, para;
    let desColor1 = { background: "#E94560"};
    
    if (theme === "dark") {
        style = { color: "white" };
        para = {color: "#E4E4E4"}
    }
    else if (theme === "light") {
        style = { background: "white", color: "black" };
        para = {color: "#a9a9a9"}
    }

    return (
        <div className="container relative grid min-h-screen px-10 py-5 lg:px-0 lg:py-0 place-items-center">
            <div style={style} className="w-full border-2 border-gray-300 rounded-lg lg:px-20">
                <h1 className='py-10 text-3xl text-center text-pink-400 font-lobster lg:pt-10'>ABOUT US</h1>
                {/* container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:mt-28 */}
                <div className='flex flex-col-reverse items-center justify-center gap-12 lg:flex-row my-14 lg:my-18'>
                    
                    <div className='p-2'>
                        <h2 className='px-5 text-2xl text-center lg:text-left font-bioRhyme'>Who we are</h2>
                        <p style={para} className='p-5 font-mont text-l'>
                            We are a team of professionals with expertise in publishing and designing. Our team is equipped with the necessary knowledge and technical skills to deliver a diverse range of projects irrespective of their size. Our strength lies in quality, professionalism, experience and affordability. 
                            <br/><br/>Our squad is comprised of Academicians, Research Scholars and Industry Professionals.
                        </p>
                    </div>
                    {/* <div className="z-10 flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
                        <img className="w-5/6 rounded-md h-5/6 sm:w-3/4 sm:h-3/4 md:w-5/6 md:h-5/6" src={corPic} alt="Cover PIC" />
                    </div> */}
                    <div className='z-10 flex justify-center w-5/6 lg:w-full lg:h-full h-5/6'>
                        <img src={corPic} className='w-3/4 rounded-lg h-3/4 lg:h-5/6 lg:w-5/6' alt=""/>
                    </div>
                    {/* Image design */}
                        <div style={desColor1} className="absolute right-0 hidden w-2/6 overflow-hidden rounded-l-full bottom-60 h-60 md:hidden lg:right-0">
                    </div>

                </div>
                {/* <div className='my-20 text-center'>
                    <a className='text-center btn btn-wa' target="block" href="https://api.whatsapp.com/send?phone=91999999999"><BsWhatsapp className='inline text-3xl'/> Whatsapp US</a>
                </div> */}
            </div>

        </div>

    )
}

export default About
