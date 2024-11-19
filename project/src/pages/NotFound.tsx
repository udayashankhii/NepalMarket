import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Home className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}