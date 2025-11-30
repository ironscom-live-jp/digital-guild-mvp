import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobList from "@/components/jobs/JobList";
import { mockJobs } from "@/lib/mockData";

export default function JobsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow py-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">求人を探す</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            あなたのスキルを活かせる、魅力的な短期労働案件が見つかります。
                        </p>
                    </div>

                    <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
                        <JobList initialJobs={mockJobs} />
                    </Suspense>
                </div>
            </main>

            <Footer />
        </div>
    );
}
