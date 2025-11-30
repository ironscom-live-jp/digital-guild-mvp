'use client';

import { useWallet } from '@/context/WalletContext';
import { Home, CheckCircle2 } from 'lucide-react';

export default function HubProgress() {
    const { balanceSc } = useWallet();

    // Demo logic: Daily hub cost is 3000 SC
    const dailyCost = 3000;
    const progress = Math.min((balanceSc / dailyCost) * 100, 100);
    const remaining = Math.max(dailyCost - balanceSc, 0);

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/20 p-2 rounded-lg border border-accent/20">
                    <Home className="h-5 w-5 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-white">ハブ滞在費相殺</h3>
                    <p className="text-xs text-gray-400">今日の宿泊費: {dailyCost.toLocaleString()} SC</p>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">{Math.round(progress)}% 達成</span>
                    <span className="text-gray-500">残り {remaining.toLocaleString()} SC</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-accent to-purple-500 transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {progress >= 100 ? (
                <div className="flex items-center gap-2 text-primary text-sm font-bold bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <CheckCircle2 className="h-4 w-4" />
                    今日の宿泊費は無料です！
                </div>
            ) : (
                <div className="text-sm text-gray-400">
                    あと <span className="font-bold text-accent">{remaining.toLocaleString()} SC</span> 稼ぐと、
                    今日のハブ滞在費が無料になります。
                </div>
            )}
        </div>
    );
}
