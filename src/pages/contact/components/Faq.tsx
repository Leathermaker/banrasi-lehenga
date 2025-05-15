import React from 'react'
import { motion } from 'motion/react';
import { faqs } from '../../../data/contact';
import { ChevronDown } from 'lucide-react';

const Faq:React.FC = () => {
    const [activeAccordion, setActiveAccordion] = React.useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index)
    }

  return (
    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-16"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Find answers to the most common questions about our products and services.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <span className="font-medium text-gray-800">{faq.question}</span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform ${activeAccordion === index ? "transform rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <div
                                            className={`px-6 overflow-hidden transition-all duration-300 ${activeAccordion === index ? "max-h-40 py-4" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
  )
}

export default Faq