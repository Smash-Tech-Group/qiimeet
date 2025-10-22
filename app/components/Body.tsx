"use client"
import React from 'react'
import { useState, useRef } from 'react';
import { motion } from "motion/react"
import Image from 'next/image';
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
function Body() {


    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    
    const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    };

  return (
    <div>
        <section className="relative w-full h-screen flex items-center justify-center">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full object-cover"
                >
                <source src="https://res.cloudinary.com/dyq3cwnwl/video/upload/v1761044012/qiimeethero_rlzo1i.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-white/5">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                      className="text-5xl font-bold mb-4 text-plusJakarta"
                    >
                      Find Love That Lasts
                    </motion.h1>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                      className="text-lg max-w-xl mx-auto"
                    >
                        Qiimeet is more than just a dating app. it&apos;s a platform where
                        meaningful connections happen, tailored to help you find
                        someone who truly understands you.
                    </motion.p>
                </div>
            </div>

            <button
                onClick={togglePlay}
                className="absolute bottom-6 right-6 bg-white/70 hover:bg-white text-black font-semibold py-2 px-4 rounded-full transition z-10"
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>


            {/* Make dynamic and sticky later */}
            <Image
            src="/qr3.png"
            alt="QR Code"
            className="fixed bottom-6 left-6 w-20 h-20 rounded-lg shadow-lg border border-white/50 z-50"
            width={100}
            height={100}
      />
        </section>

        <section className='relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            
                <div className='flex flex-col space-y-6 lg:pr-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                        Your Path to <br />
                        <span className='text-[#EC066A]'>
                            Real Connections
                        </span>
                    </h2>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                        Qiimeet is a dating app designed to connect you
                        with people who share your values and vision for the
                        future. Whether you&apos;re looking for a friendship that
                        blossoms into something deeper or seeking your life
                        partner, Qiimeet makes the process easy, secure,
                        and purposeful.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                        <button className='bg-[#EC066A] hover:bg-[#d40560] text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg'>
                            Download Now
                        </button>
                        <button className='border-2 border-gray-300 hover:border-[#EC066A] text-gray-700 hover:text-[#EC066A] font-semibold py-3 px-8 rounded-full transition'>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className='flex justify-center lg:justify-end'>
                    <div className='relative'>
                        <div className='absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20'></div>
                        <Image
                            src="/couple.png"
                            alt="Happy couple using Qiimeet"
                            className="relative w-full h-auto max-w-lg rounded-3xl shadow-2xl"
                            priority
                            width={500}
                            height={600}
                         />
                    </div>
                </div>
            </div>
        </section>






        <section className='relative w-full py-20 bg-[#1a1a1a]'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
      
                <div className='flex justify-between items-center mb-12'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-white'>
                        Where like-minded<br />people come to meet
                    </h2>
                    <button className='hidden md:block bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-full transition transform hover:scale-105'>
                        Download Qiimeet
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                 
                    <motion.div className='bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300'
                                      initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                                        >
                        <div className='mb-6'>
                            <svg className='w-10 h-10 text-[#EC066A]' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z'></path>
                            </svg>
                        </div>
                        <p className='text-white text-lg leading-relaxed mb-6'>
                            Since using Qiimeet, I realized I&apos;m looking for genuine connections and I&apos;ve become a lot more intentional about dating, which has been very rewarding.
                        </p>
                        <div className='text-gray-400'>
                            <p className='font-medium'>Sarah, 28</p>
                        </div>
                    </motion.div>

                    <motion.div className='bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300'
                                      initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                                        >
                        <div className='mb-6'>
                            <svg className='w-10 h-10 text-[#EC066A]' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z'></path>
                            </svg>
                        </div>
                        <p className='text-white text-lg leading-relaxed mb-6'>
                            Qiimeet has opened a whole new world to me in terms of relationship possibilities and meaningful connections with like-minded people.
                        </p>
                        <div className='text-gray-400'>
                            <p className='font-medium'>Michael, 32</p>
                        </div>
                    </motion.div>

                  
                    <motion.div className='bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300'
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                                        >
                        <div className='mb-6'>
                            <svg className='w-10 h-10 text-[#EC066A]' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z'></path>
                            </svg>
                        </div>
                        <p className='text-white text-lg leading-relaxed mb-6'>
                            In my experience, most of the people I met on Qiimeet were very respectful, and I ended up having much better dates than on other apps!
                        </p>
                        <div className='text-gray-400'>
                            <p className='font-medium'>Jessica, 26</p>
                        </div>
                    </motion.div>
                </div>

               
                <div className='md:hidden mt-8 text-center'>
                    <button className='bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-full transition transform hover:scale-105'>
                        Download Qiimeet
                    </button>
                </div>
            </div>
        </section>





        <section className='relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                
                
                <div className='flex flex-1 justify-center lg:justify-end'>
                    <div className='relative'>
                        <div className='absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20'></div>
                        <Image
                            src="/couple.png"
                            alt="Happy couple using Qiimeet"
                            className="relative w-full h-auto max-w-lg rounded-3xl shadow-2xl"
                            loading="lazy"
                            width={500}
                            height={600}
                         />
                    </div>
                </div>
                
                <div className='flex flex-1 flex-col space-y-6 lg:pr-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                        Your Path to <br />
                        <span className='text-[#EC066A]'>
                            Real Connections
                        </span>
                    </h2>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                        Qiimeet is a dating app designed to connect you
                        with people who share your values and vision for the
                        future. Whether you&apos;re looking for a friendship that
                        blossoms into something deeper or seeking your life
                        partner, Qiimeet makes the process easy, secure,
                        and purposeful.
                    </p>
                </div>

                
            </div>
        </section>

        





        <section className='relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
               
                <div className='flex flex-col space-y-6 lg:pr-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                        Your Path to <br />
                        <span className='text-[#EC066A]'>
                            Real Connections
                        </span>
                    </h2>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                        Qiimeet is a dating app designed to connect you
                        with people who share your values and vision for the
                        future. Whether you&apos;re looking for a friendship that
                        blossoms into something deeper or seeking your life
                        partner, Qiimeet makes the process easy, secure,
                        and purposeful.
                    </p>
                </div>

               
                <div className='flex justify-center lg:justify-end'>
                    <div className='relative'>
                        <div className='absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20'></div>
                        <Image
                            src="/couple.png"
                            alt="Happy couple using Qiimeet"
                            className="relative w-full h-auto max-w-lg rounded-3xl shadow-2xl"
                            loading="lazy"
                            width={500}
                            height={600}
                         />
                    </div>
                </div>
            </div>
        </section>











        
        <section id='features' className='relative w-full min-h-screen flex items-center justify-center bg-[#EC066A] py-20 overflow-hidden'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
               
                <div className='text-white space-y-8'>
                    <div>
                        <h3 className='text-xl md:text-2xl font-semibold mb-2'>Get more with</h3>
                        <h2 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6'>
                            QIIMEET <span className='font-light'>PRO</span>
                        </h2>
                        <p className='text-lg md:text-xl mb-8'>
                            Upgrade your experience with QIIMEET Pro and unlock 30+ advanced features:
                        </p>
                    </div>

                   
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                      
                        <div className='space-y-3'>
                            <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#EC066A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'></path>
                                </svg>
                            </div>
                            <h4 className='text-lg font-semibold'>Unlimited chat history</h4>
                        </div>

                        <div className='space-y-3'>
                            <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#EC066A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'></path>
                                </svg>
                            </div>
                            <h4 className='text-lg font-semibold'>Unlimited private album sharing</h4>
                        </div>

                        <div className='space-y-3'>
                            <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#EC066A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
                                </svg>
                            </div>
                            <h4 className='text-lg font-semibold'>10x more profiles in your grid</h4>
                        </div>

                        <div className='space-y-3'>
                            <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#EC066A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'></path>
                                </svg>
                            </div>
                            <h4 className='text-lg font-semibold'>Ad-free experience</h4>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#EC066A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                                </svg>
                            </div>
                            <h4 className='text-lg font-semibold'>Advanced search and filters</h4>
                        </div>

                        <div className='space-y-3'>
                            <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#EC066A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'></path>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                                </svg>
                            </div>
                            <h4 className='text-lg font-semibold'>Send and receive videos</h4>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center lg:justify-end'>
                    <div className='relative max-w-md'>
                        <Image
                            src='/premium.png'
                            alt='Qiimeet Pro App Preview'
                            loading="lazy"
                            width={400}
                            height={800}
                            className='relative z-10 drop-shadow-2xl'
                        />
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Body