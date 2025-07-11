'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, MapPin, GraduationCap, Star } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'
import { CollegeCard } from '@/components/CollegeCard'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { colleges, getAllStates, getAllStreams, type College } from '@/data/colleges'

// Convert college data format for compatibility
const convertCollegeFormat = (college: College) => ({
  id: college.id,
  name: college.name,
  city: college.city,
  state: college.state,
  stream: college.streams[0], // Use first stream for compatibility
  website: college.website,
  avg_rating: college.avg_rating,
  total_reviews: college.total_reviews
})

export default function BrowsePage() {
  const [allColleges] = useState(colleges.map(convertCollegeFormat))
  const [filteredColleges, setFilteredColleges] = useState(colleges.map(convertCollegeFormat))
  const [selectedStream, setSelectedStream] = useState('All')
  const [selectedState, setSelectedState] = useState('All')
  const [sortBy, setSortBy] = useState('rating')

  const streams = getAllStreams()
  const states = getAllStates()

  const handleCollegeSelect = (college: College) => {
    window.location.href = `/college/${college.id}`
  }

  useEffect(() => {
    let filtered = allColleges

    if (selectedStream !== 'All') {
      filtered = filtered.filter(college => {
        const originalCollege = colleges.find(c => c.id === college.id)
        return originalCollege?.streams.includes(selectedStream)
      })
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
  }, [allColleges, selectedStream, selectedState, sortBy])

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
          <SearchBar colleges={allColleges} onCollegeSelect={handleCollegeSelect} />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <h2 className="font-semibold text-gray-900">Filters</h2>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="reviews">Most Reviews</option>
                      <option value="name">Name (A-Z)</option>
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedStream('All')
                      setSelectedState('All')
                      setSortBy('rating')
                    }}
                  >
                    Clear Filters
                  </Button>
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
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedStream('All')
                    setSelectedState('All')
                    setSortBy('rating')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">VibedBack</h3>
              </div>
              <p className="text-gray-400">
                India's most trusted platform for honest college reviews and transparent feedback.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/browse" className="hover:text-white">Browse Colleges</a></li>
                <li><a href="#" className="hover:text-white">Submit Review</a></li>
                <li><a href="#" className="hover:text-white">Search</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Report Issue</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VibedBack. All rights reserved. Built for transparency in education.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}