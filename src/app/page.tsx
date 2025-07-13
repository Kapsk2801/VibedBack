'use client'

import { useState, useEffect } from 'react'
import { Search, Star, Users, Shield, TrendingUp, GraduationCap, MapPin, Sparkles, ArrowRight, CheckCircle, Heart, Zap, Globe, Award } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'
import { CollegeCard } from '@/components/CollegeCard'
import { ReviewForm } from '@/components/ReviewForm'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { colleges, type College } from '@/data/colleges'
import { useRef } from 'react'

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

export default function Home() {
  const [allColleges] = useState(colleges.map(convertCollegeFormat))
  const [filteredColleges, setFilteredColleges] = useState(colleges.map(convertCollegeFormat).slice(0, 6))
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [typewriterText, setTypewriterText] = useState('')
  const typewriterPhrases = [
    'Honest College Reviews',
    'Real Student Voices',
    'Your Future, Unfiltered',
    'Decide with Confidence'
  ]
  useEffect(() => {
    let phraseIndex = 0
    let charIndex = 0
    let forward = true
    let timeout: NodeJS.Timeout
    function type() {
      if (forward) {
        if (charIndex < typewriterPhrases[phraseIndex].length) {
          setTypewriterText(typewriterPhrases[phraseIndex].slice(0, charIndex + 1))
          charIndex++
          timeout = setTimeout(type, 80)
        } else {
          forward = false
          timeout = setTimeout(type, 1200)
        }
      } else {
        if (charIndex > 0) {
          setTypewriterText(typewriterPhrases[phraseIndex].slice(0, charIndex - 1))
          charIndex--
          timeout = setTimeout(type, 30)
        } else {
          forward = true
          phraseIndex = (phraseIndex + 1) % typewriterPhrases.length
          timeout = setTimeout(type, 400)
        }
      }
    }
    type()
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCollegeSelect = (college: any) => {
    setSelectedCollege(college)
    console.log('Selected college:', college)
  }

  const handleReviewSubmit = async (reviewData: any) => {
    console.log('Review submitted:', reviewData)
    alert('Review submitted successfully!')
    setShowReviewForm(false)
  }

  const stats = [
    { icon: GraduationCap, label: 'Colleges Listed', value: '2,500+', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Student Reviews', value: '15,000+', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, label: 'Verified Reviews', value: '8,500+', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Monthly Visitors', value: '50,000+', color: 'from-orange-500 to-red-500' }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Anonymous & Safe',
      description: 'Share honest feedback without revealing your identity. Your privacy is our priority.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Users,
      title: 'Verified Reviews',
      description: 'College email verification ensures authentic reviews from real students.',
      gradient: 'from-purple-500 to-pink-500',
      delay: '100ms'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Insights',
      description: 'Get up-to-date information about faculty, infrastructure, and placements.',
      gradient: 'from-green-500 to-emerald-500',
      delay: '200ms'
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Hero Section - professional, mature look */}
      <section className="py-24 bg-[var(--background)] border-b border-[var(--muted)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-[var(--dark)]">India's Most Trusted College Reviews</h1>
          <p className="text-lg text-[var(--gray)] mb-10">Discover, compare, and review Indian colleges with real student feedback. Make confident decisions for your future.</p>
          <div className="flex justify-center mb-8">
            <SearchBar colleges={allColleges} onCollegeSelect={handleCollegeSelect} />
          </div>
          <Button size="xl" variant="primary" className="bg-[var(--primary)] text-white font-semibold px-8 py-4 rounded-lg shadow-none border border-[var(--primary)] hover:bg-[var(--dark)] hover:text-white transition">Browse Colleges</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--card-bg)] border-b border-[var(--muted)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-[var(--dark)]">Why Use VibedBack?</h2>
            <p className="text-base text-[var(--gray)]">A transparent, unbiased platform for honest college reviews and comparisons.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-left p-8 border border-[var(--muted)] shadow-none bg-[var(--card-bg)]">
              <CardContent>
                <Shield className="w-8 h-8 text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--dark)]">Verified & Anonymous</h3>
                <p className="text-[var(--gray)]">All reviews are verified and can be submitted anonymously for honest feedback.</p>
              </CardContent>
            </Card>
            <Card className="text-left p-8 border border-[var(--muted)] shadow-none bg-[var(--card-bg)]">
              <CardContent>
                <Users className="w-8 h-8 text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--dark)]">Real Student Voices</h3>
                <p className="text-[var(--gray)]">Read reviews from real students to get genuine insights about colleges.</p>
              </CardContent>
            </Card>
            <Card className="text-left p-8 border border-[var(--muted)] shadow-none bg-[var(--card-bg)]">
              <CardContent>
                <TrendingUp className="w-8 h-8 text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--dark)]">Compare & Decide</h3>
                <p className="text-[var(--gray)]">Easily compare colleges and make informed decisions for your education.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Colleges */}
      <section id="trending" className="py-20 bg-[var(--muted)] border-b-4 border-[var(--accent)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary)]">Trending Colleges</h2>
            <a href="/browse">
              <Button variant="outline" size="lg" className="border-[var(--accent)] text-[var(--primary)] font-bold">View All</Button>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} onViewDetails={handleCollegeSelect} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 bg-[var(--background)] border-b border-[var(--muted)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--dark)]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--card-bg)] rounded-lg p-8 border border-[var(--muted)] shadow-none flex flex-col items-center text-center">
              <Search className="w-8 h-8 text-[var(--primary)] mb-4" />
              <h3 className="text-base font-semibold mb-2 text-[var(--dark)]">1. Search</h3>
              <p className="text-[var(--gray)]">Find colleges by name, city, or stream using our powerful search.</p>
            </div>
            <div className="bg-[var(--card-bg)] rounded-lg p-8 border border-[var(--muted)] shadow-none flex flex-col items-center text-center">
              <Star className="w-8 h-8 text-[var(--primary)] mb-4" />
              <h3 className="text-base font-semibold mb-2 text-[var(--dark)]">2. Review</h3>
              <p className="text-[var(--gray)]">Read and write honest reviews to help others and yourself.</p>
            </div>
            <div className="bg-[var(--card-bg)] rounded-lg p-8 border border-[var(--muted)] shadow-none flex flex-col items-center text-center">
              <TrendingUp className="w-8 h-8 text-[var(--primary)] mb-4" />
              <h3 className="text-base font-semibold mb-2 text-[var(--dark)]">3. Decide</h3>
              <p className="text-[var(--gray)]">Compare colleges and make the best choice for your future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-[var(--muted)] border-b border-[var(--muted)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--dark)]">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--card-bg)] rounded-lg p-8 border border-[var(--muted)] shadow-none flex flex-col items-center text-center">
              <p className="text-base text-[var(--gray)] mb-4">“VibedBack helped me find the perfect college. The reviews were honest and super helpful!”</p>
              <span className="font-bold text-[var(--dark)]">Aarav S.</span>
            </div>
            <div className="bg-[var(--card-bg)] rounded-lg p-8 border border-[var(--muted)] shadow-none flex flex-col items-center text-center">
              <p className="text-base text-[var(--gray)] mb-4">“I loved the trending colleges section. It made shortlisting so much easier!”</p>
              <span className="font-bold text-[var(--dark)]">Priya M.</span>
            </div>
            <div className="bg-[var(--card-bg)] rounded-lg p-8 border border-[var(--muted)] shadow-none flex flex-col items-center text-center">
              <p className="text-base text-[var(--gray)] mb-4">“The review process was easy and anonymous. Highly recommend for all students!”</p>
              <span className="font-bold text-[var(--dark)]">Rahul K.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-[var(--card-bg)] border-b border-[var(--muted)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--dark)]">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-[var(--muted)] rounded-lg p-6 border border-[var(--muted)] shadow-none flex flex-col">
              <span className="font-bold text-[var(--dark)] mb-2">Is VibedBack free to use?</span>
              <span className="text-[var(--gray)]">Yes! Browsing, searching, and reading reviews are completely free for all users.</span>
            </div>
            <div className="bg-[var(--muted)] rounded-lg p-6 border border-[var(--muted)] shadow-none flex flex-col">
              <span className="font-bold text-[var(--dark)] mb-2">Are reviews anonymous?</span>
              <span className="text-[var(--gray)]">Absolutely. You can submit reviews without revealing your identity. We also verify reviews for authenticity.</span>
            </div>
            <div className="bg-[var(--muted)] rounded-lg p-6 border border-[var(--muted)] shadow-none flex flex-col">
              <span className="font-bold text-[var(--dark)] mb-2">How do I submit a review?</span>
              <span className="text-[var(--gray)]">Click the “Submit Review” button, fill out the form, and your review will be added after verification.</span>
            </div>
            <div className="bg-[var(--muted)] rounded-lg p-6 border border-[var(--muted)] shadow-none flex flex-col">
              <span className="font-bold text-[var(--dark)] mb-2">Can I compare colleges?</span>
              <span className="text-[var(--gray)]">Yes, you can compare colleges by browsing and shortlisting your favorites.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--dark)]">Help Future Students Make Better Choices</h2>
          <p className="text-base text-[var(--gray)] mb-10">Share your college experience and help others make informed decisions about their education. Your voice matters in shaping the future of education.</p>
          <Button size="xl" variant="primary" className="bg-[var(--primary)] text-white font-semibold px-8 py-4 rounded-lg shadow-none border border-[var(--primary)] hover:bg-[var(--dark)] hover:text-white transition">Submit Your Review</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--background)] text-[var(--gray)] py-10 border-t border-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-8">
            <div>
              <span className="text-xl font-bold text-[var(--dark)]">VibedBack</span>
              <p className="text-[var(--gray)] mt-2">India's most trusted platform for honest college reviews and transparent feedback.</p>
            </div>
            <nav className="flex flex-wrap gap-6 text-[var(--gray)]">
              <a href="/browse" className="hover:text-[var(--primary)] transition-colors">Browse</a>
              <a href="#trending" className="hover:text-[var(--primary)] transition-colors">Trending</a>
              <a href="#how" className="hover:text-[var(--primary)] transition-colors">How It Works</a>
              <a href="#testimonials" className="hover:text-[var(--primary)] transition-colors">Testimonials</a>
              <a href="#faq" className="hover:text-[var(--primary)] transition-colors">FAQ</a>
              <a href="/about" className="hover:text-[var(--primary)] transition-colors">About</a>
            </nav>
          </div>
          <div className="border-t border-[var(--muted)] pt-6 text-center text-[var(--gray)] text-sm">
            <p>&copy; 2025 VibedBack. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--card-bg)] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <ReviewForm onSubmit={handleReviewSubmit} onClose={() => setShowReviewForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
}