import React, {useState} from 'react'
import Logo from '../assets/niximo_group.png'
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-36 sm:w-44 h-12" />
      </div>

      {/* Hamburger - Mobile Only */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-black">
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Menu - Desktop */}
      <nav className="hidden lg:flex items-center gap-8">
        {['About us', 'Services', 'Our Works', 'Career', 'Blog'].map((item) => (
          <div
            key={item}
            className="text-black text-lg font-normal font-'Space_Grotesk' leading-7 cursor-pointer"
          >
            {item}
          </div>
        ))}
        <div className="px-6 py-3 rounded-2xl border border-zinc-900 cursor-pointer">
          <div className="text-black text-lg font-normal font-'Space_Grotesk'">Request a quote</div>
        </div>
      </nav>

      {/* Menu - Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-10 right-10 bg-white shadow-md flex flex-col items-start px-6 py-4 lg:hidden z-50">
          {['About us', 'Services', 'Our Works', 'Career', 'Blog'].map((item) => (
            <div
              key={item}
              className="py-2 text-black text-lg font-normal font-'Space_Grotesk' w-[1200px] rounded-3xl"
            >
              {item}
            </div>
          ))}
          <div className="w-full mt-4 px-6 py-3 rounded-2xl border border-zinc-900 text-black text-lg text-center">
            Request a quote
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
