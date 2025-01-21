export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          role: 'artisan' | 'customer' | 'admin'
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          languages: string[] | null
          specialties: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          role?: 'artisan' | 'customer' | 'admin'
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          languages?: string[] | null
          specialties?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          role?: 'artisan' | 'customer' | 'admin'
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          languages?: string[] | null
          specialties?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: Json
          slug: string
          parent_id: string | null
          description: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          name: Json
          slug: string
          parent_id?: string | null
          description?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: Json
          slug?: string
          parent_id?: string | null
          description?: Json | null
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          artisan_id: string
          category_id: string
          name: Json
          description: Json
          price: number
          stock_quantity: number
          images: string[]
          specifications: Json | null
          is_customizable: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          artisan_id: string
          category_id: string
          name: Json
          description: Json
          price: number
          stock_quantity?: number
          images: string[]
          specifications?: Json | null
          is_customizable?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          artisan_id?: string
          category_id?: string
          name?: Json
          description?: Json
          price?: number
          stock_quantity?: number
          images?: string[]
          specifications?: Json | null
          is_customizable?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          customer_id: string
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          shipping_address: Json
          payment_intent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          shipping_address: Json
          payment_intent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount?: number
          shipping_address?: Json
          payment_intent_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          reviewer_id: string
          product_id: string | null
          artisan_id: string | null
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          reviewer_id: string
          product_id?: string | null
          artisan_id?: string | null
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          reviewer_id?: string
          product_id?: string | null
          artisan_id?: string | null
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
      hiring_requests: {
        Row: {
          id: string
          customer_id: string
          artisan_id: string
          title: string
          description: string
          budget_range: Json | null
          timeline: Json | null
          status: 'open' | 'in_discussion' | 'accepted' | 'completed' | 'cancelled'
          attachments: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          artisan_id: string
          title: string
          description: string
          budget_range?: Json | null
          timeline?: Json | null
          status?: 'open' | 'in_discussion' | 'accepted' | 'completed' | 'cancelled'
          attachments?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          artisan_id?: string
          title?: string
          description?: string
          budget_range?: Json | null
          timeline?: Json | null
          status?: 'open' | 'in_discussion' | 'accepted' | 'completed' | 'cancelled'
          attachments?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}