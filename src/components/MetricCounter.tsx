/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";

interface MetricCounterProps {
  finalValue: string; // E.g., "150%", "2030", "28M", "99.9%", "24/7"
  duration?: number;  // Animation duration in ms
}

export default function MetricCounter({ finalValue, duration = 2000 }: MetricCounterProps) {
  const [displayValue, setDisplayValue] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Standard setup to increment values
    // Parse digits out of string to count them
    const numberMatches = finalValue.match(/[\d.]+/g);
    if (!numberMatches) {
      setDisplayValue(finalValue);
      return;
    }

    const numericalString = numberMatches[0];
    const isFloat = numericalString.includes(".");
    const targetVal = parseFloat(numericalString);
    const suffix = finalValue.replace(numericalString, "");

    // If metric is a time ratio like 24/7 or has more symbols, handle gracefully
    if (finalValue.includes("/") || isNaN(targetVal)) {
      setDisplayValue(finalValue);
      return;
    }

    let start = 0;
    // To give a fast feel, start from 80% of the target value if it's large, or 0 if small
    if (targetVal > 1000) {
      start = Math.floor(targetVal * 0.95);
    } else if (targetVal > 100) {
      start = Math.floor(targetVal * 0.6);
    }

    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (targetVal - start) * easeProgress;

      let formattedValue = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal).toString();

      // Ensure exact formatting matches the design targets
      setDisplayValue(`${formattedValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(finalValue);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        requestAnimationFrame(updateCounter);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [finalValue, duration, hasAnimated]);

  return (
    <div ref={containerRef} id={`counter-${finalValue.replace(/[^\w]/g, "")}`} className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-500 tracking-tight leading-none">
      {displayValue || finalValue}
    </div>
  );
}
