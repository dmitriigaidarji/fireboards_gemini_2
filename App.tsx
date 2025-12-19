
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import BoardFinder from './components/BoardFinder';
import { SURFBOARDS, ACCESSORIES } from './constants';
import { Product, CartItem } from './types';
// Fixed: Added missing Flame icon to imports
import { Waves, Factory, Anchor, ShieldCheck, Mail, MapPin, Instagram, Facebook, Flame } from 'lucide-react';

const App: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const collections = ['Performance Pro', 'Island Cruiser', 'Hybrid Heat', 'Grom Squad'];

  return (
    <div className="min-h-screen">
      <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />

        {/* Brand Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 space-y-3">
              <Waves className="w-10 h-10 mx-auto text-orange-600" />
              <h3 className="heading-font text-xl font-bold">Siargao Tested</h3>
              <p className="text-sm text-stone-500">R&D done daily at Cloud 9, Pacifico, and beyond.</p>
            </div>
            <div className="text-center p-6 space-y-3">
              <Factory className="w-10 h-10 mx-auto text-orange-600" />
              <h3 className="heading-font text-xl font-bold">China Factory Built</h3>
              <p className="text-sm text-stone-500">World-class manufacturing for unmatched precision.</p>
            </div>
            <div className="text-center p-6 space-y-3">
              <ShieldCheck className="w-10 h-10 mx-auto text-orange-600" />
              <h3 className="heading-font text-xl font-bold">Premium Materials</h3>
              <p className="text-sm text-stone-500">Imported resins and aerospace-grade carbon fiber.</p>
            </div>
            <div className="text-center p-6 space-y-3">
              <Anchor className="w-10 h-10 mx-auto text-orange-600" />
              <h3 className="heading-font text-xl font-bold">Eco-Conscious</h3>
              <p className="text-sm text-stone-500">Every board helps support Siargao community projects.</p>
            </div>
          </div>
        </section>

        {/* Board Collections */}
        <section id="collections" className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="heading-font text-5xl md:text-7xl font-bold mb-4 uppercase">The Quiver</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
              <p className="text-stone-500 max-w-2xl mx-auto text-lg">
                Four distinct collections engineered for every swell Siargao throws at you.
              </p>
            </div>

            {collections.map((collection) => (
              <div key={collection} className="mb-24 last:mb-0">
                <div className="flex items-end justify-between mb-8 border-b-2 border-stone-200 pb-4">
                  <h3 className="heading-font text-4xl font-bold uppercase tracking-tight">{collection}</h3>
                  <span className="text-stone-400 font-medium pb-1 uppercase tracking-widest text-xs">Collection 00{collections.indexOf(collection) + 1}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SURFBOARDS.filter(b => b.collection === collection).map(board => (
                    <ProductCard key={board.id} product={board} onAdd={addToCart} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Finder */}
        <BoardFinder />

        {/* Accessories Section */}
        <section id="accessories" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="heading-font text-5xl font-bold uppercase">Soft Goods & Gear</h2>
                <p className="text-stone-500 mt-2">Essential Fire branding and high-performance leashes.</p>
              </div>
              <div className="w-32 h-px bg-stone-200 hidden md:block flex-1 mx-12 mb-4" />
              <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-xs">Est. 2024</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACCESSORIES.map(item => (
                <ProductCard key={item.id} product={item} onAdd={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Story / About Section */}
        <section id="about" className="py-24 bg-stone-100 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1518481612222-68bbe1b61958?auto=format&fit=crop&w=800&q=80"
                alt="Shaping Room"
                className="relative z-10 w-full rounded-sm shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="heading-font text-5xl font-bold">SIARGAO SOUL, WORLD-CLASS FINISH</h2>
              <div className="w-20 h-1 bg-orange-600" />
              <p className="text-stone-600 text-lg leading-relaxed">
                Fire Boards began as a conversation between local Siargao rippers and international engineers. We loved the soul of hand-shaped local boards but missed the consistency and durability of high-end manufacturing.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Our templates are designed and tested in the Philippine's surf capital. We then partner with elite factories in China—the same ones producing for global giants—to ensure every Fire board that reaches your hands is flawless, light, and indestructible.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="heading-font text-2xl font-bold text-stone-900">DESIGN</h4>
                  <p className="text-sm text-stone-500">General Luna, PH</p>
                </div>
                <div>
                  <h4 className="heading-font text-2xl font-bold text-stone-900">BUILD</h4>
                  <p className="text-sm text-stone-500">Guangdong, CN</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Flame className="w-8 h-8 text-orange-600 fill-orange-600" />
                <span className="heading-font text-3xl font-bold tracking-tighter">FIRE</span>
              </div>
              <p className="text-stone-500 text-sm">
                The intersection of tropical island lifestyle and modern manufacturing precision.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="heading-font text-xl font-bold mb-6">SHOP</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><a href="#collections" className="hover:text-orange-500">Shortboards</a></li>
                <li><a href="#collections" className="hover:text-orange-500">Longboards</a></li>
                <li><a href="#collections" className="hover:text-orange-500">Mid-lengths</a></li>
                <li><a href="#accessories" className="hover:text-orange-500">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="heading-font text-xl font-bold mb-6">CONTACT</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@fireboards.ph</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Cloud 9, Siargao Island</li>
                <li className="flex items-center gap-2">Philippines 8419</li>
              </ul>
            </div>

            <div>
              <h4 className="heading-font text-xl font-bold mb-6">STAY TUNED</h4>
              <p className="text-stone-400 text-sm mb-4">Join our mailing list for swell alerts and new drops.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-stone-900 border border-stone-800 p-2 text-sm outline-none focus:border-orange-600 flex-1"
                />
                <button className="bg-orange-600 px-4 py-2 font-bold text-sm">JOIN</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-600 text-[10px] uppercase tracking-widest font-bold">
            <p>© 2024 FIRE SURFBOARDS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Sale</span>
              <span>Shipping Info</span>
            </div>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
    </div>
  );
};

export default App;
