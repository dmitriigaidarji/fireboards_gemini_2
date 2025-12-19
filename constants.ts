
import { Product } from './types';

export const SURFBOARDS: Product[] = [
  // Collection 1: Cloud 9 Performance
  {
    id: 'c9-pro-1',
    name: 'Cloud 9 Thruster',
    collection: 'Performance Pro',
    price: 650,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    description: 'Designed for the hollow peaks of Siargao. Fast, responsive, and sharp.',
    details: { size: "5'11 x 18 3/4 x 2 5/16", finbox: 'FCS II / Thruster', material: 'PU Core' },
    type: 'board'
  },
  {
    id: 'c9-pro-2',
    name: 'The Barrel Hunter',
    collection: 'Performance Pro',
    price: 680,
    image: 'https://images.unsplash.com/photo-1531722569924-819fd2592790?auto=format&fit=crop&w=800&q=80',
    description: 'Pinned tail for extra hold in critical sections. Essential for big days.',
    details: { size: "6'2 x 19 x 2 1/2", finbox: 'Future / Quad', material: 'Epoxy Carbon' },
    type: 'board'
  },

  // Collection 2: Island Cruiser (Longboards)
  {
    id: 'ic-long-1',
    name: 'Siargao Log',
    collection: 'Island Cruiser',
    price: 850,
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=800&q=80',
    description: 'Perfect for the gentle peelers at Jacking Horse. Traditional glassing.',
    details: { size: "9'4 x 23 x 3", finbox: 'Single Fin Box', material: 'Traditional Resin Tint' },
    type: 'board'
  },
  {
    id: 'ic-long-2',
    name: 'Glider 10',
    collection: 'Island Cruiser',
    price: 920,
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&w=800&q=80',
    description: 'Ultimate trim. For those who want to catch everything from the horizon.',
    details: { size: "10'0 x 24 x 3 1/4", finbox: 'Single Fin Box', material: 'Balsa Stringer PU' },
    type: 'board'
  },

  // Collection 3: Hybrid Heat
  {
    id: 'hh-fish-1',
    name: 'Fire Fish',
    collection: 'Hybrid Heat',
    price: 590,
    image: 'https://images.unsplash.com/photo-1414442323120-144be03d0f67?auto=format&fit=crop&w=800&q=80',
    description: 'Twin fin speed for smaller, fun days. Our most popular shape.',
    details: { size: "5'6 x 20 1/2 x 2 3/8", finbox: 'Future / Twin', material: 'PU Core' },
    type: 'board'
  },
  {
    id: 'hh-mid-1',
    name: 'The Generalist',
    collection: 'Hybrid Heat',
    price: 720,
    image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=800&q=80',
    description: 'A mid-length that handles like a shortboard. Great for travel.',
    details: { size: "7'2 x 21 x 2 3/4", finbox: '2 + 1 Setup', material: 'Epoxy' },
    type: 'board'
  },

  // Collection 4: Grom Squad
  {
    id: 'gs-jr-1',
    name: 'Mini Flame',
    collection: 'Grom Squad',
    price: 450,
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=800&q=80',
    description: 'High performance for the next generation of local rippers.',
    details: { size: "4'10 x 17 x 2", finbox: 'FCS II', material: 'Lightweight PU' },
    type: 'board'
  }
];

export const ACCESSORIES: Product[] = [
  {
    id: 'acc-leash-1',
    name: 'Fire Pro Leash 6ft',
    collection: 'Accessories',
    price: 35,
    image: 'https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty urethane for Siargao reefs.',
    details: { size: '6ft', finbox: 'N/A', material: 'Urethane' },
    type: 'accessory'
  },
  {
    id: 'acc-hat-1',
    name: 'Fire Trucker Hat',
    collection: 'Accessories',
    price: 25,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    description: 'Protect yourself from the tropical sun.',
    details: { size: 'One Size', finbox: 'N/A', material: 'Cotton Mesh' },
    type: 'accessory'
  },
  {
    id: 'acc-leash-2',
    name: 'Comp Leash 5ft',
    collection: 'Accessories',
    price: 30,
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800&q=80',
    description: 'Thinner leash for reduced drag during competitions.',
    details: { size: '5ft', finbox: 'N/A', material: 'Lightweight Urethane' },
    type: 'accessory'
  }
];
