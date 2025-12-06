'use client';

import { useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import { Loader2, Plus, MapPin, DollarSign, Briefcase } from 'lucide-react';

export default function JobPostForm() {
    const { postJob } = useWallet();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        hourlyWageJpy: 1000,
        hourlyWageSc: 1000,
        startDateTime: '',
        endDateTime: '',
        requiredSkills: '',
        maxWorkers: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        postJob({
            title: formData.title,
            description: formData.description,
            location: formData.location,
            hourlyWageJpy: Number(formData.hourlyWageJpy),
            hourlyWageSc: Number(formData.hourlyWageSc),
            startDateTime: new Date(formData.startDateTime).toISOString(),
            endDateTime: new Date(formData.endDateTime).toISOString(),
            requiredSkills: formData.requiredSkills.split(',').map(s => s.trim()).filter(s => s !== ''),
            maxWorkers: Number(formData.maxWorkers),
            imageUrl: 'https://images.unsplash.com/photo-1595855709915-445676d2a298?auto=format&fit=crop&q=80&w=1000', // Default image for now
        });

        setIsSubmitting(false);
        // Reset form
        setFormData({
            title: '',
            description: '',
            location: '',
            hourlyWageJpy: 1000,
            hourlyWageSc: 1000,
            startDateTime: '',
            endDateTime: '',
            requiredSkills: '',
            maxWorkers: 1,
        });
        alert('求人を投稿しました！');
    };

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative z-20">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2 text-xl">
                <Briefcase className="h-6 w-6 text-primary" />
                新規求人の投稿
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">求人タイトル</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                        placeholder="例: 高原野菜の収穫スタッフ"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">仕事内容</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                        placeholder="仕事の詳細を入力してください..."
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">勤務地</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 z-40" />
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl pl-12 pr-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                            placeholder="例: 長野県 川上村"
                        />
                    </div>
                </div>

                {/* Wages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">時給 (JPY)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-40">¥</span>
                            <input
                                type="number"
                                name="hourlyWageJpy"
                                value={formData.hourlyWageJpy}
                                onChange={handleChange}
                                required
                                min="0"
                                className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl pl-10 pr-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">時給 (SC)</label>
                        <div className="relative">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary z-40" />
                            <input
                                type="number"
                                name="hourlyWageSc"
                                value={formData.hourlyWageSc}
                                onChange={handleChange}
                                required
                                min="0"
                                className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl pl-10 pr-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                            />
                        </div>
                    </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">開始日時</label>
                        <input
                            type="datetime-local"
                            name="startDateTime"
                            value={formData.startDateTime}
                            onChange={handleChange}
                            required
                            className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30 [color-scheme:light] dark:[color-scheme:dark]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">終了日時</label>
                        <input
                            type="datetime-local"
                            name="endDateTime"
                            value={formData.endDateTime}
                            onChange={handleChange}
                            required
                            className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30 [color-scheme:light] dark:[color-scheme:dark]"
                        />
                    </div>
                </div>

                {/* Skills & Workers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">必須スキル (カンマ区切り)</label>
                        <input
                            type="text"
                            name="requiredSkills"
                            value={formData.requiredSkills}
                            onChange={handleChange}
                            className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                            placeholder="例: 体力, 収穫, 普通免許"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">募集人数</label>
                        <input
                            type="number"
                            name="maxWorkers"
                            value={formData.maxWorkers}
                            onChange={handleChange}
                            required
                            min="1"
                            className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors relative z-30"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2 relative z-30"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            投稿中...
                        </>
                    ) : (
                        <>
                            <Plus className="h-5 w-5" />
                            求人を公開する
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
