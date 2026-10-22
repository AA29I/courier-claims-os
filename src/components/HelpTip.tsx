'use client';

import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export function HelpTip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-flex items-center ml-1 align-middle"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="w-4 h-4 rounded-full bg-slate-200 hover:bg-indigo-600 text-slate-600 hover:text-white inline-flex items-center justify-center transition-colors"
        title={text}
      >
        <HelpCircle className="w-3 h-3" />
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2.5 rounded-lg bg-slate-900 text-white text-[11px] font-normal leading-relaxed shadow-xl z-50 pointer-events-none">
          {text}
        </span>
      )}
    </span>
  );
}
