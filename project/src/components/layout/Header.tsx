import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">Nepal Market</span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="w-full relative">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link to="/account" className="p-2">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}