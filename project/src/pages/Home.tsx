import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero from '/11.jpg'

export function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hero}) !important`,


            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Premium Local Products from Nepal
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover authentic Nepali products, from organic honey to premium spices,
            delivered directly to your doorstep.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-primary font-medium">NPR {product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    id: 'honey',
    name: 'Honey',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12',
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
  },
  {
    id: 'tea',
    name: 'Tea',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12',
  },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Wild Himalayan Honey',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1587049352847-4a5ba36ba039',
  },
  {
    id: '2',
    name: 'Premium Turmeric Powder',
    price: '450',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7',
  },
  {
    id: '3',
    name: 'Organic Green Tea',
    price: '550',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
  },
  {
    id: '4',
    name: 'Himalayan Pink Salt',
    price: '350',
    image: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b',
  },
];