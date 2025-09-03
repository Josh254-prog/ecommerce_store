import { useState } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { mockProducts, categories } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Star } from "lucide-react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? mockProducts 
    : mockProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Popular Categories
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover products tailored to your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group cursor-pointer hover:shadow-brand transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-semibold text-foreground group-hover:text-brand transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                Featured Collection
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Trending Products
              </h2>
              <p className="text-xl text-muted-foreground">
                Handpicked items that are flying off the shelves
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex border-brand text-brand hover:bg-brand hover:text-brand-foreground">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === "all" ? "brand" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="transition-all"
            >
              All Products
            </Button>
            {Array.from(new Set(mockProducts.map(p => p.category))).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category.toLowerCase() ? "brand" : "outline"}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Button variant="brand" size="lg">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest updates on new products and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-brand focus:outline-none transition-colors"
            />
            <Button variant="brand" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;