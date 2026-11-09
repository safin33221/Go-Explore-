import React, { useState } from 'react';
import {
    Search,
    MapPin,
    Clock,
    Star,
    Heart,
    SlidersHorizontal,
    Sparkles,
    Compass,
    ChevronRight,
    TrendingUp
} from 'lucide-react';

const CATEGORIES = ['All', 'Mountains', 'Beaches', 'Cultural', 'Wildlife', 'Desert'];

const TOURS_DATA = [
    {
        id: 1,
        title: 'Swiss Alpine Panorama Trek',
        category: 'Mountains',
        location: 'Zermatt, Switzerland',
        price: 1290,
        duration: '7 Days',
        rating: 4.95,
        reviews: 142,
        badge: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Tropical Bali Coastal Retreat',
        category: 'Beaches',
        location: 'Uluwatu, Indonesia',
        price: 850,
        duration: '5 Days',
        rating: 4.88,
        reviews: 98,
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Kyoto Ancient Temples & Tea Trails',
        category: 'Cultural',
        location: 'Kyoto, Japan',
        price: 1100,
        duration: '6 Days',
        rating: 4.92,
        reviews: 215,
        badge: 'Cultural Pick',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Sahara Golden Dunes Expedition',
        category: 'Desert',
        location: 'Merzouga, Morocco',
        price: 740,
        duration: '4 Days',
        rating: 4.79,
        reviews: 84,
        badge: 'Adventure',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        title: 'Serengeti Big Five Safari Adventure',
        category: 'Wildlife',
        location: 'Serengeti, Tanzania',
        price: 2100,
        duration: '8 Days',
        rating: 4.98,
        reviews: 178,
        badge: 'Top Rated',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 6,
        title: 'Amalfi Coast Scenic Cliff Walk',
        category: 'Beaches',
        location: 'Positano, Italy',
        price: 1450,
        duration: '6 Days',
        rating: 4.86,
        reviews: 112,
        badge: 'Trending',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    },
];

export default function Explore() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [sortBy, setSortBy] = useState('popular');

    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Filter & Sort Logic
    const filteredTours = TOURS_DATA.filter((tour) => {
        const matchesCategory =
            selectedCategory === 'All' || tour.category === selectedCategory;
        const matchesSearch =
            tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tour.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    }).sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // Default
    });

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
            {/* 1. Header Banner */}
            <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white pt-20 pb-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        Curated Expeditions
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                        Explore All <span className="text-emerald-400">Destinations</span>
                    </h1>
                    <p className="text-gray-300 text-base max-w-2xl mx-auto font-light">
                        Find and book guided tours, scenic treks, and weekend getaways crafted for authentic wanderlust.
                    </p>
                </div>
            </section>

            {/* 2. Sticky Filter & Search Control Panel */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
                <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 sm:p-5 border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">

                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search by city, country or tour..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                        <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:border-emerald-500"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 3. Tours Grid Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-medium text-gray-500">
                        Showing <span className="font-bold text-gray-900">{filteredTours.length}</span> adventures
                    </p>
                </div>

                {filteredTours.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTours.map((tour) => {
                            const isLiked = wishlist.includes(tour.id);
                            return (
                                <div
                                    key={tour.id}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                                >
                                    {/* Card Media Header */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Badge */}
                                        <span className="absolute top-4 left-4 bg-gray-950/70 backdrop-blur-md text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                                            {tour.badge}
                                        </span>

                                        {/* Wishlist Button */}
                                        <button
                                            onClick={() => toggleWishlist(tour.id)}
                                            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm hover:bg-white text-gray-700 transition"
                                            aria-label="Save to wishlist"
                                        >
                                            <Heart
                                                className={`w-4 h-4 transition ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                        <div>
                                            {/* Location & Duration Strip */}
                                            <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-2">
                                                <span className="flex items-center gap-1 text-emerald-600">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {tour.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {tour.duration}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                                                {tour.title}
                                            </h3>

                                            {/* Ratings */}
                                            <div className="flex items-center gap-1.5 mt-2">
                                                <div className="flex items-center text-amber-500">
                                                    <Star className="w-4 h-4 fill-amber-400" />
                                                    <span className="text-xs font-bold ml-1 text-gray-900">
                                                        {tour.rating}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-gray-400">
                                                    ({tour.reviews} reviews)
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Footer: Price & CTA */}
                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-gray-400 font-medium">Starting from</span>
                                                <p className="text-xl font-extrabold text-gray-900">
                                                    ${tour.price}
                                                    <span className="text-xs font-normal text-gray-500"> /person</span>
                                                </p>
                                            </div>

                                            <button className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition duration-200 shadow-md shadow-emerald-600/20">
                                                View Details
                                                <ChevronRight className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Empty Search State */
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <Compass className="w-12 h-12 text-gray-300 mx-auto mb-3 animate-bounce" />
                        <h3 className="text-lg font-semibold text-gray-900">No destinations found</h3>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto mt-1">
                            We couldn't find any trips matching "{searchQuery}". Try selecting another category or clear your search.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('All');
                            }}
                            className="mt-5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}