"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { BookOpen, TrendingUp, Clock, Award, Users, Play, Calendar, Target, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const dashboardData = {
  user: {
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    level: "Intermediate",
    points: 2450,
    streak: 12,
  },
  stats: [
    { label: "Courses Completed", value: 8, icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { label: "Hours Learned", value: 124, icon: Clock, color: "from-purple-500 to-pink-500" },
    { label: "Certificates Earned", value: 5, icon: Award, color: "from-green-500 to-emerald-500" },
    { label: "Study Streak", value: 12, icon: TrendingUp, color: "from-orange-500 to-red-500" },
  ],
  currentCourses: [
    {
      id: 1,
      title: "Advanced React Development",
      progress: 75,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&crop=center",
      instructor: "Sarah Wilson",
      nextLesson: "React Hooks Deep Dive",
      timeLeft: "2h 30m",
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      progress: 45,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
      instructor: "Dr. Michael Chen",
      nextLesson: "Neural Networks Basics",
      timeLeft: "4h 15m",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 90,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop&crop=center",
      instructor: "Emily Rodriguez",
      nextLesson: "Final Project Review",
      timeLeft: "1h 45m",
    },
  ],
  achievements: [
    { title: "First Course Completed", icon: BookOpen, earned: true },
    { title: "Week Streak", icon: Calendar, earned: true },
    { title: "Quick Learner", icon: TrendingUp, earned: true },
    { title: "Community Helper", icon: Users, earned: false },
    { title: "Perfect Score", icon: Star, earned: false },
    { title: "Marathon Learner", icon: Target, earned: false },
  ],
  upcomingDeadlines: [
    { course: "React Development", task: "Final Project", due: "2 days", priority: "high" },
    { course: "Machine Learning", task: "Assignment 3", due: "5 days", priority: "medium" },
    { course: "UI/UX Design", task: "Portfolio Review", due: "1 week", priority: "low" },
  ],
}

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".dashboard-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
      )
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" />
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={dashboardData.user.avatar || "/placeholder.svg"}
                  alt={dashboardData.user.name}
                  className="w-16 h-16 rounded-full border-4 border-white/30"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Welcome back, {dashboardData.user.name}!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    {dashboardData.user.level} • {dashboardData.user.points} points • {dashboardData.user.streak} day
                    streak 🔥
                  </p>
                </div>
              </div>
              <Button className="btn-gradient text-white px-6 py-3 rounded-xl">Continue Learning</Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="dashboard-card"
            >
              <div className="glass backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="dashboard-card"
            >
              <div className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continue Learning</h2>
                <div className="space-y-6">
                  {dashboardData.currentCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-20 h-20 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {course.instructor}</p>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex-1">
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>Next: {course.nextLesson}</span>
                            <span>{course.timeLeft} left</span>
                          </div>
                        </div>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl group-hover:scale-110 transition-all duration-300">
                          <Play className="w-5 h-5" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="dashboard-card"
            >
              <div className="glass backdrop-blur-md rounded-3xl p-6 border border-white/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h3>
                <div className="grid grid-cols-3 gap-3">
                  {dashboardData.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        achievement.earned
                          ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                      }`}
                    >
                      <achievement.icon className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs font-medium">{achievement.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Upcoming Deadlines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="dashboard-card"
            >
              <div className="glass backdrop-blur-md rounded-3xl p-6 border border-white/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h3>
                <div className="space-y-3">
                  {dashboardData.upcomingDeadlines.map((deadline, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/50 dark:hover:bg-black/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">{deadline.task}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{deadline.course}</div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-sm font-semibold ${
                            deadline.priority === "high"
                              ? "text-red-500"
                              : deadline.priority === "medium"
                                ? "text-yellow-500"
                                : "text-green-500"
                          }`}
                        >
                          {deadline.due}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
