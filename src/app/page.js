'use client';

import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the phone icon from react-icons

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { imgSrc: '/images/slider1.jpg', text: 'Shivsena Party' },
    { imgSrc: '/images/slider2.jpg', text: 'Empowering Voters' },
    { imgSrc: '/images/slider3.jpg', text: 'Your Vote, Your Voice' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-100">
      {/* Image Slider Section */}
      <div className="relative">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].imgSrc})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
            <div className="absolute inset-0 flex justify-center items-center text-white">
              <h2 className="text-4xl sm:text-5xl font-bold z-10">{slides[currentIndex].text}</h2>
            </div>
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-black opacity-50 text-white hover:opacity-100"
        >
          &#60;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black opacity-50 text-white hover:opacity-100"
        >
          &#62;
        </button>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aadhar Card Section */}
            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
              <img
                src="/images/aadhar-card.jpg"
                alt="Aadhar Card"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Aadhar Card</h3>
              <p className="text-gray-700 mt-2">Apply for or update your Aadhar card for identification.</p>
              <button className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full">
                <FaPhoneAlt />
              </button>
            </div>

            {/* Ration Card Section */}
            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
              <img
                src="/images/ration-card.jpg"
                alt="Ration Card"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Ration Card</h3>
              <p className="text-gray-700 mt-2">Get your Ration Card for availing subsidized food and services.</p>
              <button className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full">
                <FaPhoneAlt />
              </button>
            </div>

            {/* Voter Registration Section */}
            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
              <img
                src="/images/voter-registration.jpg"
                alt="Voter Registration"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Voter Registration</h3>
              <p className="text-gray-700 mt-2">Register to vote and become an active participant in democracy.</p>
              <button className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full">
                <FaPhoneAlt />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hoarding Section */}
      <div className="bg-blue-600 py-12 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Us and Make a Difference!</h2>
        <p className="text-xl">Together, we can contribute to a better future for all. Register now and participate in the democratic process.</p>
        <button className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
          Get Started
        </button>
      </div>
    </div>
  );
}
