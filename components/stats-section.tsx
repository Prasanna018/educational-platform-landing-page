"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: 50000, suffix: "+", label: "Active Students", prefix: "" },
  { value: 500, suffix: "+", label: "Expert Instructors", prefix: "" },
  { value: 95, suffix: "%", label: "Success Rate", prefix: "" },
  { value: 1000, suffix: "+", label: "Courses Available", prefix: "" },
]

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => {
            // Animate numbers
            stats.forEach((stat, index) => {
              gsap.to(
                { value: 0 },
                {
                  value: stat.value,
                  duration: 2,
                  ease: "power2.out",
                  onUpdate: function () {
                    setAnimatedValues((prev) => {
                      const newValues = [...prev]
                      newValues[index] = Math.round(this.targets()[0].value)
                      return newValues
                    })
                  },
                },
              )
            })
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 animate-on-scroll"
    >
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
              Our Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Numbers that speak for our commitment to excellence
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 backdrop-blur-md border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.prefix}
                    {animatedValues[index].toLocaleString()}
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
