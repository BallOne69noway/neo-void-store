"use client";
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. При загрузке страницы проверяем, есть ли что-то в корзине
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(savedCart.length);

    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        setProducts(items);
      } catch (error) {
        console.error("Firebase Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 2. Исправленная функция добавления (теперь сохраняет объект целиком)
  const addToCart = (product: any) => {
    // Получаем текущий список из памяти
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Добавляем новый товар в массив
    const updatedCart = [...currentCart, product];
    
    // Сохраняем обновленный массив обратно в localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Обновляем цифру в Хедере
    setCartCount(updatedCart.length);
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Header cartCount={cartCount} />
      
      <div className="max-w-7xl mx-auto p-4">
        {loading ? (
          <div className="text-center py-20 text-[10px] uppercase animate-pulse tracking-[0.2em]">
            Loading_Void_Data...
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                // Теперь передаем сам объект товара в функцию
                onAddToCart={() => addToCart(product)} 
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}