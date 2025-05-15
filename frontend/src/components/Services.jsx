import React from 'react'
import WebDev from '../assets/webdev.png'
import AI from '../assets/AItools.png'
import UiUx from '../assets/UIUX.png'
import Vid from '../assets/VideoEdit.png'
import Content from '../assets/Content.png'
import Anal from '../assets/Analytics.png'
import Arrow1 from '../assets/arrow1.svg'
import Arrow2 from '../assets/arrow2.svg'


const Services = () => {
  return (
    <>
    <div className="w-[1440px] px-25 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-3.5 py-2 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-3">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Services</div>
        </div>
    </div>
    <div className="w-[580px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">At our agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
    </div>

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
                        <img src={Arrow1} className="w-10 h-10 rounded-full" />
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
    </>
  )
}

export default Services
