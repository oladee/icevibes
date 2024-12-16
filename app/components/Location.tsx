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
            <Image src={location} alt=""/>
            <div className="bg-[#FDAC18] text-white text-center -rotate-[7deg] py-2 mt-2 lg:py-6 lg:px-8 rounded lg:rounded-xl lg:w-[27.29vw] lg:h-[129px]">
                <h4 className="font-beachday">
                    WHERE?
                </h4>
                <p className="font-switzer text-sm lg:text-2xl font-semibold">
                FEDERAL PALACE HOTEL, VICTORIA ISLAND ,LAGOS
                </p>
            </div>
        </div>
        <div className="flex flex-col items-center text-center text-white">
            <Image src={calendar} alt=""/>
            <div className="bg-[#7A33FF] -rotate-[7deg] w-full py-2 mt-2 lg:px-8 lg:py-6 rounded lg:rounded-xl lg:w-[27.29vw] lg:h-[129px]">
                <h4 className="font-beachday">
                    WHEN?
                </h4>
                <p className="font-switzer text-sm lg:text-2xl font-semibold">
                DEC 15 , 2024 - JAN 15, 2024
                </p>
            </div>
        </div>
    </div>
    
  </div>)
}

export default Location