import React from 'react'
import Navbar from '../components/Navbar'
import Careerimg from '../assets/career.png'
import Machine from '../assets/Machine.png'
import FinalSection from '../components/FinalSection'

const Career = () => {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
    <Navbar/>
    
    <div className='flex-grow'>
    {/* <section className="w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-between bg-zinc-100 rounded-[45px] max-w-[1236px] mx-auto mt-15"> */}

    <div className="w-full px-4 sm:px-8 lg:px-20 py-10">
    <div className="w-full max-w-[1236px] bg-zinc-100 rounded-[45px] flex flex-col-reverse lg:flex-row items-center justify-between mx-auto p-8">
    
    {/* Left Content */}
    <div className="flex flex-col items-start gap-6 max-w-xl ml-10">
      <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-medium font-'Space_Grotesk'">
        Careers
      </h1>
      <p className="text-black text-2xl sm:text-3xl font-medium font-'Space_Grotesk'">
        Start your career with Niximo
      </p>
      <button className="px-6 py-4 bg-cyan-300 rounded-2xl outline-1 outline-zinc-900 text-black text-xl font-'Space_Grotesk' cursor-pointer">
        Request a quote
      </button>
    </div>

    {/* Right Image */}
    <div className="mb-8 lg:mb-0">
      <img
        src={Careerimg}
        alt="Blog illustration"
        className="w-72 sm:w-100 h-72 sm:h-100 object-cover"
      />
    </div>
    </div>
    </div>
    {/* </section> */}
    </div>

  <div className="px-4 py-8 max-w-7xl mx-auto">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { title: "UI UX Designer (Figma Expert)", type: "Remote Freelancer" },
      { title: "Backend Developer", type: "Remote Freelancer" },
      { title: "Video Editor", type: "Remote Freelancer" },
      { title: "UI UX Designer (Figma Expert)", type: "Remote Freelancer" },
      { title: "Backend Developer", type: "Remote Freelancer" },
      { title: "Video Editor", type: "Remote Freelancer" },
    ].map((job, index) => (
      <div
        key={index}
        className="bg-white border border-black rounded-xl p-6 flex flex-col justify-between h-40"
      >
        <div>
          <h3 className="text-xl font-medium text-black font-'Space_Grotesk'">
            {job.title}
          </h3>
          <p className="text-base text-black mt-2 font-medium font-'Space_Grotesk'">
            {job.type}
          </p>
        </div>
        <button className="mt-4 w-fit px-4 py-2 bg-cyan-300 text-black text-base font-medium rounded-[5px] font-'Space_Grotesk' cursor-pointer">
          Apply Now
        </button>
      </div>
    ))}
  </div>
</div>

    <section className="relative w-full sm:h-[950px] sm:mb-30 lg:h-[600px] lg:mb-30 px-12 py-20 bg-white rounded-[40px] shadow-[0px_6px_0px_0px_rgba(0,0,0,1.00)] border border-neutral-700 max-w-[1236px] mx-auto mt-10">
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
                  <button className="w-full sm:w-[520px] h-16 bg-cyan-300 rounded-xl flex items-center justify-center cursor-pointer">
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

            <div className='min-h-screen flex flex-col justify-end items-center'>
      <FinalSection/>
    </div>
    </div>
  )
}

export default Career
