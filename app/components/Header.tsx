import React from 'react';
import Link from 'next/link'; // Импортируем линк для переходов

interface HeaderProps {
  cartCount: number;
}

export const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-md z-50">
      {/* Клик по логотипу вернет на главную */}
      <Link href="/" className="text-xl font-black tracking-tighter italic cursor-pointer hover:opacity-80 transition-opacity">
        NEO-VOID
      </Link>
      
      <nav className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 items-center">
        <Link href="/" className="cursor-pointer hover:text-white transition-colors">
          Shop
        </Link>
        <span className="cursor-pointer hover:text-white transition-colors">
          Archive
        </span>
        
        {/* Теперь это реальная ссылка на страницу корзины */}
        <Link href="/cart" className="group flex items-center gap-2">
          <span className="text-white border-b border-white pb-1 group-hover:border-gray-400 transition-all">
            Cart ({cartCount})
          </span>
        </Link>
      </nav>
    </header>
  );
};