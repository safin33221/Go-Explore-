import React, { useState } from 'react';
import { Star, Quote, Send, CheckCircle2, Sparkles } from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        location: 'London, UK',
        role: 'Solo Explorer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
        comment:
            'The Swiss Alps trek was meticulously organized. Our local guide knew every scenic detour away from crowded trails. Truly an unforgettable adventure!',
        trip: 'Swiss Alps Panorama',
        rating: 5,
    },
    {
        id: 2,
        name: 'Marcus Vance',
        location: 'California, USA',
        role: 'Adventure Photographer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        comment:
            'Zero hidden fees, top-tier accommodations, and genuine cultural immersion. Go Explore sets a standard most travel companies can only dream of matching.',
        trip: 'Kyoto Bamboo Forest',
        rating: 5,
    },
    {
        id: 3,
        name: 'Amara & Daniel',
        location: 'Melbourne, Australia',
        role: 'Honeymoon Travelers',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        comment:
            'Booking our Greece coastal trip was effortless. The sunset boat excursion they arranged was the undisputed highlight of our entire trip.',
        trip: 'Santorini Sunset Odyssey',
        rating: 5,
    },
];

export default function TestimonialsCTA() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="py-24 bg-white text-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* 1. Testimonials Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        Traveler Stories
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                        Loved by Over <span className="text-emerald-600">45,000+</span> Explorers
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-light">
                        Real stories from adventurers who traded standard tourist itineraries for authentic, guided journeys.
                    </p>
                </div>

                {/* 2. Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className="relative bg-gray-50/80 hover:bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <Quote className="w-10 h-10 text-emerald-500/20 absolute top-6 right-6" />

                            <div className="space-y-4">
                                {/* Star Ratings */}
                                <div className="flex gap-1 text-amber-400">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                                    "{review.comment}"
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-200/60">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-400">{review.location} • <span className="text-emerald-600 font-medium">{review.trip}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. High-Converting Newsletter / Promo Banner */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white p-8 sm:p-14 border border-gray-800 shadow-2xl">
                    {/* Subtle Ambient Glow */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Promo Copy */}
                        <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-white/10">
                                Exclusive Community
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                                Get <span className="text-emerald-400">$100 Off</span> Your First Tour Booking
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base font-light max-w-xl mx-auto lg:mx-0">
                                Subscribe to our weekly dispatch for secret route drops, early-bird expedition access, and seasonal travel perks.
                            </p>
                        </div>

                        {/* Email Form */}
                        <div className="lg:col-span-5 w-full">
                            {subscribed ? (
                                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-4 rounded-2xl flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                                    <p className="text-sm font-medium">Check your inbox! Your $100 promo code is on its way.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address..."
                                        className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-400 transition"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
                                    >
                                        <span>Claim Deal</span>
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}