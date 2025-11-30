import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Search, Wallet, Home as HomeIcon, Zap, ShieldCheck, Globe } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Search,
      title: "AIギグ・アグリゲーター",
      description: "あなたのスキルや好みに合わせて、AIが最適な短期労働案件をマッチング。面倒な検索の手間を省きます。"
    },
    {
      icon: Wallet,
      title: "SCウォレット即時決済",
      description: "報酬は作業完了と同時にステーブルコインで支払われます。銀行振込の待ち時間や手数料はもう必要ありません。"
    },
    {
      icon: HomeIcon,
      title: "フリクションレス・ハブ",
      description: "提携する宿泊拠点（ハブ）を特別価格で利用可能。報酬から滞在費を自動相殺し、実質無料で滞在できることも。"
    },
    {
      icon: Zap,
      title: "アセット・ライト",
      description: "PCひとつ、スマホひとつで働き始められます。重い契約書や保証人は不要。信頼スコアがあなたの信用になります。"
    },
    {
      icon: ShieldCheck,
      title: "ブロックチェーン証明",
      description: "あなたの実績は改ざん不可能なデータとして記録され、キャリアの証明として永続的に機能します。"
    },
    {
      icon: Globe,
      title: "地域創生への貢献",
      description: "人手不足に悩む地域事業者を助け、関係人口として地域に関わることで、新しい地方創生の形を作ります。"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Concept Images Section */}
        <section className="py-12 relative z-10 -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="Digital Nomad"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">場所にとらわれない働き方</h3>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 border border-white/10 md:-mt-12">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800"
                  alt="Agriculture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">地域と深く関わる体験</h3>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                  alt="Community"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">新しいコミュニティ</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-base font-bold text-primary tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
                新しい働き方を支える<br />
                6つのコア機能
              </p>
              <p className="mt-4 text-xl text-gray-400">
                Digital Guild Systemは、テクノロジーの力で「働く」と「暮らす」をシームレスに繋ぎます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-1 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-xl"></div>
              <div className="relative bg-black/40 rounded-[22px] px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between overflow-hidden">
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-white sm:text-4xl mb-4">
                    <span className="block">準備はできましたか？</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">今すぐ新しい働き方を始めましょう。</span>
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    登録は無料。まずは募集中の案件を見てみましょう。
                  </p>
                </div>
                <div className="mt-8 md:mt-0 flex flex-shrink-0 gap-4 relative z-10">
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                    アカウント作成
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
