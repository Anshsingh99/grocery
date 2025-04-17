import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FreshMart</h3>
            <p className="text-green-100">
              Your one-stop shop for fresh, high-quality groceries delivered right to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-green-100 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-green-100 hover:text-white">
                  Deals & Discounts
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-green-100 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/seasonal" className="text-green-100 hover:text-white">
                  Seasonal Items
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-green-100 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-green-100 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-green-100 mb-4">Subscribe to our newsletter for the latest deals and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-800 w-full focus:outline-none"
              />
              <button className="bg-gradient-to-r from-green-500 to-teal-400 px-4 py-2 rounded-r-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-green-600 mt-8 pt-8 text-center text-green-100">
          <p>© 2025 FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
