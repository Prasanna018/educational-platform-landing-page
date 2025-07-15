"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { EnhancedSearch } from "@/components/enhanced-search"

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 12500,
    duration: "40 hours",
    level: "Beginner",
    price: 89,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&crop=center",
    category: "Web Development",
    description:
      "Master modern web development with HTML5, CSS3, JavaScript ES6+, React, Node.js, and MongoDB. Build real-world projects and deploy them to production.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Data Science with Python",
    instructor: "Michael Chen",
    rating: 4.8,
    students: 8900,
    duration: "35 hours",
    level: "Intermediate",
    price: 129,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center",
    category: "Data Science",
    description:
      "Learn data analysis, visualization, and machine learning using Python, Pandas, NumPy, Matplotlib, and Scikit-learn.",
    tags: ["Python", "Pandas", "Machine Learning", "Data Analysis"],
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emily Rodriguez",
    rating: 4.9,
    students: 6700,
    duration: "25 hours",
    level: "Beginner",
    price: 79,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center",
    category: "Design",
    description: "Create stunning user interfaces and experiences using Figma, Adobe XD, and modern design principles.",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    instructor: "David Kim",
    rating: 4.7,
    students: 5400,
    duration: "45 hours",
    level: "Advanced",
    price: 149,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center",
    category: "Mobile Development",
    description: "Build cross-platform mobile applications for iOS and Android using React Native and Expo.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    instructor: "Lisa Wang",
    rating: 4.8,
    students: 9200,
    duration: "20 hours",
    level: "Beginner",
    price: 69,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
    category: "Marketing",
    description:
      "Master SEO, social media marketing, content strategy, and paid advertising to grow your business online.",
    tags: ["SEO", "Social Media", "Content Marketing", "PPC"],
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    instructor: "Robert Taylor",
    rating: 4.6,
    students: 4100,
    duration: "30 hours",
    level: "Intermediate",
    price: 99,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop&crop=center",
    category: "Cybersecurity",
    description: "Learn to protect systems and data from cyber threats with hands-on security practices and tools.",
    tags: ["Network Security", "Ethical Hacking", "Risk Assessment"],
  },
  {
    id: 7,
    title: "Machine Learning with TensorFlow",
    instructor: "Dr. Alex Chen",
    rating: 4.9,
    students: 7800,
    duration: "50 hours",
    level: "Advanced",
    price: 179,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop&crop=center",
    category: "Data Science",
    description: "Deep dive into machine learning and neural networks using TensorFlow and Keras.",
    tags: ["TensorFlow", "Neural Networks", "Deep Learning", "AI"],
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    instructor: "Jennifer Park",
    rating: 4.7,
    students: 6300,
    duration: "38 hours",
    level: "Intermediate",
    price: 139,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&crop=center",
    category: "Cloud Computing",
    description: "Master Amazon Web Services including EC2, S3, Lambda, and more cloud technologies.",
    tags: ["AWS", "EC2", "S3", "Lambda", "DevOps"],
  },
]

const categories = [
  "All",
  "Web Development",
  "Data Science",
  "Design",
  "Mobile Development",
  "Marketing",
  "Cybersecurity",
  "Cloud Computing",
]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [filteredCourses, setFilteredCourses] = useState(courses)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    let filtered = courses

    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((course) => course.category === selectedCategory)
    }

    if (selectedLevel !== "All") {
      filtered = filtered.filter((course) => course.level === selectedLevel)
    }

    setFilteredCourses(filtered)
  }, [searchTerm, selectedCategory, selectedLevel])

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" />
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-gray-200/50 dark:border-gray-700/50"
          >
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore Our Course Library
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Discover Amazing
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with our comprehensive collection of courses designed by industry experts and trusted
            by thousands of learners worldwide.
          </p>
        </motion.div>

        {/* Enhanced Search Component */}
        <EnhancedSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          categories={categories}
          levels={levels}
        />

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? "s" : ""} Found
            </h2>
            {(searchTerm || selectedCategory !== "All" || selectedLevel !== "All") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <span>Filtered by:</span>
                {searchTerm && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg">
                    "{searchTerm}"
                  </span>
                )}
                {selectedCategory !== "All" && (
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg">
                    {selectedCategory}
                  </span>
                )}
                {selectedLevel !== "All" && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                    {selectedLevel}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl p-1 border border-gray-200/50 dark:border-gray-700/50">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-blue-500 text-white" : ""}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-blue-500 text-white" : ""}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Courses Grid/List */}
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div
              key={viewMode}
              layout
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "space-y-6"
              }`}
            >
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} viewMode={viewMode} />
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 max-w-md mx-auto">
                <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">No courses found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Try adjusting your search criteria or explore our featured courses
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedLevel("All")
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl"
                >
                  Clear All Filters
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
