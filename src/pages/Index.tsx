import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SummaryCards } from '@/components/finance/SummaryCards';
import { TransactionList } from '@/components/finance/TransactionList';
import { Charts } from '@/components/finance/Charts';
import { InsightsCard } from '@/components/finance/InsightsCard';
import { useTransactions } from '@/hooks/useTransactions';

const Index = () => {
  const navigate = useNavigate();
  const {
    transactions,
    updateTransaction,
    deleteTransaction,
    summary,
    categoryBreakdown,
    highestSpendingCategory,
    refreshTransactions,
  } = useTransactions();

  // Listen for transaction updates from the add/edit page
  useEffect(() => {
    const handleUpdate = () => refreshTransactions();
    window.addEventListener('transactionsUpdated', handleUpdate);
    return () => window.removeEventListener('transactionsUpdated', handleUpdate);
  }, [refreshTransactions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Colorful Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Teal Orb */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-orb pulse-glow-primary" />

        {/* Success Green Orb */}
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl floating-orb-slow pulse-glow-success" />

        {/* Purple Accent Orb */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl floating-orb" style={{ animationDelay: '2s' }} />

        {/* Orange Warning Orb */}
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl floating-orb-slow pulse-glow-warning" style={{ animationDelay: '1s' }} />

        {/* Pink Accent Orb */}
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl floating-orb" style={{ animationDelay: '3s' }} />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header with Animated Rainbow Gradient */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text-animated">
              Money Maestro
            </h1>
            <p className="text-muted-foreground mt-2 text-base">
              Master your finances with intelligent tracking and insights
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => navigate('/add-transaction')}
              className="gradient-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold shimmer-effect"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Transaction
            </Button>
          </motion.div>
        </motion.div>

        {/* Eye-Catching Stats Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20 backdrop-blur-sm stat-badge">
            <span className="text-sm font-semibold text-foreground">📊 Monthly Overview</span>
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold shadow-lg">
              Live
            </span>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="mb-8">
          <SummaryCards
            totalIncome={summary.totalIncome}
            totalExpenses={summary.totalExpenses}
            balance={summary.balance}
            savingsRate={summary.savingsRate}
          />
        </div>

        {/* Charts */}
        <div className="mb-8">
          <Charts
            categoryBreakdown={categoryBreakdown}
            totalIncome={summary.totalIncome}
            totalExpenses={summary.totalExpenses}
          />
        </div>

        {/* Transactions & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionList
              transactions={transactions}
              onEdit={(transaction) => navigate(`/add-transaction?edit=${transaction.id}`)}
              onDelete={deleteTransaction}
            />
          </div>
          <div>
            <InsightsCard
              balance={summary.balance}
              savingsRate={summary.savingsRate}
              highestSpendingCategory={highestSpendingCategory}
              totalExpenses={summary.totalExpenses}
              categoryBreakdown={categoryBreakdown}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
