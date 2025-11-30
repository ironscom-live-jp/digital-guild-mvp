'use client';

import { useState, useEffect } from 'react';
import { Job } from '@/types';
import JobCard from './JobCard';
import { Search, Filter } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

interface JobListProps {
    initialJobs: Job[];
}

export default function JobList({ initialJobs }: JobListProps) {
    const searchParams = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [jobs, setJobs] = useState(initialJobs);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="キーワード、場所で検索..."
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-gray-500 transition-all backdrop-blur-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white font-medium backdrop-blur-sm">
                    <Filter className="h-5 w-5" />
                    フィルター
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">条件に一致する求人は見つかりませんでした。</p>
                </div>
            )}
        </div>
    );
}
