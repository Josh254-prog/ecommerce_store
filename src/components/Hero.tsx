import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32">
          {/* Content */}
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-brand" />
              <span className="text-brand font-medium">New Collection Available</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Discover Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Explore our curated collection of premium products designed to elevate your lifestyle. 
              Quality meets innovation in every piece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-brand-foreground">
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Global Brands</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative max-w-lg mx-auto">
              <img
                src={heroImage}
                alt="Premium products showcase"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-brand text-brand-foreground rounded-full p-4 shadow-brand animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;