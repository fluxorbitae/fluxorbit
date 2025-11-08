"use client";
import { useEffect } from "react";

export default function GlobalBG() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty("--mx", x.toString());
      document.documentElement.style.setProperty("--my", y.toString());
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      {/* ana siyah → teal geçiş */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d0f10_0%,#0e1112_35%,#0c1110_70%,#0b0e0f_100%)]" />
      {/* yumuşak conic/teal layer */}
      <div className="absolute inset-0 opacity-[0.35] mix-blend-screen"
           style={{
             background:
              "conic-gradient(from 180deg at 50% 50%, rgba(20,184,166,0.10) 0deg, rgba(20,184,166,0.05) 120deg, transparent 220deg, rgba(20,184,166,0.06) 330deg)"
           }} />
      {/* mouse parlaması */}
      <div className="absolute -inset-40 blur-3xl"
           style={{
             background:
               "radial-gradient(600px 600px at calc(var(--mx,0.5)*100%) calc(var(--my,0.5)*100%), rgba(20,184,166,0.25), transparent 60%)"
           }} />
    </div>
  );
}
