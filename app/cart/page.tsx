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
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
      localStorage.setItem('cart', JSON.stringify(newItems));
      // Обновляем заголовок, если нужно
      window.dispatchEvent(new Event('storage'));
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 font-mono">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-black uppercase mb-12 italic tracking-tighter">Void_Cart</h1>
        
        {items.length === 0 ? (
          <div className="py-20 border-t border-white/5 text-center">
            <p className="text-gray-500 uppercase text-[10px] tracking-[0.3em]">Empty_Space</p>
            <Link href="/" className="inline-block mt-8 text-[10px] underline uppercase hover:text-white transition-colors">
              Return_to_Catalog
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 group">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold tracking-widest">{item.name}</span>
                    <span className="text-[10px] text-gray-500 mt-1">${item.price}</span>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-[9px] text-gray-600 uppercase border border-white/10 px-3 py-1 hover:bg-white hover:text-black transition-all"
                  >
                    [ Remove ]
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/20">
              <div className="flex justify-between items-baseline mb-10">
                <span className="text-[10px] uppercase text-gray-500 tracking-widest">Total_Sum</span>
                <span className="text-3xl font-black italic">${totalPrice}</span>
              </div>
              
              {/* ВОТ ОНА — КНОПКА ОПЛАТЫ */}
              <button 
                onClick={() => alert("Checkout system coming soon...")}
                className="w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-gray-200 transition-all active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
              
              <Link href="/" className="block text-center mt-8 text-[9px] uppercase tracking-[0.2em] text-gray-700 hover:text-white transition-colors">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}