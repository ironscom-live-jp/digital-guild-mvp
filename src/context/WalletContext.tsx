'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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

    const addBalance = (amountJpy: number, amountSc: number) => {
        setBalanceJpy(prev => prev + amountJpy);
        setBalanceSc(prev => prev + amountSc);
    };

    const applyToJob = (jobId: string) => {
        if (!activeJobIds.includes(jobId)) {
            setActiveJobIds(prev => [...prev, jobId]);
        }
    };

    const completeJob = (jobId: string, rewardSc: number) => {
        setActiveJobIds(prev => prev.filter(id => id !== jobId));
        setBalanceSc(prev => prev + rewardSc);
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
            completeJob
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
