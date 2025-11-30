import { User, Job, Wallet, Application } from '@/types';

export const mockUsers: User[] = [
    {
        id: 'u1',
        name: '山田 太郎',
        email: 'taro@example.com',
        role: 'worker',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=taro',
        bio: 'Web開発と農業に興味があります。フットワーク軽いです。',
        skills: ['React', 'TypeScript', '草刈り', '収穫'],
        trustScore: 85,
    },
    {
        id: 'u2',
        name: '佐藤 農園',
        email: 'sato@example.com',
        role: 'provider',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sato',
        bio: '長野県で高原野菜を育てています。収穫時期の手伝いを募集しています。',
        trustScore: 92,
    },
];

export const mockWallets: Wallet[] = [
    {
        userId: 'u1',
        balanceJpy: 0,
        balanceSc: 1200,
        address: '0x123...abc',
    },
    {
        userId: 'u2',
        balanceJpy: 100000,
        balanceSc: 50000,
        address: '0x456...def',
    },
];

export const mockJobs: Job[] = [
    {
        id: 'j1',
        providerId: 'u2',
        title: '高原野菜の朝採れ収穫スタッフ',
        description: '新鮮なレタスの収穫作業です。未経験者歓迎。朝の清々しい空気の中で働きませんか？',
        location: '長野県 川上村',
        hourlyWageJpy: 1200,
        hourlyWageSc: 1200,
        startDateTime: '2025-06-15T05:00:00',
        endDateTime: '2025-06-15T10:00:00',
        requiredSkills: ['早起き', '体力', '収穫'],
        maxWorkers: 5,
        currentWorkers: 2,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1595855709915-445676d2a298?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'j2',
        providerId: 'u2',
        title: '古民家カフェのDIYリノベーション',
        description: '空き家をカフェに改装しています。壁塗りや床張りの手伝いをお願いします。',
        location: '長野県 松本市',
        hourlyWageJpy: 1500,
        hourlyWageSc: 1600, // SC優遇
        startDateTime: '2025-06-20T09:00:00',
        endDateTime: '2025-06-20T17:00:00',
        requiredSkills: ['DIY', '塗装', '大工'],
        maxWorkers: 3,
        currentWorkers: 1,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'j3',
        providerId: 'u2',
        title: 'Webサイトの多言語化対応',
        description: '観光客向けのWebサイトを英語・中国語に翻訳・実装するお仕事です。リモート可。',
        location: 'リモート',
        hourlyWageJpy: 2000,
        hourlyWageSc: 2200, // SC優遇
        startDateTime: '2025-07-01T10:00:00',
        endDateTime: '2025-07-31T18:00:00',
        requiredSkills: ['React', 'Next.js', '英語', '中国語'],
        maxWorkers: 1,
        currentWorkers: 0,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'j4',
        providerId: 'u2',
        title: '北海道・ニセコでの除雪・ロッジ管理',
        description: 'パウダースノーの聖地で働きませんか？ロッジの管理と除雪作業。スキーリフト券付き。',
        location: '北海道 ニセコ町',
        hourlyWageJpy: 1300,
        hourlyWageSc: 1500,
        startDateTime: '2025-12-01T06:00:00',
        endDateTime: '2026-03-31T10:00:00',
        requiredSkills: ['体力', '除雪', '英語'],
        maxWorkers: 10,
        currentWorkers: 4,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'j5',
        providerId: 'u2',
        title: '京都・伝統工芸の工房アシスタント',
        description: '西陣織の工房で、職人のサポート業務。伝統文化に触れながら働けます。',
        location: '京都府 京都市',
        hourlyWageJpy: 1100,
        hourlyWageSc: 1200,
        startDateTime: '2025-09-01T09:00:00',
        endDateTime: '2025-09-30T17:00:00',
        requiredSkills: ['手先が器用', '伝統文化', '集中力'],
        maxWorkers: 2,
        currentWorkers: 0,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'j6',
        providerId: 'u2',
        title: '沖縄・離島ゲストハウスのヘルパー',
        description: '美しい海に囲まれたゲストハウスで、清掃や受付のお手伝い。空き時間はダイビングも。',
        location: '沖縄県 石垣市',
        hourlyWageJpy: 1000,
        hourlyWageSc: 1100,
        startDateTime: '2025-07-01T08:00:00',
        endDateTime: '2025-08-31T20:00:00',
        requiredSkills: ['接客', '掃除', '普通免許'],
        maxWorkers: 3,
        currentWorkers: 1,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1540206395-688085723adb?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'j7',
        providerId: 'u2',
        title: '青森・ねぶた祭りの運営スタッフ',
        description: '東北三大祭りの一つ、ねぶた祭りの会場設営と誘導。熱気あふれる現場です。',
        location: '青森県 青森市',
        hourlyWageJpy: 1400,
        hourlyWageSc: 1600,
        startDateTime: '2025-08-02T12:00:00',
        endDateTime: '2025-08-07T22:00:00',
        requiredSkills: ['イベント運営', '体力', '元気'],
        maxWorkers: 20,
        currentWorkers: 12,
        status: 'open',
        imageUrl: 'https://images.unsplash.com/photo-1533230557626-722165846663?auto=format&fit=crop&q=80&w=1000',
    },
];

export const mockApplications: Application[] = [
    {
        id: 'a1',
        jobId: 'j1',
        workerId: 'u1',
        status: 'pending',
        appliedAt: '2025-06-01T10:00:00',
    },
];
export interface Hub {
    id: string;
    name: string;
    location: string;
    description: string;
    priceSc: number;
    imageUrl: string;
    amenities: string[];
}

export const mockHubs: Hub[] = [
    {
        id: 'h1',
        name: '松本ベース',
        location: '長野県 松本市',
        description: '古民家を改装したコワーキングスペース付きゲストハウス。地元のクリエイターが集まります。',
        priceSc: 3000,
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000',
        amenities: ['Wi-Fi', 'キッチン', 'コワーキング', '自転車'],
    },
    {
        id: 'h2',
        name: '川上村レタスロッジ',
        location: '長野県 川上村',
        description: '農作業の拠点に最適。朝採れ野菜の朝食付き。',
        priceSc: 2500,
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
        amenities: ['Wi-Fi', '駐車場', '大浴場', '送迎あり'],
    },
    {
        id: 'h3',
        name: '南房総サーフ＆ワーク',
        location: '千葉県 南房総市',
        description: '海の目の前でリラックス。仕事の合間にサーフィンを楽しめます。',
        priceSc: 3500,
        imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000',
        amenities: ['Wi-Fi', 'シャワー', 'ボードロッカー', 'カフェ'],
    },
];
