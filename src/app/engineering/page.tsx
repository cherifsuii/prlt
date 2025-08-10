'use client'

import Link from 'next/link'
import { ArrowLeft, Building, Layers, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function EngineeringCyclePage() {
  const departmentCards = [
    {
      title: 'DIB - Basic Infrastructures',
      description: 'Specialized courses in infrastructure design, construction, and management. Focus on roads, bridges, and public works.',
      icon: Building,
      href: '/engineering/dib',
      color: 'bg-blue-100 hover:bg-blue-200',
      years: ['1st Year', '2nd Year', '3rd Year'],
      comingSoon: false,
    },
    {
      title: 'DMS - Materials & Structures',
      description: 'Advanced studies in materials science, structural analysis, and construction technologies. Focus on building materials and structural engineering.',
      icon: Layers,
      href: '/engineering/dms',
      color: 'bg-green-100 hover:bg-green-200',
      years: ['1st Year', '2nd Year', '3rd Year'],
      comingSoon: false,
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
        <span className="text-foreground font-medium">Engineering Cycle</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Engineering Cycle
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your specialized department to access advanced engineering courses and materials. Select between DIB (Basic Infrastructures) and DMS (Materials & Structures).
        </p>
      </div>

      {/* Department Selection Alert */}
      <Alert className="max-w-4xl mx-auto mb-8">
        <Info className="h-4 w-4" />
        <AlertDescription>
          Please select your department below. Each department offers specialized courses tailored to your engineering focus.
          <strong> Note:</strong> Some courses may be marked as "COMING SOON" and will be available in future updates.
        </AlertDescription>
      </Alert>

      {/* Department Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {departmentCards.map((dept) => {
          const Icon = dept.icon
          return (
            <Link key={dept.href} href={dept.href}>
              <Card className={`h-full transition-all duration-300 hover:shadow-lg cursor-pointer ${dept.color} border-0`}>
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <Icon className="h-10 w-10 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                    {dept.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 px-4">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Available Years:</h4>
                    <div className="flex justify-center space-x-2">
                      {dept.years.map((year) => (
                        <span
                          key={year}
                          className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700"
                        >
                          {year}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Explore {dept.title.split(' - ')[0]}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Information Section */}
      <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Engineering Cycle</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The Engineering Cycle at ENSTP represents the specialized phase of engineering education where students focus on their chosen field of expertise. After completing the Preparatory Cycle, students enter this three-year program to develop advanced technical skills.
          </p>
          <p>
            The cycle is divided into two main departments, each offering specialized curricula designed to meet the demands of modern engineering challenges and industry requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Building className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">DIB - Basic Infrastructures</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Road and Highway Engineering</li>
                <li>• Bridge Design and Construction</li>
                <li>• Public Works Management</li>
                <li>• Urban Infrastructure Planning</li>
                <li>• Transportation Systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Layers className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-gray-900">DMS - Materials & Structures</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Materials Science and Engineering</li>
                <li>• Structural Analysis and Design</li>
                <li>• Building Technology</li>
                <li>• Construction Materials</li>
                <li>• Structural Rehabilitation</li>
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