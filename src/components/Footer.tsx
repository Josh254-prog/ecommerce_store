import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted/50 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">ShopHub</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted online marketplace for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a></li>
              <li><a href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          <p>Powered by Monsoon Industries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;