// app/page.tsx
import React from 'react';

// Интерфейс для товара
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "VOID_HOODIE_01", price: 120, category: "Oversize" },
  { id: 2, name: "CYBER_GOTH_PANTS", price: 150, category: "Custom" },
  { id: 3, name: "METAL_CHAIN_VEST", price: 85, category: "Accessories" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-[#222] sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="text-xl font-black tracking-tighter uppercase italic">
          Neo-Void <span className="text-gray-600">Archive</span>
        </div>
        <div className="space-x-6 text-xs uppercase tracking-widest font-bold">
          <button className="hover:line-through transition-all cursor-pointer">Catalog</button>
          <button className="hover:line-through transition-all cursor-pointer">Cart (0)</button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center border-b border-[#111]">
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4">
          N_O_V_A
        </h1>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.5em] mb-10">
          Digital artifacts for the physical world // BallOne69noway
        </p>
      </section>

      {/* Grid */}
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {PRODUCTS.map((item) => (
          <div 
            key={item.id} 
            className="group relative border border-[#222] bg-[#050505] p-4 transition-all hover:border-white cursor-crosshair"
          >
            {/* Image Placeholder */}
            <div className="aspect-3/4 bg-[#111] mb-4 flex items-center justify-center overflow-hidden">
              <span className="text-[10px] text-gray-800 group-hover:text-gray-400 transition-colors uppercase">
                [ No_Image_Found ]
              </span>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] text-gray-600 uppercase mb-1">{item.category}</p>
                <h3 className="text-sm font-bold tracking-tight uppercase">{item.name}</h3>
              </div>
              <p className="text-sm italic">${item.price}</p>
            </div>

            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </main>

      <footer className="p-20 text-center text-[10px] text-gray-700 uppercase tracking-widest">
        &copy; 2026 Neo-Void Store / Created by BallOne69noway
      </footer>
    </div>
  );
}