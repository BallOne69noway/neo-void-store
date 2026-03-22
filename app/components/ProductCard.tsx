import React from 'react';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  count: number; // Новое поле
  onAddToCart: () => void;
}

export const ProductCard = ({ name, price, category, image, count, onAddToCart }: ProductProps) => {
  return (
    <div className="group relative border border-[#111] bg-[#050505] p-4 transition-all duration-500 hover:border-white/50">
      <div className="aspect-[3/4] bg-[#0a0a0a] mb-6 flex items-center justify-center relative overflow-hidden">
        {image && <img src={image} alt={name} className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-700" />}
        {/* Метка количества сверху справа на фото */}
        {count > 0 && (
          <div className="absolute top-2 right-2 bg-white text-black text-[10px] font-bold px-2 py-1 z-30">
            SELECTED: {count}
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-start pt-2">
        <div>
          <p className="text-[9px] text-gray-700 uppercase italic">{category}</p>
          <h3 className="text-xs font-bold uppercase tracking-widest">{name}</h3>
        </div>
        <p className="text-xs font-mono text-gray-400">${price}</p>
      </div>
      
      <button 
        onClick={(e) => { e.preventDefault(); onAddToCart(); }}
        className="relative z-20 w-full mt-4 py-3 border border-white text-[10px] uppercase font-black bg-white text-black md:bg-transparent md:text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-white hover:text-black active:scale-95"
      >
        {count > 0 ? `Add More (${count})` : 'Add to Cart'}
      </button>
    </div>
  );
};