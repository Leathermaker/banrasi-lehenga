

import { motion } from "motion/react"



const stats = [
  { id: 1, value: "10+", label: "Years of Excellence" },
  { id: 2, value: "5000+", label: "Happy Clients" },
  { id: 3, value: "200+", label: "Unique Designs" },
  { id: 4, value: "50+", label: "Awards & Recognition" },
]

export default function ClientSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our designs have been featured in leading fashion magazines and worn by celebrities
          </p>
        </motion.div>

        
         

        <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
