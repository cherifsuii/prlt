'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PreparatoryCyclePage() {
  const yearCards = [
    {
      title: '1st Year',
      description: 'Access course materials for first-year preparatory students including Semester 1 and Semester 2',
      icon: BookOpen,
      href: '/preparatory/1st-year',
      color: 'bg-orange-100 hover:bg-orange-200',
      semesters: ['Semester 1', 'Semester 2'],
    },
    {
      title: '2nd Year',
      description: 'Continue your academic journey with second-year preparatory courses and materials',
      icon: Users,
      href: '/preparatory/2nd-year',
      color: 'bg-blue-100 hover:bg-blue-200',
      semesters: ['Semester 1', 'Semester 2'],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Preparatory Cycle</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Preparatory Cycle
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access comprehensive course materials for preparatory students. Build your foundation with structured learning resources for both first and second-year students.
        </p>
      </div>

      {/* Year Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {yearCards.map((year) => {
          const Icon = year.icon
          return (
            <Link key={year.href} href={year.href}>
              <Card className={`h-full transition-all duration-300 hover:shadow-lg cursor-pointer ${year.color} border-0`}>
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <Icon className="h-10 w-10 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                    {year.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 px-4">
                    {year.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Available Semesters:</h4>
                    <div className="flex justify-center space-x-2">
                      {year.semesters.map((semester) => (
                        <span
                          key={semester}
                          className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700"
                        >
                          {semester}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Explore {year.title} Materials
                  </Button>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Information Section */}
      <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Preparatory Cycle</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The Preparatory Cycle at ENSTP provides students with a strong foundation in fundamental sciences and engineering principles. This two-year program is designed to prepare students for the specialized Engineering Cycle.
          </p>
          <p>
            Each year consists of two semesters, covering essential subjects such as Mathematics, Physics, Chemistry, and Engineering Sciences. The curriculum is structured to build progressively, ensuring students develop the necessary analytical and problem-solving skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">1st Year Focus</h3>
              <ul className="space-y-1 text-sm">
                <li>• Fundamental Mathematics</li>
                <li>• General Physics</li>
                <li>• Chemistry Basics</li>
                <li>• Introduction to Engineering</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">2nd Year Focus</h3>
              <ul className="space-y-1 text-sm">
                <li>• Advanced Mathematics</li>
                <li>• Applied Physics</li>
                <li>• Engineering Mechanics</li>
                <li>• Specialized Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-12">
        <Link href="/">
          <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}