import React from 'react';

export const Header = ({ cartCount }: { cartCount: number }) => {
  return (
    <header className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <div className="text-xl font-black tracking-tighter italic">NEO-VOID</div>
      
      <nav className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500">
        <span className="cursor-pointer hover:text-white transition-colors">Shop</span>
        <span className="cursor-pointer hover:text-white transition-colors">Archive</span>
        <span className="text-white border-b border-white pb-1">
          Cart ({cartCount})
        </span>
      </nav>
    </header>
  );
};