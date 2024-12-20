"use client";

import BlogPage from '@/components/Blog';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function Blog() {
  return (
    <>
      <Header />

<div>
 
  <div className="relative top-24 left-0 sm:left-1/2 md:left-[690px] sm:left-1/4 transform sm:-translate-x-1/2">
    <img src="/logo.png" className="w-16 h-16 mx-auto" />
  </div>
  
  
  <div className="relative flex items-center justify-center">
    <img
      src="/shop 1.png"
      alt="Shop Banner"
      className="w-full h-auto object-cover"
    />

    
    <div className="absolute top-[80px] sm:top-[60px] md:top-[100px] text-center font-sans font-bold text-3xl text-black w-full">
      <h1 className="relative text-xl sm:text-2xl md:text-3xl left-0">Blog</h1>

     
      <div className="flex flex-col text-[20px] font-light sm:text-[18px] md:text-[20px] lg:text-[22px]">
        <h2 className="flex items-center justify-center">
          Home <FaGreaterThan className="mx-2" /> Blog
        </h2>
      </div>
    </div>
  </div>
</div>

       
        <div>
          <BlogPage />
        </div>

        
        <div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => console.log(`Page ${page} clicked`)} 
                style={{
                  backgroundColor: page === 1 ? '#b58900' : '#f8f5ec', 
                  color: page === 1 ? '#fff' : '#000',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  padding: '10px 15px',
                  cursor: 'pointer',
                }}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => console.log('Next clicked')} 
              style={{
                backgroundColor: '#f8f5ec',
                color: '#000',
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div>
           <div className="flex justify-between items-center bg-peach px-8 py-6 mt-3">
    <div className="flex items-center space-x-4">
        <i className="text-2xl">
            <GrTrophy />
        </i>
        <div>
            <h3 className="font-bold text-lg">High Quality</h3>
            <p className="text-sm text-gray-600">crafted from top materials</p>
        </div>
    </div>

    <div className="flex items-center space-x-4">
        <i className="text-2xl">
            <SiTicktick />
        </i>
        <div>
            <h3 className="font-bold text-lg">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
    </div>

    <div className="flex items-center space-x-4">
        <i className="text-2xl">
            <FaHandHoldingHeart />
        </i>
        <div>
            <h3 className="font-bold text-lg">Free Shipping</h3>
            <p className="text-sm text-gray-600">Order over 150 $</p>
        </div>
    </div>

    <div className="flex items-center space-x-4">
        <i className="text-2xl">
            <BiSupport />
        </i>
        <div>
            <h3 className="font-bold text-lg">24 / 7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
    </div>
</div>

           </div>

<div><Footer /></div>
      
    </>
  );
}
