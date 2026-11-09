import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

export default function Hero() {
    const [destination, setDestination] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', destination);
    };

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
                    alt="Scenic mountain landscape"
                    className="w-full h-full object-cover object-center scale-105 "
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text & Call to Action */}
                    <div className="lg:col-span-7 space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            Explore the Unseen World
                        </span>

                        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                            Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Great Adventure</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl font-light">
                            Embark on unforgettable journeys. Handcrafted tours, expert local guides, and breathtaking destinations await your discovery.
                        </p>

                        {/* Quick Search Bar Widget */}
                        <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-2xl max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-emerald-500 transition-colors">
                                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <div className="w-full text-left">
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
                                    <input
                                        type="text"
                                        placeholder="Where are you going?"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        className="w-full bg-transparent text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
                            >
                                <Search className="w-5 h-5" />
                                <span>Search Tours</span>
                            </button>
                        </form>

                        {/* Trust Stats */}
                        <div className="pt-6 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 border-t border-white/10">
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-white">4.9/5</p>
                                <p className="text-xs text-gray-300 font-medium">Over 2,000+ Reviews</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-white">150+</p>
                                <p className="text-xs text-gray-300 font-medium">Curated Destinations</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
                                <p className="text-xs text-gray-300 font-medium">Dedicated Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Floating Feature Card (Desktop Only) */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <div className="relative mx-auto w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
                                alt="Featured Trip"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Featured Package</span>
                                <h3 className="text-xl font-bold text-white mb-2">Swiss Alps Winter Escape</h3>
                                <div className="flex items-center justify-between text-white/90 text-sm">
                                    <span>7 Days / 6 Nights</span>
                                    <span className="font-bold text-emerald-400">From $1,299</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}