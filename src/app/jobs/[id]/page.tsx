import { notFound } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockJobs } from "@/lib/mockData";
import { MapPin, Coins, Briefcase, Calendar } from 'lucide-react';
import ApplyButton from "@/components/jobs/ApplyButton";

// In a real app, this would be async and fetch data
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const job = mockJobs.find(j => j.id === id);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow py-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
                        {/* Header Image */}
                        <div className="h-72 w-full bg-gray-900 relative">
                            {job.imageUrl ? (
                                <img
                                    src={job.imageUrl}
                                    alt={job.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
                                    <Briefcase className="h-16 w-16" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute top-6 right-6">
                                <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-md border border-white/10 ${job.status === 'open' ? 'bg-primary/20 text-primary' : 'bg-gray-800/80 text-gray-400'
                                    }`}>
                                    {job.status === 'open' ? '募集中' : '募集終了'}
                                </span>
                            </div>
                            <div className="absolute bottom-6 left-8">
                                <h1 className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-lg">{job.title}</h1>
                                <div className="flex flex-wrap gap-4 text-gray-200">
                                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        {new Date(job.startDateTime).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                    <div className="text-sm text-gray-400 mb-1">時給 (JPY)</div>
                                    <div className="text-3xl font-bold text-white">¥{job.hourlyWageJpy.toLocaleString()}</div>
                                </div>
                                <div className="bg-gradient-to-br from-primary/10 to-emerald-600/10 p-6 rounded-2xl border border-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10">
                                        <div className="text-sm text-primary mb-1 flex items-center gap-1 font-bold">
                                            <Coins className="h-4 w-4" />
                                            時給 (SC)
                                        </div>
                                        <div className="text-3xl font-bold text-primary">{job.hourlyWageSc.toLocaleString()} SC</div>
                                        <p className="text-xs text-emerald-400/80 mt-2">※手数料無料・即時決済</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none mb-10">
                                <h3 className="text-xl font-bold text-white mb-4">仕事内容</h3>
                                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
                                    {job.description}
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-white mb-4">必須スキル</h3>
                                <div className="flex flex-wrap gap-3">
                                    {job.requiredSkills.map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-white/5 text-gray-200 rounded-xl text-sm border border-white/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-6 justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden border-2 border-primary/50">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${job.providerId}`} alt="Provider" />
                                    </div>
                                    <div>
                                        <div className="text-base font-bold text-white">掲載者: {job.providerId === 'u2' ? '佐藤 農園' : 'Unknown'}</div>
                                        <div className="text-sm text-gray-400">信頼スコア: <span className="text-primary font-bold">92</span></div>
                                    </div>
                                </div>

                                <ApplyButton jobId={job.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
