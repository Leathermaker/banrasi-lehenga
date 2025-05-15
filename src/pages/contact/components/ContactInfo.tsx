import { Clock, Facebook, Instagram, Mail, MapPin, Phone,  Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const ContactInfo:React.FC = () => {
  return (
    <div >
    {/* Contact Information */}
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 md:order-1"
    >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="opacity-90">Fill up the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="p-6">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Our Store Location</h3>
                            <p className="text-gray-600">
                                123 Fashion Street, Design District
                                <br />
                                Mumbai, India - 400001
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                            <p className="text-gray-600">
                                Sales: +91 98765 43210
                                <br />
                                Customer Support: +91 98765 43211
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Email Addresses</h3>
                            <p className="text-gray-600">
                                Info: info@lehengaelegance.com
                                <br />
                                Support: support@lehengaelegance.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                            <p className="text-gray-600">
                                Monday - Saturday: 10:00 AM - 8:00 PM
                                <br />
                                Sunday: 11:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <motion.a
                            href="#"
                            className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                            whileHover={{ y: -3 }}
                        >
                            <Instagram size={18} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                            whileHover={{ y: -3 }}
                        >
                            <Facebook size={18} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                            whileHover={{ y: -3 }}
                        >
                            <Twitter size={18} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                            whileHover={{ y: -3 }}
                        >
                            <Youtube size={18} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>


    </motion.div>

    {/* Contact Form */}
    
</div>
  )
}

export default ContactInfo