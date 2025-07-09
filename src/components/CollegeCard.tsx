import { MapPin, GraduationCap, Star, MessageSquare, ExternalLink } from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'

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

interface CollegeCardProps {
  college: College
  onViewDetails: (college: College) => void
}

export function CollegeCard({ college, onViewDetails }: CollegeCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
              {college.name}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {college.city}, {college.state}
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                {college.stream}
              </div>
            </div>
          </div>
          {college.website && (
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{college.avg_rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MessageSquare className="w-4 h-4" />
              {college.total_reviews} reviews
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.location.href = `/college/${college.id}`}
          variant="outline"
          className="w-full"
        >
          View Details & Reviews
        </Button>
      </CardContent>
    </Card>
  )
}