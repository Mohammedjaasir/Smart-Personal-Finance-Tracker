import { useState, useCallback, useMemo } from 'react';
import { Transaction } from '@/types/finance';

const generateId = () => Math.random().toString(36).substring(2, 9);

const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: generateId(), description: 'Monthly Salary', amount: 5000, type: 'income', category: 'Salary', date: '2025-02-01' },
  { id: generateId(), description: 'Grocery Shopping', amount: 150, type: 'expense', category: 'Food & Dining', date: '2025-02-02' },
  { id: generateId(), description: 'Electric Bill', amount: 85, type: 'expense', category: 'Bills & Utilities', date: '2025-02-03' },
  { id: generateId(), description: 'Freelance Project', amount: 800, type: 'income', category: 'Freelance', date: '2025-02-04' },
  { id: generateId(), description: 'Netflix Subscription', amount: 15, type: 'expense', category: 'Entertainment', date: '2025-02-05' },
  { id: generateId(), description: 'Gas Station', amount: 45, type: 'expense', category: 'Transportation', date: '2025-02-05' },
  { id: generateId(), description: 'Online Course', amount: 99, type: 'expense', category: 'Education', date: '2025-02-06' },
  { id: generateId(), description: 'Restaurant Dinner', amount: 65, type: 'expense', category: 'Food & Dining', date: '2025-02-07' },
];

const loadTransactions = (): Transaction[] => {
  const stored = localStorage.getItem('transactions');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return INITIAL_TRANSACTIONS;
    }
  }
  // Initialize localStorage with demo data
  localStorage.setItem('transactions', JSON.stringify(INITIAL_TRANSACTIONS));
  return INITIAL_TRANSACTIONS;
};

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(loadTransactions);

  const refreshTransactions = useCallback(() => {
    setTransactions(loadTransactions());
  }, []);

  const addTransaction = useCallback((transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = { ...transaction, id: generateId() };
    setTransactions(prev => {
      const updated = [newTransaction, ...prev];
      localStorage.setItem('transactions', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateTransaction = useCallback((id: string, updates: Partial<Omit<Transaction, 'id'>>) => {
    setTransactions(prev => {
      const updated = prev.map(t => (t.id === id ? { ...t, ...updates } : t));
      localStorage.setItem('transactions', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteTransaction = useCallback((id: string) => {
    setTransactions(prev => {
      const updated = prev.filter(t => t.id !== id);
      localStorage.setItem('transactions', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const summary = useMemo(() => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpenses;
    const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;

    return { totalIncome, totalExpenses, balance, savingsRate };
  }, [transactions]);

  const categoryBreakdown = useMemo(() => {
    const expenses = transactions.filter(t => t.type === 'expense');
    const breakdown: Record<string, number> = {};

    expenses.forEach(t => {
      breakdown[t.category] = (breakdown[t.category] || 0) + t.amount;
    });

    return Object.entries(breakdown)
      .map(([category, amount]) => ({ category, amount }))
      .sort((a, b) => b.amount - a.amount);
  }, [transactions]);

  const highestSpendingCategory = useMemo(() => {
    return categoryBreakdown[0]?.category || 'N/A';
  }, [categoryBreakdown]);

  return {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    summary,
    categoryBreakdown,
    highestSpendingCategory,
    refreshTransactions,
  };
}