import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../context/Context';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    const form = useRef();
    let style, inpText;
    const { theme } = useContext(ThemeContext);

    if (theme === "dark") {
        style = { background: "linear-gradient(168deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(34,34,34,0.8970938717283788) 69%)", color: "white" };
        inpText = { background: "#DCDCDC" };
    }
    else if (theme === "light") {
        style = { color: "black" };
        inpText = { background: "DCDCDC" };
    }

    function sendMail(e) {
        e.preventDefault();
        if(form.name === "" || form.phone === "" || form.email ==="" || form.message === ""){
            alert("Please fill all the details before sending.");
        }
        else{
        emailjs.sendForm('service_5ah1x0m', 'template_kdt095j', form.current, 'user_30OVx8gnfv9B4iFdLb9GE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => {
            e.target.reset();    
        }, 3000);
        alert("Your Feedback has been succesfully submitted.");
    }
    }

    return (
        <section style={style} className="container static my-10 border-2 border-gray-400 rounded-lg body-font">
        <Helmet>
          <title>Qbroz - Contact US</title>
          <meta name="description" content="Contact our Qbroz team for any queries and doubts."/>
          <meta name="keywords" content="Blogs, Brouchures, Banners, EBook Covers, Instagram Posts, FaceBook Posts, Product Packaging, Billboard, Kiosk, Leaflets, Academic Writing, Scientific Research Writing, Book Writing and publications, Data Analysis, Research Implementation, Bussiness Application, Journal Publishing, Presentations, Resume Designs, Ph.D.Assistance, Project Assistance"/>
        </Helmet>
            <form ref={form} onSubmit={sendMail}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-12 text-center">
                        <h1 className="mb-4 text-2xl font-medium sm:text-3xl title-font">Contact Us</h1>
                        <p className="mx-auto text-base leading-relaxed lg:w-2/3">Please reach us out here</p>
                    </div>
                    <div className="mx-auto lg:w-1/2 md:w-2/3">
                        <div className="flex flex-wrap -m-2">
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="name" className="text-sm leading-7">Name</label>
                                    <input style={inpText} type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-gray-50 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="email" className="text-sm leading-7">Email</label>
                                    <input style={inpText} type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="phone" className="text-sm leading-7">Phone No</label>
                                    <input style={inpText} type="text" id="phone" name="phone" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="topic" className="text-sm leading-7">Choose the service</label>
                                    <select style={inpText} name="service" className='w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300' id="topic">
                                        <option value="design">Design</option>
                                        <option value="writing">Writings</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full p-2">
                                <div className="relative">
                                    <label htmlFor="message" className="text-sm leading-7">Message</label>
                                    <textarea style={inpText} id="message" name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none resize-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300"></textarea>
                                </div>
                            </div>
                            <div className="w-full p-4">
                                <button type="submit" className="flex px-8 py-2 mx-auto text-lg text-black bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none hover:bg-gray-200">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactUs
