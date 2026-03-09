'use client';

import { useEffect, useState } from 'react';

interface TensionMeterProps {
  score: number | null;
  className?: string;
}

function getTensionLabel(score: number): string {
  if (score >= 71) return 'High Tension';
  if (score >= 41) return 'Moderate';
  if (score >= 1) return 'Low Tension';
  return 'Aligned';
}

export default function TensionMeter({ score, className }: TensionMeterProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    if (score !== null) {
      const t = setTimeout(() => setAnimatedWidth(score), 50);
      return () => clearTimeout(t);
    }
  }, [score]);

  if (score === null) return null;

  return (
    <div
      className={`varant-council-card rounded-2xl p-5 ${className || ''}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="h-px w-3 bg-[linear-gradient(90deg,#D97706,#9B1C1C)] opacity-60" />
            <span className="text-[10px] font-semibold text-[#78716c] uppercase tracking-[0.12em]">
              संघर्ष
            </span>
          </div>
          <span className="text-lg font-semibold text-[#1A1510] leading-none">
            {getTensionLabel(score)}
          </span>
        </div>
        <div className="w-full h-2.5 bg-[#E7E5E4] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out bg-[linear-gradient(90deg,#16A34A_0%,#CA8A04_45%,#9B1C1C_100%)]"
            style={{ width: `${animatedWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
}
