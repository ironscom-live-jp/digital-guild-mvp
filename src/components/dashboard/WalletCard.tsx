'use client';

import { useWallet } from '@/context/WalletContext';
import { Wallet, ArrowUpRight, CreditCard } from 'lucide-react';

export default function WalletCard() {
    const { balanceSc, balanceJpy } = useWallet();

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden border border-white/10">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                        <Wallet className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">SC Wallet</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold border border-primary/20 animate-pulse">
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        即時出金可能
                    </div>
                </div>

                <div className="mb-8">
                    <div className="text-gray-400 text-sm mb-1">Total Balance</div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight text-white">{balanceSc.toLocaleString()}</span>
                        <span className="text-xl text-primary font-medium">SC</span>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                        ≈ ¥{balanceJpy.toLocaleString()} (未確定) + ¥{balanceSc.toLocaleString()} (SC)
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-emerald-400 text-black py-2.5 rounded-xl font-bold transition-colors shadow-lg shadow-primary/20">
                        <ArrowUpRight className="h-4 w-4" />
                        出金する
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl font-bold transition-colors backdrop-blur-sm border border-white/10">
                        <CreditCard className="h-4 w-4" />
                        チャージ
                    </button>
                </div>
            </div>
        </div>
    );
}
