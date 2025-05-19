import Amazon from '../assets/Amazon.svg'
import Hubspot from '../assets/Hubspot.svg'
import Netflix from '../assets/Netflix.svg'
import Notion from '../assets/Notion.svg'
import Zoom from '../assets/Zoom.svg'
import Dribble from '../assets/Dribble.svg'

import Marquee from "react-fast-marquee"

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
        <div className="w-full bg-white py-6 sm:py-9">
        <Marquee pauseOnHover speed={50} gradient={false}>
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`client-${index}`}
            className="h-10 sm:h-12 md:h-16 mx-4 sm:mx-6 md:mx-8 object-contain max-w-[160px]"
          />
        ))}
      </Marquee>
    </div>
        )
    }

export default LogoSlider