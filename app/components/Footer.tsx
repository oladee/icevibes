import Image from "next/image"
import Link from "next/link"
import twitter from '../assets/twitter.svg'
import footerLogo from '../assets/footerlogo.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'


const Footer = ()=>{
    return(<div className='bg-[#000] py-16 px-5 lg:py-[120px] lg:px-[8.33vw]'>
        <div className="lg:px-20">
            <video preload="none" poster='/poster.svg' className="">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className=" my-6 lg:px-16 lg:my-16">
            <hr className="border-[rgba(255,255,255,0.50)]" />
        </div>
        <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-3  my-3">
            <Link href=''>
            About IceVibe
            </Link>
            Contact Us
            <Link href=''>
            </Link>
        </div>
        <div className="flex justify-center gap-5 mt-4 lg:mt-10">
            <Image src={twitter} alt="" className="w-9 lg:w-auto"/>
            <Image src={insta} alt="" className="w-9 lg:w-auto"/>
            <Image src={fb} alt=""className="w-9 lg:w-auto" />
        </div>
        <div className="mt-11 lg:mt-16">
            <Image src={footerLogo} alt='' className="opacity-20"/>
        </div>
    </div>)
}

export default Footer