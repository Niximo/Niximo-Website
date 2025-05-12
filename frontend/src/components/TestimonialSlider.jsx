import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const testimonials = [
    {
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
        review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
        review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
        review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    }
]

const TestimonialSlider = () => {
  return (
    <div className="w-[606px] h-60 rounded-[45px] border-1 border-cyan-300">
        <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop
      >
      {testimonials.map((t, index) => (
      <SwiperSlide>
        <div className="inline-flex flex-col justify-start items-end gap-5">
                <div className="w-[606px] h-64 relative">
                    <div className="w-[502px] left-[52px] top-[48px] absolute justify-start text-white text-lg font-normal font-'Space_Grotesk'">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                </div>
                <div className="w-[526px] justify-start"><span class="text-cyan-300 text-xl font-medium font-'Space_Grotesk'">John Smith<br/></span><span class="text-white text-lg font-normal font-'Space_Grotesk'">Marketing Director at XYZ Corp</span></div>
            </div>
      </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}  

export default TestimonialSlider