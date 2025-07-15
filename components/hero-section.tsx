"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Star, Users, BookOpen, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Enhanced floating animation for background elements
      gsap.to(".floating-element", {
        y: -30,
        x: 10,
        rotation: 5,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 1,
          from: "random",
        },
      })

      // Gradient animation with more complexity
      gsap.to(".gradient-bg", {
        backgroundPosition: "400% center",
        duration: 12,
        ease: "none",
        repeat: -1,
      })

      // Particle animation
      gsap.to(".particle", {
        y: -100,
        opacity: 0,
        duration: 4,
        ease: "power2.out",
        repeat: -1,
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 gradient-bg bg-gradient-to-br from-blue-400 via-purple-500 via-pink-500 to-orange-400 opacity-20 dark:opacity-10"
          style={{ backgroundSize: "400% 400%" }}
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-5 dark:opacity-3" />
      </div>

      {/* Enhanced floating elements with icons */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-24 h-24 glass rounded-2xl flex items-center justify-center opacity-30">
          <BookOpen className="w-8 h-8 text-blue-500" />
        </div>
        <div className="floating-element absolute top-40 right-20 w-20 h-20 glass rounded-full flex items-center justify-center opacity-25">
          <Zap className="w-6 h-6 text-purple-500" />
        </div>
        <div className="floating-element absolute bottom-40 left-20 w-28 h-28 glass rounded-3xl flex items-center justify-center opacity-20">
          <Sparkles className="w-10 h-10 text-pink-500" />
        </div>
        <div className="floating-element absolute bottom-20 right-10 w-16 h-16 glass rounded-xl flex items-center justify-center opacity-35">
          <Star className="w-5 h-5 text-yellow-500" />
        </div>

        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center space-x-3 glass backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30 animate-pulse-glow"
          >
            <div className="flex -space-x-2">
              <img
                className="w-6 h-6 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=40&h=40&fit=crop&crop=face"
                alt="Student"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                alt="Student"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                alt="Student"
              />
            </div>
            <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold gradient-text">Trusted by 50,000+ learners worldwide</span>
          </motion.div>

          {/* Enhanced main heading with staggered animation */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight"
            >
              <motion.span
                className="gradient-text block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Transform Your
              </motion.span>
              <motion.span
                className="text-gray-900 dark:text-white block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Learning Journey
              </motion.span>
            </motion.h1>
          </div>

          {/* Enhanced subtitle with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the future of education with our{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">AI-powered platform</span> featuring
              cutting-edge technology, personalized learning paths, and engaging content.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Join millions of learners who have already transformed their careers with our interactive courses.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons with better animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="btn-gradient text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Learning Today
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-5 text-xl font-bold rounded-2xl border-2 border-white/30 hover:bg-white/10 dark:hover:bg-black/10 backdrop-blur-sm group bg-transparent glass"
              >
                <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced stats with better layout and animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Users,
                value: "50K+",
                label: "Active Learners",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: BookOpen,
                value: "500+",
                label: "Expert Courses",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Star,
                value: "4.9",
                label: "Average Rating",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="card-hover group"
              >
                <div className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30 relative overflow-hidden">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${stat.image})` }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
