"use client";

import { motion } from "framer-motion";
import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <motion.img
        src="/fluxorbit_white.png"
        alt="FluxOrbit Logo"
        className={styles.logo}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </div>
  );
}
