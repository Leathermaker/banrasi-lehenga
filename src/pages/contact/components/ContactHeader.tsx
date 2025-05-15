import React from 'react'
import { motion } from 'motion/react'
const ContactHeader: React.FC = () => {
    return (
        <section className="pt-24 pb-8 md:pt-32 md:pb-12 px-6 md:px-12 bg-gradient-to-r from-pink-50 to-white">

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Get in <span className="text-pink-600">Touch</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question about our designs, pricing, or anything else, our
                        team is ready to answer all your questions.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactHeader