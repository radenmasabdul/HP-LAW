/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imageHero from "@/assets/image-01.jpg";

export default function HomeSection() {
    const words = ["TRUSTED", "RELIABLE", "REPUTABLE"];
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="relative w-full h-[600px]">
      <img
        src={imageHero}
        alt="Image Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center text-center justify-center md:justify-normal md:py-9">
        <h1 className="text-xl md:text-6xl font-extrabold fonts-inter flex items-center gap-1 md:gap-2">
          <div className="overflow-hidden text-gold-medium">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          
          <span className="text-white text-xl md:text-6xl font-extrabold fonts-inter">
            LEGAL SOLUTION FOR
          </span>
        </h1>

        <p className="text-white text-xl md:text-4xl font-semibold fonts-inter">
          BUSINESSES & INDIVIDUALS
        </p>
      </div>
    </div>
  )
}
