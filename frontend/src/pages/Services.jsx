import React from 'react'
import OurServices from '../assets/OurServices.png'
import Vector1 from '../assets/ServicesVector1.svg'
import BVector from '../assets/BlueVector.svg'
import Vector3 from '../assets/ServicesVector3.svg'
import Vector4 from '../assets/ServicesVector4.svg'
import Machine from '../assets/Machine.png'
import FinalSection from '../components/FinalSection'
import Logo from '../assets/niximo_group.png'
import Navbar from '../components/Navbar'

const Service = () => {
  return (
    <div className="w-full h-[6539px] relative bg-white overflow-hidden">
    <Navbar/>
    
    {/* <div className="w-[1236px] h-[609px] left-[104px] top-[212px] absolute bg-zinc-100 rounded-[45px]" />

    <img src={OurServices} className='w-[550px] h-[550px] left-[172px] top-[242px] absolute'/>
    <div className="w-96 left-[829px] top-[367px] absolute justify-start text-black text-6xl font-medium font-'Space_Grotesk'">Expert Web & AI Services</div>

    <div className="w-96 left-[829px] top-[555px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Empower your digital vision with pixel-perfect design, AI-driven solutions, and scalable code—delivered by Niximo’s all-in-one creative tech team.</div> */}

    <section className="w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-between bg-zinc-100 rounded-[45px] max-w-[1236px] mx-auto mt-15">
  
  <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
    <img src={OurServices} alt="Our Services" className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto" />
  </div>

  
  <div className="w-full lg:w-1/2 px-20 flex flex-col gap-11 text-center lg:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium text-black font-'Space_Grotesk'">
      Expert Web & AI Services
    </h2>
    <p className="text-base sm:text-lg md:text-2xl text-black font-normal font-'Space_Grotesk' leading-relaxed">
      Empower your digital vision with pixel-perfect design, AI-driven solutions, and scalable code—delivered by Niximo’s all-in-one creative tech team.
    </p>
</div>
    </section>


    <div className="left-[222px] top-[885px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Back</div>
    <div className="w-14 h-14 left-[149px] top-[870px] absolute bg-black rounded-full" />
    {/* <div className="w-6 h-8 left-[164.50px] top-[882px] absolute outline-2 outline-offset-[-1px] outline-cyan-300" /> */}
    <img src={Vector1} className='w-6 h-8 left-[164.50px] top-[882px] absolute'/>
    
    <div className="w-[1236px] h-80 left-[100px] top-[974px] absolute bg-zinc-900 rounded-[35px]" />
    {/* <div className="w-8 h-8 left-[149px] top-[1043px] absolute bg-cyan-300 outline-2 outline-offset-[-1px] outline-cyan-300" /> */}
    <img src={BVector} className='w-12 h-12 left-[149px] top-[1035px] absolute rotate-45'/>
    <div data-property-1="Green" className="left-[222px] top-[1043px] absolute inline-flex flex-col justify-start items-start">
        <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Web Development </div>
        </div>
        <div className="px-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-3xl font-medium font-'Space_Grotesk'">& AI Solutions</div>
        </div>
    </div>
    <div className="w-[609px] left-[580px] top-[1043px] absolute justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">From fast, responsive websites to 24/7 AI tools, we build platforms that scale, engage, and deliver measurable results for modern brands.</div>
    <div className="w-[712px] h-16 left-[573px] top-[1176px] absolute bg-white rounded-xl" />
    <div className="left-[865px] top-[1195px] absolute text-center justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Build With Us</div>
    <div className="left-[852px] top-[1437px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Our step by step process ensures your brand<br/>ranks top</div>
    <div className="px-2 py-1.5 left-[104px] top-[1439px] absolute bg-cyan-300 rounded-md inline-flex flex-col justify-start items-start gap-2.5">
        <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">How We Work: Our Creative Process</div>
    </div>
    <div className="w-[1236px] h-56 left-[100px] top-[1594px] absolute bg-zinc-100 rounded-[40px]" />
    <img src={Vector3} className="w-36 h-32 left-[173px] top-[1642px] absolute"/>
    <div className="left-[214px] top-[1671px] absolute justify-start text-cyan-300 text-6xl font-normal font-'Space_Grotesk' z-1">01
    </div>
    <div className="left-[383px] top-[1652px] absolute justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Discover & Align</div>
    <div className="w-[813px] left-[389px] top-[1710px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">We listen—deeply. Understanding your goals, audience, and technical challenges comes first.</div>
    <div className="w-[1236px] h-56 left-[111px] top-[1890px] absolute bg-zinc-100 rounded-[40px]" />
    
    <img src={Vector3} className="w-36 h-32 left-[182px] top-[1938px] absolute" />
    <div className="left-[219px] top-[1967px] absolute justify-start text-cyan-300 text-6xl font-normal font-'Space_Grotesk'">02</div>
    <div className="left-[394px] top-[1948px] absolute justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Strategize & Plan</div>
    <div className="w-[813px] left-[400px] top-[2006px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">We define a roadmap with budgets, milestones, and KPIs to keep progress measurable.</div>
    <div className="w-[1236px] h-56 left-[111px] top-[2190px] absolute bg-zinc-100 rounded-[40px]" />

    <img src={Vector3} className="w-36 h-32 left-[182px] top-[2238px] absolute" />
    <div className="left-[219px] top-[2267px] absolute justify-start text-cyan-300 text-6xl font-normal font-'Space_Grotesk'">03</div>
    <div className="left-[394px] top-[2248px] absolute justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Design & Develop</div>
    <div className="w-[813px] left-[400px] top-[2306px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">From UI/UX mockups to scalable code, we balance creativity with performance.</div>
    <div className="w-[1236px] h-56 left-[111px] top-[2486px] absolute bg-zinc-100 rounded-[40px]" />

    <img src={Vector3} className="w-36 h-32 left-[182px] top-[2534px] absolute" />
    <div className="left-[219px] top-[2563px] absolute justify-start text-cyan-300 text-6xl font-normal font-'Space_Grotesk'">04</div>
    <div className="left-[394px] top-[2544px] absolute justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Launch & Optimize</div>
    <div className="w-[813px] left-[400px] top-[2602px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">We monitor performance post-launch and continuously iterate to improve user outcomes.</div>

    <div className="left-[381px] top-[2859px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Real-World Wins with Niximo's Solutions</div>
    <div className="px-2 py-1 left-[111px] top-[2848px] absolute bg-cyan-300 rounded-md inline-flex flex-col justify-start items-start gap-2.5">
        <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Use Cases</div>
    </div>
    <div className="w-[1236px] h-96 left-[111px] top-[3029px] absolute bg-zinc-900 rounded-[46px]" />
    <div className="left-[167px] top-[3121px] absolute justify-start text-white text-3xl font-medium font-'Space_Grotesk'">ElephantJuice.org</div>
    <div className="w-72 left-[167px] top-[3190px] absolute justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Full-stack Web App → 30% increase in leads and revenue</div>
    <div className="left-[167px] top-[3289px] absolute justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
    
    <img src={Vector4} className='w-6 h-5 left-[270px] top-[3294px] absolute'/>
    <div className="w-0 h-72 left-[512px] top-[3101px] absolute outline-3 outline-offset-[-2px] outline-neutral-600" />
    <div className="left-[579px] top-[3121px] absolute justify-start text-white text-3xl font-medium font-'Space_Grotesk'">Easternbf</div>
    <div className="w-72 left-[579px] top-[3190px] absolute justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">UI/UX & Web Development → 25% more engagement, 15% more conversions</div>
    <div className="left-[579px] top-[3289px] absolute justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
    
    <img src={Vector4} className='w-6 h-5 left-[684px] top-[3294px] absolute'/>
    <div className="w-0 h-72 left-[924px] top-[3101px] absolute outline-3 outline-offset-[-2px] outline-neutral-600" />
    <div className="left-[991px] top-[3121px] absolute justify-start text-white text-3xl font-medium font-'Space_Grotesk'">Spacetross</div>
    <div className="w-72 left-[991px] top-[3190px] absolute justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Booking Platform → 50% jump in flight bookings</div>
    <div className="left-[991px] top-[3289px] absolute justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
    
    <img src={Vector4} className='w-6 h-5 left-[1095px] top-[3294px] absolute'/>
    <div className="w-[1231px] h-[528px] left-[118px] top-[3578px] absolute bg-white rounded-[40px] shadow-[0px_6px_0px_0px_rgba(0,0,0,1.00)] border border-neutral-700" />
    <div className="left-[187px] top-[3881px] absolute justify-start text-black text-xl font-bold font-'Space_Grotesk' leading-7">Let’s build together to grow your online presence</div>
    <div className="w-[500px] left-[187px] top-[3752px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">From web development to AI and design, our team helps you grow faster with smarter tech and creative strategy. Let’s build together. </div>
    <div className="left-[187px] top-[3648px] absolute justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Ready to Build Something Amazing?</div>
    <div className="w-[514.50px] h-0 left-[187px] top-[3719px] absolute outline-1 outline-offset-[-0.50px] outline-neutral-600" />
    <div className="w-[573px] h-16 left-[180px] top-[3975px] absolute bg-cyan-300 rounded-xl" />
    <div className="left-[387px] top-[3995px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Start My Project</div>
    <img className="w-[517px] h-[517px] left-[792px] top-[3592px] absolute" src={Machine} />
    {/* <div className="px-24 left-[-1px] top-[6025px] absolute inline-flex flex-col justify-start items-start gap-2.5">
        <div className="px-14 pt-14 pb-12 bg-zinc-900 rounded-tl-[45px] rounded-tr-[45px] flex flex-col justify-start items-start gap-12">
            <div className="flex flex-col justify-start items-start gap-16">
                <div className="w-[1121px] inline-flex justify-start items-center gap-40">
                    <img className="w-32 h-9" src="https://placehold.co/129x38" />
                    <div className="flex justify-start items-start gap-10">
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">About us</div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Services</div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Use Cases</div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Pricing</div>
                        <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline">Blog</div>
                    </div>
                    <div className="flex justify-start items-start gap-5">
                        <div className="w-7 h-7 bg-white rounded-full" />
                        <div className="w-3.5 h-3.5 bg-black" />
                        <div className="w-7 h-7 bg-white" />
                        <div className="w-7 h-7 bg-white rounded-full" />
                        <div className="w-4 h-3.5 bg-black" />
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
                <div className="w-[1120px] h-0 outline outline-1 outline-offset-[-0.50px] outline-white"></div>
                <div className="inline-flex justify-start items-start gap-10">
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' leading-7">© 2023 Positivus. All Rights Reserved.</div>
                    <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk' underline leading-7">Privacy Policy</div>
                </div>
            </div>
        </div>
    </div> */}
    <FinalSection/>
</div>
  )
}

export default Service