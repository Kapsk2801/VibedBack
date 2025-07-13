'use client'

import { useState } from 'react'
import { Star, Send, User, UserCheck, Shield, Sparkles, X, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { StarRating } from './StarRating'
import { getUserUUID } from '@/lib/uuid-manager'

interface ReviewFormProps {
  onSubmit: (review: ReviewData) => void
  onClose: () => void
}

interface ReviewData {
  rating: number
  faculty_rating: number
  infrastructure_rating: number
  placement_rating: number
  comment: string
  uuid: string
  user_id?: string
  is_verified: boolean
}

export function ReviewForm({ onSubmit, onClose }: ReviewFormProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [ratings, setRatings] = useState({
    overall: 0,
    faculty: 0,
    infrastructure: 0,
    placement: 0
  })
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (ratings.overall === 0 || ratings.faculty === 0 || ratings.infrastructure === 0 || ratings.placement === 0) {
      alert('Please provide ratings for all categories')
      return
    }

    if (comment.trim().length < 10) {
      alert('Please provide a detailed comment (at least 10 characters)')
      return
    }

    setIsSubmitting(true)

    const reviewData: ReviewData = {
      rating: ratings.overall,
      faculty_rating: ratings.faculty,
      infrastructure_rating: ratings.infrastructure,
      placement_rating: ratings.placement,
      comment: comment.trim(),
      uuid: getUserUUID(),
      user_id: isLoggedIn ? email : undefined,
      is_verified: isLoggedIn && email.includes('.ac.in')
    }

    try {
      await onSubmit(reviewData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-[var(--secondary)]'
    if (rating >= 4.0) return 'text-[var(--primary)]'
    if (rating >= 3.5) return 'text-yellow-600'
    return 'text-[var(--gray)]'
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">Share Your Experience</h2>
          <p className="text-[var(--gray)]">Help other students make informed decisions</p>
        </div>
        <Button
          variant="ghost"
          onClick={onClose}
          className="p-2 hover:bg-[var(--muted)] rounded-xl"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Authentication Toggle */}
        <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--muted)] p-6 rounded-2xl border border-[var(--secondary)]">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-[var(--secondary)]" />
            <h3 className="font-bold text-[var(--primary)]">Choose Your Review Type</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              type="button"
              variant={!isLoggedIn ? 'primary' : 'outline'}
              onClick={() => setIsLoggedIn(false)}
              className="h-auto p-4 flex flex-col items-center gap-3"
            >
              <User className="w-6 h-6" />
              <div className="text-left">
                <div className="font-bold">Anonymous Review</div>
                <div className="text-sm opacity-80">Share freely without revealing identity</div>
              </div>
            </Button>
            
            <Button
              type="button"
              variant={isLoggedIn ? 'primary' : 'outline'}
              onClick={() => setIsLoggedIn(true)}
              className="h-auto p-4 flex flex-col items-center gap-3"
            >
              <UserCheck className="w-6 h-6" />
              <div className="text-left">
                <div className="font-bold">Verified Review</div>
                <div className="text-sm opacity-80">Get verified badge with college email</div>
              </div>
            </Button>
          </div>
        </div>

        {isLoggedIn && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-[var(--primary)]">Verified Review Setup</h3>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[var(--primary)] mb-3">
                College Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@college.ac.in"
                className="mb-3"
                required
              />
              {email.includes('.ac.in') && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">You'll get a verified badge!</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Rating Categories */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[var(--secondary)] shadow-sm">
            <h3 className="font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-[var(--secondary)]" />
              Rate Your Experience
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[var(--primary)] mb-3">
                  Overall Rating *
                </label>
                <StarRating
                  rating={ratings.overall}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, overall: rating }))}
                  size="lg"
                />
                {ratings.overall > 0 && (
                  <div className={`mt-2 text-sm font-medium ${getRatingColor(ratings.overall)}`}>
                    {ratings.overall >= 4.5 ? 'Excellent' : 
                     ratings.overall >= 4.0 ? 'Very Good' : 
                     ratings.overall >= 3.5 ? 'Good' : 'Average'}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--primary)] mb-3">
                  Faculty Quality *
                </label>
                <StarRating
                  rating={ratings.faculty}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, faculty: rating }))}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--primary)] mb-3">
                  Infrastructure *
                </label>
                <StarRating
                  rating={ratings.infrastructure}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, infrastructure: rating }))}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--primary)] mb-3">
                  Placement Support *
                </label>
                <StarRating
                  rating={ratings.placement}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, placement: rating }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comment */}
        <div className="bg-white p-6 rounded-2xl border border-[var(--secondary)] shadow-sm">
          <label className="block text-sm font-bold text-[var(--primary)] mb-3">
            Your Detailed Review *
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your honest experience about this college. What did you like? What could be improved? Help other students make informed decisions..."
            className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] resize-none transition-all duration-200"
            required
            minLength={10}
            maxLength={500}
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2 text-sm text-[var(--gray)]">
              <AlertCircle className="w-4 h-4" />
              <span>Minimum 10 characters required</span>
            </div>
            <div className={`text-sm font-medium ${comment.length >= 10 ? 'text-green-600' : 'text-[var(--gray)]'}`}>
              {comment.length}/500
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between pt-6 border-t border-[var(--secondary)]">
          <div className="flex items-center gap-2 text-sm text-[var(--gray)]">
            <Shield className="w-4 h-4" />
            <span>Your review will be anonymous and safe</span>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="gradient"
            size="lg"
            className="flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Review
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}