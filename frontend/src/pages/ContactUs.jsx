import React from 'react'
import Navbar from '../components/Navbar'
import Machine from '../assets/Machine.png'
import FinalSection from '../components/FinalSection'
import contactus from '../assets/contactus.png'

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
    <Navbar/>
    
<div className='flex-grow'>
<section className="w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-between bg-zinc-100 rounded-[45px] max-w-[1236px] mx-auto mt-15">

  <img className="sm:w-[600px] sm:h-[600px] md:w-[600px] md:h-[600px] lg:w-[600px] lg:h-[600px] mr-5 ml-5" src={contactus} />

  <div className="w-full px-4 py-10 flex flex-col items-center gap-8 bg-zinc-100">
  {/* Full Name */}
  <div className="w-full max-w-[555px] flex flex-col gap-2">
    <label className="text-black text-xl font-'Space_Grotesk'">
      Full Name <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      placeholder="Enter your name"
      className="h-16 px-4 bg-white rounded-xl border border-black text-black text-lg font-'Space_Grotesk'"
    />
  </div>

  {/* Email */}
  <div className="w-full max-w-[555px] flex flex-col gap-2">
    <label className="text-black text-xl font-'Space_Grotesk'">
      Email <span className="text-red-600">*</span>
    </label>
    <input
      type="email"
      placeholder="Enter your email"
      className="h-16 px-4 bg-white rounded-xl border border-black text-black text-lg font-'Space_Grotesk'"
    />
  </div>

  {/* Contact Number */}
  <div className="w-full max-w-[555px] flex flex-col gap-2">
    <label className="text-black text-xl font-'Space_Grotesk'">
      Contact Number <span className="text-red-600">*</span>
    </label>
    <input
      type="tel"
      placeholder="Enter your number"
      className="h-16 px-4 bg-white rounded-xl border border-black text-black text-lg font-'Space_Grotesk'"
    />
  </div>

  {/* Project Description */}
  <div className="w-full max-w-[555px] flex flex-col gap-2">
    <label className="text-black text-xl font-'Space_Grotesk'">
      Project Description
    </label>
    <textarea
      rows={4}
      placeholder="Describe your project"
      className="px-4 py-3 bg-white rounded-xl border border-black text-black text-lg font-'Space_Grotesk' resize-none"
    />
  </div>

  {/* Submit Button */}
  <div className="w-full max-w-[555px]">
    <button className="w-full h-16 bg-cyan-300 rounded-xl text-black text-xl font-'Space_Grotesk' cursor-pointer">
      Submit
    </button>
  </div>
</div>
</section>

    {/* </section>     */}
    </div>

    <section className="relative w-full sm:h-[950px] sm:mb-30 lg:h-[600px] lg:mb-30 px-12 py-20 bg-white rounded-[40px] shadow-[0px_6px_0px_0px_rgba(0,0,0,1.00)] border border-neutral-700 max-w-[1236px] mx-auto mt-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:mt-[-30px]">
        {/* Text Content */}
        <div className="flex-1 space-y-12">
          <h2 className="text-3xl font-medium font-'Space_Grotesk' text-black">
            Ready to Build Something Amazing?
          </h2>
          <div className="h-px w-[400x] bg-neutral-600" />
          <div className="text-xl sm:w-[500px] font-normal font-'Space_Grotesk' text-black ">
            From web development to AI and design, our team helps you grow faster with smarter tech and creative strategy. Let’s build together.
          </div>
          <p className="text-xl font-bold font-'Space_Grotesk' text-black">
            Let’s build together to grow your online presence
          </p>
          <button className="w-full sm:w-[520px] h-16 bg-cyan-300 rounded-xl flex items-center justify-center cursor-pointer">
            <span className="text-black text-xl font-normal font-'Space_Grotesk'">Start My Project</span>
          </button>
        </div>
    
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Machine}
            alt="Machine Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
    
    <div className='min-h-screen flex flex-col justify-end items-center'>
      <FinalSection/>
    </div>
</div>
  )
}

export default ContactUs