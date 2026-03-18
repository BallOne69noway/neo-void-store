import React from 'react';

export const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-[#111] sticky top-0 bg-black/50 backdrop-blur-xl z-50">
      <div className="text-xl font-black tracking-tighter uppercase italic hover:text-[#00ff41] transition-colors cursor-pointer">
        Neo-Void <span className="text-gray-600 font-normal tracking-normal not-italic text-xs">v.2026</span>
      </div>
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
        <a href="#" className="hover:line-through">Shop</a>
        <a href="#" className="hover:line-through text-gray-500">Archive</a>
        <a href="#" className="hover:text-[#00ff41]">Cart (0)</a>
      </div>
    </nav>
  );
};