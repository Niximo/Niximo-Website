import React, { useState } from 'react'
import Logo from '../assets/niximo_group.png'
import Image1 from '../assets/image 2.png'
import WebDev from '../assets/webdev.png'
import AI from '../assets/AItools.png'
import UiUx from '../assets/UIUX.png'
import Vid from '../assets/VideoEdit.png'
import Content from '../assets/Content.png'
import Anal from '../assets/Analytics.png'
import Arrow1 from '../assets/arrow1.svg'
import Arrow2 from '../assets/arrow2.svg'
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
import ArrowR from '../assets/Arrow right.svg'
import ArrowL from '../assets/Arrow left.svg'
import MaskGroup from '../assets/Mask group.svg'
import BlackVector from '../assets/BlackVector.svg'
import linkedinBlack from '../assets/linkedinblack.svg'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Niximo_white from '../assets/niximo_white.png'
import BlueArrow from '../assets/bluearrow.svg'

import LogoSlider from '../components/LogoSlider.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'

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

    {/* mid-section-2 company logos */}

    <div className="w-[1440px] px-24 inline-flex justify-between items-start overflow-hidden">
       <LogoSlider/>
    </div>

    {/* mid-section-3 */}

    <div className="w-[1440px] px-25 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-3.5 py-2 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-3">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Services</div>
        </div>
    </div>
    <div className="w-[580px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">At our agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
    </div>

    {/* mid-section-4 */}
<div className="inline-flex flex-col justify-start items-start gap-10">
    <div className="px-24 inline-flex justify-start items-start gap-10">
        <div className="w-[600px] p-12 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-center items-start gap-24">
                <div data-property-1="Green" className="flex flex-col justify-start items-start">
                    <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Web </div>
                    </div>
                    <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Development</div>
                    </div>
                </div>
                <div data-property-1="Black" className="inline-flex justify-start items-center gap-3.5">
                    <img src={Arrow1} className="w-10 h-1 rounded-full" />
                    <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                </div>
            </div>
            <div className="w-52 h-44 relative">
                <img src={WebDev} className="w-60 h-50 left-0 top-[2px] absolute"  />
            </div>
        </div>
        <div className="w-[600px] p-12 bg-cyan-300 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-start items-start gap-24">
                <div data-property-1="White" className="flex flex-col justify-start items-start">
                    <div className="px-1.5 bg-white rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">AI-Powered </div>
                    </div>
                    <div className="px-1.5 bg-white rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Tools</div>
                    </div>
                </div>
                <div data-property-1="Black" className="inline-flex justify-start items-center gap-3.5">
                    <img src={Arrow1} className="w-10 h-10 bg-white rounded-full" />
                    <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                </div>
            </div>
            <div className="w-52 h-44 relative">
                <img src={AI} className="w-60 h-50 left-0 top-[2px] absolute"  />
            </div>
        </div>
    </div>
    <div className="px-24 inline-flex justify-start items-start gap-10">
        <div className="w-[600px] p-12 bg-zinc-900 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-start items-start gap-24">
                <div data-property-1="White" className="flex flex-col justify-start items-start">
                    <div className="px-1.5 bg-white rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">UI/UX </div>
                    </div>
                    <div className="px-1.5 bg-white rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Design</div>
                    </div>
                </div>
                <div data-property-1="White 2" className="inline-flex justify-start items-center gap-3.5">
                    <img src={Arrow2} className="w-10 h-10 bg-white rounded-full" />
                    <div className="justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                </div>
            </div>
            <div className="w-52 h-52 relative">
                <img src={UiUx} className="w-52 h-52 left-[1px] top-0 absolute" />
            </div>
        </div>
        <div className="w-[600px] p-12 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-center items-start gap-24">
                <div data-property-1="Green" className="flex flex-col justify-start items-start">
                    <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Video </div>
                    </div>
                    <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Editing</div>
                    </div>
                </div>
                <div data-property-1="Black" className="inline-flex justify-start items-center gap-3.5">
                    <img src={Arrow1} className="w-10 h-10 bg-white rounded-full" />
                    <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                </div>
            </div>
            <div className="w-52 h-52 relative">
                <img src={Vid} className="w-52 h-52 left-[1px] top-0 rotate-180 absolute" />
            </div>
        </div>
    </div>
    <div className="px-24 inline-flex justify-start items-start gap-10">
        <div className="w-[600px] p-12 bg-cyan-300 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-start items-start gap-24">
                <div data-property-1="White" className="flex flex-col justify-start items-start">
                    <div className="px-1.5 bg-white rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Content</div>
                    </div>
                    <div className="px-1.5 bg-white rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Creation</div>
                    </div>
                </div>
                <div data-property-1="Black" className="inline-flex justify-start items-center gap-3.5">
                    <img src={Arrow1} className="w-10 h-10 bg-white rounded-full" />
                    <div className="justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                </div>
            </div>
            <img src={Content} className="w-48 h-48" />
        </div>
        <div className="w-[600px] p-12 bg-zinc-900 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-between items-center overflow-hidden">
            <div className="inline-flex flex-col justify-start items-start gap-24">
                <div data-property-1="Green" className="flex flex-col justify-start items-start">
                    <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Analytics and </div>
                    </div>
                    <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Tracking</div>
                    </div>
                </div>
                <div data-property-1="White 2" className="inline-flex justify-start items-center gap-3.5">
                    <img src={Arrow2} className="w-10 h-10 bg-white rounded-full" />
                    <div className="justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                </div>
            </div>
            <div className="w-52 h-44 relative">
                <img src={Anal} className="w-52 h-44 left-0 top-0 absolute" />
            </div>
        </div>
    </div>
</div>

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

{/* mid section-6 */}

<div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Case Studies</div>
        </div>
    </div>
    <div className="w-[580px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Explore Real-Life Examples of Our Proven Brand Success through Our Case Studies</div>
</div>

{/* mid-section-7 */}

<div className="px-24 inline-flex flex-col justify-start items-start gap-2.5">
    <div className="px-14 py-16 bg-zinc-900 rounded-[45px] flex justify-start items-start gap-16">
        {/* sec-1 */}
        <div className="flex-1/3 inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div>
            <div data-property-1="Simple green" className="inline-flex justify-start items-center gap-3.5">
                <div className="justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                <img src={BlueArrow} />
            </div>
        </div>
        <div className="w-48 h-0 origin-top-left rotate-90 outline-1 outline-offset-[-0.50px] outline-white"></div>
        {/* sec-2 */}
        <div className="flex-1/3 inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div>
            <div data-property-1="Simple green" className="inline-flex justify-start items-center gap-3.5">
                <div className="justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                <img src={BlueArrow} />
            </div>
        </div>
        <div className="w-48 h-0 origin-top-left rotate-90 outline-1 outline-offset-[-0.50px] outline-white"></div>
        {/* sec-3 */}
        <div className="flex-1/3 inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div>
            <div data-property-1="Simple green" className="inline-flex justify-start items-center gap-3.5">
                <div className="justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
                <img src={BlueArrow} />
            </div>
        </div>
    </div>
</div>

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

{/* mid-section-10 */}

<div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-2 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Team</div>
        </div>
    </div>
    <div className="w-[473px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Meet the skilled and experienced team behind our successful digital marketing strategies</div>
</div>

{/* mid-section-11 */}

<div className="inline-flex flex-col justify-start items-start gap-10">
    <div className="px-24 inline-flex justify-start items-start gap-10">
        {/* card-1 */}
        <div className="w-96 h-80 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-start">
                    <div className="flex-1 pr-20 flex justify-start items-end gap-5">

                        <img src={John} className='w-10 h-10'/>
                        <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">John Smith</div>
                        <div className="justify-start text-black text-lg font-normal font-'Space_Grotesk'">CEO and Founder</div>
                    </div>

                    <img src={LinkedIn}/>
                </div>
                <div className="w-80 h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</div>
            </div>
        </div>
        {/* card-2 */}
        <div className="w-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-start">
                    <div className="flex-1 pr-20 flex justify-start items-end gap-5">
                        <img src={Jane} className='w-10 h-10'/>
                        <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">Jane Doe</div>
                        <div className="w-48 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Director of Operations</div>
                        <img src={LinkedIn}/>
                    </div>
                    {/* <img src={LinkedIn}/> */}
                </div>
                <div className="w-80 h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">7+ years of experience in project management and team leadership. Strong organizational and communication skills</div>
            </div>
        </div>
        {/* card-3 */}
        <div className="w-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            {/* card-4 */}
            <div className="flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-start">
                    <div className="flex-1 pr-20 flex justify-start items-end gap-5">
                        <img src={Michael} className='w-10 h-10'/>
                        <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">Michael Brown</div>
                        <div className="justify-start text-black text-lg font-normal font-'Space_Grotesk'">Senior SEO Specialist</div>
                    </div>
                    <img src={LinkedIn}/>
                </div>
                <div className="w-80 h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</div>
            </div>
        </div>
    </div>
    <div className="px-24 inline-flex justify-start items-start gap-10">
        {/* card-6 */}
        <div className="w-96 h-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-start">
                    <div className="flex-1 pr-20 flex justify-start items-end gap-5">
                        <img src={Emily} className='w-10 h-10'/>
                        <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">Emily Johnson</div>
                        <div className="justify-start text-black text-lg font-normal font-'Space_Grotesk'">PPC Manager</div>
                    </div>
                    <img src={LinkedIn}/>
                </div>
                <div className="w-80 h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</div>
            </div>
        </div>
        {/* card-7 */}
        <div className="w-96 h-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-start">
                    <div className="flex-1 pr-20 flex justify-start items-end gap-5">
                        <img src={Brian} className='w-10 h-10'/>
                        <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">Brian Williams</div>
                        <div className="w-48 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Social Media Specialist</div>
                        <img src={LinkedIn}/>
                    </div>
                    {/* <img src={LinkedIn}/> */}
                </div>
                <div className="w-80 h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</div>
            </div>
        </div>
        {/* card-8 */}
        <div className="w-96 h-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-start">
                    <div className="flex-1 pr-20 flex justify-start items-end gap-5">
                        <img src={Sarah} className='w-10 h-10'/>
                        <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">Sarah Kim</div>
                        <div className="w-48 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Content Creator</div>
                        <img src={LinkedIn}/>
                    </div>
                    <img src={LinkedIn}/>
                </div>
                <div className="w-80 h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">2+ years of experience in writing and editing<br/>Skilled in creating compelling, SEO-optimized content for various industries</div>
            </div>
        </div>
    </div>
</div>

{/* mid-section-12 */}

<div className='flex justify-end'>
<button className="w-64 px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-center items-center gap-2.5">
    <div className="justify-end text-white text-xl font-normal font-'Space_Grotesk' leading-7">See all team</div>
</button>
</div>


<div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Testimonials</div>
        </div>
    </div>
    <div className="w-[473px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>
</div>

{/* testimonials */}

<div className="w-full h-screen flex items-center justify-center">
<div className="w-[1240px] h-[625px] relative bg-zinc-900 rounded-[45px] overflow-hidden">
    <div className="left-[-346px] top-[84px] absolute inline-flex flex-col justify-center items-center gap-32">
        <div className="w-[1918px] inline-flex justify-between items-start">
            {/* border
            <div className="w-[606px] h-60 rounded-[45px] border-1 border-cyan-300">
            <div className="inline-flex flex-col justify-start items-end gap-5">
                <div className="w-[606px] h-64 relative">
                    <div className="w-[502px] left-[52px] top-[48px] absolute justify-start text-white text-lg font-normal font-'Space_Grotesk'">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                </div>
                <div className="w-[526px] justify-start"><span class="text-cyan-300 text-xl font-medium font-'Space_Grotesk'">John Smith<br/></span><span class="text-white text-lg font-normal font-'Space_Grotesk'">Marketing Director at XYZ Corp</span></div>
            </div>
            </div>
            <div className="w-[606px] h-60 rounded-[45px] border-1 border-cyan-300">
            <div className="inline-flex flex-col justify-start items-end gap-5">
                <div className="w-[606px] h-64 relative">
                    <div className="w-[502px] left-[52px] top-[48px] absolute justify-start text-white text-lg font-normal font-'Space_Grotesk'">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                </div>
                <div className="w-[526px] justify-start"><span class="text-cyan-300 text-xl font-medium font-'Space_Grotesk'">John Smith<br/></span><span class="text-white text-lg font-normal font-'Space_Grotesk'">Marketing Director at XYZ Corp</span></div>
            </div>
            </div>
            <div className="w-[606px] h-60 rounded-[45px] border-1 border-cyan-300">
            <div className="inline-flex flex-col justify-start items-end gap-5">
                <div className="w-[606px] h-64 relative">
                    <div className="w-[502px] left-[52px] top-[48px] absolute justify-start text-white text-lg font-normal font-'Space_Grotesk'">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                </div>
                <div className="w-[526px] justify-start"><span class="text-cyan-300 text-xl font-medium font-'Space_Grotesk'">John Smith<br/></span><span class="text-white text-lg font-normal font-'Space_Grotesk'">Marketing Director at XYZ Corp</span></div>
            </div>
            </div> */}
            <TestimonialSlider/>
        </div>
        
        <div className="w-[564px] inline-flex justify-between items-center">
        <img src={ArrowL} />
            <img src={BVector} className="w-5 h-5 rotate-45" />
            <img src={BVector} className="w-5 h-5 rotate-45" />
            <img src={BVector} className="w-5 h-5 rotate-45" />
            <img src={BVector} className="w-5 h-5 rotate-45" />
            <img src={BVector} className="w-5 h-5 rotate-45" />
        <img src={ArrowR} /> 
        </div>
    </div>
</div>
</div>

{/* mid-section-14 */}

<div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-1 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Contact Us</div>
        </div>
    </div>
    <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>
</div>

{/* contact-us */}

<div className="w-[1440px] px-24 inline-flex justify-start items-center">
    <div className="w-[1240px] px-24 pt-14 pb-20 bg-zinc-100 rounded-[45px] inline-flex justify-start items-start gap-2.5">
        {/* left div */}
    <div className="inline-flex flex-col justify-start items-start gap-10">
            <div className="inline-flex justify-start items-center gap-9">
    {/* Radio Button: Say Hi */}
    <label className="flex items-center gap-2 cursor-pointer">
        <input
      type="radio"
      name="contactOption"
      value="sayHi"
      className='w-7 h-7'
        />
        <span className="text-black text-lg font-normal font-'Space_Grotesk'">Say Hi</span>
    </label>

    {/* Radio Button: Get a Quote */}
        <label className="flex items-center gap-2 cursor-pointer">
        <input
        type="radio"
      name="contactOption"
        value="getQuote"
        className='w-7 h-7'
        />
        <span className="text-black text-lg font-normal font-'Space_Grotesk'">Get a Quote</span>
    </label>
        </div>

            <div className="flex flex-col justify-start items-start gap-6">
                <div className="flex flex-col justify-start items-start gap-[5px]">
                    <div className="justify-start text-black text-base font-normal font-'Space_Grotesk' leading-7">Name</div>
                    <div className="w-[556px] px-7 py-4 bg-white rounded-2xl outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start gap-2.5 overflow-hidden">
                        <div className="justify-start text-zinc-500 text-lg font-normal font-'Space_Grotesk'">Name</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-[5px]">
                    <div className="justify-start text-black text-base font-normal font-'Space_Grotesk' leading-7">Email*</div>
                    <div className="w-[556px] px-7 py-4 bg-white rounded-2xl outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start gap-2.5 overflow-hidden">
                        <div className="justify-start text-zinc-500 text-lg font-normal font-'Space_Grotesk'">Email</div>
                    </div>
                </div>
                <div className="h-56 flex flex-col justify-start items-start gap-[5px]">
                    <div className="justify-start text-black text-base font-normal font-'Space_Grotesk' leading-7">Message*</div>
                    <div className="w-[556px] h-48 px-7 py-4 bg-white rounded-2xl outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start gap-2.5 overflow-hidden">
                        <div className="justify-start text-zinc-500 text-lg font-normal font-'Space_Grotesk'">Message</div>
                    </div>
                </div>
            </div>
            <div data-property-1="Button primary" className="w-[556px] px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Send Message</div>
            </div>
            
        </div>
        {/* right-div */}
        <div className="inline-flex justify-end relative">
        {/* <div className="w-10 h-10 left-[41.71px] top-0 absolute outline-1 outline-black" /> */}
        <img src={MaskGroup} className="w-10 h-10 left-10 top-[-38.12px] absolute bg-black rounded-[45px]" />
        <img src={BVector} className="w-30 h-10 left-[45.25px] top-[424.29px] absolute origin-top-left rotate-45 bg-cyan-300" />
        <img src={BlackVector} className="w-50 h-30 left-[136.58px] top-[161.71px] absolute origin-top-left rotate-45 bg-zinc-900" />
        </div>
    </div>
</div>

{/* final-section */}

<div className="px-24 inline-flex flex-col justify-start items-start gap-2.5">
    <div className="px-14 pt-14 pb-12 bg-zinc-900 rounded-tl-[45px] rounded-tr-[45px] flex flex-col justify-start items-start gap-12">
        <div className="flex flex-col justify-start items-start gap-16">
            <div className="w-[1121px] inline-flex justify-start items-center gap-40">
                <img src={Niximo_white} alt="Logo" className="w-44 h-12" />
                <div className="flex justify-start items-start gap-10">
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">About us</div>
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Services</div>
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Use Cases</div>
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Pricing</div>
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Blog</div>
                </div>
                <div className="flex justify-start items-start gap-5">
                    <img src={linkedinBlack} className="w-7 h-7 bg-white rounded-full" />
                    <img src={Facebook} className="w-7 h-7 bg-white" />
                    <img src={Twitter} className="w-7 h-7 bg-white rounded-full" />
                </div>
            </div>
            <div className="inline-flex justify-start items-start gap-40">
                <div className="inline-flex flex-col justify-start items-start gap-7">
                    <div data-property-1="Green" className="flex flex-col justify-start items-start">
                        <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
                            <div className="justify-start text-black text-xl font-medium font-'Space_Grotesk'">Contact us:</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5">
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">Email: info@positivus.com</div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">Phone: 555-567-8901</div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</div>
                    </div>
                </div>
                <div className="px-10 py-14 bg-zinc-800 rounded-2xl flex justify-start items-start gap-5 overflow-hidden">
                    <div className="w-72 px-9 py-5 rounded-2xl outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5 overflow-hidden">
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">Email</div>
                    </div>
                    <div data-property-1="Button tertiary" className="px-9 py-5 bg-cyan-300 rounded-2xl flex justify-start items-start gap-2.5">
                        <div className="text-center justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Subscribe to news</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-12">
            <div className="w-[1120px] h-0 outline-1 outline-offset-[-0.50px] outline-white"></div>
            <div className="inline-flex justify-start items-start gap-10">
                <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' leading-7">© 2023 Positivus. All Rights Reserved.</div>
                <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline leading-7">Privacy Policy</div>
            </div>
        </div>
    </div>
</div>
</div>
  )}

export default Home
