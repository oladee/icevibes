'use client'
import Image from "next/image"
import twitter from '../assets/twitter.svg'
import footerLogo from '../assets/footerlogo.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'
import { useEffect, useRef, useState } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import speakerlow from '../assets/speakerLow.svg'
import speakerhigh from '../assets/speakerhigh.svg'
import waFooter from '../assets/footer_whatsapp-icon.svg'
import Link from "next/link"


gsap.registerPlugin(useGSAP);

const Footer = ()=>{
    const videoRef = useRef<HTMLVideoElement>(null!)
    const [isMuted, setIsMuted] = useState(false);
    const element = videoRef.current
    console.log(element)
    const toggleMute = ()=>{
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted); // Toggle mute
          }
        
    }
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        
          
    })

    useEffect(()=>{
        if (!element) {
            return;
        }
        ScrollTrigger.create({
            trigger: element,
            start: 'center 70%',
            onLeave : ()=>{
                if(!element?.paused){
                    element?.pause()
                    setIsMuted(false)
                }
            } ,
            onLeaveBack : ()=>{
                if(!element?.paused){
                    element?.pause()
                    setIsMuted(false)
                }
            } ,
        });

        ScrollTrigger.create({
            trigger: element,
            start: 'bottom 70%',
            onEnter: ()=>{
                element?.play()
                setIsMuted(true)
            },
            
            onEnterBack : ()=>{
                element?.play()
                setIsMuted(true)
            } 
            
          });


     })
    return(<div className='bg-[#000] py-16 px-5 lg:py-[120px] lg:px-[8.33vw] relative'>
        <div className="lg:px-20 w-full relative bg-red-600">
            <video preload="none" ref={videoRef} autoPlay muted disablePictureInPicture loop playsInline width={320} height={320} className="lg:h-[501px] lg:w-[69.44vw] object-cover rounded-xl z-50">
                <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-0 right-0 lg:right-28 cursor-pointer">
                <Image src={isMuted ? speakerhigh : speakerlow} alt="" onClick={toggleMute} className="w-12 lg:w-auto"/>
            </div>
            
        </div>
        <div className=" my-6 lg:px-16 lg:my-16">
            <hr className="border-[rgba(255,255,255,0.50)]" />
        </div>
        <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-3  my-3">
            <h3>
            Get in touch
            </h3>
        </div>
        <div className="flex justify-center gap-5 mt-4 lg:mt-10 mb-24 lg:mb-56">
            <Link href='https://x.com/icevibeslagos?s=21' target="_blank">
            <Image src={twitter} alt="" className="w-9 lg:w-auto"/>
            </Link>
            <Link href='https://www.instagram.com/icevibeslagos?igsh=OGN5Z3p4dWtheTBw' target="_blank">
            <Image src={insta} alt="" className="w-9 lg:w-auto"/>
            </Link>
            <Link href='https://www.facebook.com/share/18MKwh1rUL/?mibextid=kFxxJD' target="_blank">
                <Image src={fb} alt=""className="w-9 lg:w-auto" />
            </Link>
            <Link href='http://Wa.me/2347049387897' target="_blank">
                <Image src={waFooter} alt=""className="w-9 lg:w-auto" />
            </Link>
        </div>
        <div className="mt-11 lg:mt-16 ">
            <Image src={footerLogo} alt=''  className="opacity-60 w-[90%] md:w-[85%] lg:w-[85%]  absolute left-8 md:left-20 lg:left-[9.33vw] bottom-10 md:bottom-8 lg:bottom-14"/>
        </div>
    </div>)
}

export default Footer
