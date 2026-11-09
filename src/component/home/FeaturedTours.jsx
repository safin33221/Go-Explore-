import React, { useState } from 'react';
import { MapPin, Clock, Star, Flame, ArrowUpRight, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { FEATURED_TOURS } from '../../data/tours-data';
import { Link } from 'react-router';



const HIGHLIGHTS = [
    {
        icon: <Compass className="w-6 h-6 text-emerald-500" />,
        title: 'Handcrafted Itineraries',
        desc: 'Each trip is designed by destination specialists to skip the crowded traps.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
        title: '100% Verified Safety',
        desc: 'Inspected lodgings, licensed mountain leaders, and round-the-clock emergency care.',
    },
    {
        icon: <HeartHandshake className="w-6 h-6 text-emerald-500" />,
        title: 'Transparent Pricing',
        desc: 'Zero hidden booking fees. What you see is exactly what your adventure costs.',
    },
];

export default function FeaturedTours() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Mountain Escapes', 'Coastal Journeys', 'Cultural Treks'];

    return (
        <section className="py-24 bg-gray-50 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                            <Flame className="w-3.5 h-3.5 fill-emerald-600" />
                            Handpicked Trips
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                            Popular <span className="text-emerald-600">Destinations</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl text-sm sm:text-base font-light">
                            Carefully scouted routes designed for authentic culture, panoramic scenery, and effortless travel.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${activeFilter === filter
                                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_TOURS.map((tour) => (
                        <div
                            key={tour.id}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Image & Badges */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-gray-950/75 backdrop-blur-md text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                                    {tour.tag}
                                </span>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow-sm">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span>{tour.rating}</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-2">
                                        <span className="flex items-center gap-1 text-emerald-600 font-medium">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {tour.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {tour.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                                        {tour.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">Based on {tour.reviews} guest reviews</p>
                                </div>

                                {/* Footer Pricing & CTA */}
                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">Starts at</span>
                                        <span className="text-2xl font-black text-gray-900">${tour.price}</span>
                                    </div>

                                    <Link to={`/tours/${tour.id}`}>
                                        <button className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition duration-200">
                                            <span>Details</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Value Proposition Highlights Banner */}
                <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                    {HIGHLIGHTS.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="p-3 bg-emerald-50 rounded-2xl flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}