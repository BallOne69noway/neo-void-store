"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setItems(savedCart);
  }, []);

  const removeItem = (id: string) => {
    // Удаляем только один экземпляр товара с этим ID
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
      localStorage.setItem('cart', JSON.stringify(newItems));
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 font-mono">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-black uppercase mb-12 italic">Void_Cart</h1>
        {items.length === 0 ? (
          <p className="text-gray-500 uppercase text-xs">Empty_Space</p>
        ) : (
          <div className="space-y-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>{item.name} - ${item.price}</span>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-[10px] uppercase border border-red-500/30 px-2 py-1 hover:bg-red-500 hover:text-white transition-all"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-2xl font-bold pt-6 border-t border-white">Total: ${totalPrice}</div>
          </div>
        )}
        <Link href="/" className="block mt-10 text-[10px] underline uppercase">Return_to_Catalog</Link>
      </div>
    </div>
  );
}