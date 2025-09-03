import { mockProducts } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Categories = () => {
  // Get unique categories with product counts
  const categoryStats = mockProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        count: 0,
        image: product.image,
        name: product.category
      };
    }
    acc[product.category].count++;
    return acc;
  }, {} as Record<string, { count: number; image: string; name: string }>);

  const categories = Object.values(categoryStats);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shop by Category</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <Card className="overflow-hidden cursor-pointer hover:shadow-brand transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white capitalize mb-2">
                      {category.name}
                    </h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {category.count} products
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium capitalize">
                      {category.name}
                    </span>
                    <span className="text-brand group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Most Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={`featured-${category.name}`}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group text-center p-6 rounded-lg bg-card hover:bg-muted transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl">
                    {category.name === 'electronics' && '📱'}
                    {category.name === 'clothing' && '👕'}
                    {category.name === 'home' && '🏠'}
                    {category.name === 'sports' && '⚽'}
                    {!['electronics', 'clothing', 'home', 'sports'].includes(category.name) && '🛍️'}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground capitalize mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;