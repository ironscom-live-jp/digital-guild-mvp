'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction, Job, Application } from '@/types';
import { mockJobs } from '@/lib/mockData';

interface WalletContextType {
    balanceJpy: number;
    balanceSc: number;
    addBalance: (amountJpy: number, amountSc: number) => void;
    isConnected: boolean;
    isConnecting: boolean;
    walletAddress: string | null;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
    activeJobIds: string[];
    applyToJob: (jobId: string) => void;
    completeJob: (jobId: string, rewardSc: number) => void;
    transactions: Transaction[];
    jobs: Job[];
    postJob: (job: Omit<Job, 'id' | 'providerId' | 'currentWorkers' | 'status'>) => void;
    applications: Application[];
    reportCompletion: (jobId: string) => void;
    approveCompletion: (jobId: string, workerId: string) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
    // Initial balance from mock data (u1)
    const [balanceJpy, setBalanceJpy] = useState(0);
    const [balanceSc, setBalanceSc] = useState(5000);
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [activeJobIds, setActiveJobIds] = useState<string[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            id: 't1',
            userId: 'u1',
            type: 'deposit',
            amount: 5000,
            currency: 'SC',
            description: '初回ボーナス',
            timestamp: '2025-12-06T09:00:00.000Z', // 1 day ago (mock)
        }
    ]);
    const [jobs, setJobs] = useState<Job[]>(mockJobs);

    const [applications, setApplications] = useState<Application[]>([]);

    const addBalance = (amountJpy: number, amountSc: number) => {
        setBalanceJpy(prev => prev + amountJpy);
        setBalanceSc(prev => prev + amountSc);
    };

    const addTransaction = (transaction: Omit<Transaction, 'id' | 'timestamp'>) => {
        const newTransaction: Transaction = {
            ...transaction,
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString(),
        };
        setTransactions(prev => [newTransaction, ...prev]);
    };

    const applyToJob = (jobId: string) => {
        if (!activeJobIds.includes(jobId)) {
            setActiveJobIds(prev => [...prev, jobId]);
            // Add mock application
            setApplications(prev => [...prev, {
                id: Math.random().toString(36).substr(2, 9),
                jobId,
                workerId: 'u1',
                status: 'pending',
                appliedAt: new Date().toISOString(),
            }]);
        }
    };

    const reportCompletion = (jobId: string) => {
        setApplications(prev => prev.map(app =>
            app.jobId === jobId && app.workerId === 'u1'
                ? { ...app, status: 'pending_completion_approval' }
                : app
        ));
    };

    const approveCompletion = (jobId: string, workerId: string) => {
        // Update application status
        setApplications(prev => prev.map(app =>
            app.jobId === jobId && app.workerId === workerId
                ? { ...app, status: 'completed' }
                : app
        ));

        // Remove from active jobs for worker (if current user is worker)
        // In a real app, this logic would be separate for provider and worker
        if (workerId === 'u1') {
            setActiveJobIds(prev => prev.filter(id => id !== jobId));
        }

        // Find job for reward info
        const job = jobs.find(j => j.id === jobId);
        if (job) {
            // Add transaction for worker (mocking that we are updating worker's wallet)
            // In reality, this would happen on backend
            if (workerId === 'u1') {
                setBalanceSc(prev => prev + job.hourlyWageSc);

                addTransaction({
                    userId: workerId,
                    type: 'reward',
                    amount: job.hourlyWageSc,
                    currency: 'SC',
                    description: `報酬受取: ${job.title}`,
                    receiptId: Math.random().toString(36).substr(2, 9).toUpperCase(),
                });
            }
        }
    };

    // Deprecated: kept for compatibility if needed, but should use reportCompletion -> approveCompletion
    const completeJob = (jobId: string, _rewardSc: number) => {
        reportCompletion(jobId);
    };

    const postJob = (jobData: Omit<Job, 'id' | 'providerId' | 'currentWorkers' | 'status'>) => {
        const newJob: Job = {
            ...jobData,
            id: Math.random().toString(36).substr(2, 9),
            providerId: 'u2', // Assuming current provider is u2 (for demo)
            currentWorkers: 0,
            status: 'open',
        };
        setJobs(prev => [newJob, ...prev]);
    };

    const connectWallet = async () => {
        setIsConnecting(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsConnected(true);
        setWalletAddress('0x71C...9A21');
        setIsConnecting(false);
    };

    const disconnectWallet = () => {
        setIsConnected(false);
        setWalletAddress(null);
    };

    return (
        <WalletContext.Provider value={{
            balanceJpy,
            balanceSc,
            addBalance,
            isConnected,
            isConnecting,
            walletAddress,
            connectWallet,
            disconnectWallet,
            activeJobIds,
            applyToJob,
            completeJob,
            transactions,
            jobs,
            postJob,
            applications,
            reportCompletion,
            approveCompletion
        }}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
}
