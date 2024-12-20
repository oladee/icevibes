'use client'
import { createContext, useState, useContext } from "react";

interface accordionProps {
    handleToggleAccord : (item : number | null)=> void, 
    currentAccord : number | null
}

export const AccordionContext = createContext({} as accordionProps)


export const AccordionProvider = ({children}: {children : React.ReactNode})=>{

    const [currentAccord, setCurrentAccord] = useState<number | null>(null)
    const handleToggleAccord = (item : number | null)=>{
        setCurrentAccord(item)
    }
    return (<AccordionContext.Provider value={{handleToggleAccord, currentAccord}}>
        {children}
    </AccordionContext.Provider>)
}

const useAccordion = ()=> useContext(AccordionContext)
export default useAccordion