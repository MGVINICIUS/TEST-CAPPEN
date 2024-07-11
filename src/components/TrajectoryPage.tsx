"use client"
import { DivideSvg } from "@/Icons/DivideSvg"
import { TextIncreaseOpacityInView } from "@/lib/Animations"
import { useScroll } from "framer-motion"
import { useRef } from "react"
export const TrajectoryPage = () => {
    

    return (
        <section className="h-screen relative flex justify-center items-center font-aurea-ultra-roman">
            <DivideSvg className="absolute w-[375px] h-[192px] lg:w-[583px] lg:h-[300px] -top-32 lg:-top-44"/>
            <div>
                <div className="text-sand font-normal uppercase text-center text-2xl lg:text-3xl max-w-xs lg:max-w-xl"><span className="sr-only">Descubra a trajetória da maior indústria de tintas 100% brasileira ao longo de cinco décadas.</span><TextIncreaseOpacityInView once={true}>Descubra a trajetória da maior indústria de tintas 100% brasileira ao longo de cinco décadas.</TextIncreaseOpacityInView></div>
            </div>

        </section>
    )
}
