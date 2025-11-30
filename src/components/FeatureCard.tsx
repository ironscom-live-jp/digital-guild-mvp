import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-emerald-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                <Icon className="h-7 w-7 text-primary group-hover:text-emerald-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
