import React from 'react'
import Logo from '../assets/niximo_group.png'

const Navbar = () => {
  return (
    <div className="w-full px-20 inline-flex justify-between items-center overflow-hidden">
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
  )
}

export default Navbar
