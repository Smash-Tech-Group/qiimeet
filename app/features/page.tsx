"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

function Features() {
  return (
    <div className="scroll-smooth">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/qiimeetbg.png')]"></div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
            Features That <br />
            <span className="text-[#EC066A]">Make Love Happen</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}>
            Discover the tools and features designed to help you find meaningful connections and build lasting relationships.
          </motion.p>
          <motion.p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}>
            From smart matching to safe conversations, every feature is crafted with intention and care.
          </motion.p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to find and nurture meaningful connections, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Matching */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#EC066A]">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Matching</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our AI-powered algorithm learns your preferences and connects you with people who share your values, interests, and life goals.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Personality-based compatibility
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Lifestyle preference matching
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Location-based suggestions
                </li>
              </ul>
            </div>

            {/* Safe Conversations */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#EC066A]">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe Conversations</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chat with confidence knowing your conversations are protected by advanced safety features and community guidelines.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Photo verification
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Report and block features
                </li>
              </ul>
            </div>

            {/* Video Calls */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#EC066A]">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Calls</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Connect face-to-face with high-quality video calls. Perfect for virtual dates or getting to know someone better before meeting in person.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  HD video quality
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Screen sharing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Virtual date activities
                </li>
              </ul>
            </div>

            {/* Interest Groups */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#EC066A]">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interest Groups</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join communities based on your interests and hobbies. Meet like-minded people who share your passions and values.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Hobby-based communities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Local events and meetups
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Group discussions
                </li>
              </ul>
            </div>

            {/* Advanced Filters */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#EC066A]">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Filters</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fine-tune your search with detailed filters. Find exactly what you&apos;re looking for with precision and ease.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Age and distance preferences
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Lifestyle and values
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Education and career
                </li>
              </ul>
            </div>

            {/* Photo Sharing */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#EC066A]">
              <div className="w-16 h-16 bg-[#EC066A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Photo Sharing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Share your life through photos. Create albums, share moments, and let your personality shine through your pictures.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Private photo albums
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Moment sharing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#EC066A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Photo verification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="relative w-full py-20 bg-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Qiimeet Pro Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock premium features designed to enhance your dating experience and help you find love faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pro Feature 1 */}
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC066A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Unlimited Likes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Like as many profiles as you want without restrictions. Never miss a potential connection again.
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Feature 2 */}
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC066A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Advanced Search</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Use powerful search filters to find exactly the type of person you&apos;re looking for.
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Feature 3 */}
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC066A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Ad-Free Experience</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Enjoy a clean, distraction-free experience without any advertisements interrupting your conversations.
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Feature 4 */}
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC066A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Video Messages</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Send and receive video messages to add a personal touch to your conversations.
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Feature 5 */}
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC066A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Priority Support</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get priority customer support with faster response times and dedicated assistance.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="bg-[#242424] border border-gray-800 rounded-2xl p-8 hover:border-[#EC066A] transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC066A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Boost Profile</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Boost your profile visibility to get more matches and increase your chances of finding love.
                  </p>
                </div>
              </div>
            </div>
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
            Ready to Experience These Features?
          </motion.h2>
          <motion.p className="text-xl text-white/90 max-w-2xl mx-auto mb-12"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Download Qiimeet today and start using all these amazing features to find your perfect match.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.button className="bg-white hover:bg-gray-100 text-[#EC066A] font-semibold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
            >
              Download for iOS
            </motion.button>
            <motion.button className="bg-white hover:bg-gray-100 text-[#EC066A] font-semibold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
            >
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

export default Features