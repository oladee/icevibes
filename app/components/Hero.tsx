import Image from "next/image"
import icevibelogo from '../assets/icelogo.svg'
import Link from "next/link"
import whatsapp from '../assets/whatsapp.svg'
const Hero =  ()=>{
    return(<div className="bg-[#7A33FF] bg-herobgmob bg-cover  lg:bg-herobg lg:bg-auto h-full bg-[100%_96%]  lg:bg-[0%_96%]  bg-no-repeat lg:px-[120px] lg:pb-96 relative">
        <div className="flex justify-center py-6 lg:py-8">
            <Image src={icevibelogo} alt=""  className="w-[71px] lg:w-[158px]"/>
        </div>
        <div className="md:py-8 lg:py-[120px] flex flex-col items-center lg:items-start">
            <div className="font-beachday text-[12.8vw] leading-[60px] lg:leading-normal md:text-[8vw] lg:text-[5.5vw] text-white">
                <h3>
                    SKATE.
                </h3>
                <h3>PARTY.</h3>
                <h3>GAME.</h3>
            </div>
            <p className="font-switzer text-sm md:text-2xl lg:leading-7 w-[77.56vw] md:w-[57.56vw] lg:w-[27.56vw] lg:text-[1.388vw] text-white mt-4 md:mt-8 lg:mt-3 lg:mb-3 text-center lg:text-start">
            One venue, one month, countless memories. Ice skating, arcade gaming, and live entertainment combined for all ages!
            </p>
            <div className="pb-[300px] md:pb-[300px] md:mt-14 mt-8 lg:pb-0">
            <Link href='/' className="bg-[#EA9B0B] font-switzer lg:text-[1.11vw] text-white font-medium border-r-[6px] border-b-[6px] border-t border-l border-[#000] transition-all duration-300 hover:border-0 py-5 px-8 lg:px-8 rounded-lg">
            Grab your ticket now
            </Link>
            </div>
            
        </div>
        <div className="fixed chat bottom-10 right-6 bg-white rounded-2xl z-50 p-4 ">
           <h1 className="font-switzer text-sm mb-2 lg:mb-4">
           Need help? chat with us
           </h1>
           <Image src={whatsapp} alt="icevibe chat" className="w-24 lg:w-auto" />
        </div>
    </div>)
}

export default Hero