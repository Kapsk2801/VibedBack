'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, MapPin, GraduationCap, Star } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'
import { CollegeCard } from '@/components/CollegeCard'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

// Mock data - replace with Supabase data
const mockColleges = [
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    stream: 'Engineering',
    website: 'https://iitd.ac.in',
    avg_rating: 4.5,
    total_reviews: 234
  },
  {
    id: '2',
    name: 'Indian Institute of Management Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    stream: 'Management',
    website: 'https://iima.ac.in',
    avg_rating: 4.7,
    total_reviews: 189
  },
  {
    id: '3',
    name: 'All India Institute of Medical Sciences',
    city: 'New Delhi',
    state: 'Delhi',
    stream: 'Medical',
    website: 'https://aiims.edu',
    avg_rating: 4.3,
    total_reviews: 156
  },
  {
    id: '4',
    name: 'National Institute of Technology Trichy',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    stream: 'Engineering',
    website: 'https://nitt.edu',
    avg_rating: 4.2,
    total_reviews: 298
  },
  {
    id: '5',
    name: 'Delhi University',
    city: 'New Delhi',
    state: 'Delhi',
    stream: 'Arts & Science',
    website: 'https://du.ac.in',
    avg_rating: 3.9,
    total_reviews: 445
  },
  {
    id: '6',
    name: 'Jawaharlal Nehru University',
    city: 'New Delhi',
    state: 'Delhi',
    stream: 'Arts & Science',
    website: 'https://jnu.ac.in',
    avg_rating: 4.1,
    total_reviews: 167
  }
]

const streams = ['All', 'Engineering', 'Medical', 'Management', 'Arts & Science', 'Law', 'Pharmacy']
const states = ['All', 'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'West Bengal']

interface College {
  id: string
  name: string
  city: string
  state: string
  stream: string
  website: string | null
  avg_rating: number
  total_reviews: number
}

export default function BrowsePage() {
  const [colleges, setColleges] = useState<College[]>(mockColleges)
  const [filteredColleges, setFilteredColleges] = useState<College[]>(mockColleges)
  const [selectedStream, setSelectedStream] = useState('All')
  const [selectedState, setSelectedState] = useState('All')
  const [sortBy, setSortBy] = useState('rating')

  const handleCollegeSelect = (college: College) => {
    window.location.href = `/college/${college.id}`
  }

  useEffect(() => {
    let filtered = colleges

    if (selectedStream !== 'All') {
      filtered = filtered.filter(college => college.stream === selectedStream)
    }

    if (selectedState !== 'All') {
      filtered = filtered.filter(college => college.state === selectedState)
    }

    // Sort colleges
    filtered.sort((a, b) => {
      if (sortBy === 'rating') {
        return b.avg_rating - a.avg_rating
      } else if (sortBy === 'reviews') {
        return b.total_reviews - a.total_reviews
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })

    setFilteredColleges(filtered)
  }, [colleges, selectedStream, selectedState, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <a href="/" className="text-xl font-bold text-gray-900">VibedBack</a>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/browse" className="text-blue-600 font-medium">Browse Colleges</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <Button size="sm">Submit Review</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Colleges</h1>
          <p className="text-gray-600">Discover and compare colleges across India</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar colleges={colleges} onCollegeSelect={handleCollegeSelect} />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5" />
                  <h2 className="font-semibold">Filters</h2>
                </div>

                <div className="space-y-6">
                  {/* Stream Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stream
                    </label>
                    <select
                      value={selectedStream}
                      onChange={(e) => setSelectedStream(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {streams.map(stream => (
                        <option key={stream} value={stream}>{stream}</option>
                      ))}
                    </select>
                  </div>

                  {/* State Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="reviews">Most Reviews</option>
                      <option value="name">Name (A-Z)</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredColleges.length} Colleges Found
                </h2>
                <p className="text-gray-600">
                  {selectedStream !== 'All' && `${selectedStream} • `}
                  {selectedState !== 'All' && `${selectedState} • `}
                  Sorted by {sortBy === 'rating' ? 'Rating' : sortBy === 'reviews' ? 'Reviews' : 'Name'}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredColleges.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  onViewDetails={handleCollegeSelect}
                />
              ))}
            </div>

            {filteredColleges.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}