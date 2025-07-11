'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Star, MapPin, GraduationCap, ExternalLink, Users, TrendingUp, Award, Building } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/StarRating'
import { ReviewForm } from '@/components/ReviewForm'

// Mock data - replace with Supabase data
const mockCollegeDetails = {
  id: '1',
  name: 'Indian Institute of Technology Delhi',
  city: 'New Delhi',
  state: 'Delhi',
  stream: 'Engineering',
  website: 'https://iitd.ac.in',
  avg_rating: 4.5,
  total_reviews: 234,
  description: 'IIT Delhi is one of the premier engineering institutions in India, known for its excellence in technical education and research.',
  established: 1961,
  type: 'Public',
  affiliation: 'Autonomous',
  ratings: {
    faculty: 4.3,
    infrastructure: 4.6,
    placement: 4.7
  },
  stats: {
    students: '8,500+',
    faculty: '500+',
    courses: '50+',
    placement_rate: '95%'
  }
}

const mockReviews = [
  {
    id: '1',
    rating: 5,
    faculty_rating: 4,
    infrastructure_rating: 5,
    placement_rating: 5,
    comment: 'Excellent college with world-class faculty and infrastructure. The placement opportunities are outstanding.',
    is_verified: true,
    created_at: '2024-01-15'
  },
  {
    id: '2',
    rating: 4,
    faculty_rating: 4,
    infrastructure_rating: 4,
    placement_rating: 5,
    comment: 'Great academic environment and research opportunities. The campus life is vibrant and engaging.',
    is_verified: false,
    created_at: '2024-01-10'
  }
]

export default function CollegePage() {
  const params = useParams()
  const [college] = useState(mockCollegeDetails)
  const [reviews] = useState(mockReviews)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleReviewSubmit = async (reviewData: any) => {
    console.log('Review submitted:', reviewData)
    alert('Review submitted successfully!')
    setShowReviewForm(false)
  }

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
              <a href="/browse" className="text-gray-600 hover:text-gray-900">Browse Colleges</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <Button size="sm" onClick={() => setShowReviewForm(true)}>Submit Review</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* College Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{college.name}</h1>
              <div className="flex items-center gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {college.city}, {college.state}
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {college.stream}
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  {college.type} • Est. {college.established}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{college.description}</p>
            </div>
            {college.website && (
              <a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Website
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{college.stats.students}</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{college.stats.faculty}</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{college.stats.courses}</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{college.stats.placement_rate}</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ratings Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Ratings Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center pb-4 border-b">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{college.avg_rating.toFixed(1)}</div>
                  <StarRating rating={college.avg_rating} readonly />
                  <div className="text-gray-600 mt-2">{college.total_reviews} reviews</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Faculty Quality</span>
                    <StarRating rating={college.ratings.faculty} readonly size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Infrastructure</span>
                    <StarRating rating={college.ratings.infrastructure} readonly size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Placement Support</span>
                    <StarRating rating={college.ratings.placement} readonly size="sm" />
                  </div>
                </div>

                <Button 
                  className="w-full mt-4"
                  onClick={() => setShowReviewForm(true)}
                >
                  Write a Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reviews */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <StarRating rating={review.rating} readonly size="sm" />
                          {review.is_verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <span className="text-gray-500 text-sm">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{review.comment}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Faculty: </span>
                          <span className="font-medium">{review.faculty_rating}/5</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Infrastructure: </span>
                          <span className="font-medium">{review.infrastructure_rating}/5</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Placement: </span>
                          <span className="font-medium">{review.placement_rating}/5</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <ReviewForm
          collegeId={college.id}
          collegeName={college.name}
          onSubmit={handleReviewSubmit}
          onClose={() => setShowReviewForm(false)}
        />
      )}

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