import { useParams, Link } from "react-router";
import { FEATURED_TOURS } from "../data/tours-data";
import { MapPin, Clock, Star, DollarSign, ArrowLeft, ShieldCheck, Calendar, Users } from "lucide-react";

const TourDetails = () => {
    // 1. Get the dynamic parameter from the route (matching your route definition, e.g., /tours/:xyz)
    const { xyz } = useParams();

    // 2. Convert xyz to a number and properly compare using strict equality (===)
    const singleTour = FEATURED_TOURS.find((tour) => tour.id == xyz);

    //   type 
    //  == type check kore nah 
    // === type checked 

   
  if (!singleTour) {
    return (
      <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-16 h-16 bg-rose-500/10 text-rose-400 rounded-2xl flex items-center justify-center mb-4 border border-rose-500/20">
          <MapPin className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Tour Not Found</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          The tour you are looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

    return (
        <div className="min-h-screen bg-[#111827] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Back Button */}
                <div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors bg-[#1f2937]/60 border border-gray-700/60 px-4 py-2 rounded-xl"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Tours</span>
                    </Link>
                </div>

                {/* Tour Header Banner */}
                <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl bg-[#1f2937]">
                    <div className="relative h-72 sm:h-96 w-full">
                        <img
                            src={singleTour.image}
                            alt={singleTour.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>

                        {/* Tag Badge */}
                        {singleTour.tag && (
                            <span className="absolute top-4 right-4 px-3.5 py-1.5 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                {singleTour.tag}
                            </span>
                        )}
                    </div>

                    <div className="p-6 sm:p-8 relative -mt-20 space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-400 font-medium">
                            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                                <MapPin className="w-4 h-4" />
                                {singleTour.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-lg text-gray-300">
                                <Clock className="w-4 h-4 text-emerald-400" />
                                {singleTour.duration}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {singleTour.title}
                        </h1>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-700/60">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                                    <span className="text-white font-semibold text-lg">{singleTour.rating}</span>
                                    <span className="text-gray-400 text-sm">({singleTour.reviews} reviews)</span>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-1">
                                <span className="text-sm text-gray-400">From</span>
                                <span className="text-3xl font-extrabold text-emerald-400">${singleTour.price}</span>
                                <span className="text-xs text-gray-400">/ person</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action / Booking Card Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#1f2937]/90 border border-gray-700/60 rounded-2xl p-6 sm:p-8 space-y-4">
                            <h3 className="text-xl font-bold text-white">About this experience</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Experience the breathtaking views and unmatched adventure of the {singleTour.title}.
                                Immerse yourself fully in the local scenery of {singleTour.location} with our carefully curated itinerary designed for unforgettable memories.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                                <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl">
                                    <Calendar className="w-5 h-5 text-emerald-400 mb-2" />
                                    <div className="text-xs text-gray-400">Duration</div>
                                    <div className="text-sm font-semibold text-white">{singleTour.duration}</div>
                                </div>
                                <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl">
                                    <Users className="w-5 h-5 text-emerald-400 mb-2" />
                                    <div className="text-xs text-gray-400">Group Type</div>
                                    <div className="text-sm font-semibold text-white">Small Group</div>
                                </div>
                                <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl col-span-2 sm:col-span-1">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                                    <div className="text-xs text-gray-400">Safety</div>
                                    <div className="text-sm font-semibold text-white">Certified Guides</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="bg-[#1f2937]/90 border border-gray-700/60 rounded-2xl p-6 h-fit space-y-6">
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total Price</span>
                            <div className="text-3xl font-bold text-white mt-1">${singleTour.price} <span className="text-sm font-normal text-gray-400">/ person</span></div>
                        </div>

                        <hr className="border-gray-700/60" />

                        <button
                            onClick={() => alert(`Booking initiated for ${singleTour.title}!`)}
                            className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-center"
                        >
                            Book This Tour Now
                        </button>

                        <p className="text-xs text-center text-gray-400">
                            Free cancellation up to 48 hours before the experience starts.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourDetails;