'use client';

import { useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import { Job } from '@/types';
import { mockJobs } from '@/lib/mockData';
import { CheckCircle, Clock, MapPin, Loader2 } from 'lucide-react';

export default function ActiveJobs() {
    const { activeJobIds, completeJob } = useWallet();
    const [completingJobId, setCompletingJobId] = useState<string | null>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [targetJob, setTargetJob] = useState<Job | null>(null);

    // Filter jobs that user has applied to
    const activeJobs = mockJobs.filter(job => activeJobIds.includes(job.id));

    const handleCompleteClick = (job: Job) => {
        setTargetJob(job);
        setShowConfirmModal(true);
    };

    const handleConfirm = async () => {
        if (!targetJob) return;

        setShowConfirmModal(false);
        setCompletingJobId(targetJob.id);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        completeJob(targetJob.id, targetJob.hourlyWageSc);
        setCompletingJobId(null);
        setTargetJob(null);
    };

    if (activeJobs.length === 0) {
        return (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    進行中の案件
                </h3>
                <div className="text-center py-8 text-gray-400">
                    <p>現在進行中の仕事はありません。</p>
                    <p className="text-sm mt-2">「仕事を探す」から応募してみましょう。</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    進行中の案件
                </h3>

                <div className="space-y-4">
                    {activeJobs.map(job => (
                        <div key={job.id} className="border border-white/10 rounded-xl p-4 bg-white/5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="font-bold text-white">{job.title}</h4>
                                    <div className="flex items-center text-sm text-gray-400 gap-2 mt-1">
                                        <MapPin className="h-3 w-3" />
                                        {job.location}
                                    </div>
                                </div>
                                <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-2 py-1 rounded-full border border-blue-500/30">
                                    作業中
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                <div className="text-sm">
                                    <span className="text-gray-400">報酬: </span>
                                    <span className="font-bold text-primary">{job.hourlyWageSc.toLocaleString()} SC</span>
                                </div>

                                <button
                                    onClick={() => handleCompleteClick(job)}
                                    disabled={completingJobId === job.id}
                                    className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                                >
                                    {completingJobId === job.id ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            処理中...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="h-4 w-4" />
                                            作業完了
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && targetJob && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
                        <h3 className="text-lg font-bold text-white mb-2">作業を完了しますか？</h3>
                        <p className="text-gray-400 mb-6">
                            「{targetJob.title}」の完了報告を行います。<br />
                            報酬 <span className="font-bold text-primary">{targetJob.hourlyWageSc.toLocaleString()} SC</span> が即座に支払われます。
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="flex-1 py-2.5 border border-white/10 rounded-xl font-medium text-gray-300 hover:bg-white/5 transition-colors"
                            >
                                キャンセル
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="flex-1 py-2.5 bg-primary text-black rounded-xl font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-primary/20"
                            >
                                完了して報酬受取
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
