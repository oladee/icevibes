'use client'
import Image from "next/image"
import faqImage from '../assets/faq.svg'
import flake from '../assets/flake.svg'
import useAccordion from "../context/accordion"
import { FaqData } from "../constants"
import React, { useState } from "react"
import clsx from "clsx"

const Faq = ()=>{
    const  {handleToggleAccord, currentAccord} = useAccordion()
    const [accordIdx, setAccordIdx] = useState(0)
    return(<div className="py-16 px-5 md:px-16 lg:py-[120px] lg:px-[8.33vw]">
        <div className='flex items-center'>
        <h2 className="font-beachday text-[#000] text-[9.6vw] md:text-[5vw] lg:text-[3.88vw] text-center md:text-start">
        FREQUENTLY ASKED <br /> <span className='text-[#7A33FF]'>QUESTIONS</span>
        </h2>
        <Image src={faqImage} alt="" className='w-12 md:w-32'/>
        </div>
        <p className="text-[#000] font-switzer text-center lg:text-start lg:text-[20px] mb-[39px] lg:mb-[58px]">
        Find answers to the most common questions about our event. We are here to help!
        </p>
        <section className="flex flex-col lg:flex-row lg:gap-[120px]">
            <div className="space-y-6">
                {
                    FaqData.map((item, idx)=> <Accordion key={idx} idx={idx} currentAccord={currentAccord} answer={item.answer} question={item.question} handleToggleAccord={handleToggleAccord} setAccordIdx={setAccordIdx} />)
                }
            </div>
            {
                <div className={clsx("hidden  max-h-0 overflow-hidden transition-all duration-700", FaqData[accordIdx] && ' lg:block max-h-[1000px] py-9 lg:w-[34.09vw] px-8 border-r-8 border-b-8 border-t border-l border-[#000] rounded-2xl')}>
                <h2 className="text-[#7A33FF] lg:text-[32px] lg:py-8 bg-[#BBE4FF] text-center text-beachday rounded-3xl">
                    ANSWER
                </h2>
                {
                    FaqData[accordIdx] &&
                    <p className='text-center mt-8 text-2xl font-switzer'>
                        {FaqData[accordIdx].answer}
                    </p>
                }
            </div>
            }
            
        </section>
    </div>)
}


export const Accordion = ({question, answer, idx, setAccordIdx, currentAccord, handleToggleAccord}: {question : string, answer : string, idx : number, currentAccord : number | null, setAccordIdx : (item : number)=>void, handleToggleAccord : (item : number | null)=>void})=>{
    const handleclick = ()=>{
        if(currentAccord == idx){
            setAccordIdx(-1)
            handleToggleAccord(-1)
            return
        }
        setAccordIdx(idx)
        handleToggleAccord(idx)
    }
    return(<div>
        <div className={clsx(`flex cursor-pointer items-center justify-between border-r-[6px] border-b-[6px] border-t border-l border-[#000] p-4 rounded-xl lg:w-[589px] `, currentAccord === idx && ` bg-[#7A33FF] border-[#FDAC18]`)} onClick={handleclick}>
            <h2 className={clsx(`text-[#000] font-medium lg:text-2xl`, currentAccord === idx && 'text-white')}>
                {question}
            </h2>
            {
                currentAccord == idx && <Image src={flake} alt="" />
            }
        </div>
        <div className="lg:hidden">
            {
                
                (<div className={clsx("transition-all duration-500 max-h-0 overflow-hidden ", currentAccord == idx && 'max-h-[1000px] mt-3 py-9 lg:w-[34.09vw] px-8 border-r-8 border-b-8 border-t border-l border-[#000] rounded-2xl')}>
                    <h2 className="text-[#7A33FF] lg:text-[32px] lg:py-8 bg-[#BBE4FF] text-center text-beachday rounded-3xl">
                        ANSWER
                    </h2>
                    <p className='text-center mt-8 lg:text-2xl font-switzer'>
                        {answer}
                    </p>
                </div>)
            }
        </div>
    </div>)
}


export default Faq
