import React from 'react'
import linkedinBlack from '../assets/linkedinblack.svg'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Niximo_white from '../assets/niximo_white.png'

const FinalSection = () => {
  return (
    <footer className="w-full bottom-0 absolute">
        <div className="w-full px-24 inline-flex flex-col justify-start items-start gap-2.5">
        <div className="w-full px-14 pt-14 pb-12 bg-zinc-900 rounded-tl-[45px] rounded-tr-[45px] flex flex-col justify-start items-start gap-12">
            <div className="w-full flex flex-col justify-start items-start gap-16">
                <div className="w-full inline-flex justify-start items-center gap-50">
                    <img src={Niximo_white} alt="Logo" className="w-44 h-12" />
                    <div className="flex justify-start items-start gap-10">
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">
                            <a href="#" target='_blank'>About us</a>
                        </div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">
                            <a href="#" target='_blank'>Services</a>
                        </div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">
                            <a href="#" target='_blank'>Use Cases</a>
                        </div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">
                            <a href="#" target='_blank'>Pricing</a>
                        </div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">
                            <a href="#" target='_blank'>Blog</a>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-5">
                        <a href="#" target='_blank'>
                            <img src={linkedinBlack} className="w-7 h-7 bg-white rounded-full" />
                        </a>
                        <a href="#" target='_blank'>
                            <img src={Facebook} className="w-7 h-7 bg-white" />
                        </a>
                        <a href="#" target='_blank'>
                            <img src={Twitter} className="w-7 h-7 bg-white rounded-full" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-start items-start gap-60">
                    <div className="flex-1/2 flex-col justify-start items-start gap-5">
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
                    <div className="w-200 px-6 py-10 bg-zinc-800 rounded-2xl flex justify-end items-start gap-5 overflow-hidden">
                        <input className="w-70 px-9 py-5 rounded-2xl outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5 overflow-hidden text-white/100 text-xl" placeholder='Email'/>
                        <button data-property-1="Button tertiary" className="px-9 py-1.5 bg-cyan-300 rounded-2xl flex justify-start items-start gap-2.5 cursor-pointer">
                            <span className="text-center justify-start text-black text-lg font-normal font-'Space_Grotesk' leading-7">Subscribe to news</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-12">
                <div className="w-[1217px] h-0 outline-1 outline-offset-[-0.50px] outline-white"></div>
                <div className="inline-flex justify-start items-start gap-10">
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' leading-7">© 2023 Positivus. All Rights Reserved.</div>
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline leading-7">
                        <a href="#" target='_blank'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    
  )
}

export default FinalSection
