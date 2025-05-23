import React from 'react'
import linkedinBlack from '../assets/linkedinblack.svg'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Niximo_white from '../assets/niximo_white.png'

const FinalSection = () => {
  return (
    <footer className="w-full bg-zinc-900 rounded-t-[45px] mt-24">
  <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 py-14 space-y-14">
    
    {/* Top Row */}
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
      {/* Logo & Nav Links */}
      <div className="flex flex-col gap-6">
        <img src={Niximo_white} alt="Logo" className="w-44 h-12" />
        <div className="flex flex-wrap gap-5">
          {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item, idx) => (
            <a key={idx} href="#" target="_blank" className="text-white underline text-lg font-['Space_Grotesk']">
              {item}
            </a>
          ))}
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a href="#" target="_blank">
            <img src={linkedinBlack} className="w-7 h-7 bg-white rounded-full" />
          </a>
          <a href="#" target="_blank">
            <img src={Facebook} className="w-7 h-7 bg-white" />
          </a>
          <a href="#" target="_blank">
            <img src={Twitter} className="w-7 h-7 bg-white rounded-full" />
          </a>
        </div>
      </div>

      {/* Contact + Newsletter */}
      <div className="flex flex-col md:flex-row justify-between gap-10 w-full lg:w-auto">
        {/* Contact Section */}
        <div className="space-y-4 max-w-sm">
          <div className="px-2 bg-cyan-300 rounded-md w-fit">
            <h3 className="text-black text-xl font-medium font-['Space_Grotesk']">Contact us:</h3>
          </div>
          <div className="text-white text-lg space-y-2 font-['Space_Grotesk']">
            <div>Email: info@positivus.com</div>
            <div>Phone: 555-567-8901</div>
            <div>
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-zinc-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            placeholder="Email"
            className="flex-grow w-full sm:w-auto px-4 py-3 rounded-2xl outline outline-1 outline-white bg-transparent text-white placeholder-white text-xl font-['Space_Grotesk']"
          />
          <button className="px-6 py-3 bg-cyan-300 rounded-2xl text-black text-lg font-['Space_Grotesk']">
            Subscribe to news
          </button>
        </div>
      </div>
    </div>

    {/* Divider & Copyright */}
    <div className="border-t border-white pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="text-white text-lg font-['Space_Grotesk']">© 2023 Positivus. All Rights Reserved.</div>
      <a href="#" target="_blank" className="text-white underline text-lg font-['Space_Grotesk']">Privacy Policy</a>
    </div>
  </div>
</footer>
    
  )
}

export default FinalSection
