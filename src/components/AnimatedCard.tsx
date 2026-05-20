import { motion } from "framer-motion";
import { ReactNode } from "react";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const AnimatedCard = ({children}: {children: ReactNode}) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3
            }}
        >
            {children}
        </motion.div>
    );
}