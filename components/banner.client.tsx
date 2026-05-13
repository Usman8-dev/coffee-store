'use client';

import React from 'react';

export default function Banner() {
  const handlerOnClick = () => {
    console.log('yes banner')
  };

  return (
    <section className="flex items-start px-6 md:px-16 ">
      
      {/* Right Side Content */}
      <div className="ml-auto max-w-2xl text-center md:text-left space-y-6">
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Coffee Shop
        </h1>

        <h2 className="text-lg md:text-xl text-gray-200 leading-8">
          Order premium, ethically sourced coffee beans from here.
          Small-batch roasted for peak flavor. Shop online for fast
          shipping directly to your doorstep.
        </h2>

        <button
          onClick={handlerOnClick}
          className="
            px-6 py-3
            text-lg font-medium
            rounded-2xl
            bg-blue-600 hover:bg-blue-700
            text-white
            shadow-lg hover:shadow-xl
            transition-all duration-300
          "
        >
          View Store Nearby
        </button>

      </div>
    </section>
  );
}