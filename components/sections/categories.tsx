'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Palette, Scissors, Shirt, Gem, Brush, Home } from 'lucide-react';

export function Categories() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Paintings', icon: Palette, href: '/categories/paintings' },
            { name: 'Textiles', icon: Scissors, href: '/categories/textiles' },
            { name: 'Clothing', icon: Shirt, href: '/categories/clothing' },
            { name: 'Jewelry', icon: Gem, href: '/categories/jewelry' },
            { name: 'Handicrafts', icon: Brush, href: '/categories/handicrafts' },
            { name: 'Home Decor', icon: Home, href: '/categories/home-decor' }
          ].map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <category.icon className="w-8 h-8 mb-3 text-primary" />
                  <span className="font-medium text-center">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}