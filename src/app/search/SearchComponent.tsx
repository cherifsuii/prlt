'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Search, FileText, Download, ExternalLink, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SearchResult {
  id: number
  title: string
  subject: string
  type: string
  semester: string
  year: string
  cycle: string
  department: string
  link: string
  description: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get('q') || ''
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)
      const data = await response.json()
      setSearchResults(data.results || [])
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const getBreadcrumb = (result: SearchResult) => {
    const parts = []
    if (result.cycle) parts.push(result.cycle)
    if (result.department) parts.push(result.department)
    if (result.year) parts.push(result.year)
    if (result.semester) parts.push(`Semester ${result.semester}`)
    if (result.subject) parts.push(result.subject)
    return parts.join(' > ')
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cours': return 'bg-blue-100 text-blue-800'
      case 'td': return 'bg-green-100 text-green-800'
      case 'tp': return 'bg-purple-100 text-purple-800'
      case 'examens': return 'bg-red-100 text-red-800'
      case 'guide': return 'bg-yellow-100 text-yellow-800'
      case 'reference': return 'bg-gray-100 text-gray-800'
      default: return 'bg-orange-100 text-orange-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Search Results</span>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for courses, materials, exams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg h-12 shadow-lg"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 px-6 bg-orange-600 hover:bg-orange-700"
          >
            Search
          </Button>
        </form>
      </div>

      {/* Search Results Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-600">
            {loading ? 'Searching...' : `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${query}"`}
          </p>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
          <p className="mt-4 text-gray-600">Searching through all resources...</p>
        </div>
      )}

      {/* No Results */}
      {!loading && searchResults.length === 0 && query && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No results found</h2>
          <p className="text-gray-600 mb-4">
            We couldn't find any resources matching "{query}". Try different keywords or check your spelling.
          </p>
          <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Search Tips:</h3>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• Try using specific course codes (e.g., "RDM", "MDF")</li>
              <li>• Include semester info (e.g., "S1", "S2")</li>
              <li>• Search by material type (e.g., "TD", "Cours", "Examens")</li>
              <li>• Use broader terms for more results</li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Results */}
      {!loading && searchResults.length > 0 && (
        <div className="space-y-6">
          {searchResults.map((result) => (
            <Card key={result.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl">{result.title}</CardTitle>
                      <Badge className={getTypeColor(result.type)}>
                        {result.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {result.description}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={result.link} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={result.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Location:</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      {getBreadcrumb(result)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.subject && (
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        Subject: {result.subject}
                      </span>
                    )}
                    {result.semester && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        {result.semester}
                      </span>
                    )}
                    {result.year && (
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                        {result.year}
                      </span>
                    )}
                    {result.department && (
                      <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                        {result.department}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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