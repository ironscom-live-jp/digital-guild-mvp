'use client';

import { Transaction } from '@/types';
import { X, Download, Share2 } from 'lucide-react';

interface ReceiptModalProps {
    transaction: Transaction;
    onClose: () => void;
}

export default function ReceiptModal({ transaction, onClose }: ReceiptModalProps) {
    if (!transaction.receiptId) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white text-black rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl relative">
                {/* Header */}
                <div className="bg-gray-100 p-4 flex justify-between items-center border-b border-gray-200">
                    <h3 className="font-bold text-gray-700">取引明細書 (領収書)</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                        <X className="h-5 w-5 text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                    <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-1">受領金額</div>
                        <div className="text-4xl font-black text-gray-900 tracking-tight">
                            {transaction.amount.toLocaleString()} <span className="text-xl font-bold text-gray-500">{transaction.currency}</span>
                        </div>
                    </div>

                    <div className="space-y-4 text-left border-t border-b border-gray-100 py-6">
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">取引日時</span>
                            <span className="font-medium text-gray-900 text-sm">
                                {new Date(transaction.timestamp).toLocaleString('ja-JP')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">取引内容</span>
                            <span className="font-medium text-gray-900 text-sm">{transaction.description}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">取引ID</span>
                            <span className="font-mono text-gray-900 text-xs">{transaction.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">領収書番号</span>
                            <span className="font-mono text-gray-900 text-xs">{transaction.receiptId}</span>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                            <Share2 className="h-4 w-4" />
                            共有
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                            <Download className="h-4 w-4" />
                            保存
                        </button>
                    </div>
                </div>

                {/* Footer decoration */}
                <div className="h-2 bg-repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 10px, #ffffff 10px, #ffffff 20px)"></div>
            </div>
        </div>
    );
}
