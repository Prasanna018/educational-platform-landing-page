"use client"

import { motion } from "framer-motion"
import { Star, Clock, Users, BookOpen, Play, Heart, Share2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface Course {
  id: number
  title: string
  instructor: string
  rating: number
  students: number
  duration: string
  level: string
  price: number
  image: string
  category: string
  description: string
  tags: string[]
}

interface CourseCardProps {
  course: Course
  index: number
  viewMode?: "grid" | "list"
}

const levelColors = {
  Beginner: "bg-emerald-500",
  Intermediate: "bg-amber-500",
  Advanced: "bg-rose-500",
}

const categoryGradients = {
  "Web Development": "from-blue-500 to-cyan-500",
  "Data Science": "from-purple-500 to-pink-500",
  Design: "from-pink-500 to-rose-500",
  "Mobile Development": "from-green-500 to-emerald-500",
  Marketing: "from-orange-500 to-red-500",
  Cybersecurity: "from-red-500 to-pink-500",
  "Cloud Computing": "from-indigo-500 to-purple-500",
}

export function CourseCard({ course, index, viewMode = "grid" }: CourseCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  if (viewMode === "list") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        whileHover={{ scale: 1.01 }}
        className="group"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-500">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
              <div
                className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${imageLoaded ? "hidden" : ""}`}
              />
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${categoryGradients[course.category as keyof typeof categoryGradients] || "from-blue-500 to-purple-500"} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Level badge */}
              <div className="absolute top-4 left-4">
                <Badge
                  className={`${levelColors[course.level as keyof typeof levelColors]} text-white border-0 font-semibold`}
                >
                  {course.level}
                </Badge>
              </div>

              {/* Price badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ${course.price}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Badge
                    variant="outline"
                    className="mb-3 text-xs font-semibold border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                  >
                    {course.category}
                  </Badge>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{course.instructor.charAt(0)}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{course.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"}`}
                    />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags.slice(0, 4).map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats and CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 h-full flex flex-col">
        {/* Course Image - Square aspect ratio */}
        <div className="relative aspect-square overflow-hidden">
          <div
            className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${imageLoaded ? "hidden" : ""}`}
          />
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${categoryGradients[course.category as keyof typeof categoryGradients] || "from-blue-500 to-purple-500"} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
          />

          {/* Floating action button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Button className="bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 rounded-full p-4 shadow-2xl backdrop-blur-sm">
              <Play className="w-6 h-6" />
            </Button>
          </motion.div>

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <Badge
              className={`${levelColors[course.level as keyof typeof levelColors]} text-white border-0 font-semibold shadow-lg`}
            >
              {course.level}
            </Badge>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLiked(!isLiked)
                }}
                className="bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400"}`}
                />
              </Button>
            </div>
          </div>

          {/* Bottom price badge */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white px-4 py-2 rounded-full font-bold shadow-lg">
              <span className="text-lg">${course.price}</span>
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current" />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category */}
          <Badge
            variant="outline"
            className="self-start mb-3 text-xs font-semibold border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
          >
            {course.category}
          </Badge>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{course.instructor.charAt(0)}</span>
            </div>
            <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{course.instructor}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {course.tags.slice(0, 3).map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge
                variant="secondary"
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                +{course.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>Popular</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <BookOpen className="w-4 h-4 mr-2" />
            Enroll Now
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
