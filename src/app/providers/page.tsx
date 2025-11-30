import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Users, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProvidersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-0"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                                人手不足を、<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">デジタルの力</span>で解決する。
                            </h1>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                                Digital Guild Systemは、意欲あるワーカーと地域事業者を<br />
                                即座につなぐ新しいプラットフォームです。<br />
                                募集から支払いまで、すべてをワンストップで。
                            </p>
                            <Link
                                href="/jobs/new"
                                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
                            >
                                求人を掲載する（無料）
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="py-24 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                                    <Users className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">即戦力と出会える</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    評価システムにより、信頼できるワーカーを事前に確認。
                                    必要なスキルを持った人材にピンポイントでアプローチできます。
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                                <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <Zap className="h-7 w-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">手続きは一瞬</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    契約から報酬の支払いまで、スマートコントラクトで自動化。
                                    煩雑な事務作業から解放され、本業に集中できます。
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                                <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="h-7 w-7 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">安心のサポート</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    万が一のトラブルにも運営がしっかりサポート。
                                    本人確認済みのユーザーのみが参加する安全なコミュニティです。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
