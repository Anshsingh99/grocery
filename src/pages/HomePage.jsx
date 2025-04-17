import { Link } from "react-router-dom"
import ProductGrid from "../components/ProductGrid"
import CategorySection from "../components/CategorySection"
import FeaturedProducts from "../components/FeaturedProducts"
import Button from "../components/Button"

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Fresh Groceries <br />
                <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                  Delivered to Your Door
                </span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                Shop from our wide selection of fresh produce, dairy, meats, and pantry essentials.
              </p>
              <div className="flex space-x-4">
                <Link to="/products">
                  <Button className="px-6 py-3">Shop Now</Button>
                </Link>
                <Link to="/deals">
                  <Button variant="outline" className="px-6 py-3 border-green-600 text-green-600 hover:bg-green-50">
                    View Deals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=400&width=600" alt="Fresh groceries" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* All Products */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">All Products</h2>
            <Link to="/products" className="text-green-600 hover:text-green-700 font-medium">
              View All
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>
    </main>
  )
}

export default HomePage
