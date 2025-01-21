import { notFound } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/lib/supabase/queries';

const VALID_CATEGORIES = [
  'paintings',
  'textiles',
  'clothing',
  'jewelry',
  'handicrafts',
  'home-decor',
];

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  if (!VALID_CATEGORIES.includes(params.slug)) {
    notFound();
  }

  const products = await getProductsByCategory(params.slug);

  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {params.slug.replace('-', ' ')}
      </h1>
      {products.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No products found in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.images[0]}
                    alt={product.name.en}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{product.name.en}</CardTitle>
                <p className="text-muted-foreground text-sm mb-2">
                  By {product.artisan.full_name} from {product.artisan.location}
                </p>
                <p className="font-bold">₹{product.price.toLocaleString()}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return VALID_CATEGORIES.map((slug) => ({
    slug,
  }));
}