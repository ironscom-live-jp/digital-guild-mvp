'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletCard from "@/components/dashboard/WalletCard";
import HubProgress from "@/components/dashboard/HubProgress";
import ActiveJobs from "@/components/dashboard/ActiveJobs";
export default function DashboardPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow py-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black text-white">マイページ</h1>
                        <p className="text-gray-400 mt-2">
                            ようこそ、山田 太郎さん。現在のステータスを確認しましょう。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Wallet & Stats */}
                        <div className="lg:col-span-2 space-y-8">
                            <WalletCard />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                    <div className="text-gray-400 text-sm mb-1">今月の稼働時間</div>
                                    <div className="text-2xl font-bold text-white">24.5 <span className="text-sm font-normal text-gray-500">時間</span></div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                    <div className="text-gray-400 text-sm mb-1">信頼スコア</div>
                                    <div className="text-2xl font-bold text-primary">85 <span className="text-sm font-normal text-gray-500">/ 100</span></div>
                                </div>
                            </div>

                            <ActiveJobs />
                        </div>

                        {/* Right Column: Hub & Notifications */}
                        <div className="space-y-8">
                            <HubProgress />

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h3 className="font-bold text-white mb-4">お知らせ</h3>
                                <ul className="space-y-4">
                                    <li className="text-sm text-gray-300 pb-3 border-b border-white/5">
                                        <span className="block text-xs text-gray-500 mb-1">2025.06.01</span>
                                        「高原野菜の収穫」の応募が承認されました。
                                    </li>
                                    <li className="text-sm text-gray-300 pb-3 border-b border-white/5">
                                        <span className="block text-xs text-gray-500 mb-1">2025.05.30</span>
                                        新しいハブ「松本ベース」がオープンしました。
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
