import { Button } from '@/components/ui/button';
import { ShoppingBag, Users } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container px-4 py-32 mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Discover India&apos;s Finest
          <span className="block text-primary">Artisanal Crafts</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Connect with skilled artisans, explore unique handcrafted products, and
          support India&apos;s rich cultural heritage. From traditional to contemporary,
          find pieces that tell stories of craftsmanship and culture.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/products">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/artisans">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Artisans
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}