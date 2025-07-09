'use client'

import { useState, useEffect } from 'react'
import { Search, Star, Users, Shield, TrendingUp, GraduationCap, MapPin } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'
import { CollegeCard } from '@/components/CollegeCard'
import { ReviewForm } from '@/components/ReviewForm'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

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

export default function Home() {
  const [colleges, setColleges] = useState<College[]>(mockColleges)
  const [filteredColleges, setFilteredColleges] = useState<College[]>(mockColleges)
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCollegeSelect = (college: College) => {
    setSelectedCollege(college)
    // In a real app, this would navigate to college detail page
    console.log('Selected college:', college)
  }

  const handleReviewSubmit = async (reviewData: any) => {
    // In a real app, this would submit to Supabase
    console.log('Review submitted:', reviewData)
    alert('Review submitted successfully!')
    setShowReviewForm(false)
  }

  const stats = [
    { icon: GraduationCap, label: 'Colleges Listed', value: '2,500+' },
    { icon: Users, label: 'Student Reviews', value: '15,000+' },
    { icon: Shield, label: 'Verified Reviews', value: '8,500+' },
    { icon: TrendingUp, label: 'Monthly Visitors', value: '50,000+' }
  ]

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
              <h1 className="text-xl font-bold text-gray-900">VibedBack</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/browse" className="text-gray-600 hover:text-gray-900">Browse Colleges</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <Button size="sm">Submit Review</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Honest College Reviews
            <span className="block text-blue-200">You Can Trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Discover transparent, anonymous, and verified reviews of Indian colleges. 
            Make informed decisions about your future.
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <SearchBar 
              colleges={colleges} 
              onCollegeSelect={handleCollegeSelect}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VibedBack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building India's most trusted platform for college reviews with transparency at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Anonymous & Safe</h3>
                <p className="text-gray-600">
                  Share honest feedback without revealing your identity. Your privacy is our priority.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Verified Reviews</h3>
                <p className="text-gray-600">
                  College email verification ensures authentic reviews from real students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Insights</h3>
                <p className="text-gray-600">
                  Get up-to-date information about faculty, infrastructure, and placements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Colleges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Colleges</h2>
              <p className="text-gray-600">Discover what students are saying about top institutions</p>
            </div>
            <Button variant="outline">View All Colleges</Button>
            <a href="/browse">
              <Button variant="outline">View All Colleges</Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.slice(0, 6).map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onViewDetails={handleCollegeSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Future Students Make Better Choices
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Share your college experience and help others make informed decisions about their education.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setShowReviewForm(true)}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Submit Your Review
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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

      {/* Review Form Modal */}
      {showReviewForm && (
        <ReviewForm
          collegeId="1"
          collegeName="Sample College"
          onSubmit={handleReviewSubmit}
          onClose={() => setShowReviewForm(false)}
        />
      )}
    </div>
  )
}