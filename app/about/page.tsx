"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
function About() {
  return (
    <div className="scroll-smooth">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[url('/qiimeetbg.png')] bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>

                    
            Hello. We&apos;re <br />
            <span className="text-[#EC066A]">Qiimeet.</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8"
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}>
            To us, love isn&apos;t just an emotion. it&apos;s the heartbeat of a fulfilled life.
          </motion.p>
          <motion.p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}>
            We are turning the page on modern dating.
            It&apos;s going to be about intention, kindness, and connection that actually feels good.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We started with one bold move. Today, we&apos;re building the most trusted and effective place to find love.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-16">
            {/* 2024 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-[#EC066A] text-2xl font-bold">2025</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Qiimeet is born</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We flipped dating norms and created a platform where meaningful connections happen first. 
                  No more endless swiping, just genuine conversations with people who share your values.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20"></div>
                  <Image
                    src="/couple.png"
                    alt="Qiimeet launch"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
            </div>

            {/* 2024 - Beyond Dating */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:order-first">
                <div className="relative">
                  <div className="absolute -inset-4 "></div>
                  <Image
                    src="/premium1.png"
                    alt="Qiimeet community"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-[#EC066A] text-2xl font-bold">2025</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Beyond dating</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We launched features to help people find their people. Because love is platonic, too. 
                  Whether you&apos;re looking for friendship, romance, or your life partner, Qiimeet makes it possible.
                </p>
              </div>
            </div>

            {/* Future */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-[#EC066A] text-2xl font-bold">2025</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Leading with love</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Now, we&apos;re building a future where love feels possible for everyone. Using technology 
                  to deepen human connection, not replace it. Creating a community where everyone feels welcome.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 "></div>
                  <Image
                    src="/couple3.webp"
                    alt="Qiimeet future"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full py-20 bg-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Our mission is to bring people closer to love. We are building the world&apos;s smartest and most 
            emotionally intelligent matchmaker to do that.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                >
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Intentional Connections</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe finding love online should feel intentional, safe, and authentic. Every feature is designed with care and purpose.
              </p>
            </motion.div>

            <motion.div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                >
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Safe & Respectful</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating the most trusted space to find love, where connection is rooted in respect and safety is our priority.
              </p>
            </motion.div>

            <motion.div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                >
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Technology for Good</h3>
              <p className="text-gray-400 leading-relaxed">
                Using everything we&apos;ve learned to build technology that deepens human connection, not replaces it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Our Founder</h2>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#EC066A]">The Visionaries Behind Qiimeet</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team founded Qiimeet with one goal: to build the most trusted space to find love, 
                  where meaningful connections happen naturally, and relationships are rooted in respect.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We lead with the same belief: that finding love online should feel intentional, safe, and authentic. 
                  Qiimeet is about more than dating. It&apos;s about helping people find what matters, with care, intention, and heart.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  That means using technology and AI to deepen human connection, not replace it. We&apos;re using everything 
                  we&apos;ve learned—the good, the imperfect and the honest—so that our entire community continues to feel welcome on Qiimeet.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20"></div>
                <Image
                  src="/ceo.png"
                  alt="Qiimeet team"
                  className="relative w-full h-auto max-w-lg rounded-3xl "
                  width={500}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative w-full py-20 bg-[#EC066A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Ready to Find Your Person?
          </motion.h2>
          <motion.p className="text-xl text-white/90 max-w-2xl mx-auto mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Join thousands of people who have found meaningful connections on Qiimeet. 
            Download the app and start your journey to love today.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.button className="bg-white hover:bg-gray-100 text-[#EC066A] font-semibold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
              Download for iOS
            </motion.button>
            <motion.button className="bg-white hover:bg-gray-100 text-[#EC066A] font-semibold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
              Download for Android
            </motion.button>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Image
              src="/qr3.png"
              alt="QR Code"
              className="w-24 h-24 rounded-lg shadow-lg border border-white/50"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default About;