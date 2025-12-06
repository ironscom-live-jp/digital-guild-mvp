'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockHubs } from "@/lib/mockData";
import { MapPin, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import Link from "next/link";
import { useParams, notFound } from "next/navigation";

export default function HubDetailPage() {
    const params = useParams();
    const id = params?.id as string;

    // Handle case where params might be not ready yet (though in page it should be)
    if (!id) return null;

    const hub = mockHubs.find(h => h.id === id);

    if (!hub) {
        notFound();
    }

    // Extract city name for job search (e.g., "長野県 松本市" -> "松本市")
    const searchLocation = hub.location.split(' ').pop() || hub.location;

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow relative">
                {/* Hero Image */}
                <div className="relative h-[50vh] min-h-[400px]">
                    <img
                        src={hub.imageUrl}
                        alt={hub.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full p-8 pb-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <MapPin className="h-5 w-5" />
                                        <span className="font-medium">{hub.location}</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{hub.name}</h1>
                                    <div className="flex flex-wrap gap-3">
                                        {hub.amenities.map((amenity) => (
                                            <span key={amenity} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm rounded-full border border-white/20">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="text-gray-400 text-sm mb-1">1泊あたり</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-primary">{hub.priceSc.toLocaleString()}</span>
                                        <span className="text-xl font-bold text-white">SC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Details */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Star className="h-6 w-6 text-primary" />
                                    このハブについて
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                    {hub.description}
                                    {/* Mock extended description */}
                                    <br /><br />
                                    地元のコミュニティと深く関わることができる、新しいタイプの滞在拠点です。
                                    コワーキングスペースを完備しており、リモートワークにも最適。
                                    週末には地元の農家さんとの交流イベントなども開催されています。
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">設備・アメニティ</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {hub.amenities.map((amenity) => (
                                        <div key={amenity} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                            <span className="text-gray-200">{amenity}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span className="text-gray-200">24時間出入り自由</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span className="text-gray-200">長期滞在割引</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Actions */}
                        <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-24">
                                <h3 className="text-xl font-bold text-white mb-6">予約・アクション</h3>

                                <button
                                    className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-primary/20 mb-4 flex items-center justify-center gap-2"
                                    onClick={() => alert('予約機能はデモ版では利用できません')} // In a real app, this would open a modal or redirect
                                >
                                    このハブを予約する
                                </button>

                                <div className="relative py-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/10"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-background px-2 text-sm text-gray-500">または</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-400 mb-4">
                                    この地域の仕事を探して、滞在費を稼ぎませんか？
                                </p>

                                <Link
                                    href={`/jobs?search=${searchLocation}`}
                                    className="w-full bg-white/10 border border-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    この周辺の仕事を探す
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
