
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  description: string;
  details: {
    size: string;
    finbox: string;
    material: string;
  };
  type: 'board' | 'accessory';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutData {
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}
