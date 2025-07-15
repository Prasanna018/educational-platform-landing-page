"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Users,
  MessageCircle,
  BookOpen,
  Award,
  Calendar,
  Search,
  Filter,
  Plus,
  Eye,
  ThumbsUp,
  Reply,
  MoreHorizontal,
  UserPlus,
  Globe,
  Code,
  Palette,
  Smartphone,
  BarChart3,
  Shield,
  Cloud,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const communityData = {
  stats: [
    { label: "Active Members", value: "25,847", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Discussions", value: "12,456", icon: MessageCircle, color: "from-purple-500 to-pink-500" },
    { label: "Study Groups", value: "1,234", icon: BookOpen, color: "from-green-500 to-emerald-500" },
    { label: "Events This Month", value: "89", icon: Calendar, color: "from-orange-500 to-red-500" },
  ],

  featuredMembers: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=80&h=80&fit=crop&crop=face",
      badge: "Top Contributor",
      points: 2450,
      courses: 12,
      followers: 1200,
      expertise: ["React", "Node.js", "Python"],
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Data Scientist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      badge: "Mentor",
      points: 3200,
      courses: 18,
      followers: 890,
      expertise: ["Machine Learning", "Python", "SQL"],
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      badge: "Design Expert",
      points: 1890,
      courses: 8,
      followers: 650,
      expertise: ["Figma", "User Research", "Prototyping"],
    },
  ],

  discussions: [
    {
      id: 1,
      title: "Best practices for React state management in 2024",
      author: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      category: "Web Development",
      replies: 23,
      likes: 45,
      views: 1200,
      timeAgo: "2 hours ago",
      tags: ["React", "State Management", "Redux"],
      isHot: true,
    },
    {
      id: 2,
      title: "Machine Learning career transition - Need advice",
      author: "Jessica Park",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      category: "Data Science",
      replies: 18,
      likes: 32,
      views: 890,
      timeAgo: "4 hours ago",
      tags: ["Career", "Machine Learning", "Advice"],
      isHot: false,
    },
    {
      id: 3,
      title: "UI/UX Design System - Component Library Best Practices",
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      category: "Design",
      replies: 15,
      likes: 28,
      views: 650,
      timeAgo: "6 hours ago",
      tags: ["Design System", "Components", "UI/UX"],
      isHot: false,
    },
    {
      id: 4,
      title: "Mobile app performance optimization techniques",
      author: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
      category: "Mobile Development",
      replies: 12,
      likes: 19,
      views: 420,
      timeAgo: "8 hours ago",
      tags: ["Mobile", "Performance", "Optimization"],
      isHot: false,
    },
  ],

  studyGroups: [
    {
      id: 1,
      name: "React Mastery Circle",
      description: "Weekly sessions diving deep into React patterns and best practices",
      members: 45,
      category: "Web Development",
      nextSession: "Tomorrow 7:00 PM",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&crop=center",
      level: "Intermediate",
      isJoined: false,
    },
    {
      id: 2,
      name: "Data Science Study Group",
      description: "Collaborative learning for machine learning and data analysis",
      members: 32,
      category: "Data Science",
      nextSession: "Friday 6:00 PM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
      level: "Beginner",
      isJoined: true,
    },
    {
      id: 3,
      name: "Design Thinking Workshop",
      description: "Monthly design challenges and portfolio reviews",
      members: 28,
      category: "Design",
      nextSession: "Next Monday 5:30 PM",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop&crop=center",
      level: "All Levels",
      isJoined: false,
    },
  ],

  upcomingEvents: [
    {
      id: 1,
      title: "Web Development Bootcamp Graduation",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      type: "Virtual",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "AI & Machine Learning Summit",
      date: "Dec 20, 2024",
      time: "10:00 AM EST",
      type: "Hybrid",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Design Portfolio Review Session",
      date: "Dec 22, 2024",
      time: "4:00 PM EST",
      type: "Virtual",
      attendees: 75,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=200&fit=crop&crop=center",
    },
  ],
}

const categories = [
  { name: "All", icon: Globe, count: 1250 },
  { name: "Web Development", icon: Code, count: 450 },
  { name: "Data Science", icon: BarChart3, count: 320 },
  { name: "Design", icon: Palette, count: 280 },
  { name: "Mobile Development", icon: Smartphone, count: 200 },
  { name: "Cybersecurity", icon: Shield, count: 150 },
  { name: "Cloud Computing", icon: Cloud, count: 180 },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discussions")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Learning Community
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect & Learn
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners, share knowledge, participate in discussions, and grow together in our vibrant
            community.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {communityData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
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
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Featured Members */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {communityData.featuredMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                  >
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{member.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {member.badge}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{member.role}</p>
                      <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>{member.points} pts</span>
                        <span>{member.followers} followers</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-1">
                      <UserPlus className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-200 ${
                      selectedCategory === category.name
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant={selectedCategory === category.name ? "secondary" : "outline"} className="text-xs">
                      {category.count}
                    </Badge>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Search and Tabs */}
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-6">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search discussions, groups, events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800">
                    <TabsTrigger value="discussions" className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Discussions</span>
                    </TabsTrigger>
                    <TabsTrigger value="groups" className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Study Groups</span>
                    </TabsTrigger>
                    <TabsTrigger value="events" className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Events</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="discussions" className="mt-6">
                    <div className="space-y-4">
                      {communityData.discussions.map((discussion, index) => (
                        <motion.div
                          key={discussion.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ scale: 1.01 }}
                          className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer border border-gray-100 dark:border-gray-800"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={discussion.avatar || "/placeholder.svg"}
                              alt={discussion.author}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                  {discussion.title}
                                </h3>
                                {discussion.isHot && <Badge className="bg-red-500 text-white text-xs">Hot</Badge>}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <span>by {discussion.author}</span>
                                <Badge variant="outline" className="text-xs">
                                  {discussion.category}
                                </Badge>
                                <span>{discussion.timeAgo}</span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {discussion.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center space-x-1">
                                    <Reply className="w-4 h-4" />
                                    <span>{discussion.replies}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <ThumbsUp className="w-4 h-4" />
                                    <span>{discussion.likes}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{discussion.views}</span>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="groups" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {communityData.studyGroups.map((group, index) => (
                        <motion.div
                          key={group.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                          <img
                            src={group.image || "/placeholder.svg"}
                            alt={group.name}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-xs">
                                {group.category}
                              </Badge>
                              <Badge
                                className={`text-xs ${
                                  group.level === "Beginner"
                                    ? "bg-green-500"
                                    : group.level === "Intermediate"
                                      ? "bg-yellow-500"
                                      : group.level === "Advanced"
                                        ? "bg-red-500"
                                        : "bg-blue-500"
                                } text-white`}
                              >
                                {group.level}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{group.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                              {group.description}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{group.members} members</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{group.nextSession}</span>
                              </div>
                            </div>
                            <Button
                              className={`w-full ${
                                group.isJoined
                                  ? "bg-green-500 hover:bg-green-600"
                                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                              } text-white`}
                            >
                              {group.isJoined ? "Joined" : "Join Group"}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="events" className="mt-6">
                    <div className="space-y-4">
                      {communityData.upcomingEvents.map((event, index) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ scale: 1.01 }}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer border border-gray-100 dark:border-gray-800"
                        >
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-20 h-20 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{event.date}</span>
                              </div>
                              <span>{event.time}</span>
                              <Badge variant="outline" className="text-xs">
                                {event.type}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                          <Button variant="outline">Join Event</Button>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
