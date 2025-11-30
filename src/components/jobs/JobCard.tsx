import { Job } from '@/types';
import { MapPin, Clock, Users, Coins } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
    job: Job;
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${job.status === 'open' ? 'bg-primary/20 text-primary border border-primary/20' : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}>
                    {job.status === 'open' ? '募集中' : '募集終了'}
                </span>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {job.requiredSkills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/10">
                        {skill}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">時給 (JPY)</div>
                    <div className="font-bold text-white">¥{job.hourlyWageJpy.toLocaleString()}</div>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                    <div className="text-xs text-primary mb-1 flex items-center gap-1">
                        <Coins className="h-3 w-3" />
                        時給 (SC)
                    </div>
                    <div className="font-bold text-primary">{job.hourlyWageSc.toLocaleString()} SC</div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center text-sm text-gray-500 gap-2">
                    <Users className="h-4 w-4" />
                    <span>{job.currentWorkers} / {job.maxWorkers} 人</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(job.startDateTime).toLocaleDateString()}</span>
                </div>
            </div>

            <Link
                href={`/jobs/${job.id}`}
                className="mt-4 w-full block text-center bg-white/10 text-white py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
                詳細を見る
            </Link>
        </div>
    );
}
