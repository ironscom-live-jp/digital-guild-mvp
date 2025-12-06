'use client';

import { useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import { CheckCircle, Loader2, User } from 'lucide-react';

export default function ApprovalQueue() {
    const { applications, jobs, approveCompletion } = useWallet();
    const [processingId, setProcessingId] = useState<string | null>(null);

    // Filter applications pending completion approval for jobs owned by provider (mock u2)
    const pendingApprovals = applications.filter(app => {
        const job = jobs.find(j => j.id === app.jobId);
        return job?.providerId === 'u2' && app.status === 'pending_completion_approval';
    });

    const handleApprove = async (jobId: string, workerId: string) => {
        setProcessingId(`${jobId}-${workerId}`);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        approveCompletion(jobId, workerId);
        setProcessingId(null);
    };

    if (pendingApprovals.length === 0) {
        return (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    完了承認待ち
                </h3>
                <div className="text-center py-8 text-gray-400">
                    <p>承認待ちの案件はありません。</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                完了承認待ち
                <span className="bg-primary text-black text-xs font-bold px-2 py-0.5 rounded-full">
                    {pendingApprovals.length}
                </span>
            </h3>

            <div className="space-y-4">
                {pendingApprovals.map(app => {
                    const job = jobs.find(j => j.id === app.jobId);
                    if (!job) return null;

                    const isProcessing = processingId === `${app.jobId}-${app.workerId}`;

                    return (
                        <div key={app.id} className="border border-white/10 rounded-xl p-4 bg-white/5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="font-bold text-white">{job.title}</h4>
                                    <div className="flex items-center text-sm text-gray-400 gap-2 mt-1">
                                        <User className="h-3 w-3" />
                                        <span>ワーカーID: {app.workerId}</span>
                                    </div>
                                </div>
                                <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-2 py-1 rounded-full border border-yellow-500/30">
                                    承認待ち
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                <div className="text-sm">
                                    <span className="text-gray-400">支払額: </span>
                                    <span className="font-bold text-primary">{job.hourlyWageSc.toLocaleString()} SC</span>
                                </div>

                                <button
                                    onClick={() => handleApprove(app.jobId, app.workerId)}
                                    disabled={isProcessing}
                                    className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                                >
                                    {isProcessing ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            処理中...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="h-4 w-4" />
                                            承認して支払う
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
