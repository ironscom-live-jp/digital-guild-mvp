import Link from 'next/link';
import { Wallet } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black/30 border-t border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-gradient-to-br from-primary to-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-500/20">
                                <Wallet className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-bold text-lg text-white">Digital Guild</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            地方の短期労働とステーブルコイン決済を統合し、
                            新しい働き方と地域活性化を実現するプラットフォーム。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">サービス</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/jobs" className="hover:text-primary transition-colors">仕事を探す</Link></li>
                            <li><Link href="/hubs" className="hover:text-primary transition-colors">ハブ一覧</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">SCウォレット</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">サポート</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">ヘルプセンター</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">利用規約</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">プライバシーポリシー</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Digital Guild System. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
