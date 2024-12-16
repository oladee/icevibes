import Image, { StaticImageData } from "next/image"
import play from '../assets/play.svg'
import { readyConstants } from "../constants"
const Ready = ()=>{
    return(<div className="bg-[#FDAC18] py-16 px-5 lg:py-[120px] lg:px-[8.33vw]">
        <h2 className="text-[9.6vw] md:text-[5.6vw] lg:text-[3.8vw] text-white font-beachday text-center">
        Get ready for the <br /><span className="text-[#000] inline-flex">ULTIMATE EXPERIENCE <Image src={play} alt="" className="hidden lg:inline-block"/></span>
        </h2>
        <div>
            {
                readyConstants.map((item, idx)=> <Card key={idx} title={item.title} desc={item.desc} img={item.img}/>)
            }
        </div>
    </div>)
}

export default Ready

export const Card = ({title, img, desc}:{title : string, img : StaticImageData, desc : string})=>{
    return(<div className="border-r-[6px] border-b-[6px] border-t border-l border-[#000] h-[233px] lg:h-[406px]">
        <div className="h-[50%] lg:h-[60%]">
            <Image src={img} alt="" className="h-full block"/>
        </div>
        <div className="h-[50%] lg:h-[40%] bg-white p-5 lg:p-8">
            <h2 className="text-2xl lg:text-[2.22vw] text-[#000] font-beachday">
                {title}
            </h2>
            <p className="font-switzer lg:text-[1.11vw]">
                {desc}
            </p>
        </div>
    </div>)
}