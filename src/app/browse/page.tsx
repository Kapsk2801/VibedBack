'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, MapPin, GraduationCap, Star, TrendingUp, Award, Building2, Users, Globe } from 'lucide-react'
import { CollegeCard } from '@/components/CollegeCard'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import { colleges, type College } from '@/data/colleges'

// Convert college data format for compatibility
const convertCollegeFormat = (college: College) => ({
  id: college.id,
  name: college.name,
  city: college.city,
  state: college.state,
  stream: college.streams[0],
  website: college.website,
  avg_rating: college.avg_rating,
  total_reviews: college.total_reviews
})

export default function BrowsePage() {
  const [allColleges] = useState(colleges.map(convertCollegeFormat))
  const [filteredColleges, setFilteredColleges] = useState(colleges.map(convertCollegeFormat))
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedStream, setSelectedStream] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [showFilters, setShowFilters] = useState(false)

  const states = Array.from(new Set(colleges.map(c => c.state))).sort()
  const streams = Array.from(new Set(colleges.flatMap(c => c.streams))).sort()

  useEffect(() => {
    let filtered = allColleges

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.stream.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // State filter
    if (selectedState) {
      filtered = filtered.filter(college => college.state === selectedState)
    }

    // Stream filter
    if (selectedStream) {
      filtered = filtered.filter(college => college.stream === selectedStream)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.avg_rating - a.avg_rating
        case 'reviews':
          return b.total_reviews - a.total_reviews
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    setFilteredColleges(filtered)
  }, [allColleges, searchQuery, selectedState, selectedStream, sortBy])

  const stats = {
    total: allColleges.length,
    topRated: allColleges.filter(c => c.avg_rating >= 4.5).length,
    verified: allColleges.filter(c => c.total_reviews >= 10).length,
    states: states.length
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Filters and Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Filters & Sorting</h2>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
            </div>

            {showFilters && (
              <Card className="p-6 mb-6">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* State Filter */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        State
                      </label>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        title="Select state to filter colleges"
                      >
                        <option value="">All States</option>
                        {states.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    {/* Stream Filter */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Stream
                      </label>
                      <select
                        value={selectedStream}
                        onChange={(e) => setSelectedStream(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        title="Select stream to filter colleges"
                      >
                        <option value="">All Streams</option>
                        {streams.map(stream => (
                          <option key={stream} value={stream}>{stream}</option>
                        ))}
                      </select>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Sort By
                      </label>
                                              <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          title="Select sorting option for colleges"
                        >
                        <option value="rating">Highest Rated</option>
                        <option value="reviews">Most Reviews</option>
                        <option value="name">Alphabetical</option>
                      </select>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(selectedState || selectedStream) && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setSelectedState('')
                          setSelectedStream('')
                        }}
                        className="text-red-600 hover:text-red-700"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Results */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {filteredColleges.length} College{filteredColleges.length !== 1 ? 's' : ''} Found
              </h3>
              {filteredColleges.length > 0 && (
                <div className="text-sm text-gray-600">
                  Showing {Math.min(filteredColleges.length, 12)} of {filteredColleges.length}
                </div>
              )}
            </div>

            {filteredColleges.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredColleges.slice(0, 12).map((college, index) => (
                  <div
                    key={college.id}
                    className="transition-all duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CollegeCard
                      college={college}
                      onViewDetails={() => {}}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <CardContent>
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No colleges found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedState('')
                      setSelectedStream('')
                    }}
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Load More */}
          {filteredColleges.length > 12 && (
            <div className="text-center">
              <Button variant="gradient" size="lg">
                Load More Colleges
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}