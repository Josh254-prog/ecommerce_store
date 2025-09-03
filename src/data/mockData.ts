// Mock data for products
export const mockProducts = [
  // Electronics (10+ items)
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 127,
    category: "Electronics",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring noise cancellation and 30-hour battery life.",
    features: ["Noise Cancellation", "30hr Battery", "Quick Charge", "Premium Build"],
    stock: 15
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 149,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 203,
    category: "Electronics",
    description: "Track your health and fitness goals with advanced sensors and 7-day battery life.",
    features: ["Heart Rate Monitor", "7-Day Battery", "Sleep Tracking", "Waterproof"],
    stock: 25
  },
  {
    id: 5,
    name: "Wireless Charging Stand",
    price: 89,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 94,
    category: "Electronics",
    description: "Fast wireless charging with sleek design. Compatible with all Qi-enabled devices.",
    features: ["Fast Charging", "Qi Compatible", "LED Indicator", "Non-Slip Base"],
    stock: 30
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 79,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 145,
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360° sound and waterproof design.",
    features: ["360° Sound", "Waterproof", "12hr Battery", "Compact Design"],
    stock: 20
  },
  {
    id: 8,
    name: "4K Webcam",
    price: 129,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 89,
    category: "Electronics",
    description: "Ultra HD webcam with auto-focus and noise-cancelling microphone.",
    features: ["4K Recording", "Auto Focus", "Noise Cancelling", "Wide Angle"],
    stock: 15
  },
  {
    id: 9,
    name: "Gaming Mouse",
    price: 59,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 234,
    category: "Electronics",
    description: "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
    features: ["RGB Lighting", "Programmable", "High DPI", "Ergonomic"],
    stock: 35
  },
  {
    id: 10,
    name: "USB-C Hub",
    price: 45,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 67,
    category: "Electronics",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and fast charging support.",
    features: ["Multi-Port", "4K HDMI", "Fast Charging", "Compact"],
    stock: 50
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    price: 99,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 178,
    category: "Electronics",
    description: "True wireless earbuds with active noise cancellation and touch controls.",
    features: ["ANC", "Touch Control", "20hr Battery", "Quick Pair"],
    stock: 40
  },
  {
    id: 12,
    name: "Smart Watch",
    price: 199,
    image: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 156,
    category: "Electronics",
    description: "Feature-packed smartwatch with GPS, heart rate monitoring, and app ecosystem.",
    features: ["GPS", "Heart Rate", "App Store", "Water Resistant"],
    stock: 22
  },
  {
    id: 13,
    name: "Laptop Stand",
    price: 39,
    image: "https://images.unsplash.com/photo-1527142879-c4d2363abeb3?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 89,
    category: "Electronics",
    description: "Adjustable aluminum laptop stand for better ergonomics and cooling.",
    features: ["Adjustable", "Aluminum", "Cooling", "Portable"],
    stock: 60
  },

  // Fashion (10+ items)
  {
    id: 2,
    name: "Minimalist Watch Collection",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviewCount: 89,
    category: "Fashion",
    description: "Elegant timepiece crafted with precision. Features sapphire crystal glass and premium leather strap.",
    features: ["Sapphire Crystal", "Leather Strap", "Water Resistant", "Swiss Movement"],
    stock: 8
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 179,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 156,
    category: "Fashion",
    description: "Premium designer sunglasses with UV protection and polarized lenses.",
    features: ["UV Protection", "Polarized", "Designer Frame", "Anti-Glare"],
    stock: 12
  },
  {
    id: 14,
    name: "Leather Crossbody Bag",
    price: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 134,
    category: "Fashion",
    description: "Handcrafted leather crossbody bag with adjustable strap and multiple compartments.",
    features: ["Genuine Leather", "Adjustable Strap", "Multiple Pockets", "Handcrafted"],
    stock: 18
  },
  {
    id: 15,
    name: "Cotton T-Shirt Set",
    price: 49,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 267,
    category: "Fashion",
    description: "Premium cotton t-shirt set in multiple colors. Soft, breathable, and durable.",
    features: ["100% Cotton", "Multiple Colors", "Breathable", "Pre-shrunk"],
    stock: 75
  },
  {
    id: 16,
    name: "Denim Jacket",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 98,
    category: "Fashion",
    description: "Classic denim jacket with modern fit and vintage wash finish.",
    features: ["Classic Design", "Modern Fit", "Vintage Wash", "Durable"],
    stock: 25
  },
  {
    id: 17,
    name: "Sneakers Collection",
    price: 129,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 189,
    category: "Fashion",
    description: "Comfortable sneakers with breathable mesh and cushioned sole for all-day wear.",
    features: ["Breathable Mesh", "Cushioned Sole", "Lightweight", "Non-Slip"],
    stock: 45
  },
  {
    id: 18,
    name: "Silk Scarf",
    price: 59,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 76,
    category: "Fashion",
    description: "Luxurious silk scarf with elegant patterns. Perfect accessory for any outfit.",
    features: ["100% Silk", "Elegant Patterns", "Versatile", "Hand-rolled Edges"],
    stock: 30
  },
  {
    id: 19,
    name: "Wool Sweater",
    price: 99,
    originalPrice: 139,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 145,
    category: "Fashion",
    description: "Cozy wool sweater with ribbed cuffs and hem. Perfect for cooler weather.",
    features: ["100% Wool", "Ribbed Details", "Soft Texture", "Machine Washable"],
    stock: 35
  },
  {
    id: 20,
    name: "Dress Shoes",
    price: 149,
    image: "https://images.unsplash.com/photo-1549298916-acc8271bd8b4?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 112,
    category: "Fashion",
    description: "Elegant dress shoes crafted from premium leather with cushioned insoles.",
    features: ["Premium Leather", "Cushioned Insole", "Elegant Design", "Durable Sole"],
    stock: 20
  },
  {
    id: 21,
    name: "Baseball Cap",
    price: 29,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 203,
    category: "Fashion",
    description: "Classic baseball cap with adjustable strap and embroidered logo.",
    features: ["Adjustable", "Embroidered Logo", "Cotton Blend", "Pre-curved Brim"],
    stock: 80
  },

  // Home & Garden (10+ items)
  {
    id: 6,
    name: "Premium Coffee Maker",
    price: 249,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 78,
    category: "Home & Garden",
    description: "Brew perfect coffee every time with precision temperature control and programmable settings.",
    features: ["Temperature Control", "Programmable", "Auto Shut-off", "Premium Build"],
    stock: 6
  },
  {
    id: 22,
    name: "Air Purifier",
    price: 199,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 156,
    category: "Home & Garden",
    description: "HEPA air purifier with smart sensors and quiet operation for cleaner indoor air.",
    features: ["HEPA Filter", "Smart Sensors", "Quiet Operation", "Air Quality Display"],
    stock: 25
  },
  {
    id: 23,
    name: "Robot Vacuum",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 289,
    category: "Home & Garden",
    description: "Smart robot vacuum with mapping technology and app control for effortless cleaning.",
    features: ["Smart Mapping", "App Control", "Auto Recharge", "HEPA Filter"],
    stock: 15
  },
  {
    id: 24,
    name: "Essential Oil Diffuser",
    price: 59,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 234,
    category: "Home & Garden",
    description: "Ultrasonic essential oil diffuser with LED lighting and timer settings.",
    features: ["Ultrasonic", "LED Lighting", "Timer Settings", "Auto Shut-off"],
    stock: 40
  },
  {
    id: 25,
    name: "Ceramic Plant Pots Set",
    price: 39,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 167,
    category: "Home & Garden",
    description: "Beautiful ceramic plant pots with drainage holes and matching saucers.",
    features: ["Drainage Holes", "Matching Saucers", "Ceramic Material", "Set of 3"],
    stock: 60
  },
  {
    id: 26,
    name: "LED Desk Lamp",
    price: 79,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 123,
    category: "Home & Garden",
    description: "Adjustable LED desk lamp with touch control and USB charging port.",
    features: ["Touch Control", "USB Charging", "Adjustable", "Eye Protection"],
    stock: 35
  },
  {
    id: 27,
    name: "Kitchen Scale",
    price: 35,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 89,
    category: "Home & Garden",
    description: "Digital kitchen scale with precise measurements and tare function.",
    features: ["Digital Display", "Tare Function", "Multiple Units", "Easy Clean"],
    stock: 50
  },
  {
    id: 28,
    name: "Throw Pillow Set",
    price: 45,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 178,
    category: "Home & Garden",
    description: "Decorative throw pillows with removable covers in modern designs.",
    features: ["Removable Covers", "Modern Design", "Set of 2", "Machine Washable"],
    stock: 45
  },
  {
    id: 29,
    name: "Wall Mirror",
    price: 89,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 98,
    category: "Home & Garden",
    description: "Elegant round wall mirror with metal frame perfect for any room.",
    features: ["Metal Frame", "Round Design", "Easy Mounting", "Quality Glass"],
    stock: 28
  },
  {
    id: 30,
    name: "Garden Tool Set",
    price: 69,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 145,
    category: "Home & Garden",
    description: "Complete garden tool set with ergonomic handles and carrying case.",
    features: ["Ergonomic Handles", "Carrying Case", "Rust Resistant", "Complete Set"],
    stock: 32
  },

  // Sports (10+ items)
  {
    id: 31,
    name: "Yoga Mat",
    price: 39,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 234,
    category: "Sports",
    description: "Non-slip yoga mat with superior cushioning and eco-friendly materials.",
    features: ["Non-Slip", "Eco-Friendly", "Extra Cushioning", "Carrying Strap"],
    stock: 50
  },
  {
    id: 32,
    name: "Resistance Bands Set",
    price: 29,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 189,
    category: "Sports",
    description: "Complete resistance band set with multiple resistance levels and accessories.",
    features: ["Multiple Levels", "Door Anchor", "Handles Included", "Exercise Guide"],
    stock: 75
  },
  {
    id: 33,
    name: "Adjustable Dumbbells",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 167,
    category: "Sports",
    description: "Space-saving adjustable dumbbells with quick-change weight system.",
    features: ["Quick Change", "Space Saving", "Multiple Weights", "Secure Lock"],
    stock: 20
  },
  {
    id: 34,
    name: "Running Shoes",
    price: 119,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 298,
    category: "Sports",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh.",
    features: ["Lightweight", "Responsive Cushioning", "Breathable", "Durable Outsole"],
    stock: 60
  },
  {
    id: 35,
    name: "Water Bottle",
    price: 25,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 345,
    category: "Sports",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    features: ["24hr Cold", "Leak Proof", "BPA Free", "Wide Mouth"],
    stock: 100
  },
  {
    id: 36,
    name: "Jump Rope",
    price: 19,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviewCount: 156,
    category: "Sports",
    description: "Speed jump rope with comfortable handles and adjustable length cable.",
    features: ["Adjustable Length", "Speed Bearings", "Comfortable Grip", "Tangle-Free"],
    stock: 80
  },
  {
    id: 37,
    name: "Foam Roller",
    price: 45,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 123,
    category: "Sports",
    description: "High-density foam roller for muscle recovery and self-massage therapy.",
    features: ["High Density", "Muscle Recovery", "Self Massage", "Durable"],
    stock: 40
  },
  {
    id: 38,
    name: "Exercise Ball",
    price: 35,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 178,
    category: "Sports",
    description: "Anti-burst exercise ball with pump included for core strengthening workouts.",
    features: ["Anti-Burst", "Pump Included", "Multiple Sizes", "Core Training"],
    stock: 55
  },
  {
    id: 39,
    name: "Tennis Racket",
    price: 89,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 89,
    category: "Sports",
    description: "Lightweight tennis racket with oversize head and comfortable grip.",
    features: ["Oversize Head", "Lightweight", "Comfortable Grip", "Pre-strung"],
    stock: 25
  },
  {
    id: 40,
    name: "Basketball",
    price: 29,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 234,
    category: "Sports",
    description: "Official size basketball with superior grip and bounce consistency.",
    features: ["Official Size", "Superior Grip", "Consistent Bounce", "Indoor/Outdoor"],
    stock: 70
  },

  // Beauty (10+ items)
  {
    id: 41,
    name: "Skincare Set",
    price: 79,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 234,
    category: "Beauty",
    description: "Complete skincare routine with cleanser, toner, serum, and moisturizer.",
    features: ["Complete Routine", "All Skin Types", "Natural Ingredients", "Travel Size"],
    stock: 35
  },
  {
    id: 42,
    name: "Makeup Brush Set",
    price: 49,
    originalPrice: 69,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 189,
    category: "Beauty",
    description: "Professional makeup brush set with synthetic bristles and travel case.",
    features: ["Synthetic Bristles", "Travel Case", "Professional Quality", "Set of 12"],
    stock: 45
  },
  {
    id: 43,
    name: "Hair Straightener",
    price: 89,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 167,
    category: "Beauty",
    description: "Ceramic hair straightener with adjustable temperature and fast heating.",
    features: ["Ceramic Plates", "Adjustable Temp", "Fast Heating", "Auto Shut-off"],
    stock: 30
  },
  {
    id: 44,
    name: "Face Mask Set",
    price: 39,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 298,
    category: "Beauty",
    description: "Variety pack of hydrating and purifying face masks for different skin needs.",
    features: ["Variety Pack", "Hydrating", "Purifying", "Natural Extracts"],
    stock: 60
  },
  {
    id: 45,
    name: "Nail Polish Set",
    price: 29,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 145,
    category: "Beauty",
    description: "Collection of long-lasting nail polishes in trendy colors.",
    features: ["Long Lasting", "Trendy Colors", "Quick Dry", "Set of 6"],
    stock: 80
  },
  {
    id: 46,
    name: "Perfume Collection",
    price: 99,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 123,
    category: "Beauty",
    description: "Mini perfume collection featuring different scent profiles for every occasion.",
    features: ["Mini Collection", "Different Scents", "Travel Size", "Premium Quality"],
    stock: 25
  },
  {
    id: 47,
    name: "Lip Balm Set",
    price: 19,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviewCount: 234,
    category: "Beauty",
    description: "Moisturizing lip balm set with natural ingredients and SPF protection.",
    features: ["Natural Ingredients", "SPF Protection", "Moisturizing", "Set of 4"],
    stock: 100
  },
  {
    id: 48,
    name: "Eye Shadow Palette",
    price: 45,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 178,
    category: "Beauty",
    description: "Highly pigmented eyeshadow palette with 12 versatile shades.",
    features: ["Highly Pigmented", "12 Shades", "Blendable", "Long Wearing"],
    stock: 40
  },
  {
    id: 49,
    name: "Facial Cleanser",
    price: 25,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 267,
    category: "Beauty",
    description: "Gentle foaming facial cleanser suitable for all skin types.",
    features: ["Gentle Formula", "All Skin Types", "Foaming", "Removes Makeup"],
    stock: 75
  },
  {
    id: 50,
    name: "Body Lotion",
    price: 35,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 189,
    category: "Beauty",
    description: "Nourishing body lotion with vitamin E and natural moisturizers.",
    features: ["Vitamin E", "Natural Moisturizers", "Non-Greasy", "Fast Absorbing"],
    stock: 65
  },

  // Books (10+ items)
  {
    id: 51,
    name: "Fiction Bestseller",
    price: 15,
    originalPrice: 20,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 567,
    category: "Books",
    description: "Captivating novel that topped bestseller lists worldwide.",
    features: ["Bestseller", "Award Winner", "Paperback", "New Release"],
    stock: 50
  },
  {
    id: 52,
    name: "Self-Help Guide",
    price: 18,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 234,
    category: "Books",
    description: "Practical guide to personal development and success strategies.",
    features: ["Personal Development", "Practical Tips", "Hardcover", "Expert Author"],
    stock: 40
  },
  {
    id: 53,
    name: "Cookbook Collection",
    price: 29,
    originalPrice: 39,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 189,
    category: "Books",
    description: "Complete cookbook with recipes from around the world.",
    features: ["International Recipes", "Step-by-Step", "Color Photos", "Hardcover"],
    stock: 30
  },
  {
    id: 54,
    name: "Science Textbook",
    price: 45,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 145,
    category: "Books",
    description: "Comprehensive science textbook with latest research and discoveries.",
    features: ["Latest Research", "Comprehensive", "Illustrated", "University Level"],
    stock: 25
  },
  {
    id: 55,
    name: "Children's Book Set",
    price: 35,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 298,
    category: "Books",
    description: "Collection of beloved children's stories with colorful illustrations.",
    features: ["Colorful Illustrations", "Age Appropriate", "Set of 5", "Educational"],
    stock: 60
  },
  {
    id: 56,
    name: "History Biography",
    price: 22,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 167,
    category: "Books",
    description: "Fascinating biography of historical figure with rare insights.",
    features: ["Historical Figure", "Rare Insights", "Well Researched", "Paperback"],
    stock: 35
  },
  {
    id: 57,
    name: "Poetry Collection",
    price: 16,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 123,
    category: "Books",
    description: "Beautiful collection of contemporary poetry from award-winning poets.",
    features: ["Contemporary", "Award Winners", "Beautiful Design", "Hardcover"],
    stock: 45
  },
  {
    id: 58,
    name: "Travel Guide",
    price: 24,
    originalPrice: 32,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 201,
    category: "Books",
    description: "Comprehensive travel guide with insider tips and stunning photography.",
    features: ["Insider Tips", "Stunning Photos", "Maps Included", "Updated Edition"],
    stock: 40
  },
  {
    id: 59,
    name: "Mystery Novel",
    price: 17,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 189,
    category: "Books",
    description: "Gripping mystery novel that will keep you guessing until the end.",
    features: ["Page Turner", "Plot Twists", "Paperback", "Series Starter"],
    stock: 55
  },
  {
    id: 60,
    name: "Art Book",
    price: 39,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 98,
    category: "Books",
    description: "Stunning art book featuring masterpieces from renowned artists.",
    features: ["Masterpieces", "High Quality Print", "Coffee Table Book", "Hardcover"],
    stock: 20
  }
];

export const categories = [
  { id: 1, name: "Electronics", count: 124, image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop" },
  { id: 2, name: "Fashion", count: 89, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop" },
  { id: 3, name: "Home & Garden", count: 156, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
  { id: 4, name: "Sports", count: 67, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
  { id: 5, name: "Beauty", count: 43, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" },
  { id: 6, name: "Books", count: 201, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" }
];

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}