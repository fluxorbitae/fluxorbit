"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // İlk yüklemede kısa bir marka anı (1.6s)
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0E0F10]"
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30"
                 style={{ background: "radial-gradient(closest-side, #14B8A6 0%, transparent 70%)" }} />
          </div>

          {/* Logo + animasyon */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              initial={{ filter: "brightness(0.7)" }}
              animate={{ filter: "brightness(1)" }}
              transition={{ duration: 0.8 }}
              className="relative w-40 h-40"
            >
              {/* /public içine kopyala: logo koyu => /fluxorbit.png, beyaz => /fluxorbit_white.png */}
              <Image src="/fluxorbit_white.png" alt="FluxOrbit" fill priority sizes="160px"
                     className="object-contain drop-shadow-[0_6px_24px_rgba(20,184,166,.25)]" />
            </motion.div>

            {/* Teal pulsating ring */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0.35 }}
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.35, 0.15, 0.35] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 rounded-full border border-teal-400/30"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
