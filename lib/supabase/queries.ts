import { supabase } from './client';
import { Database } from './types';

type Product = Database['public']['Tables']['products']['Row'];
type Profile = Database['public']['Tables']['profiles']['Row'];

export async function getFeaturedProducts(limit = 3) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      artisan:profiles(
        id,
        full_name,
        location
      )
    `)
    .limit(limit)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getFeaturedArtisans(limit = 3) {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      *,
      products:products(count),
      reviews:reviews(rating)
    `)
    .eq('role', 'artisan')
    .limit(limit);

  if (error) throw error;

  return data.map((artisan) => ({
    ...artisan,
    productCount: artisan.products?.[0]?.count ?? 0,
    rating: artisan.reviews?.length
      ? artisan.reviews.reduce((acc, rev) => acc + rev.rating, 0) / artisan.reviews.length
      : 0,
  }));
}

export async function getProductsByCategory(categorySlug: string) {
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();

  if (!category) return [];

  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      artisan:profiles(
        id,
        full_name,
        location
      )
    `)
    .eq('category_id', category.id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}