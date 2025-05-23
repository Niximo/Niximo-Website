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


  
  
  <div className="flex items-center gap-4 mt-10 px-6 sm:px-10 md:px-20 lg:px-40 lg:justify-items-center">
  <a href='' target='_blank'>
  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
    <img src={Vector1} alt="Back arrow" className="w-6 h-8" />
  </div>
  </a>
  <a href='' target='_blank'>
  <div className="text-black text-xl font-normal font-'Space_Grotesk' leading-7">
    Back
  </div>
  </a>
  </div>

<div className="relative w-full max-w-[1236px] mx-auto bg-zinc-900 rounded-[35px] mt-10 px-4 py-8 sm:h-80">

  <img
    src={BVector}
    alt="BVector"
    className="w-10 h-10 sm:w-12 sm:h-12 rotate-45 absolute top-4 left-4 sm:top-[60px] sm:left-[40px]"
  />

  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-0">

    <div className="flex flex-col items-center sm:items-start sm:absolute sm:top-[70px] sm:left-[140px]">
      <div className="px-2 bg-cyan-300 rounded-md">
        <span className="text-black text-2xl sm:text-3xl font-medium font-'Space_Grotesk'">
          Web Development
        </span>
      </div>
      <div className="px-2 bg-cyan-300 rounded-md">
        <span className="text-black text-2xl sm:text-3xl font-medium font-'Space_Grotesk'">
          & AI Solutions
        </span>
      </div>
    </div>

    <div className="text-white text-base sm:text-xl font-normal font-'Space_Grotesk' leading-7 text-center sm:text-left sm:absolute sm:top-[68px] sm:left-[500px] sm:w-[540px] max-w-full">
      From fast, responsive websites to 24/7 AI tools, we build platforms that scale, engage, and deliver measurable results for modern brands.
    </div>
  </div>

  {/* <button className="mt-8 sm:mt-0 sm:absolute sm:top-[200px] sm:left-[500px] w-full sm:w-[680px] h-16 bg-white rounded-xl flex items-center justify-center cursor-pointer">
    <span className="text-black text-base sm:text-xl font-normal font-'Space_Grotesk' text-center">
      Build With Us
    </span>
  </button> */}
  <button className="mt-8 sm:mt-7 w-full md:w-[500px] lg:w-[600px] xl:w-[680px] h-16 bg-white rounded-xl flex items-center justify-center cursor-pointer mx-auto sm:relative sm:top-[150px]">
  <span className="text-black text-base md:text-lg lg:text-xl font-normal font-spaceGrotesk text-center">
    Build With Us
  </span>
</button>

</div>


<div className="relative w-full max-w-[1236px] mx-auto px-4 py-35 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
  {/* Title Section */}
  <div className="bg-cyan-300 rounded-md px-3 py-2 sm:max-w-[60%]">
    <div className="text-black text-2xl sm:text-4xl font-medium font-'Space_Grotesk' text-center sm:text-left">
      How We Work: Our Creative Process
    </div>
  </div>

  {/* Description Text */}
  <div className="text-black text-base sm:text-xl font-normal font-'Space_Grotesk' leading-7 text-center sm:text-left sm:max-w-[45%]">
    Our step by step process ensures your brand<br className="hidden sm:block" />
    ranks top
  </div>
  </div>


  <div className="w-full max-w-[1236px] mx-auto px-4 flex flex-col gap-17">

  {/* Step Block */}
  {[
    {
      step: "01",
      title: "Discover & Align",
      description: "We listen—deeply. Understanding your goals, audience, and technical challenges comes first.",
    },
    {
      step: "02",
      title: "Strategize & Plan",
      description: "We define a roadmap with budgets, milestones, and KPIs to keep progress measurable.",
    },
    {
      step: "03",
      title: "Design & Develop",
      description: "From UI/UX mockups to scalable code, we balance creativity with performance.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We monitor performance post-launch and continuously iterate to improve user outcomes.",
    }
  ].map(({ step, title, description }, i) => (
    <div key={i} className="flex flex-col sm:flex-row bg-zinc-100 rounded-[40px] p-6 sm:p-10 gap-6 sm:gap-20 items-center">
      {/* Left Section (Icon + Step Number) */}
      <div className="flex items-center justify-center gap-2">
        <img src={Vector3} alt="Step Icon" className="w-24 h-24 sm:w-36 sm:h-32 object-contain sm:ml-12 lg:ml-10 md:ml-10" />
        <div className="text-cyan-300 text-4xl sm:text-6xl font-normal font-'Space_Grotesk' sm:ml-[-112px] lg:ml-[-112px] md:ml-[-112px]">{step}</div>
      </div>

      {/* Right Section (Text Content) */}
      <div className="flex-1 flex flex-col gap-5">
        <div className="text-black text-2xl sm:text-3xl font-medium font-'Space_Grotesk'">{title}</div>
        <div className="text-black text-base sm:text-xl font-normal font-'Space_Grotesk' leading-7">
          {description}
        </div>
      </div>
    </div>
  ))}

</div>

    {/* <div className="left-[381px] top-[2859px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Real-World Wins with Niximo's Solutions</div>
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
    <div className="left-[991px] top-[3289px] absolute justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div> */}

  <div className="w-full max-w-[1236px] mx-auto px-4 py-35 space-y-10">

  {/* Section Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div className="bg-cyan-300 rounded-md px-3 py-1.5 inline-block">
      <div className="text-black text-2xl sm:text-4xl font-medium font-'Space_Grotesk'">Use Cases</div>
    </div>
    <div className="text-black text-base sm:text-xl font-normal font-'Space_Grotesk' sm:mr-120">
      Real-World Wins with Niximo's Solutions
    </div>
  </div>

  {/* Use Case Cards Container */}
  <div className="bg-zinc-900 rounded-[46px] p-6 sm:p-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-30">

    {/* Use Case Card */}
    {[
      {
        title: "ElephantJuice.org",
        description: "Full-stack Web App → 30% increase in leads and revenue",
      },
      {
        title: "Easternbf",
        description: "UI/UX & Web Development → 25% more engagement, 15% more conversions",
      },
      {
        title: "Spacetross",
        description: "Booking Platform → 50% jump in flight bookings",
      }
    ].map(({ title, description }, i) => (
      i === 2 ? 
      ( <div key={i} className="flex flex-col gap-4">
        <div className="text-white text-2xl sm:text-3xl font-medium font-'Space_Grotesk'">{title}</div>
        <div className="text-white text-base sm:text-xl font-normal font-'Space_Grotesk' leading-7">{description}</div>
        <div className="flex items-center gap-2 text-cyan-300 text-base sm:text-xl font-normal font-'Space_Grotesk' cursor-pointer">
          Learn more
          <img src={Vector4} alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div> ) :
      ( <div className='flex flex-row gap-15'>
        <div key={i} className="flex flex-col gap-4">
        <div className="text-white text-2xl sm:text-3xl font-medium font-'Space_Grotesk'">{title}</div>
        <div className="text-white text-base sm:text-xl font-normal font-'Space_Grotesk' leading-7">{description}</div>
        <div className="flex items-center gap-2 text-cyan-300 text-base sm:text-xl font-normal font-'Space_Grotesk' cursor-pointer">
          Learn more
          <img src={Vector4} alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
        <div className="w-0 h-60 left-[924px] top-[3101px] outline-3 outline-offset-[-2px] outline-neutral-600" />
      </div> )
    ))}

  </div>
</div>

    
    {/* <div className="w-[1231px] h-[528px] left-[118px] top-[3578px] absolute bg-white rounded-[40px] shadow-[0px_6px_0px_0px_rgba(0,0,0,1.00)] border border-neutral-700" />
    <div className="left-[187px] top-[3881px] absolute justify-start text-black text-xl font-bold font-'Space_Grotesk' leading-7">Let’s build together to grow your online presence</div>
    <div className="w-[500px] left-[187px] top-[3752px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">From web development to AI and design, our team helps you grow faster with smarter tech and creative strategy. Let’s build together. </div>
    <div className="left-[187px] top-[3648px] absolute justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Ready to Build Something Amazing?</div>
    <div className="w-[514.50px] h-0 left-[187px] top-[3719px] absolute outline-1 outline-offset-[-0.50px] outline-neutral-600" />
    <div className="w-[573px] h-16 left-[180px] top-[3975px] absolute bg-cyan-300 rounded-xl" />
    <div className="left-[387px] top-[3995px] absolute justify-start text-black text-xl font-normal font-'Space_Grotesk' leading-7">Start My Project</div>
    <img className="w-[517px] h-[517px] left-[792px] top-[3592px] absolute" src={Machine} /> */}
  <section className="relative w-full sm:h-[600px] px-12 py-20 bg-white rounded-[40px] shadow-[0px_6px_0px_0px_rgba(0,0,0,1.00)] border border-neutral-700 max-w-[1236px] mx-auto mt-10">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:mt-[-30px]">
    {/* Text Content */}
    <div className="flex-1 space-y-12">
      <h2 className="text-3xl font-medium font-'Space_Grotesk' text-black">
        Ready to Build Something Amazing?
      </h2>
      <div className="h-px w-[400x] bg-neutral-600" />
      <div className="text-xl sm:w-[500px] font-normal font-'Space_Grotesk' text-black ">
        From web development to AI and design, our team helps you grow faster with smarter tech and creative strategy. Let’s build together.
      </div>
      <p className="text-xl font-bold font-'Space_Grotesk' text-black">
        Let’s build together to grow your online presence
      </p>
      <button className="w-full sm:w-[520px] h-16 bg-cyan-300 rounded-xl flex items-center justify-center">
        <span className="text-black text-xl font-normal font-'Space_Grotesk'">Start My Project</span>
      </button>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={Machine}
        alt="Machine Illustration"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</section>

    <FinalSection/>
</div>
  )
}

export default Service