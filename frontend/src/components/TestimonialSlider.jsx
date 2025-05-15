import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import InvertedArrow from '../assets/Polygon 1.jpg'

import ArrowR from '../assets/Arrow right.svg'
import ArrowL from '../assets/Arrow left.svg'
import BVector from '../assets/BlueVector.svg'


const testimonials = [
    {
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
        review: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
        review: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
        review: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    }
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1))
  }

  const current = testimonials[currentIndex]

  const slideWidth = 606


  return (
    <>
    <div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Testimonials</div>
        </div>
    </div>
    <div className="w-[473px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>
</div>

    <div className="w-full h-screen flex items-center justify-center">
    <div className="w-[1240px] h-[625px] relative bg-zinc-900 rounded-[45px] overflow-hidden">
        <div className="absolute top-[84px] left-0 right-0 flex flex-col justify-start items-center gap-32">

        {/* slider wrapper */} 
        
        <div className='pl-10 pr-10'>

        <div className="w-[606px] mx-auto">
        <div className="flex transition-transform duration-500 ease-in-out gap-10"
            style={{
              transform: `translateX(-${(currentIndex) * (606 + 40)}px)`,
            }}
          >
          
          {testimonials.map((item, index) => (

            // child div 1
        <div key={index} className="min-w-[606px] flex flex-col items-start gap-4">
            {/* Blue bordered review box */}
        <div className="w-full border border-cyan-300 rounded-[45px] p-4">
        <div className="flex flex-col justify-start items-end gap-5">
          <div className="w-[606px] h-60 relative">
            <div className="w-[502px] left-[52px] top-[48px] absolute justify-start text-white text-lg font-normal font-'Space_Grotesk'">
            {item.review}
            </div>
            </div>
          </div>
        </div>

        <img src={InvertedArrow}/>  
    
  {/* Name and role outside the border */}
    <div className="pl-10">
      <span className="text-cyan-300 text-xl font-medium font-'Space_Grotesk'">
        {item.name}
        <br />
      </span>
      <span className="text-white text-lg font-normal font-'Space_Grotesk'">
        {item.role}
      </span>
    </div>
  </div>


          ))}
          </div>
          </div>
          </div>
          
          {/* child div 2 */}
          
          
          <div className="w-full mb-3 flex justify-center items-center gap-8">
            <img
              src={ArrowL}
              alt="Left"
              className="cursor-pointer"
              onClick={prevSlide}
            />
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <img
                  key={index}
                  src={BVector}
                  className={`w-5 h-5 rotate-45 transition-all ${
                    index === currentIndex ? 'opacity-100' : 'opacity-40'
                  }`}
                  
                  alt="dot"
                />
              ))}
            </div>


            <img
              src={ArrowR}
              alt="Right"
              className="cursor-pointer"
              onClick={nextSlide}
            />
          </div>

        </div>
      </div>
    </div>
  </>
  )
}  

export default TestimonialSlider