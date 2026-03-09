import React from 'react';
import { Activity } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface VerdictCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  className?: string;
  accentColor?: string;
}

const indicatorColors: Record<string, string> = {
  'border-l-[3px] border-l-[#4CAF70]': 'bg-[#4CAF70]',
  'border-l-[3px] border-l-[#F5A623]': 'bg-[#F5A623]',
  'border-l-[3px] border-l-[#E8711A]': 'bg-[#E8711A]',
  'border-l-[3px] border-l-blue-400': 'bg-blue-400',
  'border-l-[3px] border-l-green-500': 'bg-green-500',
  'border-l-[3px] border-l-orange-500': 'bg-orange-500',
  'border-l-[3px] border-l-red-500': 'bg-red-500',
  'border-l-[3px] border-l-blue-500': 'bg-blue-500',
};

export default function VerdictCard({ title, icon, content, className, accentColor }: VerdictCardProps) {
  const badgeColor = accentColor ? indicatorColors[accentColor] : 'bg-gray-300';

  return (
    <div
      className={`bg-white/60 backdrop-blur-3xl border border-white/50 rounded-[32px] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-all duration-300 group ${className || ''}`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black/5 text-[#1A1A1A]/70 group-hover:bg-[#E8711A]/10 group-hover:text-[#E8711A] transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.25em]">{title}</h3>
        {accentColor && (
          <div className="ml-auto">
            <div className={`w-2 h-2 rounded-full ${badgeColor} shadow-[0_0_12px_${badgeColor}60] ring-4 ring-white/20`} />
          </div>
        )}
      </div>
      <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-p:text-[#4A4A4A] prose-strong:text-[#1A1A1A] prose-ul:list-disc prose-li:marker:text-[#E8711A]">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}

interface ConfidenceBarProps {
  score: number;
  explanation: string;
}

export function ConfidenceBar({ score, explanation }: ConfidenceBarProps) {
  return (
    <div
      className="bg-white/60 backdrop-blur-3xl border border-white/50 rounded-[32px] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#E8711A]/10 text-[#E8711A]">
          <Activity className="w-5 h-5" />
        </div>
        <h3 className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.25em]">Matra</h3>
        <div className="ml-auto">
            <div className={`w-2 h-2 rounded-full bg-[#E8711A] shadow-[0_0_12px_#E8711A60] ring-4 ring-[#E8711A]/10`} />
        </div>
      </div>

      <span className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E8711A] to-[#F5A623] block mb-6 tabular-nums tracking-tighter">
        {score}%
      </span>

      <div className="w-full h-3 bg-black/5 rounded-full overflow-hidden mb-6 relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#E8711A] to-[#F5A623] transition-all duration-1000 ease-out shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative"
          style={{ width: `${score}%` }}
        >
           {/* Glossy highlight track */}
           <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/30 rounded-full" />
        </div>
      </div>

      <p className="text-sm text-[#767676] font-medium leading-relaxed">
        {explanation || 'Based on Sabha agreement level'}
      </p>
    </div>
  );
}
