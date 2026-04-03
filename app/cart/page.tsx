"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '../components/Header'; // Обязательно импортируем!

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
      window.dispatchEvent(new Event('storage'));
    }
  };

  // ПРАВИЛЬНЫЙ РАСЧЕТ: Number() страхует от ошибок типов данных
  const totalPrice = items.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* Теперь меню всегда на месте */}
      <Header cartCount={items.length} />

      <div className="max-w-2xl mx-auto pt-32 px-6">
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
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 group transition-colors hover:border-white/20">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold tracking-widest">{item.name}</span>
                    {/* Выводим цену через Number для безопасности */}
                    <span className="text-[10px] text-gray-500 mt-1">${Number(item.price)}</span>
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
                {/* Итоговая сумма теперь всегда число */}
                <span className="text-3xl font-black italic">${totalPrice}</span>
              </div>
              
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
    </main>
  );
}