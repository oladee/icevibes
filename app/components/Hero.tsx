import Image from "next/image"
import icevibelogo from '../assets/icelogo.svg'
import Link from "next/link"
const Hero =  ()=>{
    return(<div className="bg-[#7A33FF] bg-herobgmob lg:bg-herobg lg:bg-auto h-full bg-[10%_76%]  lg:bg-[0%_96%]  bg-no-repeat lg:px-[120px] lg:pb-96">
        <div className="flex justify-center py-6 lg:py-8">
            <Image src={icevibelogo} alt=""  className="w-[71px] lg:w-[158px]"/>
        </div>
        <div className="lg:py-[120px] flex flex-col items-center lg:items-start">
            <div className="font-beachday text-[12.8vw] md:text-[7vw] lg:text-[5.5vw] text-white">
                <h3>
                    SKATE.
                </h3>
                <h3>PARTY.</h3>
                <h3>GAME.</h3>
            </div>
            <p className="font-switzer text-sm lg:leading-7 w-[77.56vw] md:w-[47.56vw] lg:w-[27.56vw] lg:text-[1.388vw] text-white mt-4 lg:mt-11 lg:mb-20 text-center lg:text-start">
            One venue, one month, countless memories. Ice skating, arcade gaming, and live entertainment combined for all ages!
            </p>
            <div className="pb-[230px] mt-8 lg:pb-0">
            <Link href='/' className="bg-[#EA9B0B] -z-20 font-switzer lg:text-[1.11vw] text-white font-medium border-r-[6px] border-b-[6px] border-t border-l border-[#000] transition-all duration-300 hover:border-0 py-4 px-6 lg:px-8 rounded-lg">
            Grab your ticket now
            </Link>
            </div>
            
        </div>
    </div>)
}

export default Hero