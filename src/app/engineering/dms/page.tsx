'use client'

import Link from 'next/link'
import { ArrowLeft, Layers, FileText, Download, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export default function DMSPage() {
  // Placeholder data - will be replaced with actual content from text files
  const year1Semester1Data = [
    {
      subject: 'Matériaux 1',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Matériaux 1 Complete', link: '#' },
        { type: 'TD', title: 'TD Matériaux 1 S1', link: '#' },
        { type: 'TP', title: 'TP Matériaux 1', link: '#' },
      ]
    },
    {
      subject: 'Structures 1',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Structures 1', link: '#' },
        { type: 'TD', title: 'TD Structures 1 S1', link: '#' },
        { type: 'Examens', title: 'Examens Structures 1', link: '#' },
      ]
    },
    {
      subject: 'Béton',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Béton', link: '#' },
        { type: 'TD', title: 'TD Béton S1', link: '#' },
        { type: 'TP', title: 'TP Béton', link: '#' },
      ]
    }
  ]

  const year1Semester2Data = [
    {
      subject: 'Matériaux 2',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Matériaux 2', link: '#' },
        { type: 'TD', title: 'TD Matériaux 2 S2', link: '#' },
        { type: 'Examens', title: 'Examens Matériaux 2', link: '#' },
      ]
    },
    {
      subject: 'Structures 2',
      instructor: 'Staff',
      materials: [
        { type: 'Cours', title: 'Cours Structures 2', link: '#' },
        { type: 'TD', title: 'TD Structures 2 S2', link: '#' },
        { type: 'TP', title: 'TP Structures 2', link: '#' },
      ]
    },
    {
      subject: 'Construction Métallique',
      instructor: 'Staff',
      status: 'COMING SOON',
      materials: []
    }
  ]

  const renderSubjectCard = (subject: any) => (
    <Card key={subject.subject} className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{subject.subject}</CardTitle>
          {subject.status === 'COMING SOON' ? (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              <Clock className="h-3 w-3 mr-1" />
              COMING SOON
            </Badge>
          ) : (
            <span className="text-sm text-gray-500">
              Instructor: {subject.instructor}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {subject.status === 'COMING SOON' ? (
          <div className="text-center py-8">
            <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">This course content will be available soon.</p>
          </div>
        ) : (
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
        )}
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
        <Link href="/engineering" className="hover:text-orange-600 transition-colors">
          Engineering Cycle
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">DMS - Materials & Structures</span>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          DMS - Materials & Structures
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced studies in materials science, structural analysis, and construction technologies. Access resources for building materials and structural engineering.
        </p>
      </div>

      {/* Year Tabs */}
      <Tabs defaultValue="year1" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="year1" className="text-lg py-3">
            1st Year
          </TabsTrigger>
          <TabsTrigger value="year2" className="text-lg py-3" disabled>
            2nd Year
          </TabsTrigger>
          <TabsTrigger value="year3" className="text-lg py-3" disabled>
            3rd Year
          </TabsTrigger>
        </TabsList>

        <TabsContent value="year1" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">1st Year DMS</h2>
            <p className="text-gray-600">Foundation courses for first-year DMS students</p>
          </div>

          {/* Semester Tabs */}
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="semester1">Semester 1</TabsTrigger>
              <TabsTrigger value="semester2">Semester 2</TabsTrigger>
            </TabsList>

            <TabsContent value="semester1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {year1Semester1Data.map(renderSubjectCard)}
              </div>
            </TabsContent>

            <TabsContent value="semester2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {year1Semester2Data.map(renderSubjectCard)}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="year2" className="space-y-6">
          <div className="text-center py-12">
            <Clock className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">2nd Year Content</h2>
            <p className="text-gray-600">2nd year materials will be available soon.</p>
          </div>
        </TabsContent>

        <TabsContent value="year3" className="space-y-6">
          <div className="text-center py-12">
            <Clock className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">3rd Year Content</h2>
            <p className="text-gray-600">3rd year materials will be available soon.</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Information Section */}
      <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About DMS Department</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The Department of Materials & Structures (DMS) specializes in the science of building materials and structural engineering. Students in this department gain expertise in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-green-600" />
                Core Focus Areas
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Materials Science and Engineering</li>
                <li>• Structural Analysis and Design</li>
                <li>• Concrete Technology</li>
                <li>• Steel Construction</li>
                <li>• Building Materials Testing</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Career Opportunities
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Structural Engineer</li>
                <li>• Materials Engineer</li>
                <li>• Construction Supervisor</li>
                <li>• Quality Control Manager</li>
                <li>• Research & Development</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 mt-6">
            <h3 className="font-semibold text-green-900 mb-2">Note:</h3>
            <p className="text-green-800 text-sm">
              Some courses may be marked as "COMING SOON" as we continue to develop and expand our content library.
              These courses will be made available as soon as the materials are ready.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <Link href="/engineering">
          <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Engineering Cycle
          </Button>
        </Link>
        <Link href="/engineering/dib">
          <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Go to DIB Department
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  )
}