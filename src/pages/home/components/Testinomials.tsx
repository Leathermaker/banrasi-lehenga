"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    quote:
      "The bridal lehenga exceeded all my expectations. The craftsmanship and attention to detail were impeccable. I felt like royalty on my wedding day!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "Fashion Influencer",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    quote:
      "I've worn many designer outfits, but the quality and design of these lehengas are truly exceptional. My followers couldn't stop asking about where I got my outfit!",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera Kapoor",
    role: "Celebrity Stylist",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    quote:
      "Working with this team was a dream. They understood my client's vision perfectly and delivered a stunning lehenga that made headlines at the event.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ritu Desai",
    role: "Bride's Mother",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    quote:
      "The customization options were incredible. We were able to incorporate our family's traditional designs with modern elements. The result was breathtaking.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our designs
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-pink-100">
                    <img
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg mb-4">"{testimonials[current].quote}"</p>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[current].name}</h4>
                    <p className="text-pink-600">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-pink-600" : "bg-pink-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied customers and experience the elegance and craftsmanship of our lehengas
          </p>
         
        </motion.div>
      </div>
    </section>
  )
}
