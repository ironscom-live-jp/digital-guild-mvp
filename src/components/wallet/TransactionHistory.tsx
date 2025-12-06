'use client';

import { useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import { Transaction } from '@/types';
import { ArrowDownLeft, ArrowUpRight, History, Receipt } from 'lucide-react';
import ReceiptModal from './ReceiptModal';

export default function TransactionHistory() {
    const { transactions } = useWallet();
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

    if (transactions.length === 0) {
        return (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    取引履歴
                </h3>
                <div className="text-center py-8 text-gray-400">
                    <p>取引履歴はありません。</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    取引履歴
                </h3>

                <div className="space-y-4">
                    {transactions.map(tx => (
                        <div
                            key={tx.id}
                            onClick={() => tx.receiptId && setSelectedTransaction(tx)}
                            className={`flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 transition-colors ${tx.receiptId ? 'cursor-pointer hover:bg-white/5 hover:border-white/10' : ''
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-full ${tx.type === 'reward' || tx.type === 'deposit'
                                    ? 'bg-emerald-500/10 text-emerald-400'
                                    : 'bg-red-500/10 text-red-400'
                                    }`}>
                                    {tx.type === 'reward' || tx.type === 'deposit' ? (
                                        <ArrowDownLeft className="h-5 w-5" />
                                    ) : (
                                        <ArrowUpRight className="h-5 w-5" />
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-white flex items-center gap-2">
                                        {tx.description}
                                        {tx.receiptId && (
                                            <Receipt className="h-3 w-3 text-gray-500" />
                                        )}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {new Date(tx.timestamp).toLocaleString('ja-JP')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className={`font-bold ${tx.type === 'reward' || tx.type === 'deposit'
                                    ? 'text-emerald-400'
                                    : 'text-white'
                                    }`}>
                                    {tx.type === 'reward' || tx.type === 'deposit' ? '+' : '-'}
                                    {tx.amount.toLocaleString()} {tx.currency}
                                </div>
                                <div className="text-xs text-gray-500 uppercase">{tx.type}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedTransaction && (
                <ReceiptModal
                    transaction={selectedTransaction}
                    onClose={() => setSelectedTransaction(null)}
                />
            )}
        </>
    );
}
