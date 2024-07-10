"use client"
import { motion } from 'framer-motion'

type TextSlideUpOnScrollProps = {
    once?: boolean
    children: React.ReactNode

}
export const TextSlideUpOnScroll = ({ children, once }: TextSlideUpOnScrollProps) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: once }}
        >
            {children}
        </motion.p>
    )
}

type TextFadeInFromLeftProps = {
    children: React.ReactNode
    once?: boolean
}
export const TextFadeInFromLeft = ({ children,once }: TextFadeInFromLeftProps) => {
    return (
        <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: once }}
        >
            {children}
        </motion.p>
    )
} 

type TextIncreaseOpacityInViewProps = {
    children: React.ReactNode
    once?: boolean
}
export const TextIncreaseOpacityInView = ({ children, once }: TextIncreaseOpacityInViewProps) => {
    // Split the text into individual letters
    if(!children) return null
    const letters = children.toString().split("");
    
  
    return (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: once }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }} // Stagger the delay for each letter
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>
    );
  };