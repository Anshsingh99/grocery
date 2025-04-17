import { Link } from "react-router-dom"

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "/placeholder.svg?height=80&width=80",
    count: 124,
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    image: "/placeholder.svg?height=80&width=80",
    count: 86,
  },
  {
    id: 3,
    name: "Meat & Seafood",
    image: "/placeholder.svg?height=80&width=80",
    count: 92,
  },
  {
    id: 4,
    name: "Bakery",
    image: "/placeholder.svg?height=80&width=80",
    count: 45,
  },
  {
    id: 5,
    name: "Pantry",
    image: "/placeholder.svg?height=80&width=80",
    count: 156,
  },
  {
    id: 6,
    name: "Beverages",
    image: "/placeholder.svg?height=80&width=80",
    count: 78,
  },
]

function CategorySection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-teal-50 flex items-center justify-center mb-3">
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="w-10 h-10" />
              </div>
              <h3 className="font-medium text-gray-800">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} items</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
