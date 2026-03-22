"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  // Загружаем товары из памяти браузера при открытии
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setItems(savedCart);
  }, []);

  // Функция удаления товара
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
    // Генерируем событие, чтобы Header узнал об обновлении
    window.dispatchEvent(new Event('storage'));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 font-mono">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Your_Void_Selection</h1>
        
        {items.length === 0 ? (
          <div className="border-t border-white/10 py-20 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-[0.2em]">The cart is empty.</p>
            <Link href="/" className="inline-block mt-8 border border-white px-8 py-3 text-[10px] uppercase hover:bg-white hover:text-black transition-all">
              Return to Catalog
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-end border-b border-white/5 pb-6 group">
                <div className="flex gap-4 items-center">
                   <span className="text-[10px] text-gray-600">0{index + 1}</span>
                   <div>
                      <h3 className="text-sm uppercase font-bold tracking-widest">{item.name}</h3>
                      <p className="text-[10px] text-gray-500 mt-1">${item.price}</p>
                   </div>
                </div>
                <button 
                  onClick={() => removeItem(index)}
                  className="text-[9px] text-gray-600 uppercase hover:text-red-500 transition-colors"
                >
                  [ Remove ]
                </button>
              </div>
            ))}

            <div className="pt-12">
              <div className="flex justify-between items-baseline mb-8">
                <span className="text-[10px] uppercase text-gray-500">Total_Value</span>
                <span className="text-3xl font-black">${totalPrice}</span>
              </div>
              
              <button className="w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-gray-200 transition-all active:scale-[0.98]">
                Proceed to Checkout
              </button>
              
              <Link href="/" className="block text-center mt-6 text-[9px] uppercase tracking-widest text-gray-700 hover:text-white transition-colors">
                ← Back to Store
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}