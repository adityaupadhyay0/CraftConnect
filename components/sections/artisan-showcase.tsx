'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getFeaturedArtisans } from '@/lib/supabase/queries';

export function ArtisanShowcase() {
  const [artisans, setArtisans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedArtisans()
      .then(setArtisans)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 animate-pulse" />
                  <div className="h-6 bg-muted rounded mb-2 w-2/3 mx-auto animate-pulse" />
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto animate-pulse" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Artisans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisans.map((artisan) => (
            <Card key={artisan.id}>
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={artisan.avatar_url} alt={artisan.full_name} />
                  <AvatarFallback>
                    {artisan.full_name?.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{artisan.full_name}</h3>
                <p className="text-muted-foreground">
                  {artisan.specialties?.[0] || 'Multiple Specialties'}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">{artisan.location}</p>
                <div className="flex justify-center gap-4 mb-6">
                  <div>
                    <p className="font-semibold">{artisan.productCount}</p>
                    <p className="text-sm text-muted-foreground">Products</p>
                  </div>
                  <div>
                    <p className="font-semibold">{artisan.rating.toFixed(1)}</p>
                    <p className="text-sm text-muted-foreground">Rating</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/artisans/${artisan.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/artisans">Meet All Artisans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}