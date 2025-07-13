'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, GraduationCap, Star, Sparkles } from 'lucide-react'
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
  const [isFocused, setIsFocused] = useState(false)

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

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-[var(--secondary)]'
    if (rating >= 4.0) return 'text-[var(--primary)]'
    if (rating >= 3.5) return 'text-yellow-600'
    return 'text-[var(--gray)]'
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6">
          <Search className="w-6 h-6" />
        </div>
        <Input
          type="text"
          placeholder="Search colleges by name, city, or stream..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-4 h-14 text-lg shadow-xl border-2 focus:border-[var(--secondary)] focus:shadow-2xl transition-all duration-300"
          onFocus={() => {
            setIsFocused(true)
            query.length > 2 && setShowResults(true)
          }}
          onBlur={() => {
            setIsFocused(false)
            setTimeout(() => setShowResults(false), 200)
          }}
        />
        {isFocused && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Sparkles className="w-5 h-5 text-[var(--secondary)] animate-pulse" />
          </div>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white border-2 border-[var(--secondary)] rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto backdrop-blur-sm">
          <div className="p-2">
            {results.map((college, index) => (
              <button
                key={college.id}
                onClick={() => {
                  onCollegeSelect(college)
                  setQuery('')
                  setShowResults(false)
                }}
                className="w-full px-4 py-4 text-left hover:bg-gradient-to-r hover:from-[var(--accent)] hover:to-[var(--muted)] border-b border-[var(--secondary)] last:border-b-0 transition-all duration-200 rounded-xl hover:shadow-md group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
                      {college.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2 bg-[var(--primary-light)] px-2 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-[var(--primary)]" />
                        <span className="font-medium">{college.city}, {college.state}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[var(--muted)] px-2 py-1 rounded-full">
                        <GraduationCap className="w-3 h-3 text-[var(--secondary)]" />
                        <span className="font-medium">{college.stream}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className={`w-4 h-4 fill-current ${getRatingColor(college.avg_rating)}`} />
                      <span className={`font-bold ${getRatingColor(college.avg_rating)}`}>
                        {college.avg_rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {college.total_reviews} reviews
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {showResults && results.length === 0 && query.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white border-2 border-gray-100 rounded-2xl shadow-2xl z-50 p-6 text-center">
          <div className="text-gray-500">
            <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="font-medium">No colleges found</p>
            <p className="text-sm">Try searching with different keywords</p>
          </div>
        </div>
      )}
    </div>
  )
}