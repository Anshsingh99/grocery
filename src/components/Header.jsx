import { Link } from "react-router-dom"
import { ShoppingCart } from "./icons/Icons"

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent"
        >
          FreshMart
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors">
            Products
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-green-600 transition-colors">
            Categories
          </Link>
          <Link to="/deals" className="text-gray-700 hover:text-green-600 transition-colors">
            Deals
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-teal-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
