'use client'

import { useState } from 'react'
import { Star, Send, User, UserCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { StarRating } from './StarRating'
import { getUserUUID } from '@/lib/uuid-manager'

interface ReviewFormProps {
  collegeId: string
  collegeName: string
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

export function ReviewForm({ collegeId, collegeName, onSubmit, onClose }: ReviewFormProps) {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Review {collegeName}</span>
            <Button variant="ghost" onClick={onClose} className="p-2">
              ×
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Authentication Toggle */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Button
                type="button"
                variant={!isLoggedIn ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Anonymous
              </Button>
              <Button
                type="button"
                variant={isLoggedIn ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setIsLoggedIn(true)}
                className="flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                Login (Get Verified Badge)
              </Button>
            </div>

            {isLoggedIn && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@college.ac.in"
                  required
                />
                {email.includes('.ac.in') && (
                  <p className="text-sm text-green-600 mt-1">
                    ✓ You'll get a verified badge for using college email
                  </p>
                )}
              </div>
            )}

            {/* Rating Categories */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Rating *
                </label>
                <StarRating
                  rating={ratings.overall}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, overall: rating }))}
                  size="lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Faculty Quality *
                </label>
                <StarRating
                  rating={ratings.faculty}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, faculty: rating }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Infrastructure *
                </label>
                <StarRating
                  rating={ratings.infrastructure}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, infrastructure: rating }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Placement Support *
                </label>
                <StarRating
                  rating={ratings.placement}
                  onRatingChange={(rating) => setRatings(prev => ({ ...prev, placement: rating }))}
                />
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your honest experience about this college..."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
                minLength={10}
              />
              <p className="text-sm text-gray-500 mt-1">
                {comment.length}/500 characters (minimum 10)
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-gray-600">
                You can review each college once per week
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}