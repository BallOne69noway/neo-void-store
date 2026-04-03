"use client";
import React, { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '../components/Header';

export default function ArchivePage() {
  const [archivedProducts, setArchivedProducts] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Считаем корзину для хедера
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(savedCart.length);

    // 2. Тянем реальные данные из Firebase
    const fetchArchive = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const allItems = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        })) as any[];
        
        // Фильтруем: оставляем только те, у кого статус именно 'archived'
        const onlyArchived = allItems.filter(item => item.status === 'archived');
        setArchivedProducts(onlyArchived);
      } catch (error) {
        console.error("Archive Load Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArchive();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Header cartCount={cartCount} />

      <div className="max-w-7xl mx-auto pt-32 px-6">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h1 className="text-6xl font-black uppercase tracking-tighter italic opacity-10">Archive_001</h1>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest pb-2">[ Database_Sync ]</p>
        </div>
        
        {loading ? (
          <div className="text-[10px] uppercase animate-pulse">Accessing_Archives...</div>
        ) : archivedProducts.length === 0 ? (
          <div className="text-[10px] text-gray-500 uppercase tracking-widest py-20">No_Items_Found_In_Archive</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {archivedProducts.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="group relative aspect-[3/4] bg-[#050505] border border-white/5 p-4 flex flex-col justify-between grayscale hover:grayscale-0 transition-all duration-1000"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[9px] text-gray-700">{item.id.substring(0, 6)}</span>
                  <span className="text-[9px] text-gray-700">{item.category || 'V01'}</span>
                </div>
                
                <div className="relative h-48 w-full overflow-hidden bg-[#0a0a0a]">
                  {item.image ? (
                    <img src={item.image} className="w-full h-full object-cover opacity-30 group-hover:opacity-70 transition-opacity duration-1000" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-800">NO_IMG</div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-[8px] tracking-[0.4em] uppercase text-white/20 group-hover:text-white transition-colors border border-white/5 px-2 py-1">Archived_Unit</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest mb-1">{item.name}</h3>
                  <p className="text-[8px] text-gray-600">${Number(item.price)} — Sold Out</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <Link href="/" className="inline-block mt-20 text-[10px] uppercase underline text-gray-500 hover:text-white transition-colors">
          ← Return_to_Current_Drop
        </Link>
      </div>
    </main>
  );
}