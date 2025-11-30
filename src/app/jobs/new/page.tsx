import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobPostForm from "@/components/jobs/JobPostForm";

export default function NewJobPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-grow py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-900">求人を投稿する</h1>
                        <p className="text-gray-600 mt-2">
                            あなたのプロジェクトを手伝ってくれる仲間を見つけましょう。
                        </p>
                    </div>

                    <JobPostForm />
                </div>
            </main>

            <Footer />
        </div>
    );
}
