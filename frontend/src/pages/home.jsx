import React, { useState } from 'react'
import Image1 from '../assets/image 2.png'

import LogoSlider from '../components/LogoSlider.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import FinalSection from '../components/FinalSection.jsx'
import ContactUs from '../components/ContactUs.jsx'
import Team from '../components/Team.jsx'
import ServiceProvided from '../components/ServiceProvided.jsx'
import FreeProposal from '../components/FreeProposal.jsx'
import Navbar from '../components/Navbar.jsx'
import ServicesComp from '../components/ServicesComp.jsx'

const Home = () => {

  return (
  <div className="w-full flex flex-col items-center gap-10 pt-10 px-4 sm:px-8 md:px-16 lg:px-24">
  {/* Your components go here */}


    {/* header */}

  <Navbar/>

  <div className="w-full px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden">
  {/* Text Section */}
  <div className="flex flex-col justify-start items-start gap-8 max-w-full lg:max-w-[531px]">
    <h1 className="text-black text-3xl sm:text-4xl lg:text-6xl font-medium font-'Space_Grotesk' leading-tight">
      Navigating the digital landscape for success
    </h1>

    <p className="text-black text-base sm:text-lg lg:text-xl font-normal font-'Space_Grotesk' leading-7 max-w-full lg:max-w-[498px]">
      From pixel-perfect designs to AI-driven web experiences, we’re the one-stop agency for brands that refuse to blend in.
    </p>

    <button className="px-6 py-3 sm:px-9 sm:py-5 bg-zinc-900 rounded-2xl flex justify-center items-center gap-3">
      <span className="text-white text-base sm:text-xl font-normal font-'Space_Grotesk' leading-7">
        Get Started Today
      </span>
    </button>
  </div>

  {/* Image Section */}
  <img
    src={Image1}
    alt="Digital success"
    className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
  />
</div>

    {/* company logos */}

    <div className="w-full px-24 inline-flex justify-between items-start overflow-hidden">
       <LogoSlider/>
    </div>

    {/* services */}
    <ServicesComp/>

{/* free proposal */}

<FreeProposal/>

{/* case studies */}

<CaseStudies/>

{/* services-provided */}

<ServiceProvided/>

{/* Team */}

<Team/>

{/* testtimonials */}

<TestimonialSlider/>

{/* contact-us */}

<ContactUs/>

{/* final-section */}

<FinalSection/>

</div>
  )}

export default Home
