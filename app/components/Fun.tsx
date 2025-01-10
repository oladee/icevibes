'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const Fun = () => {
  return (
    <div className="px-5 md:px-16 pb-20 lg:pb-[120px] lg:px-[8.33vw]">
      <div className="lg:flex lg:justify-between lg:items-center px-5 lg:px-0">
        <h2 className="font-beachday text-center lg:text-start text-[9.6vw] mb-4 lg:mb-0 lg:w-[30.2vw] lg:text-[3.88vw]">
        All the <span className="text-[#FDAC18]">fun</span> you <br /> can imagine
        </h2>
        <p className="font-switzer text-[4.25vw] md:text-[2.3vw] lg:text-[1.38vw] lg:w-[42.84vw] text-center lg:text-start">
        We bring together the thrill of ice skating, the excitement of arcade gaming, and the energy of live entertainment into one unforgettable event. Over the course of a month, our venue will transform into a buzzing hub of activity, perfect for anyone looking to create magical memories this holiday season
        </p>
      </div>
      <div className="p-6 mt-14 lg:my-16 md:py-9 lg:py-9 md:px-16 lg:px-11 bg-[#BBE4FF] border-t-[0,6px] lg:border-t border-r-[5.5px] lg:border-r-8 border-b-[5.5px] lg:border-b-8 border-l-[1.2px] lg:border-l-2 border-[#000] rounded-2xl flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-9">
        <div className="bg-[#7A33FF] border-t-[4px] lg:border-t-[6px] border-r-[0.6px] lg:border-r  border-b-[0.6px] lg:border-b border-l-[4px] lg:border-l-[6px] border-[#000] rounded-2xl py-6 px-5 lg:py-9 lg:px-8 lg:w-[27.5vw]">
        <h2 className="font-beachday text-[33px] md:text-4xl lg:text-[3.33vw] text-white">
        Fusion of fun
        </h2>
        <p className="font-switzer md:text-xl lg:text-[1.66vw] font-medium text-white md:mt-4 lg:mt-0">
        At Icevibes, Our goal is to deliver a one-of-kind entertainment experience that combines creativity, inclusivity, and fun, ensuring there’s something for everyone to enjoy
        </p>
        </div>
        <Swiper className="w-full lg:w-[53vw]" modules={[Autoplay]} breakpoints={
          {
            320 : {
              slidesPerView : 1,
            },
            700 : {
              slidesPerView : 1.5,
              spaceBetween : 30,
            },
            1024 : {
              spaceBetween : 30,
              slidesPerView : 2
            }
          }
        }
        touchReleaseOnEdges={true}
        autoplay={{
          delay: 5000,
        }}
        >
          <SwiperSlide>
            <div>
              <Image src="/fun3.jpg" alt="image" className="h-[276px] lg:h-[500px] object-center object-cover rounded-md"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
            <Image src="/fun1.jpg" alt="image" className="h-[276px] lg:h-[500px] object-center object-cover rounded-md"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src="/fun2.jpg" alt="" className="h-[276px] lg:h-[500px] object-center object-cover rounded-md"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Fun
