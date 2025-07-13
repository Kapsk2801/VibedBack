import { MapPin, GraduationCap, Star, MessageSquare, ExternalLink, ArrowRight, TrendingUp, Award } from 'lucide-react'
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
  // Classic color for rating badge
  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'bg-[var(--accent)] text-[var(--primary)] border-2 border-[var(--secondary)]'
    if (rating >= 4.0) return 'bg-[var(--primary-light)] text-[var(--primary)] border-2 border-[var(--primary)]'
    if (rating >= 3.5) return 'bg-[var(--secondary)] text-white border-2 border-[var(--secondary)]'
    return 'bg-[var(--muted)] text-[var(--dark)] border-2 border-[var(--gray)]'
  }
  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return 'Excellent'
    if (rating >= 4.0) return 'Very Good'
    if (rating >= 3.5) return 'Good'
    return 'Average'
  }
  return (
    <Card className="group transition-all duration-300 overflow-hidden relative h-full flex flex-col justify-between min-h-[350px] max-h-[370px] bg-white border-2 border-[var(--secondary)] shadow-md">
      <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl text-[var(--primary)] mb-3 line-clamp-2 group-hover:text-[var(--secondary)] transition-colors">
              {college.name}
            </h3>
            <div className="flex items-center gap-4 text-sm text-[var(--gray)] mb-4">
              <div className="flex items-center gap-2 bg-[var(--primary-light)] px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4 text-[var(--primary)]" />
                <span className="font-medium">{college.city}, {college.state}</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--muted)] px-3 py-1 rounded-full">
                <GraduationCap className="w-4 h-4 text-[var(--secondary)]" />
                <span className="font-medium">{college.stream}</span>
              </div>
            </div>
          </div>
          {college.website && (
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gray)] hover:text-[var(--secondary)] transition-colors p-2 hover:bg-[var(--muted)] rounded-lg"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <div className="flex items-center justify-between mb-6 mt-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm ${getRatingColor(college.avg_rating)}`}>
              <Star className="w-6 h-6 mr-1" />
              {college.avg_rating.toFixed(1)}
            </div>
            <div>
              <div className="font-bold text-base text-[var(--primary)]">{getRatingText(college.avg_rating)}</div>
              <div className="text-xs text-[var(--gray)]">{college.total_reviews} reviews</div>
            </div>
          </div>
          {college.avg_rating >= 4.5 && (
            <div className="flex items-center gap-1 bg-[var(--accent)] px-2 py-1 rounded-full border-2 border-[var(--secondary)]">
              <Award className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-xs font-medium text-[var(--primary)]">Top Rated</span>
            </div>
          )}
        </div>
        <Button
          onClick={() => window.location.href = `/college/${college.id}`}
          variant="outline"
          className="w-full border-[var(--secondary)] text-[var(--primary)] font-bold hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-200"
        >
          <span>View Details & Reviews</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}