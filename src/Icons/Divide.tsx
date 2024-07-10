import { AnimatePresence, motion } from "framer-motion";

type DivideProps = {
    className?: string
}
export const Divide = ({className}: DivideProps) => {
    return (
        <AnimatePresence>
            <motion.svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
            >
                <line y1="-0.5" x2="9" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 8 0.817993)" stroke="#E1773A" />
                <line x1="1.35355" y1="0.46444" x2="7.71751" y2="6.8284" stroke="#E1773A" />
            </motion.svg>
        </AnimatePresence>
    );
}