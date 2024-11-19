import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Package, Heart } from 'lucide-react';

export function Account() {
  const location = useLocation();

  const navigation = [
    { name: 'Profile', href: '/account', icon: User },
    { name: 'Orders', href: '/account/orders', icon: Package },
    { name: 'Wishlist', href: '/account/wishlist', icon: Heart },
    { name: 'Settings', href: '/account/settings', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    location.pathname === item.href
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="lg:col-span-3">
          <Routes>
            <Route index element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            defaultValue="+977 9812345678"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="space-y-4">
        {/* Sample order */}
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Order #12345</span>
            <span className="text-sm text-gray-500">March 15, 2024</span>
          </div>
          <div className="text-sm text-gray-600">
            <p>Status: <span className="text-green-600">Delivered</span></p>
            <p>Total: NPR 2,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wishlist() {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Sample wishlist item */}
        <div className="border rounded-lg p-4 flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1587049352847-4a5ba36ba039"
            alt="Product"
            className="w-20 h-20 object-cover rounded-md"
          />
          <div>
            <h3 className="font-medium">Wild Himalayan Honey</h3>
            <p className="text-primary">NPR 1,200</p>
            <button className="text-sm text-primary hover:text-primary/90">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Language
          </label>
          <select className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary">
            <option>English</option>
            <option>नेपाली</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Notifications
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
              <span className="text-sm">Order updates</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
              <span className="text-sm">Promotions and offers</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}