'use client';

import { CheckCircle } from 'lucide-react';

export default function ApplyButton() {
    return (
        <button
            className="w-full sm:w-auto bg-primary text-black px-8 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-2"
            onClick={() => alert('応募しました（デモ）')}
        >
            <CheckCircle className="h-5 w-5" />
            この仕事に応募する
        </button>
    );
}
