/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import imageHero from "@/assets/image-01.jpg";

export default function HomeSection() {
    const { t } = useTranslation();
    const words = t("hero.words", { returnObjects: true }) as string[];
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

      <div className="absolute inset-0 flex flex-col items-center text-center justify-center md:justify-normal md:py-2">
        {/* mobile  */}
        <div className="flex flex-col md:hidden items-center gap-2">
          <h1 className="text-5xl font-extrabold text-gold-medium overflow-hidden">
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
          </h1>

          <h2 className="text-white text-3xl font-extrabold">
            {t("hero.legal")}
          </h2>

          <p className="text-white text-2xl font-semibold">
            {t("hero.businesses")}
          </p>
        </div>

        {/* dekstop */}
        <div className="hidden md:flex flex-col items-center text-center">
          <h1 className="text-6xl font-extrabold flex items-center gap-4">
            <span className="text-gold-medium overflow-hidden">
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
            </span>

            <span className="text-white">
              {t("hero.legal")}
            </span>
          </h1>

          <p className="text-white text-4xl font-semibold mt-2">
            {t("hero.businesses")}
          </p>
        </div>
      </div>
    </div>
  )
}