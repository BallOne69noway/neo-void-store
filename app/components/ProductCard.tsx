import React from 'react';

interface ProductProps {
  name: string;
  price: number;
  category: string;
  image?: string;
  onAddToCart: () => void;
}

export const ProductCard = ({ name, price, category, image, onAddToCart }: ProductProps) => {
  return (
    <div className="group relative border border-[#111] bg-[#050505] p-4 transition-all duration-500 hover:border-white/50">
      <div className="aspect-3/4 bg-[#0a0a0a] mb-6 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-700 scale-110 md:group-hover:scale-100"
          />
        ) : (
          <span className="text-[10px] text-gray-900 md:group-hover:text-gray-500 transition-colors uppercase tracking-widest z-10">
            [ Digital_Void ]
          </span>
        )}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-top from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="flex justify-between items-start pt-2">
        <div className="space-y-1">
          <p className="text-[9px] text-gray-700 uppercase tracking-tighter italic">{category}</p>
          <h3 className="text-xs font-bold uppercase tracking-widest md:group-hover:tracking-normal transition-all">{name}</h3>
        </div>
        <p className="text-xs font-mono text-gray-400">${price}</p>
      </div>
      
      {/* Кнопка теперь всегда видна на мобилках (block) и появляется при ховере на десктопе (md:opacity-0) */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          onAddToCart();
        }}
        className="relative z-30 w-full mt-4 py-3 border border-white text-[10px] uppercase font-black bg-white text-black md:bg-transparent md:text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-white hover:text-black active:scale-95 touch-manipulation"
      >
        Add to Cart
      </button>
    </div>
  );
};