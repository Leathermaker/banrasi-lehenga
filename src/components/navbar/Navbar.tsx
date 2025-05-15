

import { useState } from "react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "collections" },
  { label: "Contact", href: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 md:px-12"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={'/'}>
        <motion.div className="text-2xl font-bold text-pink-600" whileHover={{ scale: 1.02 }}>
        <span className="text-gray-800">Banarasi</span> Lehenga
        </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              to={`${item.href.toLowerCase().replace(" ", "-")}`}
            >
            <motion.p
              key={item.label}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              {item.label}
              </motion.p>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {["Home", "Collections", "Bridal", "Party Wear", "Custom Design", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
