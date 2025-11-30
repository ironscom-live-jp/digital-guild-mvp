import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative overflow-hidden pt-24 pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        New: ステーブルコイン決済対応
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
                        地方で働き、<br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent animate-gradient-x">
                            新しい価値をつくる。
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Digital Guild Systemは、地方の短期労働と即時報酬決済を統合したプラットフォームです。
                        あなたのスキルを活かし、好きな場所で自由に働く新しいライフスタイルを。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
                        <Link
                            href="/jobs"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/30 hover:shadow-primary/50"
                        >
                            仕事を探す
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                        </Link>
                        <Link
                            href="#features"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 backdrop-blur-sm hover:border-white/20"
                        >
                            仕組みを知る
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
                <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
}
