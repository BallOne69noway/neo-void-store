"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Импорт для слежки за путем

interface HeaderProps {
  cartCount: number;
}

export const Header = ({ cartCount }: HeaderProps) => {
  const pathname = usePathname(); // Получаем текущий адрес страницы

  return (
    <header className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <Link href="/" className="text-xl font-black tracking-tighter italic cursor-pointer hover:opacity-80 transition-opacity">
        NEO-VOID
      </Link>
      
      <nav className="flex gap-8 text-[10px] uppercase tracking-widest items-center">
        {/* Если мы на главной (/), то Shop будет белым и подчеркнутым */}
        <Link 
          href="/" 
          className={`transition-colors ${pathname === '/' ? 'text-white border-b border-white pb-1' : 'text-gray-500 hover:text-white'}`}
        >
          Shop
        </Link>

        <span className="cursor-pointer text-gray-500 hover:text-white transition-colors">
          Archive
        </span>
        
        {/* Если мы в корзине (/cart), то Cart будет белым и подчеркнутым */}
        <Link 
          href="/cart" 
          className={`group flex items-center gap-2 transition-colors ${pathname === '/cart' ? 'text-white border-b border-white pb-1' : 'text-gray-500 hover:text-white'}`}
        >
          <span>Cart ({cartCount})</span>
        </Link>
      </nav>
    </header>
  );
};