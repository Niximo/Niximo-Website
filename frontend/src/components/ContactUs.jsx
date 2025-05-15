import Ill from '../assets/Illustration.png'

const ContactUs = () => {
  return (
    <>
    <div className="w-full px-24 inline-flex justify-start items-start gap-10">
    <div data-property-1="Green" className="inline-flex flex-col justify-start items-start">
        <div className="px-2 py-1 bg-cyan-300 rounded-md flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-black text-4xl font-medium font-'Space_Grotesk'">Contact Us</div>
        </div>
    </div>
    <div className="w-80 justify-start text-black text-lg font-normal font-'Space_Grotesk'">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>
</div>

    <div className="w-full px-24 inline-flex justify-start items-center">
        <div className="w-full px-24 pt-14 pb-20 bg-zinc-100 rounded-[45px] inline-flex justify-start items-start gap-2.5">
            {/* left div */}
        <div className="inline-flex flex-col justify-start items-start gap-10">
                <div className="inline-flex justify-start items-center gap-9">
        {/* Radio Button: Say Hi */}
        <label className="flex items-center gap-2 cursor-pointer">
            <input
          type="radio"
          name="contactOption"
          value="sayHi"
          className='w-7 h-7'
            />
            <span className="text-black text-lg font-normal font-'Space_Grotesk'">Say Hi</span>
        </label>
    
        {/* Radio Button: Get a Quote */}
            <label className="flex items-center gap-2 cursor-pointer">
            <input
            type="radio"
          name="contactOption"
            value="getQuote"
            className='w-7 h-7'
            />
            <span className="text-black text-lg font-normal font-'Space_Grotesk'">Get a Quote</span>
        </label>
            </div>
    
                <div className="flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-col justify-start items-start gap-[5px]">
                        <div className="justify-start text-black text-base font-normal font-'Space_Grotesk' leading-7">Name</div>
                        <input className="w-[556px] px-7 py-4 bg-white rounded-2xl outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start gap-2.5 overflow-hidden text-xl" placeholder='Name'/>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-[5px]">
                        <div className="justify-start text-black text-base font-normal font-'Space_Grotesk' leading-7">Email*</div>
                        <input className="w-[556px] px-7 py-4 bg-white rounded-2xl text-xl outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start gap-2.5 overflow-hidden" placeholder='Email'/>
                    </div>
                    <div className="h-56 flex flex-col justify-start items-start gap-[5px]">
                        <div className="justify-start text-black text-base font-normal font-'Space_Grotesk' leading-7">Message*</div>
                        <input type='text' className="w-[556px] h-48 px-7 py-4 bg-white rounded-2xl outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start gap-2.5 overflow-hidden" placeholder='Message'/>
                    </div>
                </div>
                <button data-property-1="Button primary" className="w-[556px] px-9 py-5 bg-zinc-900 rounded-2xl inline-flex justify-center items-center gap-2.5 cursor-pointer">
                    <div className="text-center justify-start text-white text-xl font-normal font-'Space_Grotesk' leading-7">Send Message</div>
                </button>
                
            </div>
            <img src={Ill} className='ml-74'/>
        </div>
    </div>
    </>
  )
}

export default ContactUs
