import React from 'react'
import MaskGroup from '../assets/Mask group.svg'
import BlackVector from '../assets/BlackVector.svg'
import BVector from '../assets/BlueVector.svg'

const ContactUs = () => {
  return (
    <>
    <div className="w-[1440px] px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-1 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Contact Us</div>
        </div>
    </div>
    <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>
</div>

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
    </>
  )
}

export default ContactUs
