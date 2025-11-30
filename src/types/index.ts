export type UserRole = 'worker' | 'provider';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatarUrl?: string;
    bio?: string;
    skills?: string[];
    trustScore: number; // 0-100
}

export interface Wallet {
    userId: string;
    balanceJpy: number;
    balanceSc: number; // 1 SC = 1 JPY
    address: string;
}

export interface Job {
    id: string;
    providerId: string;
    title: string;
    description: string;
    location: string;
    hourlyWageJpy: number;
    hourlyWageSc: number;
    startDateTime: string; // ISO string
    endDateTime: string; // ISO string
    requiredSkills: string[];
    maxWorkers: number;
    currentWorkers: number;
    status: 'open' | 'closed' | 'completed';
    imageUrl?: string;
}

export type ApplicationStatus = 'pending' | 'approved' | 'rejected' | 'completed';

export interface Application {
    id: string;
    jobId: string;
    workerId: string;
    status: ApplicationStatus;
    appliedAt: string; // ISO string
}
