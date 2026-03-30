"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 font-mono">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 italic opacity-20">Archive_001</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Пример архивного элемента */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="aspect-square bg-[#0a0a0a] border border-white/5 flex items-center justify-center grayscale"
        >
          <span className="text-[10px] tracking-widest text-gray-700 uppercase">[ SOLD_OUT_UNIT ]</span>
        </motion.div>
        
        {/* Повтори такие блоки для других фото */}
      </div>
    </div>
  );
}