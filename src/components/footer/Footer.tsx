
import { motion } from "motion/react"
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-6">
              Lehenga<span className="text-white">Elegance</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Crafting timeless elegance through exquisite lehengas that celebrate tradition and contemporary design.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Collections", "Bridal Lehengas", "Party Wear", "Custom Designs", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-pink-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Fashion Street, Design District, Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">info@lehengaelegance.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest designs, exclusive offers, and fashion tips.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-pink-400"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Lehenga Elegance. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="#" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-pink-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-pink-400 transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
