import Amazon from '../assets/Amazon.svg'
import Hubspot from '../assets/Hubspot.svg'
import Netflix from '../assets/Netflix.svg'
import Notion from '../assets/Notion.svg'
import Zoom from '../assets/Zoom.svg'
import Dribble from '../assets/Dribble.svg'
import ArrowR from '../assets/Arrow right.svg'
import ArrowL from '../assets/Arrow left.svg'
import BVector from '../assets/BlueVector.svg'

import Marquee from "react-fast-marquee"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const LogoSlider = () => {
        const logos = [
            Amazon,
            Dribble,
            Hubspot,
            Notion,
            Netflix,
            Zoom
        ]

        return (
        <div className="bg-white py-8">
        <Marquee pauseOnHover speed={50} gradient={false}>
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`client-${index}`}
            className="h-13 mx-10 object-contain"
          />
        ))}
      </Marquee>
    </div>
        )
    }

export default LogoSlider