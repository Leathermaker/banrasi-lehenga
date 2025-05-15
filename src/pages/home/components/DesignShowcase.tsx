"use client"

import { useState } from "react"
import { motion } from "motion/react"

const designFeatures = [
  {
    id: "embroidery",
    title: "Intricate Embroidery",
    description:
      "Handcrafted embroidery with meticulous attention to detail, using traditional techniques passed down through generations.",
    image: "https://media.samyakk.com/pub/media/catalog/product/g/r/green-party-wear-lehenga-with-stone-work-and-wide-deep-v-neck-blouse-gc4693-a.jpg",
  },
  {
    id: "fabrics",
    title: "Premium Fabrics",
    description: "Luxurious silk, velvet, and organza sourced from the finest mills to ensure comfort and elegance.",
    image: "https://media.samyakk.com/pub/media/catalog/product/b/r/brown-bridal-lehenga-with-bead-work-and-wide-v-neck-blouse-gc4662.jpg",
  },
  {
    id: "customization",
    title: "Custom Designs",
    description: "Personalized designs tailored to your preferences, ensuring your lehenga is as unique as you are.",
    image: "https://images.cbazaar.com/images/deep-wine-georgette-zari-embroidered-sequins-beautiful-lehenga-ghsep5074wi-u.jpg",
  },
  {
    id: "craftsmanship",
    title: "Expert Craftsmanship",
    description:
      "Each piece is crafted by skilled artisans with decades of experience in traditional and contemporary techniques.",
    image: "https://images.cbazaar.com/images/teal-georgette-zari-embroidered-sequins-elegant-lehenga-ghsep5067gr-u.jpg",
  },
]

export default function DesignShowcase() {
  const [activeFeature, setActiveFeature] = useState("embroidery")

  return (
    <section className="py-16 px-6 md:px-12 bg-pink-50" id="custom-design">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Art of Lehenga Design</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the craftsmanship and attention to detail that goes into creating each of our exquisite lehengas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {designFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeFeature === feature.id ? "bg-white shadow-lg border-l-4 border-pink-600" : "hover:bg-white/50"
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                  whileHover={{ x: activeFeature !== feature.id ? 5 : 0 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={activeFeature}
              >
                <img
                  src={designFeatures.find((f) => f.id === activeFeature)?.image || ""}
                  alt={designFeatures.find((f) => f.id === activeFeature)?.title || ""}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
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
            Book a Design Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
