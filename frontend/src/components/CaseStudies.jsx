import React from 'react'
import BlueArrow from '../assets/bluearrow.svg'

const CaseStudies = () => {
  return (
    // <>
    // <div className="w-full px-24 inline-flex justify-start items-start gap-10">
    //     <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
    //         <div className="px-2 py-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
    //             <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Case Studies</div>
    //         </div>
    //     </div>
    //     <div className="w-[580px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Explore Real-Life Examples of Our Proven Brand Success through Our Case Studies</div>
    // </div>
    
    
    
    // <div className="px-24 inline-flex flex-col justify-start items-start gap-2.5">
    //     <div className="px-14 py-16 bg-zinc-900 rounded-[45px] flex justify-start items-start gap-16">
    //         {/* sec-1 */}
    //         <div className="flex-1/3 inline-flex flex-col justify-start items-start gap-5">
    //             <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div>
    //             <div data-property-1="Simple green" className="inline-flex justify-start items-center gap-3.5">
    //                 <div className="justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
    //                 <img src={BlueArrow} />
    //             </div>
    //         </div>
    //         <div className="w-48 h-0 origin-top-left rotate-90 outline-1 outline-offset-[-0.50px] outline-white"></div>
            
    //         <div className="flex-1/3 inline-flex flex-col justify-start items-start gap-5">
    //             <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div>
    //             <div data-property-1="Simple green" className="inline-flex justify-start items-center gap-3.5">
    //                 <div className="justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
    //                 <img src={BlueArrow} />
    //             </div>
    //         </div>
    //         <div className="w-48 h-0 origin-top-left rotate-90 outline-1 outline-offset-[-0.50px] outline-white"></div>
            
    //         <div className="flex-1/3 inline-flex flex-col justify-start items-start gap-5">
    //             <div className="justify-start text-white text-lg font-normal font-'Space_Grotesk'">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div>
    //             <div data-property-1="Simple green" className="inline-flex justify-start items-center gap-3.5">
    //                 <div className="justify-start text-cyan-300 text-xl font-normal font-'Space_Grotesk' leading-7">Learn more</div>
    //                 <img src={BlueArrow} />
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // </>
    <>
  {/* Header Section */}
  <div className="w-full px-6 sm:px-12 md:px-24 flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-10 mb-8">
    <div data-property-1="Green" className="flex flex-col justify-start items-start">
      <div className="px-2 py-1.5 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
        <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium font-'Space_Grotesk'">
          Case Studies
        </div>
      </div>
    </div>
    <div className="w-full lg:w-[580px] text-black text-base sm:text-lg font-normal font-'Space_Grotesk'">
      Explore Real-Life Examples of Our Proven Brand Success through Our Case Studies
    </div>
  </div>

  {/* Case Studies Section */}
  <div className="px-6 sm:px-12 md:px-24 flex flex-col justify-start items-start gap-6">
    <div className="px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 bg-zinc-900 rounded-[30px] sm:rounded-[45px] flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-16 w-full">
      
      {/* Case Study 1 */}
      <div className="flex-1 flex flex-col justify-start items-start gap-5">
        <div className="text-white text-base sm:text-lg font-normal font-'Space_Grotesk'">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
        </div>
        <div className="flex justify-start items-center gap-3.5">
          <div className="text-cyan-300 text-lg sm:text-xl font-normal font-'Space_Grotesk' leading-7">
            Learn more
          </div>
          <img src={BlueArrow} />
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-48 h-0 rotate-90 border-t border-white opacity-50" />

      {/* Case Study 2 */}
      <div className="flex-1 flex flex-col justify-start items-start gap-5">
        <div className="text-white text-base sm:text-lg font-normal font-'Space_Grotesk'">
          For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
        </div>
        <div className="flex justify-start items-center gap-3.5">
          <div className="text-cyan-300 text-lg sm:text-xl font-normal font-'Space_Grotesk' leading-7">
            Learn more
          </div>
          <img src={BlueArrow} />
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-48 h-0 rotate-90 border-t border-white opacity-50" />

      {/* Case Study 3 */}
      <div className="flex-1 flex flex-col justify-start items-start gap-5">
        <div className="text-white text-base sm:text-lg font-normal font-'Space_Grotesk'">
          For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
        </div>
        <div className="flex justify-start items-center gap-3.5">
          <div className="text-cyan-300 text-lg sm:text-xl font-normal font-'Space_Grotesk' leading-7">
            Learn more
          </div>
          <img src={BlueArrow} />
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default CaseStudies
