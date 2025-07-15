"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "This platform transformed my career. The interactive courses and AI-powered recommendations helped me land my dream job in tech.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The quality of content and the engaging learning experience is unmatched. I've completed 15 courses and counting!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The collaborative features and community support made learning enjoyable. I connected with amazing peers and mentors.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Students Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Real stories from real learners who transformed their careers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 backdrop-blur-md border border-white/20 h-full hover:shadow-2xl transition-all duration-300 relative">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
