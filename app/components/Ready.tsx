import Image, { StaticImageData } from "next/image"
import play from '../assets/play.svg'
import { readyConstants } from "../constants"
import Link from "next/link"
const Ready = ()=>{
    return(<div className="bg-[#FDAC18] py-16 px-5 lg:py-[120px] lg:px-[8.33vw]">
        <h2 className="text-[9.6vw] md:text-[5.6vw] lg:text-[3.8vw] text-white font-beachday text-center">
        Get ready for the <br /><span className="text-[#000] inline-flex">ULTIMATE EXPERIENCE <Image src={play} alt="" className="hidden lg:inline-block"/></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 lg:mt-20">
            {
                readyConstants.map((item, idx)=> <Card key={idx} title={item.title} desc={item.desc} img={item.img}/>)
            }
        </div>
        <div className="mt-12 lg:mt-20 flex justify-center">
            <Link href='' className='bg-[#7A33FF] font-switzer lg:text-[1.11vw] text-white font-medium border-r-[6px] border-b-[6px] border-t border-l border-[#000] transition-all duration-300 hover:border-0 py-4 px-4 lg:px-8 rounded-lg'>
            Grab your ticket now
            </Link>
        </div>

    </div>)
}

export default Ready

export const Card = ({title, img, desc}:{title : string, img : StaticImageData, desc : string})=>{
    return(<div className="border-r-[6px] border-b-[6px] border-t border-l border-[#000] h-[263px] lg:h-[406px] rounded-lg lg:rounded-2xl">
        <div className="h-[50%] lg:h-[60%]">
            <Image src={img} alt="" className="h-full block rounded-t-lg lg:rounded-t-xl"/>
        </div>
        <div className="h-[50%] lg:h-[40%] bg-white p-5 lg:p-8">
            <h2 className="text-2xl lg:text-[2.22vw] text-[#000] font-beachday">
                {title}
            </h2>
            <p className="font-switzer text-base lg:text-[1.11vw] lg:mt-2">
                {desc}
            </p>
        </div>
    </div>)
}