import Image from "next/image"
import calendar from '../assets/Calender.svg'
import location from '../assets/Location.svg'

const Location = ()=>{
  return(<div className="bg-[#000] lg:py-[120px] py-12 px-8 lg:px-[8.33vw]">
    <h2 className="font-beachday text-center text-[9.6vw] md:text-[5.6ve] lg:text-[3.88vw] text-white">
        One Month, One Location
    </h2>
    <div className="flex flex-col lg:flex-row lg:justify-evenly gap-7 mt-7 lg:mt-14">
        <div className="flex flex-col items-center">
            <Image src={location} alt="" className="lg:w-[255px]"/>
            <div className="bg-[#FDAC18] text-white text-center -rotate-[7deg] py-2 mt-2 lg:py-6 px-4 lg:px-8 rounded-xl w-[82.93vw] md:w-[52vw] lg:w-[30.29vw] h-[90px] lg:h-[140px]">
                <h4 className="font-beachday text-2xl lg:text-[2.2vw]">
                    WHERE?
                </h4>
                <p className="font-switzer text-sm lg:text-[1.46vw] font-semibold lg:leading-6">
                THE HOLIDAY VILLAGE, FEDERAL PALACE HOTEL, VICTORIA ISLAND ,LAGOS
                </p>
            </div>
        </div>
        <div className="flex flex-col items-center text-center text-white">
            <Image src={calendar} alt="" className="lg:w-[204px] lg:mb-8"/>
            <div className="bg-[#7A33FF] -rotate-[7deg] w-[82.93vw] md:w-[52vw] py-2 mt-2 lg:px-8 lg:py-6 rounded lg:rounded-xl lg:w-[35.29vw] h-[90px] lg:h-[140px] space-y-2">
                <h4 className="font-beachday text-2xl lg:text-[2.2vw]">
                    WHEN?
                </h4>
                <p className="font-switzer text-sm lg:text-[1.46vw] font-semibold">
                DEC 20, 2024 - JAN 20, 2024
                </p>
            </div>
        </div>
    </div>
    
  </div>)
}

export default Location