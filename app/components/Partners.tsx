import Image from "next/image"
import fidelity from '../assets/partners/fidelity.svg'
import kulture from '../assets/partners/kulture.svg'
import zara from '../assets/partners/zara.svg'
import ensum from '../assets/partners/ensum.svg';
import glice from '../assets/partners/GLICE 1.svg'
import Marquee from "react-fast-marquee";


const Partners = () => {
  return (
    <div className="px-5 md:px-16 py-20 lg:py-[120px] lg:px-[13.33vw]">
      <h3 className="font-beachday text-[#000] text-2xl md:text-3xl lg:text-[3.88vw] text-center">
      our partners
      </h3>
      <div className="hidden md:flex flex-wrap items-center justify-center mt-8 lg:mt-14 gap-4 lg:gap-[5.46vw] ">
        <Image src={fidelity} alt="" className="w-24 lg:w-auto"/>
        <Image src={glice} alt="" className="w-24 lg:w-auto" />
        <Image src={kulture} alt="" className="w-24 lg:w-auto" />
        <Image src={zara} alt="" className="w-24 lg:w-auto" />
        <Image src={ensum} alt="" className="w-24 lg:w-auto" />
      </div>
      <div className="flex md:hidden mt-8">
      <Marquee className=""  >
        <Image src={fidelity} alt="" className="w-24 mr-6"/>
        <Image src={glice} alt="" className="w-24 mr-6" />
        <Image src={kulture} alt="" className="w-24 mr-6" />
        <Image src={zara} alt="" className="w-24 mr-6" />
        <Image src={ensum} alt="" className="w-24 mr-6" />
      </Marquee>
      </div>
    </div>
  )
}

export default Partners
