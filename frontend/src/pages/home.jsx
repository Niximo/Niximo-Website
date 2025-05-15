import React, { useState } from 'react'
import Logo from '../assets/niximo_group.png'
import Image1 from '../assets/image 2.png'
import Star2 from '../assets/Star 2.svg'
import Star4 from '../assets/Star 4.svg'
import BVector from '../assets/BlueVector.svg'
import Ellipse17 from '../assets/Ellipse 17.svg'
import Ellipse18 from '../assets/Ellipse 18.svg'
import Minus from '../assets/Minus.svg'
import Plus from '../assets/Plus.svg'
import Jane from '../assets/Jane.jpg'
import John from '../assets/John.jpg'
import Emily from '../assets/Emily.jpg'
import Michael from '../assets/Michael.jpg'
import Sarah from '../assets/Sarah.jpg'
import Brian from '../assets/Brian.jpg'
import LinkedIn from '../assets/Linkedin.svg'

import MaskGroup from '../assets/Mask group.svg'
import BlackVector from '../assets/BlackVector.svg'

import LogoSlider from '../components/LogoSlider.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import Services from '../components/Services.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import FinalSection from '../components/FinalSection.jsx'
import ContactUs from '../components/ContactUs.jsx'
import Team from '../components/Team.jsx'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="w-[1440px] inline-flex flex-col justify-start items-start gap-15 pt-10">

        {/* Main header with logo */}

    <div className="w-[1440px] px-20 inline-flex justify-between items-center overflow-hidden">
        <div className="py-2.5 flex justify-start items-start gap-2.5 overflow-hidden">
            <img src={Logo} alt="Logo" className="w-44 h-12" />
        </div>

        {/* header menu */}

        <div className="flex justify-center items-center gap-10">
            <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">About us</div>
            <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Services</div>
            <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Use Cases</div>
            <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Pricing</div>
            <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Blog</div>
            <div data-property-1="Button secondary" className="px-9 py-5 rounded-2xl outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-start items-start gap-2.5">
                <div className="text-center justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Request a quote</div>
            </div>
        </div>
    </div>

    {/* mid-section-1*/}

    <div className="w-[1440px] px-24 inline-flex justify-between items-start overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-12">
            <div className="w-[531px] justify-start text-black text-6xl font-medium font-'Space_Grotesk'">Navigating the digital landscape for success</div>
            <div className="w-[498px] justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">From pixel-perfect designs to AI-driven web experiences, we’re the one-stop agency for brands that refuse to blend in.      </div>
            <button data-property-1="Button primary" className="px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-start items-start gap-3 cursor-pointer">
                <div className="text-center justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Get Started Today</div>
            </button>
        </div>
        <img src={Image1} className="w-[650px] h-[549px]"  />
    </div>

    {/* company logos */}

    <div className="w-[1440px] px-24 inline-flex justify-between items-start overflow-hidden">
       <LogoSlider/>
    </div>

    {/* services */}
    <Services/>

{/* mid section-5 */}

<div className="w-[1440px] h-96 relative">
    <div className="w-[1440px] px-24 left-0 top-0 absolute inline-flex justify-start items-center">
        <div className="w-[1240px] h-80 px-14 bg-zinc-100 rounded-[45px] flex justify-start items-center gap-72">
            <div className="inline-flex flex-col justify-start items-start gap-6">
                <div className="w-[500px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Let’s make things happen</div>
                <div className="w-[500px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Contact us today to learn more about how our services can help your business grow and succeed online.</div>
                <div data-property-1="Button primary" className="px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-start items-start gap-2.5">
                    <div className="text-center justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Get your free proposal</div>
                </div>
            </div>
        </div>
        <div className="w-[494px] h-96 relative">
            {/* 3 ellips */}
            <div className="w-80 h-16 left-0 top-[163px] absolute origin-top-left rotate-180 rounded-full border border-black" />
            <div className="w-80 h-16 left-0 top-[188px] absolute origin-top-left rotate-180 rounded-full border border-black" />
            <div className="w-80 h-16 left-0 top-[213px] absolute origin-top-left rotate-180 rounded-full border border-black" />
            <img src={Star2} className="w-32 h-16 left-[115.25px] top-[264px] absolute origin-top-left rotate-[-135deg]"/>
            <img src={Star4} className="w-32 h-32 left-[90px] top-[124px] absolute origin-top-left rotate-180" />
            <img src={BVector} className="w-32 h-32 left-[122px] top-[153px] absolute origin-top-left rotate-180"/>
            <img src={Ellipse17} className="w-32 h-32 left-[163px] top-[153px] absolute origin-top-left rotate-180 bg-white rounded-full" />
        </div>
    </div>
</div>

{/* case studies */}

<CaseStudies/>

{/* mid-section-8 */}

<div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10 pt-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Our Working Process </div>
        </div>
    </div>
    <div className="w-72 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Step-by-Step Guide to Achieving Your Business Goals</div>
</div>

{/* services-provided */}

<div className="px-24 inline-flex flex-col justify-start items-start gap-7">
    <div className="w-[1234px] px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-7 overflow-hidden">
        <div className="w-[1117px] inline-flex justify-between items-center overflow-hidden">
            <div className="flex justify-start items-center gap-6">
                <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">01</div>
                <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Consultation</div>
            </div>
            <button data-property-1="Minus" className="w-14 h-14 relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <img src={Minus} /> : <img src={Plus} /> }
            </button>
        </div>

        {isOpen && (
        <>
        <div className="w-[1114px] h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
        <div className="w-[1114px] h-14 justify-start text-black text-lg font-normal font-'Space_Grotesk'">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</div>
        </>
        )}
    </div>
    <div className="w-[1234px] px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="w-[1117px] inline-flex justify-between items-center overflow-hidden">
            <div className="flex justify-start items-center gap-6">
                <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">02</div>
                <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Research and Strategy Development</div>
            </div>
            <div data-property-1="Plus" className="w-14 h-14 relative">
                <img src={Plus}/>
            </div>
        </div>
    </div>
    <div className="w-[1234px] px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="w-[1117px] inline-flex justify-between items-center overflow-hidden">
            <div className="flex justify-start items-center gap-6">
                <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">03</div>
                <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Implementation</div>
            </div>
            <div data-property-1="Plus" className="w-14 h-14 relative">
                <img src={Plus}/>
            </div>
        </div>
    </div>
    <div className="w-[1234px] px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="w-[1117px] inline-flex justify-between items-center overflow-hidden">
            <div className="flex justify-start items-center gap-6">
                <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">04</div>
                <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Monitoring and Optimization</div>
            </div>
            <div data-property-1="Plus" className="w-14 h-14 relative">
                <img src={Plus}/>
            </div>
        </div>
    </div>
    <div className="w-[1234px] px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="w-[1117px] inline-flex justify-between items-center overflow-hidden">
            <div className="flex justify-start items-center gap-6">
                <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">05</div>
                <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Reporting and Communication</div>
            </div>
            <div data-property-1="Plus" className="w-14 h-14 relative">
                <img src={Plus}/>
            </div>
        </div>
    </div>
    <div className="w-[1234px] px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="w-[1117px] inline-flex justify-between items-center overflow-hidden">
            <div className="flex justify-start items-center gap-6">
                <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">06</div>
                <div className="w-[612px] justify-start text-zinc-900 text-3xl font-medium font-'Space_Grotesk'">Continual Improvement</div>
            </div>
            <div data-property-1="Plus" className="w-14 h-14 relative">
                <img src={Plus}/>
            </div>
        </div>
    </div>
</div>

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
