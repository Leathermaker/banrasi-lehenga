import React from 'react';
import { motion } from 'framer-motion'; // Fixed import
import { Check, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9+\- ]{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "General Inquiry",
                    message: "",
                });

                // Reset submission status after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
        >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                        <p className="text-gray-600">
                            Your message has been sent successfully. We'll get back to you as soon as possible.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name <span className="text-pink-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors`}
                                placeholder="Your full name"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors`}
                                    placeholder="+91 98765 43210"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors appearance-none bg-white"
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Product Information">Product Information</option>
                                <option value="Custom Order">Custom Order</option>
                                <option value="Booking Appointment">Booking Appointment</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message <span className="text-pink-600">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={5}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none`}
                                placeholder="How can we help you?"
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </form>
                )}
            </div>
        </motion.div>
    );
};

export default ContactForm;