import React from 'react'
import Navbar from '../components/Navbar'
import FinalSection from '../components/FinalSection'
import Machine from '../assets/Machine.png'
import ArderiaWhole from '../assets/ArderiaWhole.png'
import ElephantPC from '../assets/ElephantPC.png'
import ElephantMOB from '../assets/ElephantMOB.png'

const OurWorks = () => {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
    <Navbar/>
    
    <div className='flex-grow'>
    <section className="w-full px-4 py-12 bg-white">
  <h2 className="text-center text-4xl sm:text-5xl font-medium font-'Space_Grotesk' text-black mb-14">
    Our Works
  </h2>

  <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ml-30 mr-30">
    {/* Card 1 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative mt-10">
        <img src={ElephantPC} alt="Elephant Juice" className="w-full h-48 object-cover rounded-md" />
        <img src={ElephantMOB} alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md ml-55 mt-[-30px]" />
        {/* <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" /> */}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">Elephant Juice</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src="https://placehold.co/319x185" alt="Eastern bf" className="w-full h-48 object-cover rounded-md" />
        <img src="https://placehold.co/252x161" alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md" />
        <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">Eastern bf</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src="https://placehold.co/319x185" alt="Xexicon Sat" className="w-full h-48 object-cover rounded-md" />
        <img src="https://placehold.co/252x161" alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md" />
        <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">Xexicon Sat</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      {/* <div className="relative">
        <img src="https://placehold.co/319x185" alt="The Ardeira" className="w-full h-48 object-cover rounded-md" />
        <img src="https://placehold.co/252x161" alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md" />
        <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">The Ardeira</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div> */}
      <img src={ArderiaWhole} className='w-full'/>
    </div>

    {/* Card 5 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src="https://placehold.co/319x185" alt="Verner Kit" className="w-full h-48 object-cover rounded-md" />
        <img src="https://placehold.co/252x161" alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md" />
        <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">Verner Kit</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src="https://placehold.co/319x185" alt="Hexstar Universe" className="w-full h-48 object-cover rounded-md" />
        <img src="https://placehold.co/252x161" alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md" />
        <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">Hexstar Universe</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div>
    </div>

    {/* Card 7 */}
    <div className="bg-white border border-cyan-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src="https://placehold.co/319x185" alt="Hexstar Universe" className="w-full h-48 object-cover rounded-md" />
        <img src="https://placehold.co/252x161" alt="Overlay" className="absolute top-4 left-4 w-40 h-28 object-cover rounded-md shadow-md" />
        <img src="https://placehold.co/163x163" alt="Circle" className="absolute bottom-4 left-8 w-20 h-20 object-cover rounded-full border-2 border-white" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-'Space_Grotesk'">Hexstar Universe</h3>
        <div className='flex flex-col'>
            <a href="#" className="text-black font-medium font-'Space_Grotesk' hover:text-cyan-600">visit site →</a>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-cyan-500 mt-[-4px]" />
        </div>
      </div>
    </div>

  </div>
</section>

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

export default OurWorks
