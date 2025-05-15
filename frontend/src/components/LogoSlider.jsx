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
        <div className="w-full bg-white py-9">
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