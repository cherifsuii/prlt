'use client'

import Link from 'next/link'
import { ArrowLeft, Trophy, BookOpen, FileText, Download, ExternalLink, GraduationCap, Scale, School } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ResourcesPage() {
  // Placeholder data - will be replaced with actual content from text files
  const sections = [
    {
      title: 'Competition Preparation',
      description: 'Resources and materials for various engineering competitions and entrance exams',
      icon: Trophy,
      color: 'bg-yellow-100 hover:bg-yellow-200',
      items: [
        { title: 'Concours Preparation Guide', type: 'PDF', link: '#' },
        { title: 'Previous Years Exams', type: 'Archive', link: '#' },
        { title: 'Competition Tips & Strategies', type: 'Guide', link: '#' },
        { title: 'Sample Problems & Solutions', type: 'PDF', link: '#' },
      ]
    },
    {
      title: 'Advanced Formations',
      description: 'Specialized training materials and advanced courses for continuous learning',
      icon: GraduationCap,
      color: 'bg-blue-100 hover:bg-blue-200',
      items: [
        { title: 'Advanced Structural Analysis', type: 'Course', link: '#' },
        { title: 'Modern Construction Techniques', type: 'Workshop', link: '#' },
        { title: 'Project Management Certification', type: 'Program', link: '#' },
        { title: 'BIM & Digital Construction', type: 'Training', link: '#' },
      ]
    },
    {
      title: 'Technical & Legal Library',
      description: 'Comprehensive collection of technical standards, codes, and legal documents',
      icon: Scale,
      color: 'bg-green-100 hover:bg-green-200',
      items: [
        { title: 'Building Codes & Standards', type: 'PDF', link: '#' },
        { title: 'Construction Regulations', type: 'Legal', link: '#' },
        { title: 'Technical Specifications', type: 'Reference', link: '#' },
        { title: 'Safety Guidelines', type: 'Guide', link: '#' },
      ]
    },
    {
      title: 'Resources from Other Schools',
      description: 'Valuable materials and resources from partner engineering institutions',
      icon: School,
      color: 'bg-purple-100 hover:bg-purple-200',
      items: [
        { title: 'Partner University Resources', type: 'Archive', link: '#' },
        { title: 'International Engineering Standards', type: 'Reference', link: '#' },
        { title: 'Collaborative Research Papers', type: 'Academic', link: '#' },
        { title: 'Exchange Program Materials', type: 'Guide', link: '#' },
      ]
    }
  ]

  const renderSectionCard = (section: any) => {
    const Icon = section.icon
    return (
      <Card key={section.title} className={`h-full ${section.color} border-0`}>
        <CardHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Icon className="h-6 w-6 text-orange-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">{section.title}</CardTitle>
          </div>
          <CardDescription className="text-base text-gray-700">
            {section.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-gray-900">Available Resources:</h4>
            <div className="space-y-2">
              {section.items.map((item: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">{item.title}</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Resources & Competitions</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Resources & Competitions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access a comprehensive collection of supplementary resources, competition materials, and advanced learning content to enhance your engineering education.
        </p>
      </div>

      {/* Resource Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {sections.map(renderSectionCard)}
      </div>

      {/* Additional Information */}
      <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About These Resources</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            This section provides access to valuable supplementary materials that complement your core curriculum. These resources are carefully curated to support your academic journey and professional development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                Competition Preparation
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive materials to help you prepare for engineering competitions and entrance examinations with confidence.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                Advanced Formations
              </h3>
              <p className="text-sm text-gray-600">
                Specialized training programs and advanced courses to enhance your skills and stay current with industry trends.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Scale className="h-5 w-5 mr-2 text-green-600" />
                Technical & Legal Library
              </h3>
              <p className="text-sm text-gray-600">
                Essential reference materials including building codes, standards, and regulatory documents for professional practice.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <School className="h-5 w-5 mr-2 text-purple-600" />
                External Resources
              </h3>
              <p className="text-sm text-gray-600">
                Curated materials from partner institutions and international engineering organizations to broaden your perspective.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips Section */}
      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 max-w-4xl mx-auto mb-12">
        <h3 className="font-semibold text-orange-900 mb-3 flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          Tips for Using These Resources
        </h3>
        <div className="space-y-2 text-orange-800">
          <p className="text-sm">• Regularly check for updates and new materials added to each section</p>
          <p className="text-sm">• Use competition preparation materials well in advance of exam dates</p>
          <p className="text-sm">• Cross-reference technical standards with your course materials</p>
          <p className="text-sm">• Participate in advanced formations to enhance your professional profile</p>
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