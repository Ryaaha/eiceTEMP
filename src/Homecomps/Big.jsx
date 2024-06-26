import React, { useRef, useState, useEffect } from "react";
import aiml from "../assets/Compressed/aiml.svg";
import devops from "../assets/Compressed/devops.svg";
import digitrans from '../assets/Compressed/digitrans.svg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import hexagon from '../assets/hexagon.png';


function Big() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; // Slow down the video playback to half speed
        }
    }, []);

    const slides = [
        {
            content: (
                <div className="container mx-auto my-auto pt-8 sm:p-0 sm:max-w-[1300px]">
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-blackk text-5xl sm:text-5xl 2xl:text-6xl font-base leading-tight">
                      Transforming your Business through
                      <span className="text-bloo font-bold block mt-2">Generative AI</span>
                    </h1>
                    <p className="text-blackk/80 text-xl sm:text-xl">
                    As a specialized artificial intelligence development company, we focus on creating cutting-edge Generative AI software solutions. 
                    Our expert team of AI developers excels in deploying generative models such as GPT-3, GANs, and variational autoencoders.
                    </p>
                    <div className="pt-4">
                      <a href="/resources/casestudies">
                        <button className="py-4 px-24 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
                          Explore
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center 2xl:justify-end 2xl:scale-[1.15] 2xl:pl-2 scale-100">
                    <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg  overflow-hidden">
                      <img className="w-full h-full rounded-lg " src={aiml} alt="Generative AI" />
                    </div>
                  </div>
                </div>
              </div>
            ),
        },   
        {
            content: (
                <div className="container mx-auto my-auto pt-8 sm:p-0 sm:max-w-[1300px]">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col space-y-6">
                      <h1 className="text-blackk text-5xl sm:text-5xl 2xl:text-6xl font-base leading-tight">
                        Improving your Efficiency with
                        <span className="text-bloo font-bold block mt-2">DevOps</span>
                      </h1>
                      <p className="text-blackk/80 text-xl sm:text-xl">
                      Being a top DevOps development firm, we specialize in optimizing your business's infrastructure and development operations. Maximize your business potential with our customized DevOps solutions. 
                      Whether you're a visionary business owner striving to lead, our array of DevOps development services enables you to thrive and innovate in the digital age.
                      </p>
                      <div className="pt-4">
                        <a href="/resources/casestudies">
                          <button className="py-4 px-24 font-semibold rounded transition duration-200 border-2 
                                          border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md 
                                          hover:shadow-bloo/30 text-lg 2xl:text-xl">
                            Explore
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className=" flex justify-center 2xl:justify-end 2xl:scale-[1] scale-100">
                      <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg  overflow-hidden">
                        <img className="w-full h-full rounded-lg" src={devops} alt="DevOps" />
                      </div>
                    </div>
                  </div>
                </div>

            ),
        },
        {
            content: (
             
                <div className="container mx-auto my-auto pt-8 sm:p-0 sm:max-w-[1300px]">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col space-y-6">
                      <h1 className="text-blackk text-5xl sm:text-5xl 2xl:text-6xl font-base leading-tight">
                        Driving business Growth with
                        <span className="text-bloo font-bold block mt-2 2xl:text-nowrap text-wrap">Digital Transformation</span>
                      </h1>
                      <p className="text-blackk/80 text-xl sm:text-xl">
                      As the digital landscape gains significance, businesses are adopting digital strategies and consulting to meet evolving consumer preferences. Flexsin offers tailored digital transformation services, 
                      leveraging expertise to foster innovation and enhance operational efficiency, capabilities, processes, and customer experiences. 
                      </p>
                      <div className="pt-4">
                        <a href="/resources/casestudies">
                          <button className="py-4 px-24 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
                            Explore
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center 2xl:justify-end 2xl:scale-[1.15] overflow-visible scale-100">
                      <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg overflow-visible">
                        <img className="w-full h-full pb-12 rounded-lg overflow-visible" src={digitrans} alt="Digital Transformation" />
                      </div>
                    </div>
                  </div>
                </div>

            ),
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        let newIndex;
        if (isFirstSlide) {
            newIndex = slides.length - 1;
        } else {
            newIndex = currentIndex - 1;
        }
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        let newIndex;
        if (isLastSlide) {
            newIndex = 0;
        } else {
            newIndex = currentIndex + 1;
        }

        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex])

    return (
        <div>
          <div className="relative overflow-hidden font-manrope flex text-blackk 2xl:pr-64 2xl:pl-64 2xl:py-40 max-h-[1000px] xl:pr-64 xl:pl-64 xl:pt-32 xl:pb-32 items-center justify-center pb-24 pt-44 pl-4 pr-4">
            <div className="w-full h-full bg-bloo/15 -rotate-45 absolute z-1 left-[50%] blur-[300px]"></div>
            {/* <div className="left-[50%] w-full h-full scale-75 rotate-45 bg-bloo/5 absolute z-1 blur-[70px]"></div>
            <div className="right-[50%] w-full h-full scale-75 rotate-45 bg-bloo/5 absolute z-1 blur-[70px]"></div>
            <div className="right-[25%] w-full h-full scale-75 -rotate-45 bg-bloo/5 absolute z-1 blur-[70px]"></div>
            <div className="left-[25%] w-full h-full scale-75 -rotate-45 bg-bloo/5 absolute z-1 blur-[70px]"></div> */}


            <div className="z-20 overflow-hidden h-auto absolute bottom-0 left-0 
                            2xl:scale-[.8] 2xl:w-1/2 2xl:h-auto 2xl:-ml-60 2xl:-mb-48 2xl:1/2 2xl:block 
                            xl:scale-100 xl:w-1/2 xl:h-auto xl:-ml-60 xl:-mb-48 2xl:1/2 xl:block 
                            sm:-ml-24 sm:-mb-20
                            -mb-48 -ml-48 scale-75 hidden">
                <img 
                    className="w-1/2 h-auto object-top-right animate-spin-slow" 
                    src={hexagon}
                    alt="" 
                />
            </div>  
            <div className="z-20 overflow-hidden h-auto absolute top-0 right-0
                            2xl:scale-[.8] 2xl:w-1/2 2xl:h-auto 2xl:-mr-[40rem] 2xl:-mt-64 2xl:block
                            xl:scale-100 xl:w-1/2 xl:h-auto xl:-mr-[32rem] xl:-mt-64 xl:block

                            sm:-mr-80 sm:-mt-24
                            -mr-[34rem] -mt-[9.5rem] scale-[.6] hidden">
                <img
                    className="w-1/2 h-auto object-left-bottom animate-spin-slow"
                    src={hexagon}
                    alt=""
                />
            </div>

            <div className="">
                {/* <div className="absolute inset-0 z-10 backdrop-filter backdrop-blur-[30px] bg-white/50"></div>     */}
            </div>
            <div className='z-20 2xl:flex 2xl:flex-row 2xl:max-h-[1000px] w-screen relative group 2xl:items-center 2xl:text-balance text-left'>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 -ml-32">
                    <div onClick={prevSlide} className='rounded-full text-blackk/50 cursor-pointer'>
                        <BsChevronLeft size={50} />
                    </div>
                </div>
                <div className="w-full px-2 sm:px-16 2xl:h-[500px]"> {/* Added padding here */}
                    <TransitionGroup className='scale-100 rounded-2xl bg-center bg-cover transition duration-500 2xl:h-full flex items-center'>
                        <CSSTransition
                            key={currentIndex}
                            timeout={500}
                            classNames="fade"
                            exit={false}
                        >
                            {slides[currentIndex].content}
                        </CSSTransition>
                    </TransitionGroup>
                    
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 -mr-32">
                    <div onClick={nextSlide} className='rounded-full text-blackk/50 cursor-pointer'>
                        <BsChevronRight size={50} />
                    </div>
                </div>
                <div className="cursor-pointer absolute -bottom-[20%] left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                  {slides.map((slide, slideIndex) => (
                      <RxDotFilled 
                          size={40}
                          key={slideIndex} 
                          className={currentIndex === slideIndex ? 'text-blue-900' : 'text-blue-900/30'} 
                          onClick={() => goToSlide(slideIndex)} 
                      />
                  ))}
              </div>
            </div>
        </div>
        <div className="pb-1 shadow-sm shadow-blackk/30"></div>
    </div>
    );
}


export default Big;

{/* 
    
    ALTERNATE MEANS OF ADDING BUTTONS, TO ADD, REMOVE THE CURRENT BUTTONS AND PUT THIS BELOW THE 
    SLIDE DIV IN ITS OWN DIV

    <div className="pt-8 grid grid-cols-3 items-center justify-center w-full ">
                    <div className="flex flex-row items-center justify-end">
                        <div className='absolute text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className=' text-2xl cursor-pointer'
                            >
                                <RxDotFilled className={currentIndex === slideIndex ? 'text-blue-500' : ''} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-center">
                        <div className='absolute text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                    </div>
                </div> */}