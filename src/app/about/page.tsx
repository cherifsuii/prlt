'use client'

import Link from 'next/link'
import { ArrowLeft, GraduationCap, Building, Users, Award, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  // Placeholder data - will be replaced with actual content from infoabtschool.txt and info2.txt
  const schoolInfo = {
    name: 'École Nationale Supérieure des Travaux Publics (ENSTP)',
    founded: '1954',
    location: 'Algiers, Algeria',
    mission: 'To provide high-quality engineering education and research in public works and infrastructure development',
    vision: 'To be a leading institution in engineering education and research in Africa and the Mediterranean region'
  }

  const keyFacts = [
    {
      icon: Calendar,
      title: 'Founded',
      value: '1954',
      description: 'Over 70 years of excellence in engineering education'
    },
    {
      icon: Users,
      title: 'Students',
      value: '3000+',
      description: 'Diverse student body from across the region'
    },
    {
      icon: Building,
      title: 'Campus',
      value: 'Modern',
      description: 'State-of-the-art facilities and laboratories'
    },
    {
      icon: Award,
      title: 'Reputation',
      value: 'Excellent',
      description: 'Recognized nationally and internationally'
    }
  ]

  const departments = [
    {
      name: 'Basic Infrastructures (DIB)',
      description: 'Focus on road engineering, bridge design, and public works management',
      icon: Building
    },
    {
      name: 'Materials & Structures (DMS)',
      description: 'Specialization in materials science and structural engineering',
      icon: GraduationCap
    }
  ]

  const history = [
    {
      year: '1954',
      event: 'Foundation of ENSTP as a national institution for public works education'
    },
    {
      year: '1970s',
      event: 'Expansion of programs and establishment of specialized departments'
    },
    {
      year: '1990s',
      event: 'Modernization of curriculum and introduction of new technologies'
    },
    {
      year: '2000s',
      event: 'International partnerships and research collaborations'
    },
    {
      year: 'Present',
      event: 'Leading institution in engineering education with national recognition'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">About ENSTP</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About ENSTP
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about the history, mission, and achievements of the École Nationale Supérieure des Travaux Publics
        </p>
      </div>

      {/* School Overview */}
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{schoolInfo.name}</h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
            <MapPin className="h-4 w-4" />
            <span>{schoolInfo.location}</span>
            <span>•</span>
            <span>Founded {schoolInfo.founded}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">{schoolInfo.mission}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-700">{schoolInfo.vision}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFacts.map((fact, index) => {
            const Icon = fact.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{fact.value}</CardTitle>
                  <CardDescription className="text-lg font-medium">{fact.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{fact.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Academic Departments */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Academic Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {departments.map((dept, index) => {
            const Icon = dept.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>

      {/* History Timeline */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our History</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {history.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-orange-200 pl-6">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values and Commitment */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Values & Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-sm text-gray-600">Committed to providing the highest quality engineering education</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-sm text-gray-600">Embracing new technologies and teaching methodologies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
              <Building className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
            <p className="text-sm text-gray-600">Building ethical engineers for tomorrow's challenges</p>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center">
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