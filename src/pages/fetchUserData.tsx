import { PenpotDataRaw } from "@/lib/types";
import { useState, useEffect } from "react";
import { CalculationCente } from "./CalculationCenter";

export function fetchUserData() {
  const [penpotDataRaw, setPenpotDataRaw] = useState<PenpotDataRaw[]>([]);
  useEffect(() => {
    const fectchPenpotData = async () => {
      try {
        const summary = getSummary(podcastId, language);
        setSummary(summary);
      } catch (error) {}
    };
    fectchPenpotData();
  }, []);
  return <CalculationCente />;
}
