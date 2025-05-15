import React, { useState } from 'react'
import Image1 from '../assets/image 2.png'

import LogoSlider from '../components/LogoSlider.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import Services from '../components/Services.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import FinalSection from '../components/FinalSection.jsx'
import ContactUs from '../components/ContactUs.jsx'
import Team from '../components/Team.jsx'
import ServiceProvided from '../components/ServiceProvided.jsx'
import FreeProposal from '../components/FreeProposal.jsx'
import Navbar from '../components/Navbar.jsx'

const Home = () => {

  return (
    <div className="w-full inline-flex flex-col justify-start items-start gap-15 pt-10">

    {/* header */}

    <Navbar/>
    

    {/* mid-section-1*/}

    <div className="w-full px-24 inline-flex justify-between items-start overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-12">
            <div className="w-[531px] justify-start text-black text-6xl font-medium font-'Space_Grotesk'">Navigating the digital landscape for success</div>
            <div className="w-[498px] justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">From pixel-perfect designs to AI-driven web experiences, we’re the one-stop agency for brands that refuse to blend in.      </div>
            <button data-property-1="Button primary" className="px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-start items-start gap-3 cursor-pointer">
                <div className="text-center justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Get Started Today</div>
            </button>
        </div>
        <img src={Image1} className="w-[600px] h-[470px]"  />
    </div>

    {/* company logos */}

    <div className="w-full px-24 inline-flex justify-between items-start overflow-hidden">
       <LogoSlider/>
    </div>

    {/* services */}
    <Services/>

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
