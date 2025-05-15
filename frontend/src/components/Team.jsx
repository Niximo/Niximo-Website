import React from 'react'
import Jane from '../assets/Jane.jpg'
import John from '../assets/John.jpg'
import Emily from '../assets/Emily.jpg'
import Michael from '../assets/Michael.jpg'
import Sarah from '../assets/Sarah.jpg'
import Brian from '../assets/Brian.jpg'
import LinkedIn from '../assets/Linkedin.svg'

const Team = () => {
  return (
    <>
    <div className="w-full px-24 inline-flex justify-start items-start gap-10 mt-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-2 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Team</div>
        </div>
    </div>
    <div className="w-[473px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Meet the skilled and experienced team behind our successful digital marketing strategies</div>
    </div>

    <div className="w-full inline-flex flex-col justify-start items-start gap-10">
        <div className="w-full px-24 flex justify-start items-start gap-10">
            {/* card-1 */}
            <div className="flex-1/2 w-96 h-80 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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
            <div className="flex-1/2 w-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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
            <div className="flex-1/2 w-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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
        <div className="w-full px-24 inline-flex justify-start items-start gap-10">
            {/* card-6 */}
            <div className="flex-1/2 w-96 h-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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
            <div className="flex-1/2 w-96 h-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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
            <div className="flex-1/2 w-96 h-96 px-9 py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline-1 outline-offset-[-1px] outline-zinc-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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

    <div className='flex justify-end relative'>
        <button className="w-64 px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-center items-center gap-2.5">
        <div className="justify-end text-white text-xl font-normal font-'Space_Grotesk' leading-7">See all team</div>
        </button>
    </div>
    </>
  )
}

export default Team
