import React, { useState } from 'react';

import { Compass, Menu, X, User, Globe } from 'lucide-react';
import { Link } from 'react-router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="p-2.5 rounded-2xl bg-emerald-600 group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30">
                        <Compass className="w-5 h-5 text-white animate-spin-slow" />
                    </div>
                    <span className="text-xl font-black tracking-tight text-white">
                        Go<span className="text-emerald-400">Explore</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
                    <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                    <Link to="/explore" className="text-emerald-400 font-semibold">Explore</Link>
                    <Link to="/destinations" className="hover:text-emerald-400 transition-colors">Destinations</Link>
                    <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
                </nav>

                {/* Right Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-xl transition">
                        <Globe className="w-4 h-4 text-emerald-400" />
                        <span>EN / USD</span>
                    </button>

                    <Link
                        to="/login"
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-[1.02]"
                    >
                        <User className="w-4 h-4" />
                        <span>Login</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-gray-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 space-y-5 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col space-y-4 font-medium text-base text-gray-200">
                        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-emerald-400 transition">Home</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-emerald-400 transition">About</Link>
                        <Link to="/explore" onClick={() => setIsOpen(false)} className="text-emerald-400 font-semibold">Explore</Link>
                        <Link to="/destinations" onClick={() => setIsOpen(false)} className="hover:text-emerald-400 transition">Destinations</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-emerald-400 transition">Contact</Link>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-gray-400">Currency: USD ($)</span>
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition"
                        >
                            <User className="w-4 h-4" />
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}