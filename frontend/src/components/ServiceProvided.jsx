import React, {useState} from 'react'
import Minus from '../assets/Minus.svg'
import Plus from '../assets/Plus.svg'

const ServiceProvided = () => {
    
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="w-full px-24 inline-flex justify-start items-start gap-10 pt-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Our Working Process </div>
        </div>
    </div>
    <div className="w-72 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Step-by-Step Guide to Achieving Your Business Goals</div>
    </div>

    <div className="w-full px-24 inline-flex flex-col justify-start items-start gap-7">
        <div className="w-full px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-7 overflow-hidden">
            <div className="w-full inline-flex justify-between items-center overflow-hidden">
                <div className="flex justify-start items-center gap-6">
                    <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">01</div>
                    <div className="w-full justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Consultation</div>
                </div>
                <button data-property-1="Minus" className="w-14 h-14 relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    { isOpen ? <img src={Minus} /> : <img src={Plus} /> }
                </button>
            </div>
    
            {isOpen && (
            <>
            <div className="w-full h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
            <div className="w-full h-14 justify-start text-black text-lg font-normal font-'Space_Grotesk'">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</div>
            </>
            )}
        </div>
        <div className="w-full px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-full inline-flex justify-between items-center overflow-hidden">
                <div className="flex justify-start items-center gap-6">
                    <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">02</div>
                    <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Research and Strategy Development</div>
                </div>
                <div data-property-1="Plus" className="w-14 h-14 relative">
                    <img src={Plus}/>
                </div>
            </div>
        </div>
        <div className="w-full px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-full inline-flex justify-between items-center overflow-hidden">
                <div className="flex justify-start items-center gap-6">
                    <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">03</div>
                    <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Implementation</div>
                </div>
                <div data-property-1="Plus" className="w-14 h-14 relative">
                    <img src={Plus}/>
                </div>
            </div>
        </div>
        <div className="w-full px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-full inline-flex justify-between items-center overflow-hidden">
                <div className="flex justify-start items-center gap-6">
                    <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">04</div>
                    <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Monitoring and Optimization</div>
                </div>
                <div data-property-1="Plus" className="w-14 h-14 relative">
                    <img src={Plus}/>
                </div>
            </div>
        </div>
        <div className="w-full px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-full inline-flex justify-between items-center overflow-hidden">
                <div className="flex justify-start items-center gap-6">
                    <div className="justify-start text-black text-6xl font-medium font-'Space_Grotesk'">05</div>
                    <div className="w-[612px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Reporting and Communication</div>
                </div>
                <div data-property-1="Plus" className="w-14 h-14 relative">
                    <img src={Plus}/>
                </div>
            </div>
        </div>
        <div className="w-full px-14 py-10 bg-zinc-100 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-full inline-flex justify-between items-center overflow-hidden">
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
    </>
  )
}

export default ServiceProvided
