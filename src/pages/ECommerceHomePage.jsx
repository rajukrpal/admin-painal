import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, Star, ArrowRight, ChevronLeft, ChevronRight, Truck, Shield, Headphones, RefreshCw } from 'lucide-react';

const ECommerceHomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(0);

    const heroSlides = [
        {
            id: 1,
            title: "Summer Collection 2024",
            subtitle: "Discover the Latest Trends",
            description: "Up to 50% off on selected items",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
            cta: "Shop Now"
        },
        {
            id: 2,
            title: "Tech Gadgets",
            subtitle: "Innovation at Your Fingertips",
            description: "Latest smartphones, laptops & accessories",
            image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&h=600&fit=crop",
            cta: "Explore Tech"
        },
        {
            id: 3,
            title: "Home & Living",
            subtitle: "Transform Your Space",
            description: "Elegant furniture and decor items",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
            cta: "Shop Home"
        }
    ];

    const categories = [
        { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop", items: "2.5k+ items" },
        { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop", items: "1.8k+ items" },
        { name: "Home & Garden", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop", items: "1.2k+ items" },
        { name: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop", items: "900+ items" },
        { name: "Books", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop", items: "1.5k+ items" },
        { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop", items: "800+ items" }
    ];

    const featuredProducts = [
        { id: 1, name: "Wireless Headphones", price: 199, originalPrice: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", rating: 4.5, reviews: 128 },
        { id: 2, name: "Smart Watch", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop", rating: 4.8, reviews: 256 },
        { id: 3, name: "Laptop Backpack", price: 89, originalPrice: 129, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", rating: 4.3, reviews: 89 },
        { id: 4, name: "Coffee Maker", price: 159, originalPrice: 199, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop", rating: 4.6, reviews: 167 },
        { id: 5, name: "Smartphone", price: 699, originalPrice: 899, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", rating: 4.7, reviews: 342 },
        { id: 6, name: "Running Shoes", price: 129, originalPrice: 179, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", rating: 4.4, reviews: 198 }
    ];

    const deals = [
        { id: 1, title: "Flash Sale", subtitle: "Up to 70% Off", timeLeft: "12:34:56", bgColor: "bg-gradient-to-r from-red-500 to-pink-500" },
        { id: 2, title: "Weekend Deal", subtitle: "Buy 2 Get 1 Free", timeLeft: "2 Days Left", bgColor: "bg-gradient-to-r from-blue-500 to-purple-500" },
        { id: 3, title: "New Arrivals", subtitle: "Fresh Stock", timeLeft: "Just Added", bgColor: "bg-gradient-to-r from-green-500 to-teal-500" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    return (
        <div className=" bg-gray-50 h-[93vh] overflow-y-scroll scrollbar-custom p-4">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                {/* Top Bar */}
                <div className="bg-black text-white text-sm py-2">
                    <div className="container mx-auto px-4 text-center">
                        Free shipping on orders over $50 | 24/7 Customer Support
                    </div>
                </div>

                {/* Main Header */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-blue-600">ShopHub</div>

                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                            <div className="relative w-full flex">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Header Icons */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                                <Heart size={24} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                                <ShoppingCart size={24} />
                                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <User size={24} />
                            </button>
                            <button
                                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="md:hidden mt-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-2 top-2 text-gray-400">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className={`bg-gray-800 text-white ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="container mx-auto px-4">
                        <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
                            <li><a href="#" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Categories</a></li>
                            <li><a href="#" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Deals</a></li>
                            <li><a href="#" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Brand</a></li>
                            <li><a href="#" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative h-96 md:h-[500px] overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                            }`}
                    >
                        <div className="relative h-full">
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-40" />
                            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                                <div className="max-w-2xl px-4">
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                                    <p className="text-xl md:text-2xl mb-2">{slide.subtitle}</p>
                                    <p className="text-lg mb-8">{slide.description}</p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105">
                                        {slide.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Features Bar */}
            <section className="bg-white py-8 border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center space-x-3 p-4">
                            <Truck className="text-blue-600" size={32} />
                            <div>
                                <h3 className="font-semibold text-sm md:text-base">Free Shipping</h3>
                                <p className="text-gray-600 text-xs md:text-sm">On orders over $50</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3 p-4">
                            <Shield className="text-green-600" size={32} />
                            <div>
                                <h3 className="font-semibold text-sm md:text-base">Secure Payment</h3>
                                <p className="text-gray-600 text-xs md:text-sm">100% Protected</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3 p-4">
                            <Headphones className="text-purple-600" size={32} />
                            <div>
                                <h3 className="font-semibold text-sm md:text-base">24/7 Support</h3>
                                <p className="text-gray-600 text-xs md:text-sm">Always here to help</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3 p-4">
                            <RefreshCw className="text-orange-600" size={32} />
                            <div>
                                <h3 className="font-semibold text-sm md:text-base">Easy Returns</h3>
                                <p className="text-gray-600 text-xs md:text-sm">30-day policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
                        <p className="text-gray-600 text-lg">Discover our wide range of products</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                                onMouseEnter={() => setCurrentCategory(index)}
                            >
                                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 transform group-hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-32 md:h-40 object-cover group-hover:brightness-110 transition-all duration-300"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                                    <p className="text-gray-500 text-sm">{category.items}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deals Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Today's Deals</h2>
                        <p className="text-gray-600 text-lg">Limited time offers you can't miss</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {deals.map((deal) => (
                            <div key={deal.id} className={`${deal.bgColor} rounded-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300`}>
                                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                                <p className="text-lg mb-4">{deal.subtitle}</p>
                                <div className="bg-black bg-opacity-20 rounded-lg p-3 mb-4">
                                    <span className="text-xl font-mono">{deal.timeLeft}</span>
                                </div>
                                <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
                            <p className="text-gray-600 text-lg">Handpicked items just for you</p>
                        </div>
                        <button className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                            <span>View All</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Heart size={16} className="text-gray-600 hover:text-red-500" />
                                    </button>
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                                    </div>

                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <span className="text-lg font-bold text-gray-800">${product.price}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors transform hover:scale-105">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get exclusive deals, new product updates, and shopping tips delivered to your inbox.</p>

                    <div className="max-w-md mx-auto flex">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">ShopHub</h3>
                            <p className="text-gray-400 mb-4">Your one-stop destination for quality products at unbeatable prices.</p>
                            <div className="flex space-x-4">
                                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors">
                                    <div className="w-5 h-5 bg-blue-500 rounded"></div>
                                </button>
                                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors">
                                    <div className="w-5 h-5 bg-pink-500 rounded"></div>
                                </button>
                                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors">
                                    <div className="w-5 h-5 bg-blue-400 rounded"></div>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Categories</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Customer Service</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 ShopHub. All rights reserved. | Privacy Policy | Terms of Service</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ECommerceHomePage;