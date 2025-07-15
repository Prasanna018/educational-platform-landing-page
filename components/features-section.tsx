"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Users, Trophy, BookOpen, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths adapted to your pace and style with advanced AI algorithms.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Interactive Content",
    description: "Engage with dynamic content, quizzes, and hands-on projects that make learning fun.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Connect with peers, join study groups, and learn together in our vibrant community.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Earn badges, certificates, and track your progress with our gamified learning system.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Rich Course Library",
    description: "Access thousands of courses across various subjects taught by industry experts.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set learning goals, track your progress, and celebrate your achievements.",
    color: "from-red-500 to-pink-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover the tools and features that make learning engaging, effective, and enjoyable.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 backdrop-blur-md border border-white/20 h-full hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>

                {/* Hover effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 w-full bg-gradient-to-r ${feature.color} rounded-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
