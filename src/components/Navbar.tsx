'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Wallet, Menu, Loader2, LogOut } from 'lucide-react';
import { useWallet } from '@/context/WalletContext';

export default function Navbar() {
    const { isConnected, isConnecting, walletAddress, connectWallet, disconnectWallet, balanceSc } = useWallet();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-gradient-to-br from-primary to-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-500/20">
                                <Wallet className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                Digital Guild
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/jobs" className="text-gray-300 hover:text-primary transition-colors font-medium">
                            仕事を探す
                        </Link>
                        <Link href="/hubs" className="text-gray-300 hover:text-primary transition-colors font-medium">
                            ハブを探す
                        </Link>
                        <Link href="/providers" className="text-gray-300 hover:text-primary transition-colors font-medium">
                            事業者の方へ
                        </Link>
                        <Link href="/dashboard" className="text-gray-300 hover:text-primary transition-colors font-medium">
                            マイページ
                        </Link>

                        {isConnected ? (
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-end mr-2">
                                    <span className="text-xs text-gray-400">Balance</span>
                                    <span className="text-sm font-bold text-primary">{balanceSc.toLocaleString()} SC</span>
                                </div>
                                <button
                                    onClick={disconnectWallet}
                                    className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 font-bold backdrop-blur-sm group"
                                >
                                    <span>{walletAddress}</span>
                                    <LogOut className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={connectWallet}
                                disabled={isConnecting}
                                className="bg-white/10 border border-white/10 text-white px-4 py-2 rounded-xl hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 font-bold backdrop-blur-sm flex items-center gap-2"
                            >
                                {isConnecting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        接続中...
                                    </>
                                ) : (
                                    'ウォレット接続'
                                )}
                            </button>
                        )}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/jobs"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            仕事を探す
                        </Link>
                        <Link
                            href="/hubs"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            ハブを探す
                        </Link>
                        <Link
                            href="/providers"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            事業者の方へ
                        </Link>
                        <Link
                            href="/dashboard"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            マイページ
                        </Link>

                        <div className="pt-4 border-t border-white/10 mt-4">
                            {isConnected ? (
                                <div className="space-y-3 px-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Balance</span>
                                        <span className="font-bold text-primary">{balanceSc.toLocaleString()} SC</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            disconnectWallet();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl hover:bg-red-500/20 transition-colors font-bold"
                                    >
                                        <span>{walletAddress}</span>
                                        <LogOut className="h-4 w-4" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => {
                                        connectWallet();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    disabled={isConnecting}
                                    className="w-full bg-primary text-black px-4 py-3 rounded-xl hover:bg-emerald-400 transition-colors font-bold flex items-center justify-center gap-2"
                                >
                                    {isConnecting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            接続中...
                                        </>
                                    ) : (
                                        'ウォレット接続'
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
