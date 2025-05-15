import React from 'react'
import FreeProposalFrame from '../assets/FreeProposal.png'

const FreeProposal = () => {
  return (
    <div className="w-full h-96 relative mt-10 mb-5">
        <div className="w-full px-24 left-0 top-0 absolute flex justify-start items-center">
            <div className="w-full h-90 px-14 bg-zinc-100 rounded-[45px] flex justify-start items-center gap-72">
                <div className="inline-flex flex-col justify-start items-start gap-6">
                    <div className="w-[500px] justify-start text-black text-3xl font-medium font-'Space_Grotesk'">Let’s make things happen</div>
                    <div className="w-[500px] justify-start text-black text-lg font-normal font-'Space_Grotesk'">Contact us today to learn more about how our services can help your business grow and succeed online.</div>
                    <button data-property-1="Button primary" className="px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-start items-start gap-2.5 cursor-pointer">
                        <div className="text-center justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Get your free proposal</div>
                    </button>
                </div>
                <img src={FreeProposalFrame} className='h-100 ml-[-55px]'/>
            </div>
        </div>
    </div>
  )
}

export default FreeProposal
