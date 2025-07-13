// Comprehensive Indian Colleges Database
export interface College {
  id: string
  name: string
  city: string
  state: string
  type: 'Government' | 'Private' | 'Deemed' | 'Autonomous'
  streams: string[]
  website: string | null
  established: number
  accreditation?: {
    naac_grade?: string
    nirf_rank?: number
  }
  affiliation: string[]
  contact?: {
    email?: string
    phone?: string
  }
  avg_rating: number
  total_reviews: number
  description?: string
  hostel: boolean
  fees?: {
    course: string
    amount: string
  }
  placement_rate?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export const colleges: College[] = [
  // DELHI
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management'],
    website: 'https://home.iitd.ac.in',
    established: 1961,
    accreditation: { naac_grade: 'A++', nirf_rank: 2 },
    affiliation: ['MHRD', 'UGC'],
    contact: { email: 'webmaster@admin.iitd.ac.in', phone: '+91-11-2659-1999' },
    avg_rating: 4.5,
    total_reviews: 234,
    description: 'Premier engineering institution known for excellence in technical education and research.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '95%',
    coordinates: { lat: 28.5458, lng: 77.1932 }
  },
  {
    id: 'du-delhi',
    name: 'University of Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Management'],
    website: 'https://du.ac.in',
    established: 1922,
    accreditation: { naac_grade: 'A+', nirf_rank: 12 },
    affiliation: ['UGC'],
    contact: { email: 'info@du.ac.in', phone: '+91-11-2766-7049' },
    avg_rating: 3.9,
    total_reviews: 445,
    description: 'One of India\'s largest and most prestigious universities.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹15,000/year' },
    placement_rate: '75%',
    coordinates: { lat: 28.6967, lng: 77.2167 }
  },
  {
    id: 'jnu-delhi',
    name: 'Jawaharlal Nehru University',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    streams: ['Arts', 'Science', 'Social Sciences', 'Languages'],
    website: 'https://jnu.ac.in',
    established: 1969,
    accreditation: { naac_grade: 'A++', nirf_rank: 3 },
    affiliation: ['UGC'],
    contact: { email: 'info@jnu.ac.in', phone: '+91-11-2670-4000' },
    avg_rating: 4.1,
    total_reviews: 167,
    description: 'Leading university for social sciences and liberal arts.',
    hostel: true,
    fees: { course: 'M.A.', amount: '₹2,000/year' },
    placement_rate: '70%',
    coordinates: { lat: 28.5383, lng: 77.1641 }
  },
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    streams: ['Medical', 'Nursing', 'Paramedical'],
    website: 'https://aiims.edu',
    established: 1956,
    accreditation: { naac_grade: 'A++', nirf_rank: 1 },
    affiliation: ['Ministry of Health'],
    contact: { email: 'director@aiims.ac.in', phone: '+91-11-2658-8500' },
    avg_rating: 4.3,
    total_reviews: 156,
    description: 'Premier medical institute and hospital.',
    hostel: true,
    fees: { course: 'MBBS', amount: '₹1,500/year' },
    placement_rate: '100%',
    coordinates: { lat: 28.5672, lng: 77.2100 }
  },
  {
    id: 'dtu-delhi',
    name: 'Delhi Technological University',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://dtu.ac.in',
    established: 1941,
    accreditation: { naac_grade: 'A+', nirf_rank: 36 },
    affiliation: ['AICTE', 'UGC'],
    contact: { email: 'info@dtu.ac.in', phone: '+91-11-2787-1023' },
    avg_rating: 4.0,
    total_reviews: 289,
    description: 'Leading technological university in Delhi.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹1.5 Lakhs/year' },
    placement_rate: '85%',
    coordinates: { lat: 28.7500, lng: 77.1167 }
  },

  // MAHARASHTRA
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management', 'Design'],
    website: 'https://iitb.ac.in',
    established: 1958,
    accreditation: { naac_grade: 'A++', nirf_rank: 3 },
    affiliation: ['MHRD'],
    contact: { email: 'webmaster@iitb.ac.in', phone: '+91-22-2572-2545' },
    avg_rating: 4.6,
    total_reviews: 312,
    description: 'Top-ranked engineering institute with excellent research facilities.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '98%',
    coordinates: { lat: 19.1334, lng: 72.9133 }
  },
  {
    id: 'university-mumbai',
    name: 'University of Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Engineering'],
    website: 'https://mu.ac.in',
    established: 1857,
    accreditation: { naac_grade: 'A', nirf_rank: 41 },
    affiliation: ['UGC'],
    contact: { email: 'info@mu.ac.in', phone: '+91-22-2652-6543' },
    avg_rating: 3.7,
    total_reviews: 523,
    description: 'One of the oldest and largest universities in India.',
    hostel: false,
    fees: { course: 'B.Com', amount: '₹25,000/year' },
    placement_rate: '65%',
    coordinates: { lat: 18.9667, lng: 72.8333 }
  },
  {
    id: 'pune-university',
    name: 'Savitribai Phule Pune University',
    city: 'Pune',
    state: 'Maharashtra',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Engineering', 'Management'],
    website: 'https://unipune.ac.in',
    established: 1949,
    accreditation: { naac_grade: 'A', nirf_rank: 45 },
    affiliation: ['UGC'],
    contact: { email: 'info@unipune.ac.in', phone: '+91-20-2569-2039' },
    avg_rating: 3.8,
    total_reviews: 398,
    description: 'Major university serving Maharashtra with diverse academic programs.',
    hostel: true,
    fees: { course: 'B.Sc', amount: '₹20,000/year' },
    placement_rate: '70%',
    coordinates: { lat: 18.5089, lng: 73.8553 }
  },

  // KARNATAKA
  {
    id: 'iisc-bangalore',
    name: 'Indian Institute of Science',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Deemed',
    streams: ['Science', 'Engineering', 'Management'],
    website: 'https://iisc.ac.in',
    established: 1909,
    accreditation: { naac_grade: 'A++', nirf_rank: 1 },
    affiliation: ['UGC'],
    contact: { email: 'office@iisc.ac.in', phone: '+91-80-2293-2001' },
    avg_rating: 4.8,
    total_reviews: 145,
    description: 'Premier research institute for science and engineering.',
    hostel: true,
    fees: { course: 'M.Tech', amount: '₹50,000/year' },
    placement_rate: '100%',
    coordinates: { lat: 13.0218, lng: 77.5671 }
  },
  {
    id: 'iim-bangalore',
    name: 'Indian Institute of Management Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Government',
    streams: ['Management', 'Executive Education'],
    website: 'https://iimb.ac.in',
    established: 1973,
    accreditation: { naac_grade: 'A++', nirf_rank: 4 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iimb.ac.in', phone: '+91-80-2699-3000' },
    avg_rating: 4.6,
    total_reviews: 203,
    description: 'Top business school with excellent industry connections.',
    hostel: true,
    fees: { course: 'MBA', amount: '₹24 Lakhs (total)' },
    placement_rate: '100%',
    coordinates: { lat: 12.9343, lng: 77.6114 }
  },
  {
    id: 'bangalore-university',
    name: 'Bangalore University',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Management'],
    website: 'https://bangaloreuniversity.ac.in',
    established: 1964,
    accreditation: { naac_grade: 'A', nirf_rank: 67 },
    affiliation: ['UGC'],
    contact: { email: 'info@bangaloreuniversity.ac.in', phone: '+91-80-2296-1081' },
    avg_rating: 3.6,
    total_reviews: 287,
    description: 'Major state university serving Karnataka.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹15,000/year' },
    placement_rate: '60%',
    coordinates: { lat: 12.9698, lng: 77.7500 }
  },

  // TAMIL NADU
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management', 'Humanities'],
    website: 'https://iitm.ac.in',
    established: 1959,
    accreditation: { naac_grade: 'A++', nirf_rank: 1 },
    affiliation: ['MHRD'],
    contact: { email: 'webmaster@iitm.ac.in', phone: '+91-44-2257-4802' },
    avg_rating: 4.7,
    total_reviews: 278,
    description: 'Top-ranked IIT known for research and innovation.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '97%',
    coordinates: { lat: 12.9915, lng: 80.2336 }
  },
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management'],
    website: 'https://nitt.edu',
    established: 1964,
    accreditation: { naac_grade: 'A++', nirf_rank: 9 },
    affiliation: ['MHRD', 'AICTE'],
    contact: { email: 'director@nitt.edu', phone: '+91-431-250-3000' },
    avg_rating: 4.2,
    total_reviews: 298,
    description: 'Premier NIT with excellent engineering programs.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹1.8 Lakhs/year' },
    placement_rate: '92%',
    coordinates: { lat: 10.7590, lng: 78.8147 }
  },
  {
    id: 'anna-university',
    name: 'Anna University',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Architecture'],
    website: 'https://annauniv.edu',
    established: 1978,
    accreditation: { naac_grade: 'A++', nirf_rank: 17 },
    affiliation: ['UGC', 'AICTE'],
    contact: { email: 'info@annauniv.edu', phone: '+91-44-2235-7067' },
    avg_rating: 3.9,
    total_reviews: 456,
    description: 'Leading technical university in Tamil Nadu.',
    hostel: true,
    fees: { course: 'B.E.', amount: '₹1.2 Lakhs/year' },
    placement_rate: '80%',
    coordinates: { lat: 13.0067, lng: 80.2206 }
  },

  // GUJARAT
  {
    id: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Government',
    streams: ['Management', 'Executive Education'],
    website: 'https://iima.ac.in',
    established: 1961,
    accreditation: { naac_grade: 'A++', nirf_rank: 1 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iima.ac.in', phone: '+91-79-6632-4000' },
    avg_rating: 4.7,
    total_reviews: 189,
    description: 'India\'s premier business school.',
    hostel: true,
    fees: { course: 'MBA', amount: '₹25 Lakhs (total)' },
    placement_rate: '100%',
    coordinates: { lat: 23.0367, lng: 72.5000 }
  },
  {
    id: 'gujarat-university',
    name: 'Gujarat University',
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Medicine'],
    website: 'https://gujaratuniversity.ac.in',
    established: 1949,
    accreditation: { naac_grade: 'B++', nirf_rank: 89 },
    affiliation: ['UGC'],
    contact: { email: 'info@gujaratuniversity.ac.in', phone: '+91-79-2630-2654' },
    avg_rating: 3.5,
    total_reviews: 234,
    description: 'Major state university in Gujarat.',
    hostel: true,
    fees: { course: 'B.Com', amount: '₹18,000/year' },
    placement_rate: '65%',
    coordinates: { lat: 23.0395, lng: 72.5066 }
  },

  // WEST BENGAL
  {
    id: 'iit-kharagpur',
    name: 'Indian Institute of Technology Kharagpur',
    city: 'Kharagpur',
    state: 'West Bengal',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management', 'Law'],
    website: 'https://iitkgp.ac.in',
    established: 1951,
    accreditation: { naac_grade: 'A++', nirf_rank: 5 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitkgp.ac.in', phone: '+91-3222-255-221' },
    avg_rating: 4.4,
    total_reviews: 267,
    description: 'First IIT established in India.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '94%',
    coordinates: { lat: 22.3149, lng: 87.3105 }
  },
  {
    id: 'calcutta-university',
    name: 'University of Calcutta',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Medicine'],
    website: 'https://caluniv.ac.in',
    established: 1857,
    accreditation: { naac_grade: 'A', nirf_rank: 62 },
    affiliation: ['UGC'],
    contact: { email: 'info@caluniv.ac.in', phone: '+91-33-2241-3085' },
    avg_rating: 3.8,
    total_reviews: 345,
    description: 'One of India\'s oldest universities.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹12,000/year' },
    placement_rate: '70%',
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },
  {
    id: 'jadavpur-university',
    name: 'Jadavpur University',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'Government',
    streams: ['Engineering', 'Arts', 'Science'],
    website: 'https://jaduniv.edu.in',
    established: 1955,
    accreditation: { naac_grade: 'A', nirf_rank: 12 },
    affiliation: ['UGC'],
    contact: { email: 'info@jaduniv.edu.in', phone: '+91-33-2414-6666' },
    avg_rating: 4.1,
    total_reviews: 198,
    description: 'Renowned for engineering and liberal arts.',
    hostel: true,
    fees: { course: 'B.E.', amount: '₹8,000/year' },
    placement_rate: '85%',
    coordinates: { lat: 22.4991, lng: 88.3712 }
  },

  // RAJASTHAN
  {
    id: 'iit-jodhpur',
    name: 'Indian Institute of Technology Jodhpur',
    city: 'Jodhpur',
    state: 'Rajasthan',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitj.ac.in',
    established: 2008,
    accreditation: { naac_grade: 'A+', nirf_rank: 30 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitj.ac.in', phone: '+91-291-280-1910' },
    avg_rating: 4.2,
    total_reviews: 134,
    description: 'Newer IIT with modern facilities.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '88%',
    coordinates: { lat: 26.4499, lng: 73.1131 }
  },
  {
    id: 'rajasthan-university',
    name: 'University of Rajasthan',
    city: 'Jaipur',
    state: 'Rajasthan',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Management'],
    website: 'https://uniraj.ac.in',
    established: 1947,
    accreditation: { naac_grade: 'A+', nirf_rank: 78 },
    affiliation: ['UGC'],
    contact: { email: 'info@uniraj.ac.in', phone: '+91-141-270-6106' },
    avg_rating: 3.7,
    total_reviews: 289,
    description: 'Premier state university of Rajasthan.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹15,000/year' },
    placement_rate: '68%',
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },

  // UTTAR PRADESH
  {
    id: 'iit-kanpur',
    name: 'Indian Institute of Technology Kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management'],
    website: 'https://iitk.ac.in',
    established: 1959,
    accreditation: { naac_grade: 'A++', nirf_rank: 4 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitk.ac.in', phone: '+91-512-259-7000' },
    avg_rating: 4.5,
    total_reviews: 245,
    description: 'Leading IIT known for computer science.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '96%',
    coordinates: { lat: 26.5123, lng: 80.2329 }
  },
  {
    id: 'bhu-varanasi',
    name: 'Banaras Hindu University',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    type: 'Government',
    streams: ['Arts', 'Science', 'Engineering', 'Medicine', 'Law'],
    website: 'https://bhu.ac.in',
    established: 1916,
    accreditation: { naac_grade: 'A++', nirf_rank: 10 },
    affiliation: ['UGC'],
    contact: { email: 'info@bhu.ac.in', phone: '+91-542-230-7000' },
    avg_rating: 4.0,
    total_reviews: 567,
    description: 'One of India\'s largest residential universities.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹10,000/year' },
    placement_rate: '75%',
    coordinates: { lat: 25.2677, lng: 82.9913 }
  },
  {
    id: 'amu-aligarh',
    name: 'Aligarh Muslim University',
    city: 'Aligarh',
    state: 'Uttar Pradesh',
    type: 'Government',
    streams: ['Arts', 'Science', 'Engineering', 'Medicine', 'Law'],
    website: 'https://amu.ac.in',
    established: 1875,
    accreditation: { naac_grade: 'A+', nirf_rank: 8 },
    affiliation: ['UGC'],
    contact: { email: 'info@amu.ac.in', phone: '+91-571-270-0920' },
    avg_rating: 3.9,
    total_reviews: 423,
    description: 'Historic university with diverse academic programs.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹8,000/year' },
    placement_rate: '72%',
    coordinates: { lat: 27.8974, lng: 78.0880 }
  },

  // ANDHRA PRADESH
  {
    id: 'iit-hyderabad',
    name: 'Indian Institute of Technology Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Design'],
    website: 'https://iith.ac.in',
    established: 2008,
    accreditation: { naac_grade: 'A+', nirf_rank: 8 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iith.ac.in', phone: '+91-40-2301-6000' },
    avg_rating: 4.3,
    total_reviews: 167,
    description: 'Fast-growing IIT with modern infrastructure.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '91%',
    coordinates: { lat: 17.5934, lng: 78.1240 }
  },
  {
    id: 'osmania-university',
    name: 'Osmania University',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Engineering'],
    website: 'https://osmania.ac.in',
    established: 1918,
    accreditation: { naac_grade: 'A+', nirf_rank: 56 },
    affiliation: ['UGC'],
    contact: { email: 'info@osmania.ac.in', phone: '+91-40-2709-8000' },
    avg_rating: 3.6,
    total_reviews: 378,
    description: 'Historic university in Hyderabad.',
    hostel: true,
    fees: { course: 'B.Com', amount: '₹12,000/year' },
    placement_rate: '65%',
    coordinates: { lat: 17.4126, lng: 78.4071 }
  },

  // KERALA
  {
    id: 'iit-palakkad',
    name: 'Indian Institute of Technology Palakkad',
    city: 'Palakkad',
    state: 'Kerala',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitpkd.ac.in',
    established: 2015,
    accreditation: { naac_grade: 'A', nirf_rank: 45 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitpkd.ac.in', phone: '+91-491-256-2222' },
    avg_rating: 4.1,
    total_reviews: 89,
    description: 'Newest IIT with focus on innovation.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '85%',
    coordinates: { lat: 10.7867, lng: 76.6548 }
  },
  {
    id: 'kerala-university',
    name: 'University of Kerala',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Engineering'],
    website: 'https://keralauniversity.ac.in',
    established: 1937,
    accreditation: { naac_grade: 'A++', nirf_rank: 34 },
    affiliation: ['UGC'],
    contact: { email: 'info@keralauniversity.ac.in', phone: '+91-471-230-5000' },
    avg_rating: 3.8,
    total_reviews: 267,
    description: 'Premier state university of Kerala.',
    hostel: true,
    fees: { course: 'B.Sc', amount: '₹15,000/year' },
    placement_rate: '70%',
    coordinates: { lat: 8.5241, lng: 76.9366 }
  },

  // PUNJAB
  {
    id: 'iit-ropar',
    name: 'Indian Institute of Technology Ropar',
    city: 'Rupnagar',
    state: 'Punjab',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitrpr.ac.in',
    established: 2008,
    accreditation: { naac_grade: 'A', nirf_rank: 31 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitrpr.ac.in', phone: '+91-1881-242-100' },
    avg_rating: 4.0,
    total_reviews: 123,
    description: 'Growing IIT with strong industry connections.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '87%',
    coordinates: { lat: 30.9718, lng: 76.4745 }
  },
  {
    id: 'punjab-university',
    name: 'Panjab University',
    city: 'Chandigarh',
    state: 'Punjab',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law', 'Engineering'],
    website: 'https://puchd.ac.in',
    established: 1882,
    accreditation: { naac_grade: 'A+', nirf_rank: 27 },
    affiliation: ['UGC'],
    contact: { email: 'info@puchd.ac.in', phone: '+91-172-253-4000' },
    avg_rating: 3.9,
    total_reviews: 345,
    description: 'Historic university serving North India.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹18,000/year' },
    placement_rate: '73%',
    coordinates: { lat: 30.7588, lng: 76.7750 }
  },

  // HARYANA
  {
    id: 'nit-kurukshetra',
    name: 'National Institute of Technology Kurukshetra',
    city: 'Kurukshetra',
    state: 'Haryana',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://nitkkr.ac.in',
    established: 1963,
    accreditation: { naac_grade: 'A+', nirf_rank: 40 },
    affiliation: ['MHRD', 'AICTE'],
    contact: { email: 'info@nitkkr.ac.in', phone: '+91-1744-233-208' },
    avg_rating: 4.1,
    total_reviews: 234,
    description: 'Premier NIT in North India.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹1.8 Lakhs/year' },
    placement_rate: '89%',
    coordinates: { lat: 29.9457, lng: 76.8143 }
  },

  // BIHAR
  {
    id: 'iit-patna',
    name: 'Indian Institute of Technology Patna',
    city: 'Patna',
    state: 'Bihar',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitp.ac.in',
    established: 2008,
    accreditation: { naac_grade: 'A', nirf_rank: 48 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitp.ac.in', phone: '+91-612-302-8000' },
    avg_rating: 3.9,
    total_reviews: 156,
    description: 'Emerging IIT with growing reputation.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '83%',
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  {
    id: 'patna-university',
    name: 'Patna University',
    city: 'Patna',
    state: 'Bihar',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law'],
    website: 'https://patnauniversity.ac.in',
    established: 1917,
    accreditation: { naac_grade: 'B+', nirf_rank: 95 },
    affiliation: ['UGC'],
    contact: { email: 'info@patnauniversity.ac.in', phone: '+91-612-267-0631' },
    avg_rating: 3.4,
    total_reviews: 289,
    description: 'Historic university in Bihar.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹8,000/year' },
    placement_rate: '55%',
    coordinates: { lat: 25.6093, lng: 85.1235 }
  },

  // ODISHA
  {
    id: 'iit-bhubaneswar',
    name: 'Indian Institute of Technology Bhubaneswar',
    city: 'Bhubaneswar',
    state: 'Odisha',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitbbs.ac.in',
    established: 2008,
    accreditation: { naac_grade: 'A', nirf_rank: 24 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitbbs.ac.in', phone: '+91-674-713-5000' },
    avg_rating: 4.2,
    total_reviews: 178,
    description: 'Fast-growing IIT in Eastern India.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '90%',
    coordinates: { lat: 20.1489, lng: 85.6753 }
  },
  {
    id: 'nit-rourkela',
    name: 'National Institute of Technology Rourkela',
    city: 'Rourkela',
    state: 'Odisha',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management'],
    website: 'https://nitrkl.ac.in',
    established: 1961,
    accreditation: { naac_grade: 'A+', nirf_rank: 16 },
    affiliation: ['MHRD', 'AICTE'],
    contact: { email: 'info@nitrkl.ac.in', phone: '+91-661-246-2020' },
    avg_rating: 4.3,
    total_reviews: 267,
    description: 'Premier NIT with excellent engineering programs.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹1.8 Lakhs/year' },
    placement_rate: '93%',
    coordinates: { lat: 22.2540, lng: 84.4400 }
  },

  // ASSAM
  {
    id: 'iit-guwahati',
    name: 'Indian Institute of Technology Guwahati',
    city: 'Guwahati',
    state: 'Assam',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Design'],
    website: 'https://iitg.ac.in',
    established: 1994,
    accreditation: { naac_grade: 'A++', nirf_rank: 7 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitg.ac.in', phone: '+91-361-258-2000' },
    avg_rating: 4.4,
    total_reviews: 198,
    description: 'Leading IIT in Northeast India.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '94%',
    coordinates: { lat: 26.1445, lng: 91.7362 }
  },
  {
    id: 'gauhati-university',
    name: 'Gauhati University',
    city: 'Guwahati',
    state: 'Assam',
    type: 'Government',
    streams: ['Arts', 'Science', 'Commerce', 'Law'],
    website: 'https://gauhati.ac.in',
    established: 1948,
    accreditation: { naac_grade: 'A', nirf_rank: 79 },
    affiliation: ['UGC'],
    contact: { email: 'info@gauhati.ac.in', phone: '+91-361-270-5000' },
    avg_rating: 3.7,
    total_reviews: 234,
    description: 'Premier university of Northeast India.',
    hostel: true,
    fees: { course: 'B.A.', amount: '₹12,000/year' },
    placement_rate: '68%',
    coordinates: { lat: 26.1584, lng: 91.6625 }
  },

  // MADHYA PRADESH
  {
    id: 'iit-indore',
    name: 'Indian Institute of Technology Indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iiti.ac.in',
    established: 2009,
    accreditation: { naac_grade: 'A', nirf_rank: 25 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iiti.ac.in', phone: '+91-731-660-3000' },
    avg_rating: 4.1,
    total_reviews: 145,
    description: 'Rapidly developing IIT in Central India.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '88%',
    coordinates: { lat: 22.5197, lng: 75.9218 }
  },

  // HIMACHAL PRADESH
  {
    id: 'iit-mandi',
    name: 'Indian Institute of Technology Mandi',
    city: 'Mandi',
    state: 'Himachal Pradesh',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitmandi.ac.in',
    established: 2009,
    accreditation: { naac_grade: 'A', nirf_rank: 42 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitmandi.ac.in', phone: '+91-1905-267-000' },
    avg_rating: 4.0,
    total_reviews: 112,
    description: 'Scenic IIT in the Himalayas.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '86%',
    coordinates: { lat: 31.7754, lng: 76.9861 }
  },

  // JHARKHAND
  {
    id: 'iit-dhanbad',
    name: 'Indian Institute of Technology (ISM) Dhanbad',
    city: 'Dhanbad',
    state: 'Jharkhand',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Management'],
    website: 'https://iitism.ac.in',
    established: 1926,
    accreditation: { naac_grade: 'A+', nirf_rank: 15 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitism.ac.in', phone: '+91-326-223-5555' },
    avg_rating: 4.2,
    total_reviews: 234,
    description: 'Historic mining and engineering institute.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '91%',
    coordinates: { lat: 23.8103, lng: 86.4669 }
  },

  // GOA
  {
    id: 'iit-goa',
    name: 'Indian Institute of Technology Goa',
    city: 'Ponda',
    state: 'Goa',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://iitgoa.ac.in',
    established: 2016,
    accreditation: { naac_grade: 'A', nirf_rank: 65 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitgoa.ac.in', phone: '+91-832-249-0000' },
    avg_rating: 3.8,
    total_reviews: 67,
    description: 'Newest IIT with coastal location.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '82%',
    coordinates: { lat: 15.4009, lng: 73.9151 }
  },

  // UTTARAKHAND
  {
    id: 'iit-roorkee',
    name: 'Indian Institute of Technology Roorkee',
    city: 'Roorkee',
    state: 'Uttarakhand',
    type: 'Government',
    streams: ['Engineering', 'Technology', 'Architecture', 'Management'],
    website: 'https://iitr.ac.in',
    established: 1847,
    accreditation: { naac_grade: 'A++', nirf_rank: 6 },
    affiliation: ['MHRD'],
    contact: { email: 'info@iitr.ac.in', phone: '+91-1332-285-311' },
    avg_rating: 4.3,
    total_reviews: 289,
    description: 'Oldest technical institution in Asia.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹2.5 Lakhs/year' },
    placement_rate: '95%',
    coordinates: { lat: 29.8543, lng: 77.8880 }
  },

  // JAMMU & KASHMIR
  {
    id: 'nit-srinagar',
    name: 'National Institute of Technology Srinagar',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://nitsri.ac.in',
    established: 1960,
    accreditation: { naac_grade: 'A', nirf_rank: 68 },
    affiliation: ['MHRD', 'AICTE'],
    contact: { email: 'info@nitsri.ac.in', phone: '+91-194-242-2032' },
    avg_rating: 3.8,
    total_reviews: 167,
    description: 'Premier engineering institute in Kashmir.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹1.8 Lakhs/year' },
    placement_rate: '78%',
    coordinates: { lat: 34.1269, lng: 74.8370 }
  },

  // CHHATTISGARH
  {
    id: 'nit-raipur',
    name: 'National Institute of Technology Raipur',
    city: 'Raipur',
    state: 'Chhattisgarh',
    type: 'Government',
    streams: ['Engineering', 'Technology'],
    website: 'https://nitrr.ac.in',
    established: 1956,
    accreditation: { naac_grade: 'A', nirf_rank: 52 },
    affiliation: ['MHRD', 'AICTE'],
    contact: { email: 'info@nitrr.ac.in', phone: '+91-771-254-2000' },
    avg_rating: 3.9,
    total_reviews: 198,
    description: 'Leading NIT in Central India.',
    hostel: true,
    fees: { course: 'B.Tech', amount: '₹1.8 Lakhs/year' },
    placement_rate: '85%',
    coordinates: { lat: 21.2514, lng: 81.6296 }
  }
]

// Helper functions for filtering and searching
export const getCollegesByState = (state: string): College[] => {
  if (state === 'All') return colleges
  return colleges.filter(college => college.state === state)
}

export const getCollegesByStream = (stream: string): College[] => {
  if (stream === 'All') return colleges
  return colleges.filter(college => college.streams.includes(stream))
}

export const getAllStates = (): string[] => {
  const states = [...new Set(colleges.map(college => college.state))].sort()
  return ['All', ...states]
}

export const getAllStreams = (): string[] => {
  const streams = [...new Set(colleges.flatMap(college => college.streams))].sort()
  return ['All', ...streams]
}

export const searchColleges = (query: string): College[] => {
  const searchTerm = query.toLowerCase()
  return colleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm) ||
    college.city.toLowerCase().includes(searchTerm) ||
    college.state.toLowerCase().includes(searchTerm) ||
    college.streams.some(stream => stream.toLowerCase().includes(searchTerm))
  )
}