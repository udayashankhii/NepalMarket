import { useParams } from 'react-router-dom';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';

export function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  // In a real app, fetch product details based on id
  const product = {
    id: '1',
    name: 'Wild Himalayan Honey',
    price: 1200,
    description: 'Pure and natural honey collected from the Himalayan regions of Nepal. Known for its unique taste and medicinal properties.',
    image: 'https://images.unsplash.com/photo-1587049352847-4a5ba36ba039',
    details: [
      'Sourced from altitudes of 2,500m to 3,500m',
      '100% pure and natural',
      'No artificial additives',
      'Rich in antioxidants',
    ],
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mb-6">
            NPR {product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}