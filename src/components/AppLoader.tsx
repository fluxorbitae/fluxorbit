
"use client";

import { useState, useEffect, ReactNode } from "react";
import Loader from "./Loader";

interface AppLoaderProps {
  children: ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 saniye loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return <>{children}</>;
}
