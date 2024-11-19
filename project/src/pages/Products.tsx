import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';

export function Products() {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const category = searchParams.get('category');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
        </h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center space-x-2 text-gray-600"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex gap-8">
        {/* Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 shrink-0`}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>NPR 0</span>
                  <span>NPR 5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                <p className="text-primary font-medium">NPR {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  { id: 'honey', name: 'Honey' },
  { id: 'spices', name: 'Spices' },
  { id: 'tea', name: 'Tea' },
  { id: 'salt', name: 'Salt' },
  { id: 'oils', name: 'Essential Oils' },
];

const products = [
  {
    id: '1',
    name: 'Wild Himalayan Honey',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1587049352847-4a5ba36ba039',
    category: 'honey',
  },
  {
    id: '2',
    name: 'Premium Turmeric Powder',
    price: '450',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7',
    category: 'spices',
  },
  {
    id: '3',
    name: 'Organic Green Tea',
    price: '550',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    category: 'tea',
  },
  {
    id: '4',
    name: 'Himalayan Pink Salt',
    price: '350',
    image: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b',
    category: 'salt',
  },
  {
    id: '5',
    name: 'Cardamom Pods',
    price: '850',
    image: 'https://images.unsplash.com/photo-1599909631715-e31d26752da1',
    category: 'spices',
  },
  {
    id: '6',
    name: 'Lavender Essential Oil',
    price: '1,500',
    image: 'https://images.unsplash.com/photo-1611073615830-9a55e4a0f5d5',
    category: 'oils',
  },
];