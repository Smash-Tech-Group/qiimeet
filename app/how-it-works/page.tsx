"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

function Works() {
  return (
    <div className="scroll-smooth">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/qiimeetbg.png')]"></div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
            How Qiimeet <br />
            <span className="text-[#EC066A]">Works</span>
          </motion.h1>
          <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}>
            Finding love has never been easier. Follow our simple process to connect with amazing people and build meaningful relationships.
          </motion.p>
          <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}>
            From creating your profile to meeting your perfect match, we guide you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple Steps to Love</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to find and connect with people who share your values and interests.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                  
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#EC066A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Create Your Profile</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Start by telling us about yourself. Share your interests, values, and what you&apos;re looking for in a relationship. 
                  Upload photos that show your personality and lifestyle.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Add photos that represent you
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Complete your bio and interests
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Set your preferences and deal-breakers
                  </li>
                </ul>
              </motion.div>
              <div className="flex justify-center">

                <motion.div 
                    className="relative"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                  <div className="absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20"></div>
                  <Image
                    src="/screen1.png"
                    alt="Create profile step"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={200}
                    height={200}
                  />
                </motion.div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:order-first">
                <motion.div
                  className="relative"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>

                  <div className="absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20"></div>
                  <Image
                    src="/screen2.png"
                    alt="Smart matching step"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={200}
                    height={200}
                  />
                </motion.div>
              </div>
              <motion.div 
                  className="space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#EC066A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Smart Matching</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our AI analyzes your profile and preferences to find compatible matches. We consider personality traits, 
                  lifestyle choices, and relationship goals to connect you with the right people.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    AI-powered compatibility scoring
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Location-based suggestions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Interest and value alignment
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                  className="space-y-6"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#EC066A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Start Conversations</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When you find someone interesting, start a conversation! Our platform encourages meaningful interactions 
                  from the beginning, helping you build genuine connections.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Send thoughtful messages
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Share photos and moments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Use conversation starters
                  </li>
                </ul>
              </motion.div>
              <div className="flex justify-center">
                <motion.div 
                    className="relative"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                  <div className="absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20"></div>
                  <Image
                    src="/screen3.png"
                    alt="Start conversations step"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={200}
                    height={200}
                  />
                </motion.div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:order-first">
                <motion.div 
                    className="relative"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                  <div className="absolute -inset-4 bg-[#EC066A] rounded-3xl blur-2xl opacity-20"></div>
                  <Image
                    src="/screen4.png"
                    alt="Meet in person step"
                    className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl"
                    width={200}
                    height={200}
                  />
                </motion.div>
              </div>
              <motion.div 
                  className="space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#EC066A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Meet & Connect</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When you&apos;re ready, take your connection offline! Meet for coffee, go on adventures together, 
                  or join group activities. We provide tools to help you plan safe and fun meetups.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Plan safe meetups
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Join group activities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#EC066A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Build lasting relationships
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="relative w-full py-20 bg-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Qiimeet?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re different from other dating apps. Here&apos;s what makes us special and why thousands of people choose Qiimeet to find love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Safe & Secure</h3>
              <p className="text-gray-400 leading-relaxed">
                Your safety is our priority. We use advanced verification and safety features to ensure a secure dating environment.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
            className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -5 }}>

              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Meaningful Matches</h3>
              <p className="text-gray-400 leading-relaxed">
                Our AI focuses on compatibility beyond just looks, helping you find people who share your values and life goals.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300 text-center"
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                          whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Focus</h3>
              <p className="text-gray-400 leading-relaxed">
                Join interest groups and communities to meet like-minded people beyond just romantic connections.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300 text-center"
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                          whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quality Conversations</h3>
              <p className="text-gray-400 leading-relaxed">
                We encourage meaningful conversations from the start, helping you build genuine connections.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300 text-center"
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                          whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Video Features</h3>
              <p className="text-gray-400 leading-relaxed">
                Connect face-to-face with video calls and messages to build deeper connections before meeting in person.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fast Results</h3>
              <p className="text-gray-400 leading-relaxed">
                Our efficient matching system helps you find compatible people quickly, so you can focus on building relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* story1 */}
      <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real people, real connections, real love stories. See how Qiimeet has helped thousands find their perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* random copy */}
            <motion.div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 1 * 0.1 }}
                >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-gray-200">
                  <Image 
                    src="/ng/nigerian1.jpeg" 
                    alt="User Avatar" 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah & Michael</h3>
                <p className="text-gray-600">Married 6 months after meeting</p>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot;Qiimeet helped us find each other through shared interests. We both loved hiking and photography, 
                and our first date was a sunrise hike. We&apos;ve been inseparable ever since!&quot;
              </p>
            </motion.div>

            {/* randomm copy */}
            <motion.div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 2 * 0.1 }}
                  >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-gray-200">
                  <Image 
                    src="/ng/nigerian2.jpeg" 
                    alt="User Avatar" 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jessica & David</h3>
                <p className="text-gray-600">Engaged after 8 months</p>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot;The video call feature was amazing! We talked for hours before meeting in person. 
                When we finally met, it felt like we already knew each other. Now we&apos;re planning our wedding!&quot;
              </p>
            </motion.div>

            {/* Random copy */}
            <motion.div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + 3 * 0.1 }}
                >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-gray-200">
                  <Image 
                    src="/ng/nigerian3.jpeg" 
                    alt="User Avatar" 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma & Alex</h3>
                <p className="text-gray-600">Living together for 1 year</p>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot; We met through a cooking interest group on Qiimeet. Our first date was cooking together, 
                and we&apos;ve been cooking and living together ever since. It&apos;s been the best year of our lives!&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 bg-[#EC066A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Ready to Start Your Love Story?
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
            <motion.button 
            className="bg-white hover:bg-gray-100 text-[#EC066A] font-semibold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
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

export default Works