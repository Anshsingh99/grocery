import { Link } from "react-router-dom"
import { ArrowRight } from "./icons/Icons"

const featuredProducts = [
  {
    id: 1,
    name: "Organic Produce Bundle",
    description: "A selection of fresh, organic fruits and vegetables.",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=400",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Premium Meat Box",
    description: "Assorted premium cuts of locally sourced meats.",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=400",
    badge: "New",
  },
  {
    id: 3,
    name: "Artisan Cheese Collection",
    description: "Handcrafted cheeses from local dairies.",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=400",
    badge: "Limited",
  },
]

function FeaturedProducts() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-xl shadow-md">
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-green-600 to-teal-500 text-white">
                  {product.badge}
                </span>
              </div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="mb-3 opacity-90">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Link
                    to={`/collections/${product.id}`}
                    className="flex items-center text-white hover:text-green-300 transition-colors"
                  >
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
