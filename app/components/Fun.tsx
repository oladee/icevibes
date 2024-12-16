import Image from "next/image"
import fun1 from "../assets/fun1.svg"
import fun2 from "../assets/fun2.svg"
const Fun = () => {
  return (
    <div className="px-5 py-20 lg:py-[120px] lg:px-[8.33vw]">
      <div className="lg:flex lg:justify-between lg:items-center">
        <h2 className="font-beachday lg:w-[30.2vw] lg:text-[3.88vw]">
        All the <span className="text-[#FDAC18]">fun</span> you can imagine
        </h2>
        <p className="font-switzer lg:text-[1.38vw] lg:w-[42.84vw]">
        We bring together the thrill of ice skating, the excitement of arcade gaming, and the energy of live entertainment into one unforgettable event. Over the course of a month, our venue will transform into a buzzing hub of activity, perfect for anyone looking to create magical memories this holiday season
        </p>
      </div>
      <div className="p-6 lg:my-16 lg:py-9 lg:px-11 bg-[#BBE4FF] border-t-[0,6px] lg:border-t border-r-[5.5px] lg:border-r-8 border-b-[5.5px] lg:border-b-8 border-l-[1.2px] lg:border-l-2 border-[#000] rounded-2xl flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-9">
        <div className="bg-[#7A33FF] border-t-[4px] lg:border-t-[6px] border-r-[0.6px] lg:border-r  border-b-[0.6px] lg:border-b border-l-[4px] lg:border-l-[6px] border-[#000] rounded-2xl py-6 px-5 lg:py-9 lg:px-8 lg:w-[27.5vw]">
        <h2 className="font-beachday text-[33px] lg:text-[3.33vw] text-white">
        Fusion of fun
        </h2>
        <p className="font-switzer lg:text-[1.66vw] font-medium text-white">
        At Icevibes, Our goal is to deliver a one-of-kind entertainment experience that combines creativity, inclusivity, and fun, ensuring there’s something for everyone to enjoy
        </p>
        </div>
        <div className="flex lg:gap-9">
         <div>
         <Image src={fun1} alt="" className="px-7 lg:px-0"/>
         </div>
         <div>
         <Image src={fun2} alt="" className="hidden lg:block"/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Fun
