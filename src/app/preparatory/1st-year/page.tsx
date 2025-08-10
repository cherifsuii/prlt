'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function FirstYearPage() {
  // Placeholder data - will be replaced with actual content from text files
  const semester1Data = [
    {
      subject: 'Algebre 1',
      instructor: 'Mr. Berroudji',
      materials: [
        { type: 'Cours', title: 'Cours Algebre 1 Complete', link: '#' },
        { type: 'TD', title: 'TD Algebre 1 S1', link: '#' },
        { type: 'TP', title: 'TP Algebre 1', link: '#' },
      ]
    },
    {
      subject: 'Analyse 1',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Analyse 1', link: '#' },
        { type: 'TD', title: 'TD Analyse 1 S1', link: '#' },
        { type: 'Examens', title: 'Examens Analyse 1', link: '#' },
      ]
    },
    {
      subject: 'Physique 1',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Physique 1', link: '#' },
        { type: 'TD', title: 'TD Physique 1 S1', link: '#' },
        { type: 'TP', title: 'TP Physique 1', link: '#' },
      ]
    }
  ]

  const semester2Data = [
    {
      subject: 'Algebre 2',
      instructor: 'Mr. Berroudji',
      materials: [
        { type: 'Cours', title: 'Cours Algebre 2 Complete', link: '#' },
        { type: 'TD', title: 'TD Algebre 2 S2', link: '#' },
        { type: 'Examens', title: 'Examens Algebre 2', link: '#' },
      ]
    },
    {
      subject: 'Analyse 2',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Analyse 2', link: '#' },
        { type: 'TD', title: 'TD Analyse 2 S2', link: '#' },
        { type: 'Examens', title: 'Examens Analyse 2', link: '#' },
      ]
    },
    {
      subject: 'Physique 2',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Physique 2', link: '#' },
        { type: 'TD', title: 'TD Physique 2 S2', link: '#' },
        { type: 'TP', title: 'TP Physique 2', link: '#' },
      ]
    }
  ]

  const renderSubjectCard = (subject: any) => (
    <Card key={subject.subject} className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{subject.subject}</CardTitle>
          {subject.instructor === 'Mr. Berroudji' && (
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
              Mr. Berroudji
            </span>
          )}
        </div>
        <CardDescription>
          Instructor: {subject.instructor}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-900">Available Materials:</h4>
          <div className="space-y-2">
            {subject.materials.map((material: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <div>
                    <span className="text-sm font-medium text-gray-900">{material.type}</span>
                    <p className="text-xs text-gray-600">{material.title}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={material.link} target="_blank" rel="noopener noreferrer">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/preparatory" className="hover:text-orange-600 transition-colors">
          Preparatory Cycle
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">1st Year</span>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          1st Year Preparatory
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access course materials for first-year preparatory students. Choose your semester to view available subjects and resources.
        </p>
      </div>

      {/* Semester Tabs */}
      <Tabs defaultValue="semester1" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="semester1" className="text-lg py-3">
            Semester 1
          </TabsTrigger>
          <TabsTrigger value="semester2" className="text-lg py-3">
            Semester 2
          </TabsTrigger>
        </TabsList>

        <TabsContent value="semester1" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Semester 1</h2>
            <p className="text-gray-600">Foundation courses for the first semester of 1st year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semester1Data.map(renderSubjectCard)}
          </div>
        </TabsContent>

        <TabsContent value="semester2" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Semester 2</h2>
            <p className="text-gray-600">Advanced courses for the second semester of 1st year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semester2Data.map(renderSubjectCard)}
          </div>
        </TabsContent>
      </Tabs>

      {/* Information Section */}
      <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1st Year Overview</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The first year of the preparatory cycle focuses on building strong foundations in mathematics, physics, and basic engineering sciences. Students are introduced to fundamental concepts that will be essential for their future engineering studies.
          </p>
          <p>
            Each semester includes a mix of theoretical courses (Cours), practical exercises (TD), and laboratory work (TP), providing a comprehensive learning experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h3 className="font-semibold text-gray-900">Cours</h3>
              <p className="text-sm text-gray-600">Theoretical foundations and concepts</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold text-gray-900">TD</h3>
              <p className="text-sm text-gray-600">Directed exercises and practice</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold text-gray-900">TP</h3>
              <p className="text-sm text-gray-600">Practical laboratory work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <Link href="/preparatory">
          <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Preparatory Cycle
          </Button>
        </Link>
        <Link href="/preparatory/2nd-year">
          <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Go to 2nd Year
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  )
}