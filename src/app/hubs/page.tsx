import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockHubs } from "@/lib/mockData";
import { MapPin, Wifi, Coffee, Car, Bath } from 'lucide-react';
import Link from "next/link";

export default function HubsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow py-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-black text-white mb-6 tracking-tight">滞在先（ハブ）を探す</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            仕事の拠点となる快適な滞在先。ステーブルコインで即時決済可能。<br />
                            稼いだ報酬で、その日の宿代を支払おう。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockHubs.map((hub) => (
                            <div key={hub.id} className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                                <div className="h-56 bg-gray-900 relative overflow-hidden">
                                    <img
                                        src={hub.imageUrl}
                                        alt={hub.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl font-bold text-primary border border-primary/30 shadow-lg">
                                        {hub.priceSc.toLocaleString()} SC / 泊
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{hub.name}</h3>
                                    <div className="flex items-center text-sm text-gray-400 gap-2 mb-4">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {hub.location}
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                        {hub.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {hub.amenities.map((amenity) => (
                                            <span key={amenity} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/10">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/hubs/${hub.id}`}
                                        className="block w-full text-center bg-white/10 border border-white/10 text-white py-3 rounded-xl font-bold hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
                                    >
                                        詳細・予約
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
