import { motion } from "motion/react";
import HeroImage from "./HeroImage";
export default function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-br from-pink-100 to-white h-[40rem]  md:h-[55rem] flex overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center md:items-start"
        >
          <motion.div
            className="inline-block px-6 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Exclusive Collection 2025
          </motion.div>
          <h1 className="text-[8vw] md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight text-center md:text-start">
            Discover  <span className="text-pink-600">Elegance</span> in Every Stitch
          </h1>

            <p className="text-sm md:text-lg text-gray-600 max-w-lg text-center md:text-start ">
              Exquisite lehengas crafted with passion, bringing together tradition and contemporary design for your special moments.
            </p>
          <div className="flex flex-wrap md:gap-4 gap-1 text-xs md:text-sm ">
            <motion.button
              className="px-5 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.button>
            <motion.button
              className="px-5 py-3 border border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-[7rem] opacity-70 animate-blob"></div>
          <div className="absolute bottom-32 -right-24 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-[7rem] opacity-70 animate-blob animation-delay-2000"></div>

         
          <HeroImage />
        </motion.div>
      </div>
    </section>


  );
}
