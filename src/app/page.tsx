'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, BookOpen, GraduationCap, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const navigationCards = [
    {
      title: 'Preparatory Cycle',
      description: 'Access course materials for 1st and 2nd year preparatory students',
      icon: BookOpen,
      href: '/preparatory',
      color: 'bg-orange-100 hover:bg-orange-200',
    },
    {
      title: 'Engineering Cycle',
      description: 'Explore specialized courses for DIB and DMS departments',
      icon: GraduationCap,
      href: '/engineering',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: 'Resources & Competitions',
      description: 'Find competition prep materials and additional resources',
      icon: Trophy,
      href: '/resources',
      color: 'bg-green-100 hover:bg-green-200',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Welcome to <span className="text-orange-600">ENSTP Study</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Your comprehensive academic resource platform for École Nationale Supérieure des Travaux Publics
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto w-full">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search for courses, materials, exams... (e.g., TD RDM S2)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 text-lg h-12 md:h-14 shadow-lg"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 md:h-12 px-6 bg-orange-600 hover:bg-orange-700"
                >
                  Search
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                Search through all course materials, exams, and resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Academic Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate through our comprehensive collection of study materials organized by academic cycles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {navigationCards.map((card) => {
              const Icon = card.icon
              return (
                <Link key={card.href} href={card.href}>
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg cursor-pointer ${card.color} border-0`}>
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                        <Icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base text-gray-700">
                        {card.description}
                      </CardDescription>
                      <Button
                        variant="outline"
                        className="mt-6 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                      >
                        Explore {card.title}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ENSTP Study?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <Search className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Powerful Search</h3>
              <p className="text-gray-600">
                Find exactly what you need with our intelligent search system that indexes all course materials
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Comprehensive Content</h3>
              <p className="text-gray-600">
                Access a complete collection of course materials, exams, and supplementary resources
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Academic Excellence</h3>
              <p className="text-gray-600">
                Curated content designed to support your academic journey at ENSTP
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}