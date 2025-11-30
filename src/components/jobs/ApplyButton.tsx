'use client';

import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useWallet } from '@/context/WalletContext';
import { useRouter } from 'next/navigation';

export default function ApplyButton({ jobId }: { jobId: string }) {
    const { isConnected, connectWallet, activeJobIds, applyToJob } = useWallet();
    const [isApplying, setIsApplying] = useState(false);
    const router = useRouter();

    const isApplied = activeJobIds.includes(jobId);

    const handleApply = async () => {
        if (!isConnected) {
            await connectWallet();
            return;
        }

        setIsApplying(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        applyToJob(jobId);
        setIsApplying(false);

        // Optional: Redirect to dashboard or show success message
        router.push('/dashboard');
    };

    if (isApplied) {
        return (
            <button
                disabled
                className="w-full sm:w-auto bg-gray-700 text-gray-400 px-8 py-3 rounded-xl font-bold cursor-not-allowed flex items-center justify-center gap-2 border border-white/10"
            >
                <CheckCircle className="h-5 w-5" />
                応募済み
            </button>
        );
    }

    return (
        <button
            onClick={handleApply}
            disabled={isApplying}
            className="w-full sm:w-auto bg-primary text-black px-8 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isApplying ? (
                <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    処理中...
                </>
            ) : (
                <>
                    <CheckCircle className="h-5 w-5" />
                    この仕事に応募する
                </>
            )}
        </button>
    );
}
