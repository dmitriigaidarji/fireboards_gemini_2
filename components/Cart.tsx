
import React from 'react';
import { X, Trash2, Send } from 'lucide-react';
import { CartItem, CheckoutData } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const [checkoutStep, setCheckoutStep] = React.useState<'cart' | 'shipping' | 'success'>('cart');
  const [formData, setFormData] = React.useState<CheckoutData>({
    email: '',
    address: '',
    city: '',
    zip: '',
    country: ''
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    // In a real app, send data to backend here.
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <h2 className="heading-font text-2xl font-bold">YOUR GEAR</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-stone-400 mb-4">Your cart is empty.</p>
                  <button onClick={onClose} className="text-orange-600 font-bold underline">Start Shopping</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <img src={item.image} className="w-20 h-20 object-cover rounded-md" />
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <p className="text-stone-500 text-sm mb-2">{item.collection}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => onUpdateQty(item.id, -1)}
                              className="w-6 h-6 border rounded-full flex items-center justify-center hover:bg-stone-50"
                            >-</button>
                            <span className="font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQty(item.id, 1)}
                              className="w-6 h-6 border rounded-full flex items-center justify-center hover:bg-stone-50"
                            >+</button>
                          </div>
                          <p className="font-bold text-orange-600">${item.price * item.quantity}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-stone-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {checkoutStep === 'shipping' && (
            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Shipping Details</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-stone-50 border rounded-sm outline-none focus:border-orange-500"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Shipping Address</label>
                <textarea 
                  required
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full p-3 bg-stone-50 border rounded-sm outline-none focus:border-orange-500"
                  rows={3}
                  placeholder="Street address, apartment, etc."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input 
                    required
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    className="w-full p-3 bg-stone-50 border rounded-sm outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input 
                    required
                    value={formData.country}
                    onChange={e => setFormData({...formData, country: e.target.value})}
                    className="w-full p-3 bg-stone-50 border rounded-sm outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="heading-font text-3xl font-bold">REQUEST SENT</h3>
              <p className="text-stone-500">
                We've received your request for the {items.length} items. 
                One of our team members in Siargao will contact you at <strong>{formData.email}</strong> to finalize shipping and payment details.
              </p>
              <button 
                onClick={() => {
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="w-full py-4 bg-orange-600 text-white font-bold rounded-sm mt-6"
              >
                BACK TO SHOP
              </button>
            </div>
          )}
        </div>

        {items.length > 0 && checkoutStep !== 'success' && (
          <div className="p-6 border-t border-stone-100 bg-stone-50 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total</span>
              <span className="text-orange-600">${total}</span>
            </div>
            
            {checkoutStep === 'cart' ? (
              <button 
                onClick={() => setCheckoutStep('shipping')}
                className="w-full py-4 bg-black text-white font-bold rounded-sm hover:bg-stone-800 transition-colors"
              >
                PROCEED TO CHECKOUT
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setCheckoutStep('cart')}
                  className="py-4 border border-stone-300 font-bold rounded-sm hover:bg-stone-100"
                >
                  BACK
                </button>
                <button 
                  form="checkout-form"
                  type="submit"
                  className="py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-700"
                >
                  SEND REQUEST
                </button>
              </div>
            )}
            <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest">
              Payment is settled via email contact.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
