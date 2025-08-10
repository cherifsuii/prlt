'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SecondYearPage() {
  // Placeholder data - will be replaced with actual content from text files
  const semester1Data = [
    {
      subject: 'Algebre 3',
      instructor: 'Mr. Berroudji',
      materials: [
        { type: 'Cours', title: 'Cours Algebre 3 Complete', link: '#' },
        { type: 'TD', title: 'TD Algebre 3 S1', link: '#' },
        { type: 'Examens', title: 'Examens Algebre 3', link: '#' },
      ]
    },
    {
      subject: 'Analyse 3',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Analyse 3', link: '#' },
        { type: 'TD', title: 'TD Analyse 3 S1', link: '#' },
        { type: 'Examens', title: 'Examens Analyse 3', link: '#' },
      ]
    },
    {
      subject: 'Mecanique',
      instructor: 'Mr. Berroudji',
      materials: [
        { type: 'Cours', title: 'Cours Mecanique', link: '#' },
        { type: 'TD', title: 'TD Mecanique S1', link: '#' },
        { type: 'TP', title: 'TP Mecanique', link: '#' },
      ]
    },
    {
      subject: 'Informatique',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Informatique', link: '#' },
        { type: 'TD', title: 'TD Informatique S1', link: '#' },
        { type: 'TP', title: 'TP Informatique', link: '#' },
      ]
    }
  ]

  const semester2Data = [
    {
      subject: 'Algebre 4',
      instructor: 'Mr. Berroudji',
      materials: [
        { type: 'Cours', title: 'Cours Algebre 4 Complete', link: '#' },
        { type: 'TD', title: 'TD Algebre 4 S2', link: '#' },
        { type: 'Examens', title: 'Examens Algebre 4', link: '#' },
      ]
    },
    {
      subject: 'Analyse 4',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Analyse 4', link: '#' },
        { type: 'TD', title: 'TD Analyse 4 S2', link: '#' },
        { type: 'Examens', title: 'Examens Analyse 4', link: '#' },
      ]
    },
    {
      subject: 'Thermodynamique',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Thermodynamique', link: '#' },
        { type: 'TD', title: 'TD Thermodynamique S2', link: '#' },
        { type: 'Examens', title: 'Examens Thermodynamique', link: '#' },
      ]
    },
    {
      subject: 'Electrotechnique',
      instructor: 'Mr. Berroudji',
      materials: [
        { type: 'Cours', title: 'Cours Electrotechnique', link: '#' },
        { type: 'TD', title: 'TD Electrotechnique S2', link: '#' },
        { type: 'TP', title: 'TP Electrotechnique', link: '#' },
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
        <span className="text-foreground font-medium">2nd Year</span>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          2nd Year Preparatory
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced course materials for second-year preparatory students. Choose your semester to view specialized subjects and resources.
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
            <p className="text-gray-600">Advanced courses for the first semester of 2nd year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semester1Data.map(renderSubjectCard)}
          </div>
        </TabsContent>

        <TabsContent value="semester2" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Semester 2</h2>
            <p className="text-gray-600">Specialized courses for the second semester of 2nd year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semester2Data.map(renderSubjectCard)}
          </div>
        </TabsContent>
      </Tabs>

      {/* Information Section */}
      <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2nd Year Overview</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The second year of the preparatory cycle builds upon the foundations established in the first year, introducing more advanced mathematical concepts and specialized engineering subjects. This year prepares students for the transition to the Engineering Cycle.
          </p>
          <p>
            Students encounter more complex problem-solving scenarios and begin to apply theoretical knowledge to practical engineering situations. The curriculum includes specialized subjects like Mechanics, Thermodynamics, and Electrotechnique.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mt-6">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-orange-600 mr-2" />
              <h3 className="font-semibold text-orange-900">Note about Mr. Berroudji</h3>
            </div>
            <p className="text-orange-800 mt-2 text-sm">
              Courses marked with Mr. Berroudji's name are taught by this distinguished instructor. His courses are known for their comprehensive coverage and practical approach to engineering education.
            </p>
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
        <Link href="/preparatory/1st-year">
          <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go to 1st Year
          </Button>
        </Link>
      </div>
    </div>
  )
}