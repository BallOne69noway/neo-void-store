"use client";
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]); // Храним сами объекты
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);

    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      } catch (error) {
        console.error("Firebase Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: any) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Header cartCount={cartItems.length} />
      <div className="max-w-7xl mx-auto p-4">
        {loading ? (
          <div className="text-center py-20 text-[10px] uppercase animate-pulse tracking-[0.2em]">Loading_Void...</div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            {products.map((product) => {
              // Считаем сколько именно этого товара в корзине
              const count = cartItems.filter(item => item.id === product.id).length;
              return (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  count={count} // Передаем число
                  onAddToCart={() => addToCart(product)} 
                />
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}