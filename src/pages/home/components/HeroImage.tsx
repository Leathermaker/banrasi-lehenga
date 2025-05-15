import { useMotionValue,  useSpring, useTransform } from "motion/react"
import React, { useEffect, } from "react";
import { motion } from "motion/react";
import bg from "../../../assets/image/modebg.png"
import model from "../../../assets/image/model png.png"


const HeroImage: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    
    const x = useSpring(useTransform(mouseX, [0, window.innerWidth], [-10, 10]));
    const y = useSpring(useTransform(mouseY, [0, window.innerWidth], [-10, 10]));
    const bgY = useSpring(useTransform(mouseY, [0, window.innerWidth], [-17,20]));
    const bgX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-15, 17]));

  

    useEffect(()=>{
        window.addEventListener("mousemove", ( e:any)=>{
            console.log(e.clientX, e.clientY);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        });
    },[])
    return (
        <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl  bg-red-400 h-auto md:h-[40rem]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            onMouseLeave={() => {
                mouseX.set(window.innerWidth / 2);
                mouseY.set(window.innerHeight / 2);
            }}
        >

            <motion.img
                src={model}
                alt="Elegant Lehenga"
                style={{
                    x: x,
                    y
                }}
                className="w-full    object-cover absolute bottom-32 sm:bottom-0 md:-bottom-12 z-10  "
            />
        
            
            <motion.img
            style={{
                x: bgX,
                y: bgY,
            }}
                src={bg}
                alt="Elegant Lehenga"

                className="w-full h-full object-cover absolute scale-125 "
            />
        </motion.div>
    )
}

export default HeroImage