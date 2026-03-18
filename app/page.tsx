import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

const PRODUCTS = [
  { id: 1, name: "VOID_HOODIE_01", price: 120, category: "Oversize" },
  { id: 2, name: "CYBER_GOTH_PANTS", price: 150, category: "Custom" },
  { id: 3, name: "METAL_CHAIN_VEST", price: 85, category: "Accessories" },
  { id: 4, name: "DARK_AURA_TEE", price: 45, category: "Basics" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Header />
      
      <div className="max-w-7xl mx-auto p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </div>
    </main>
  );
}