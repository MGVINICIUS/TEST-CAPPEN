"use client"
import { Logo } from "@/Icons/Logo"
import { MenuHamburguer } from "@/Icons/MenuHamburguer"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import MaxWidthWrapper from "./MaxWidth"


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) html.classList.toggle("overflow-hidden", isOpen);
      }, [isOpen]);

      const variantsMenu = {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
      };

    return (
        <header className="fixed z-50 w-full">
            <div className="flex items-center justify-between w-full max-w-2xl mx-auto px-5 md:px-20 py-7">
                    <Link href="/">
                        <Logo className="lg:w-[110px] lg:h-[62px] w-[71px] h-[40px]"/>
                    </Link>
                    <button className="cursor-pointer z-50" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setIsOpen(!isOpen)}><span className="sr-only">abri menu</span><MenuHamburguer Open={isOpen} /></button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible" 
                                variants={variantsMenu}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 w-full h-screen grid place-content-center bg-primary z-[9999px]"
                            >
                                <MaxWidthWrapper>
                                    <ul className="uppercase divide-y-2 px-5 lg:px-0 [&>li]:py-7 lg:[&>li]:w-full lg:[&>li]:text-center divide-sandHeavy text-2xl lg:text-4xl font-normal font-aurea-ultra-roman max-w-80 mx-auto text-sand flex flex-col lg:items-center justify-center">
                                        <li>Início</li>
                                        <li>Sobre a Iquine</li>
                                        <li>50 anos de história</li>
                                        <li>Campanha Brasilidades</li>
                                    </ul>
                                </MaxWidthWrapper>
                            </motion.div>
                        )}
                    </AnimatePresence>
            </div>
        </header>
    )
}