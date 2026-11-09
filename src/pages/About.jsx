import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, Award, Users, Globe2, Sparkles, ArrowRight } from 'lucide-react';

export default function About() {
    const stats = [
        { label: 'Happy Travelers', value: '45K+' },
        { label: 'Destinations Worldwide', value: '120+' },
        { label: 'Certified Tour Guides', value: '80+' },
        { label: 'Years of Experience', value: '10+' },
    ];

    const values = [
        {
            icon: <Compass className="w-7 h-7 text-emerald-500" />,
            title: 'Curated Itineraries',
            description: 'Every trail, stay, and meal is hand-picked to deliver authentic, immersion-first experiences away from tourist traps.',
        },
        {
            icon: <ShieldCheck className="w-7 h-7 text-emerald-500" />,
            title: 'Safety & Trust First',
            description: 'Your safety is our top priority. We partner only with licensed operators and verified local guides worldwide.',
        },
        {
            icon: <HeartHandshake className="w-7 h-7 text-emerald-500" />,
            title: 'Eco-Friendly Tourism',
            description: 'We invest directly into local communities and practice zero-waste principles to protect the places we love exploring.',
        },
    ];

    const team = [
        {
            name: 'Alex Johnson',
            role: 'Founder & Expedition Lead',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        },
        {
            name: 'Elena Rostova',
            role: 'Head of Destination Research',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        },
        {
            name: 'David Silva',
            role: 'Lead Trekking Specialist',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* 1. Header Hero Banner */}
            <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
                        alt="Travel background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-5xl mx-auto px-6 text-center space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                        <Sparkles className="w-3.5 h-3.5" /> Our Story
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Crafting Journeys That Turn Into <span className="text-emerald-400">Lifelong Memories</span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        At Go Explore, travel is more than ticking off destinations—it is about genuine discovery, respecting nature, and collecting untamed adventures.
                    </p>
                </div>
            </section>

            {/* 2. Brand Story Split Section */}
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
                                alt="Hikers looking at view"
                                className="w-full h-[450px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-3xl -z-0 hidden sm:block" />
                    </div>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                            <Globe2 className="w-4 h-4" /> Who We Are
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                            A Passionate Collective of Explorers, Guides, and Storytellers
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded over a decade ago by a small crew of backcountry hikers, Go Explore grew out of a simple frustration: typical vacations were becoming repetitive, rushed, and detached from local culture.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We decided to do things differently. By collaborating closely with native communities and scouting hidden gems ourselves, we offer personalized journeys designed for authentic, stress-free travel.
                        </p>

                        <div className="pt-2">
                            <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition duration-200 shadow-md shadow-emerald-600/20">
                                Explore Our Packages
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Numbers & Statistics Strip */}
            {/* <section className="bg-gray-50 py-16 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((item, index) => (
                            <div key={index} className="space-y-1">
                                <p className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">{item.value}</p>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 4. Core Values */}
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="text-3xl font-bold text-gray-900">Why Travel With Us?</h2>
                    <p className="text-gray-600">The core standards we uphold across every expedition we design.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >
                            <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-5">{val.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Team / Guides Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                        <h2 className="text-3xl font-bold text-gray-900">Meet The Expedition Team</h2>
                        <p className="text-gray-600">Veteran adventurers dedicated to guiding your travel journey.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
                                <div className="p-6 text-center">
                                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                                    <p className="text-sm text-emerald-600 font-medium mt-1">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Call to Action Banner */}
            <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-emerald-600 rounded-3xl p-10 md:p-14 text-center text-white space-y-6 shadow-xl shadow-emerald-700/20">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to Begin Your Next Adventure?</h2>
                    <p className="text-emerald-100 max-w-xl mx-auto font-light">
                        Contact our tour coordinators today to plan a custom itinerary tailored specifically to your group.
                    </p>
                    <div>
                        <button className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold px-8 py-3.5 rounded-xl transition duration-200 shadow-md">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}