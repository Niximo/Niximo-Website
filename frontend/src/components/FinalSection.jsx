import React from 'react'
import linkedinBlack from '../assets/linkedinblack.svg'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Niximo_white from '../assets/niximo_white.png'

const FinalSection = () => {
  return (
    <div className="px-6 md:px-14 pt-14 pb-12 bg-zinc-900 rounded-tl-[45px] rounded-tr-[45px] inline-flex flex-col justify-start items-start gap-12">
  {/* Top Section: Logo, Links, Icons */}
  <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-40">
    <img src={Niximo_white} className="w-32 h-9" />

    <div className="flex flex-wrap justify-start items-start gap-5 md:gap-10">
      <div className="text-white text-lg font-normal underline font-'Space_Grotesk' cursor-pointer">
        <a href=''>About us</a></div>
      <div className="text-white text-lg font-normal underline font-'Space_Grotesk' cursor-pointer">
        <a href=''>Services</a></div>
      <div className="text-white text-lg font-normal underline font-'Space_Grotesk' cursor-pointer">
        <a href=''>Our Works</a></div>
      <div className="text-white text-lg font-normal underline font-'Space_Grotesk' cursor-pointer">
        <a href=''>Career</a></div>
      <div className="text-white text-lg font-normal underline font-'Space_Grotesk' cursor-pointer">
        <a href=''>Blog</a></div>
    </div>

    <div className="flex justify-start items-center gap-3">
      <a href=''>
        <img src={linkedinBlack} className="w-7 h-7 bg-white rounded-full" />
      </a>
      <a href=''>
        <img src={Facebook} className="w-7 h-7 bg-white rounded-full" />
      </a>
      <a href=''><img src={Twitter} className="w-7 h-7 bg-white rounded-full" />
      </a>
    </div>
  </div>

  {/* Middle Section: Contact + Newsletter */}
  <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-40">
    <div className="flex flex-col justify-start items-start gap-7">
      <div className="px-1.5 bg-cyan-300 rounded-md">
        <div className="text-black text-xl font-medium font-'Space_Grotesk'">Contact us:</div>
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        <div className="text-white text-lg font-normal font-'Space_Grotesk'">Email: info@positivus.com</div>
        <div className="text-white text-lg font-normal font-'Space_Grotesk'">Phone: 555-567-8901</div>
        <div className="text-white text-lg font-normal font-'Space_Grotesk'">
          Address: 1234 Main St<br />
          Moonstone City, Stardust State 12345
        </div>
      </div>
    </div>

    <div className="w-full md:w-auto px-6 py-10 bg-zinc-800 rounded-2xl flex flex-col md:flex-row justify-start items-start gap-5">
      <input type="email" placeholder="Email" className="w-full md:w-72 px-6 py-4 rounded-2xl outline-1 outline-offset-[-1px] outline-white text-white text-lg"
      />
      <button className="px-6 py-4 bg-cyan-300 rounded-2xl cursor-pointer">
        <div className="text-black text-xl font-normal font-'Space_Grotesk' leading-7">Subscribe to news</div>
      </button>
    </div>
  </div>

  {/* Bottom Section: Line + Legal */}
  <div className="w-full flex flex-col gap-6">
    <div className="w-full h-0 border-t border-white"></div>
    <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-10">
      <div className="text-white text-lg font-normal font-'Space_Grotesk'">© 2023 Positivus. All Rights Reserved.</div>
      <div className="text-white text-lg font-normal underline font-'Space_Grotesk' cursor-pointer">Privacy Policy</div>
    </div>
  </div>
</div>
  )
}

export default FinalSection
