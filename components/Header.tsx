
import React from 'react';
import { ShoppingCart, Flame, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-orange-600 fill-orange-600" />
          <span className="heading-font text-2xl font-bold tracking-tighter">FIRE BOARDS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collections" className="font-medium hover:text-orange-600 transition-colors">COLLECTIONS</a>
          <a href="#accessories" className="font-medium hover:text-orange-600 transition-colors">ACCESSORIES</a>
          <a href="#about" className="font-medium hover:text-orange-600 transition-colors">OUR STORY</a>
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={onCartClick} className="relative p-2">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-stone-200 p-4 space-y-4 shadow-xl">
          <a href="#collections" onClick={() => setIsOpen(false)} className="block text-lg font-bold">COLLECTIONS</a>
          <a href="#accessories" onClick={() => setIsOpen(false)} className="block text-lg font-bold">ACCESSORIES</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-bold">OUR STORY</a>
        </div>
      )}
    </header>
  );
};

export default Header;
