"use client"
import { Divide } from "../Icons/Divide";
import { motion } from "framer-motion";
export const VideoFullPage = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" }},
    };
    return (
        <section className="h-screen">
            <div className="absolute -z-10 top-0 left-0 w-full h-full">
                <video className="w-full h-full object-cover" playsInline autoPlay loop muted>
                    <source src="/video.mp4" type="video/mp4"/>
                </video>
                <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 lg:px-0">
                    <ol className="flex flex-col lg:gap-12 lg:flex-row lg:items-center lg:justify-center [&>li]:text-2xl lg:[&>li]:text-4xl font-medium uppercase leading-normal font-aurea-ultra-roman text-primary overflow-hidden">
                        <motion.li variants={textVariants} initial="hidden" animate="visible" className="flex items-center justify-start gap-3 lg:gap-10 overflow-hidden"><Divide className="lg:hidden"/>BRASILIDADES</motion.li>
                        <motion.li variants={textVariants} initial="hidden" animate="visible" className="flex items-center justify-start gap-3 lg:gap-10 overflow-hidden"><Divide />CAMPANHA</motion.li>
                        <motion.li variants={textVariants} initial="hidden" animate="visible" className="flex items-center justify-start gap-3 lg:gap-10 overflow-hidden"><Divide />CORES DO BRASIL</motion.li>
                    </ol>
                </ul>
            </div>
        </section>
    );
}