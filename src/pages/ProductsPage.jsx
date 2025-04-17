"use client"

import { useState } from "react"
import ProductGrid from "../components/ProductGrid"
import Button from "../components/Button"
import { Filter, ArrowUpDown } from "../components/icons/Icons"
import Dropdown from "../components/Dropdown"

function ProductsPage() {
  const [sortOption, setSortOption] = useState("featured")

  const sortItems = [
    { label: "Featured", value: "featured", onClick: () => setSortOption("featured") },
    { label: "Price: Low to High", value: "price-low", onClick: () => setSortOption("price-low") },
    { label: "Price: High to Low", value: "price-high", onClick: () => setSortOption("price-high") },
    { label: "Newest", value: "newest", onClick: () => setSortOption("newest") },
    { label: "Highest Rated", value: "rating", onClick: () => setSortOption("rating") },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-gray-600">Browse our selection of fresh, high-quality groceries</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Dropdown
            trigger={
              <Button variant="outline" className="flex items-center">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
            }
            items={sortItems}
            align="right"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Fruits & Vegetables</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Dairy & Eggs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Meat & Seafood</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Bakery</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Pantry</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Beverages</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Under $5</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">$5 to $10</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">$10 to $20</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">$20 & Above</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Dietary Preferences</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Organic</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Gluten-Free</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Vegan</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Vegetarian</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2">Non-GMO</span>
              </label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
