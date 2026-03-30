"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  count: number;
  onAddToCart: () => void;
}

export const ProductCard = ({ name, price, category, image, count, onAddToCart }: ProductProps) => {
  const [isFlying, setIsFlying] = useState(false);

  const handleAdd = () => {
    setIsFlying(true);
    onAddToCart();
    // Убираем летающий элемент через 0.8 сек
    setTimeout(() => setIsFlying(false), 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border border-[#111] bg-[#050505] p-4 transition-all duration-500 hover:border-white/50"
    >
      {/* ЛЕТАЮЩИЙ ОБЪЕКТ */}
      <AnimatePresence>
        {isFlying && (
          <motion.div
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{ 
              opacity: 0, 
              scale: 0.2, 
              x: 300, // Летит вправо (в сторону корзины)
              y: -500 // Летит вверх
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed pointer-events-none z-[100] w-20 h-20 bg-white border border-black"
            style={{ left: '45%', top: '40%' }}
          >
             {image && <img src={image} className="w-full h-full object-cover grayscale" />}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="aspect-[3/4] bg-[#0a0a0a] mb-6 flex items-center justify-center relative overflow-hidden">
        {image && (
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src={image} 
            className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-700" 
          />
        )}
        {count > 0 && (
          <div className="absolute top-2 right-2 bg-white text-black text-[10px] font-bold px-2 py-1 z-30">
            SELECTED: {count}
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-start pt-2">
        <div className="space-y-1">
          <p className="text-[9px] text-gray-700 uppercase italic">{category}</p>
          <h3 className="text-xs font-bold uppercase tracking-widest">{name}</h3>
        </div>
        <p className="text-xs font-mono text-gray-400">${price}</p>
      </div>
      
      <button 
        onClick={handleAdd}
        className="relative z-20 w-full mt-4 py-3 border border-white text-[10px] uppercase font-black bg-white text-black md:bg-transparent md:text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-white hover:text-black active:scale-95"
      >
        {count > 0 ? `Add More (${count})` : 'Add to Cart'}
      </button>
    </motion.div>
  );
};