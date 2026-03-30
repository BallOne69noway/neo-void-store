"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '../components/Header'; // Импортируем хедер

export default function ArchivePage() {
  const [cartCount, setCartCount] = useState(0);

  // Подгружаем количество товаров, чтобы в хедере была верная цифра
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(savedCart.length);
  }, []);

  const archivedItems = [
    { id: 'v01', name: 'Void_Hoodie_01', year: '2025' },
    { id: 'v02', name: 'Cyber_Cargo_V2', year: '2024' },
    { id: 'v03', name: 'Matrix_Teeth_Accessory', year: '2025' },
    { id: 'v04', name: 'Oversized_Ghost_Tee', year: '2023' },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* ВОТ ОН — ТВОЙ HEADER */}
      <Header cartCount={cartCount} />

      <div className="max-w-7xl mx-auto pt-32 px-6">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h1 className="text-6xl font-black uppercase tracking-tighter italic opacity-10">Archive_001</h1>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest pb-2">[ Restricted_Access ]</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {archivedItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="group relative aspect-[3/4] bg-[#050505] border border-white/5 p-4 flex flex-col justify-between grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] text-gray-700">{item.id}</span>
                <span className="text-[9px] text-gray-700">{item.year}</span>
              </div>
              
              <div className="text-center py-20 border-y border-white/5 my-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-800 group-hover:text-white transition-colors">
                  Out_of_Stock
                </span>
              </div>
              
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest mb-1">{item.name}</h3>
                <p className="text-[8px] text-gray-600">Archived Collection Unit</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/" className="inline-block mt-20 text-[10px] uppercase underline text-gray-500 hover:text-white transition-colors">
          ← Return_to_Current_Drop
        </Link>
      </div>
    </main>
  );
}