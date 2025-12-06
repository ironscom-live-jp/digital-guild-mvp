'use client';

import { useWallet } from '@/context/WalletContext';
import { Clock, MapPin, Users } from 'lucide-react';

export default function PostedJobs() {
    const { jobs } = useWallet();

    // Filter jobs for the current provider (mock providerId 'u2')
    const myJobs = jobs.filter(job => job.providerId === 'u2');

    if (myJobs.length === 0) {
        return (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    掲載中の求人
                </h3>
                <div className="text-center py-8 text-gray-400">
                    <p>掲載中の求人はありません。</p>
                    <p className="text-sm mt-2">新規求人を投稿して人材を募集しましょう。</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                掲載中の求人
            </h3>

            <div className="space-y-4">
                {myJobs.map(job => (
                    <div key={job.id} className="border border-white/10 rounded-xl p-4 bg-white/5">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-white">{job.title}</h4>
                                <div className="flex items-center text-sm text-gray-400 gap-2 mt-1">
                                    <MapPin className="h-3 w-3" />
                                    {job.location}
                                </div>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full border ${job.status === 'open'
                                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                    : 'bg-gray-500/20 text-gray-300 border-gray-500/30'
                                }`}>
                                {job.status === 'open' ? '募集中' : '終了'}
                            </span>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                            <div className="text-sm">
                                <span className="text-gray-400">時給: </span>
                                <span className="font-bold text-primary">{job.hourlyWageSc.toLocaleString()} SC</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                                <Users className="h-4 w-4" />
                                <span>{job.currentWorkers} / {job.maxWorkers} 人</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
