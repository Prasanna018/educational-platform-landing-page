"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, X, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedLevel: string
  onLevelChange: (level: string) => void
  categories: string[]
  levels: string[]
}

const trendingSearches = [
  "React Development",
  "Machine Learning",
  "UI/UX Design",
  "Python Programming",
  "Digital Marketing",
]

const recentSearches = ["JavaScript Fundamentals", "Data Science", "Web Development"]

export function EnhancedSearch({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  categories,
  levels,
}: SearchProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-8"
    >
      <div className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
        {/* Main Search Bar */}
        <div className="relative mb-6">
          <motion.div className="search-container relative" whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Search
                className={`w-6 h-6 transition-colors duration-300 ${
                  isSearchFocused ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </div>

            <Input
              ref={searchRef}
              placeholder="Search for courses, instructors, or topics..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className={`pl-14 pr-16 h-16 text-lg bg-white/70 dark:bg-black/70 border-2 rounded-2xl transition-all duration-300 ${
                isSearchFocused
                  ? "border-blue-500 shadow-lg shadow-blue-500/25"
                  : "border-white/30 hover:border-white/50"
              }`}
            />

            {searchTerm && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => onSearchChange("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </motion.div>

          {/* Search Suggestions Dropdown */}
          <AnimatePresence>
            {isSearchFocused && !searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 glass backdrop-blur-md rounded-2xl border border-white/30 shadow-xl z-50"
              >
                <div className="p-6">
                  {/* Trending Searches */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Trending</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <motion.button
                          key={search}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => {
                            onSearchChange(search)
                            setIsSearchFocused(false)
                          }}
                          className="px-3 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-sm hover:from-orange-200 hover:to-red-200 dark:hover:from-orange-800/40 dark:hover:to-red-800/40 transition-all duration-200"
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Searches */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recent</span>
                    </div>
                    <div className="space-y-2">
                      {recentSearches.map((search, index) => (
                        <motion.button
                          key={search}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => {
                            onSearchChange(search)
                            setIsSearchFocused(false)
                          }}
                          className="flex items-center space-x-3 w-full p-2 hover:bg-white/50 dark:hover:bg-black/50 rounded-lg transition-colors"
                        >
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{search}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Filters</h3>
          <Button
            variant="ghost"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 hover:bg-white/50 dark:hover:bg-black/50"
          >
            <Filter className="w-4 h-4" />
            <span>{showFilters ? "Hide" : "Show"} Filters</span>
          </Button>
        </div>

        {/* Animated Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => onCategoryChange(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                          : "bg-white/70 dark:bg-black/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-black/90 border border-white/30"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Difficulty Level
                </label>
                <div className="flex gap-2">
                  {levels.map((level, index) => (
                    <motion.button
                      key={level}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => onLevelChange(level)}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedLevel === level
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                          : "bg-white/70 dark:bg-black/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-black/90 border border-white/30"
                      }`}
                    >
                      {level}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-end"
              >
                <Button
                  variant="outline"
                  onClick={() => {
                    onSearchChange("")
                    onCategoryChange("All")
                    onLevelChange("All")
                  }}
                  className="bg-white/70 dark:bg-black/70 border-white/30 hover:bg-white/90 dark:hover:bg-black/90"
                >
                  Clear All Filters
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
