
import React from 'react';
import { Plus, Maximize2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="group relative bg-white border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={() => onAdd(product)}
            className="bg-white text-black px-6 py-3 font-bold rounded-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all"
          >
            <Plus className="w-5 h-5" /> ADD TO GEAR
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">{product.collection}</span>
            <h3 className="heading-font text-2xl font-bold">{product.name}</h3>
          </div>
          <span className="text-xl font-bold text-orange-600">${product.price}</span>
        </div>
        
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-50 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
          <div>
            <div className="text-stone-300 mb-1">Dimensions</div>
            <div className="text-stone-900">{product.details.size}</div>
          </div>
          <div>
            <div className="text-stone-300 mb-1">System</div>
            <div className="text-stone-900">{product.details.finbox}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
