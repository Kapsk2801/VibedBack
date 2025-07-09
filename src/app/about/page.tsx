'use client'

import { Star, Shield, Users, TrendingUp, Heart, Target, Eye, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      description: 'Former IIT Delhi graduate passionate about transparency in education.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Product',
      description: 'Ex-Google product manager focused on user experience and trust.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Arjun Kumar',
      role: 'CTO',
      description: 'Full-stack developer ensuring platform security and scalability.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in complete transparency in college reviews and ratings, helping students make informed decisions.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where students can share honest experiences and help each other.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Maintaining the highest standards of integrity in all our processes and user interactions.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Creating meaningful impact in the education sector by connecting students with the right institutions.'
    }
  ]

  const stats = [
    { label: 'Colleges Listed', value: '2,500+' },
    { label: 'Student Reviews', value: '15,000+' },
    { label: 'Verified Reviews', value: '8,500+' },
    { label: 'Monthly Users', value: '50,000+' }
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
              <a href="/" className="text-xl font-bold text-gray-900">VibedBack</a>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/browse" className="text-gray-600 hover:text-gray-900">Browse Colleges</a>
              <a href="/about" className="text-blue-600 font-medium">About</a>
              <Button size="sm">Submit Review</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About VibedBack
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Empowering students with honest, transparent college reviews to make informed educational decisions.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <Eye className="w-5 h-5" />
            <span>Transparency • Trust • Truth</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To create India's most trusted platform for college reviews, where students can share honest experiences 
            and help future generations make better educational choices.
          </p>
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 italic">
              "Every student deserves access to honest, unbiased information about colleges. 
              We're building the platform that makes this possible."
            </p>
            <p className="text-blue-600 font-medium mt-4">- VibedBack Team</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600">Numbers that reflect our commitment to transparency</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">Passionate individuals working to transform education transparency</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How VibedBack Works</h2>
            <p className="text-gray-600">Simple, transparent, and effective</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Search & Discover</h3>
              <p className="text-gray-600">Find colleges by name, location, or stream using our powerful search.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Read Reviews</h3>
              <p className="text-gray-600">Access honest, detailed reviews from verified students and alumni.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Make Decisions</h3>
              <p className="text-gray-600">Use comprehensive data to make informed choices about your education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Help us build a more transparent education system. Share your college experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Submit Your Review
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Browse Colleges
            </Button>
          </div>
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
    </div>
  )
}