"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  cartCount: number;
}

export const Header = ({ cartCount }: HeaderProps) => {
  const pathname = usePathname();

  // Функция для проверки активной ссылки
  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-md z-50">
      {/* Логотип: всегда ведет на главную */}
      <Link 
        href="/" 
        className="text-xl font-black tracking-tighter italic cursor-pointer hover:opacity-80 transition-opacity"
      >
        NEO-VOID
      </Link>
      
      <nav className="flex gap-8 text-[10px] uppercase tracking-widest items-center">
        {/* Кнопка SHOP */}
        <Link 
          href="/" 
          className={`transition-all duration-300 ${
            isActive('/') 
            ? 'text-white border-b border-white pb-1' 
            : 'text-gray-500 hover:text-white'
          }`}
        >
          Shop
        </Link>

        {/* Кнопка ARCHIVE */}
        <Link 
          href="/archive" 
          className={`transition-all duration-300 ${
            isActive('/archive') 
            ? 'text-white border-b border-white pb-1' 
            : 'text-gray-500 hover:text-white'
          }`}
        >
          Archive
        </Link>
        
        {/* Кнопка CART */}
        <Link 
          href="/cart" 
          className={`group flex items-center gap-2 transition-all duration-300 ${
            isActive('/cart') 
            ? 'text-white border-b border-white pb-1' 
            : 'text-gray-500 hover:text-white'
          }`}
        >
          <span className="relative">
            Cart
            {/* Маленькая точка-индикатор, если в корзине что-то есть */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-4 w-1 h-1 bg-white rounded-full animate-pulse" />
            )}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-colors ${
            isActive('/cart') ? 'bg-white text-black' : 'bg-white/10 text-white group-hover:bg-white group-hover:text-black'
          }`}>
            {cartCount}
          </span>
        </Link>
      </nav>
    </header>
  );
};