'use client';

import { useState } from 'react';
import { Coins, MapPin, Calendar, Users, Briefcase } from 'lucide-react';

export default function JobPostForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        hourlyWageJpy: '',
        hourlyWageSc: '',
        startDateTime: '',
        endDateTime: '',
        maxWorkers: '',
        requiredSkills: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('求人を投稿しました（デモ）');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        求人タイトル
                    </label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="例: 古民家カフェのDIYリノベーション"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        仕事内容
                    </label>
                    <textarea
                        name="description"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="具体的な作業内容や条件を記入してください"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            場所
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                name="location"
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="例: 長野県 松本市"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            募集人数
                        </label>
                        <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="number"
                                name="maxWorkers"
                                required
                                min="1"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="例: 3"
                                value={formData.maxWorkers}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            時給 (JPY)
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
                            <input
                                type="number"
                                name="hourlyWageJpy"
                                required
                                min="0"
                                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="1200"
                                value={formData.hourlyWageJpy}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-emerald-700 mb-2 flex items-center gap-1">
                            <Coins className="h-4 w-4" />
                            時給 (SC)
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                name="hourlyWageSc"
                                required
                                min="0"
                                className="w-full pl-4 pr-12 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-emerald-50"
                                placeholder="1200"
                                value={formData.hourlyWageSc}
                                onChange={handleChange}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 font-medium">SC</span>
                        </div>
                        <p className="text-xs text-emerald-600 mt-1">※SC払いは手数料無料で即時決済されます</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            開始日時
                        </label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="datetime-local"
                                name="startDateTime"
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                value={formData.startDateTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            終了日時
                        </label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="datetime-local"
                                name="endDateTime"
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                value={formData.endDateTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        必須スキル (カンマ区切り)
                    </label>
                    <input
                        type="text"
                        name="requiredSkills"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="例: DIY, 塗装, 大工"
                        value={formData.requiredSkills}
                        onChange={handleChange}
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                    >
                        求人を投稿する
                    </button>
                </div>
            </div>
        </form>
    );
}
