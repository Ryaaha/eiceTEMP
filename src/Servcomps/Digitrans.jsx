import React from "react";
import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

import dtdigital from "../assets/Compressed/dtdigital.svg";
import dtdesign from "../assets/Compressed/dtdesign.svg";
import dtconsulting from "../assets/Compressed/dtconsulting.svg";

import Footer from '../Othercomps/Footer.jsx';
import Copyright from '../Othercomps/Copyright.jsx';

function Digitrans()
{
    return (
       <div>
            <div className="bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 2xl:pt-2 pt-16">
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
                <div className="absolute inset-0 left-[10%]">
                        <img src={servicebannerpattern} alt="" />
                </div>
                    <div className="flex lg:flex-row flex-col py-20 items-center">
                        <div className="w-full">
                            <h1 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">Digital Transformation</h1>
                            <h2 className="text-blackk font-light sm:text-3xl text-2xl pb-4 pt-2">
                                {`"Revolutionize Your Business: Harness the Power of Digital for Sustainable Growth"`}
                            </h2>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="w-7/12">
                                <img src={dtransbanner} alt="" className="rounded-full"/>
                            </div>
                        </div>
                    </div>       
                </div>    
            </div>
            <div>
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-28">
                    <div className="grid grid-cols-2 gap-12 items-center justify-center">
                        <div>
                            <h1 className="text-blackk font-bold sm:text-5xl text-3xl sm:leading-tight leading-snug">
                                Embrace the Digital Future: 
                                <span className="text-bloo"> Transformation </span>
                                for Competitive Advantage
                            </h1>
                        </div>
                        <div>
                            <p className="font-medium text-justify text-lg">
                                In today's rapidly evolving digital landscape, businesses must adapt to stay relevant. At EICE, we offer comprehensive digital transformation services to propel your organization into the future. <br /><br />
                                Our strategic approach ensures alignment with your business objectives. Our experts combine industry insights with cutting-edge technologies to implement solutions that drive meaningful change. <br /><br />
                                We develop strategies that not only meet your goals but also enhance operational efficiency, capabilities, and customer experiences. Partner with EICE to navigate the digital revolution and achieve long-term success in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-20">
                <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Core Competencies</h1>
                <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center">Our Digital Transformation Expertise</h2>
                <div className="grid grid-cols-3 gap-6 pt-16">
                    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full bg-bloo/10">
                            <img src={dtdigital} alt="" />
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-xl">DIGITAL INNOVATION</h1>
                            <p>We identify and implement cutting-edge digital solutions to drive innovation and create new value streams for your business.</p>
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full bg-bloo/10">
                            <img src={dtconsulting} alt="" className="scale-[0.85]"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-xl">DATA-DRIVEN INSIGHTS</h1>
                            <p>We leverage advanced analytics and AI to extract actionable insights, enabling data-driven decision-making across your organization.</p>
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full bg-bloo/10">
                            <img src={dtdesign} alt="" className="scale-[0.8]"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-xl">DIGITAL EXPERIENCE DESIGN</h1>
                            <p>We create seamless, intuitive digital experiences that delight users across all devices and platforms, enhancing customer engagement and loyalty.</p>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-32">
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen pt-24 pb-16">
                    <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Why Choose EICE</h1>
                    <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center">Key Advantages of Partnering with EICE for Your Digital Transformation Journey</h2>
                </div>    
                <div className="bg-zinc-50">
                    <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-20">
                        <div className="py-6 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Holistic Approach: </span>We offer end-to-end digital transformation solutions, from strategy to implementation and beyond.
                            </p>
                        </div>
                        <div className="py-6 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Agile Methodologies: </span>
                                Our agile approach ensures flexibility, rapid iterations, and continuous improvement throughout the transformation process.
                            </p>
                        </div>
                        <div className="py-6 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Collaborative Partnership: </span>
                                We work closely with your team, fostering knowledge transfer and ensuring alignment with your organization's goals.
                            </p>
                        </div>
                        <div className="py-6 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Industry Expertise: </span>
                                Our team of experts brings deep knowledge across various industries, ensuring tailored solutions for your specific sector.
                            </p>
                        </div>
                        <div className="py-6 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Innovative Technologies: </span>
                                We leverage cutting-edge technologies like AI, IoT, and blockchain to drive innovation and create competitive advantages.
                            </p>
                        </div>
                        <div className="py-6 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Proven Track Record: </span>
                                Our successful implementations across various industries demonstrate our ability to deliver tangible results and ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright />
       </div>
    )
}

export default Digitrans;