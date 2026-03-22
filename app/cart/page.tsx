"use client";
import Link from 'next/link';

export default function CartPage() {
  // Тут в будущем подтянем товары из localStorage или Context
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Your Cart</h1>
      
      <div className="border-t border-white/10 py-8">
        <p className="text-gray-500 uppercase text-xs tracking-widest">The void is currently empty.</p>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Link href="/" className="text-xs uppercase underline hover:text-gray-400">
          Back to store
        </Link>
        
        <button className="w-full py-4 bg-white text-black font-bold uppercase text-sm hover:bg-gray-200 transition-colors">
          Checkout — $0.00
        </button>
      </div>
    </div>
  );
}