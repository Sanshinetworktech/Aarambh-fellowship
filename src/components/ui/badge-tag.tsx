"use client";

import React from "react";

export default function BadgeTag() {
  return (
    <div className="flex items-center space-x-2.5 border border-blue-500/30 rounded-full bg-blue-500/10 p-1 text-sm text-blue-900 shadow-xs">
      <div className="bg-white border border-blue-500/30 rounded-2xl px-3 py-0.5 shadow-2xs">
        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700">Aarambh 1.0</p>
      </div>
      <p className="pr-3 text-xs font-sans font-medium text-blue-800">Applications are currently live & reviewed daily</p>
    </div>
  );
}
