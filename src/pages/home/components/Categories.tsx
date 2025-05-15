
import { useState } from "react"
import { motion } from "motion/react"


const categories = [
  {
    id: "bridal",
    name: "Bridal Lehengas",
    description: "Exquisite bridal lehengas for your special day",
    image: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/2173lg03-6303.jpg",
  },
  {
    id: "party",
    name: "Party Wear",
    description: "Stunning lehengas for celebrations and parties",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "reception",
    name: "Reception",
    description: "Elegant designs for reception ceremonies",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "engagement",
    name: "Engagement",
    description: "Beautiful lehengas for engagement ceremonies",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "festive",
    name: "Festive Wear",
    description: "Colorful lehengas for festive occasions",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState("bridal")

  return (
    <section className="py-16 px-6 md:px-12 bg-white" id="collections">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated categories of lehengas designed for every occasion and celebration
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-pink-800 hover:bg-pink-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={`https://media.samyakk.com/pub/media/catalog/product/g/r/green-party-wear-lehenga-with-stone-work-and-wide-deep-v-neck-blouse-gc4693-a.jpg`}
                  alt={`Lehenga design ${item}`}
                  width={450}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {categories.find((c) => c.id === activeCategory)?.name} Style {item}
                  </h3>
                  <p className="text-white/80 mt-2">Handcrafted with premium fabrics and intricate embroidery</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {categories.find((c) => c.id === activeCategory)?.name} - Design {item}
                </h3>
                <p className="text-gray-500 text-sm mt-1">Premium quality with detailed embroidery</p>
                {/* <div className="mt-4 flex justify-between items-center">
                  <span className="text-pink-600 font-bold">₹{Math.floor(Math.random() * 50000) + 30000}</span>
                  <button className="text-sm text-pink-600 font-medium hover:underline">View Details</button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All {categories.find((c) => c.id === activeCategory)?.name}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
