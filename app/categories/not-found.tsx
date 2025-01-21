import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container py-32 text-center">
      <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Sorry, the category you're looking for doesn't exist.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}