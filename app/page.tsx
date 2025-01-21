import { HeroSection } from '@/components/sections/hero';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { ArtisanShowcase } from '@/components/sections/artisan-showcase';
import { Categories } from '@/components/sections/categories';

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <ArtisanShowcase />
    </main>
  );
}