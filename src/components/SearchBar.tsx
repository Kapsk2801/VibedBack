'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, GraduationCap } from 'lucide-react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import Fuse from 'fuse.js'

interface College {
  id: string
  name: string
  city: string
  state: string
  stream: string
  website?: string | null
  avg_rating: number
  total_reviews?: number
}

interface SearchBarProps {
  colleges: College[]
  onCollegeSelect: (college: College) => void
}

export function SearchBar({ colleges, onCollegeSelect }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<College[]>([])
  const [showResults, setShowResults] = useState(false)

  const fuse = new Fuse(colleges, {
    keys: ['name', 'city', 'state', 'stream'],
    threshold: 0.3,
    includeScore: true
  })

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = fuse.search(query).map(result => result.item)
      setResults(searchResults.slice(0, 8))
      setShowResults(true)
    } else {
      setResults([])
      setShowResults(false)
    }
  }, [query, colleges])

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search colleges by name, city, or stream..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 h-12 text-lg"
          onFocus={() => query.length > 2 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((college) => (
            <button
              key={college.id}
              onClick={() => {
                onCollegeSelect(college)
                setQuery('')
                setShowResults(false)
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{college.name}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {college.city}, {college.state}
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {college.stream}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{college.avg_rating.toFixed(1)}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}