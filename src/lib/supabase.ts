import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      colleges: {
        Row: {
          id: string
          name: string
          state: string
          city: string
          stream: string
          website: string | null
          avg_rating: number
          total_reviews: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          state: string
          city: string
          stream: string
          website?: string | null
          avg_rating?: number
          total_reviews?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          state?: string
          city?: string
          stream?: string
          website?: string | null
          avg_rating?: number
          total_reviews?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          college_id: string
          rating: number
          faculty_rating: number
          infrastructure_rating: number
          placement_rating: number
          comment: string
          uuid: string
          user_id: string | null
          is_verified: boolean
          created_at: string
        }
        Insert: {
          id?: string
          college_id: string
          rating: number
          faculty_rating: number
          infrastructure_rating: number
          placement_rating: number
          comment: string
          uuid: string
          user_id?: string | null
          is_verified?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          college_id?: string
          rating?: number
          faculty_rating?: number
          infrastructure_rating?: number
          placement_rating?: number
          comment?: string
          uuid?: string
          user_id?: string | null
          is_verified?: boolean
          created_at?: string
        }
      }
      uuid_logs: {
        Row: {
          id: string
          uuid: string
          college_id: string
          last_reviewed_at: string
        }
        Insert: {
          id?: string
          uuid: string
          college_id: string
          last_reviewed_at?: string
        }
        Update: {
          id?: string
          uuid?: string
          college_id?: string
          last_reviewed_at?: string
        }
      }
    }
  }
}