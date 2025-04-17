"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart } from "./icons/Icons.jsx"
import { Card, CardContent, CardFooter } from "./Card"
import Badge from "./Badge"
import Button from "./Button"

// Sample product data
const products = [
  {
    id: 1,
    name: "Organic Bananas",
    category: "Fruits",
    price: 1.99,
    unit: "bunch",
    image: "/placeholder.svg?height=200&width=200",
    sale: false,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fresh Avocados",
    category: "Fruits",
    price: 2.49,
    unit: "each",
    image: "/placeholder.svg?height=200&width=200",
    sale: true,
    salePrice: 1.99,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Organic Spinach",
    category: "Vegetables",
    price: 3.99,
    unit: "bag",
    image: "/placeholder.svg?height=200&width=200",
    sale: false,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Whole Milk",
    category: "Dairy",
    price: 4.29,
    unit: "gallon",
    image: "/placeholder.svg?height=200&width=200",
    sale: false,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Chicken Breast",
    category: "Meat",
    price: 8.99,
    unit: "lb",
    image: "/placeholder.svg?height=200&width=200",
    sale: true,
    salePrice: 6.99,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Sourdough Bread",
    category: "Bakery",
    price: 4.99,
    unit: "loaf",
    image: "/placeholder.svg?height=200&width=200",
    sale: false,
    rating: 4.9,
  },
  {
    id: 7,
    name: "Organic Eggs",
    category: "Dairy",
    price: 5.99,
    unit: "dozen",
    image: "/placeholder.svg?height=200&width=200",
    sale: false,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Bell Peppers",
    category: "Vegetables",
    price: 1.49,
    unit: "each",
    image: "/placeholder.svg?height=200&width=200",
    sale: true,
    salePrice: 0.99,
    rating: 4.3,
  },
]

function ProductGrid() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])

  const addToCart = (id) => {
    setCart([...cart, id])
  }

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="relative">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100"
            >
              <Heart
                className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                fill={favorites.includes(product.id)}
              />
            </button>
            {product.sale && (
              <Badge className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white">Sale</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500 mb-1">{product.category}</div>
            <Link to={`/products/${product.id}`} className="block">
              <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors">{product.name}</h3>
            </Link>
            <div className="flex items-center mt-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
            </div>
            <div className="flex items-baseline mt-2">
              {product.sale ? (
                <>
                  <span className="text-lg font-bold text-green-600">INR{product.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">INR{product.price}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-green-600">INR{product.price}</span>
              )}
              <span className="text-gray-500 text-sm ml-1">/ {product.unit}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => addToCart(product.id)} className="w-full flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              {cart.includes(product.id) ? "Added to Cart" : "Add to Cart"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ProductGrid
