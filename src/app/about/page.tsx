'use client'

import { Star, Shield, Users, TrendingUp, Heart, Globe, Award, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in complete transparency in education. Every review is authentic and verified.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of students who help each other make informed decisions.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously improving our platform to provide the best experience for students.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand the challenges students face and design our platform with empathy.',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const stats = [
    { label: 'Colleges Listed', value: '2,500+', icon: Globe },
    { label: 'Student Reviews', value: '15,000+', icon: Users },
    { label: 'Verified Reviews', value: '8,500+', icon: Award },
    { label: 'Monthly Visitors', value: '50,000+', icon: TrendingUp }
  ]

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      description: 'Former student who experienced the challenges of choosing the right college.',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Product',
      description: 'Passionate about creating user-centric experiences that make a difference.',
      avatar: '👩‍💻'
    },
    {
      name: 'Amit Kumar',
      role: 'Lead Developer',
      description: 'Building the technology that powers transparent college reviews.',
      avatar: '👨‍💻'
    },
    {
      name: 'Neha Singh',
      role: 'Community Manager',
      description: 'Fostering a supportive community of students and alumni.',
      avatar: '👩‍🤝‍👩'
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                VibedBack was born from a simple realization: choosing the right college is one of the most important decisions a student makes, yet reliable, honest information is hard to find.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe every student deserves access to authentic, verified reviews from real students who have experienced these institutions firsthand.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="gradient" size="lg">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">Verified Reviews</h3>
                      <p className="text-gray-600">College email verification ensures authenticity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">Anonymous & Safe</h3>
                      <p className="text-gray-600">Share honest feedback without fear</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">Community Driven</h3>
                      <p className="text-gray-600">Built by students, for students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at VibedBack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent>
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind VibedBack who are committed to transforming college education in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Help us build India's most trusted platform for college reviews. 
            Your voice matters in shaping the future of education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-gray-800 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <Heart className="w-6 h-6 mr-2" />
              Submit Your Review
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-800"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">VibedBack</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                India's most trusted platform for honest college reviews and transparent feedback. 
                Empowering students to make informed decisions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/browse" className="hover:text-white transition-colors">Browse Colleges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Review</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compare Colleges</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VibedBack. All rights reserved. Built for transparency in education.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}