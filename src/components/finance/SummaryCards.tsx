import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet, PiggyBank } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SummaryCardsProps {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  savingsRate: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export function SummaryCards({ totalIncome, totalExpenses, balance, savingsRate }: SummaryCardsProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <Card className="relative overflow-hidden p-6 gradient-balance text-primary-foreground shadow-premium hover:shadow-xl transition-all duration-300 shimmer-effect">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 blur-2xl" />
          <div className="relative z-10 flex items-center gap-3 mb-3">
            <motion.div
              className="p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Wallet className="w-5 h-5" />
            </motion.div>
            <span className="text-sm font-medium opacity-90">Total Balance</span>
          </div>
          <p className="relative z-10 text-3xl font-bold tracking-tight">{formatCurrency(balance)}</p>
          <p className="relative z-10 text-xs mt-2 opacity-75">
            {balance >= 0 ? '✨ You\'re doing great!' : '⚠️ Time to cut back'}
          </p>
        </Card>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <Card className="relative overflow-hidden p-6 gradient-income text-primary-foreground shadow-premium hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 blur-2xl" />
          <div className="relative z-10 flex items-center gap-3 mb-3">
            <motion.div
              className="p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-5 h-5" />
            </motion.div>
            <span className="text-sm font-medium opacity-90">Total Income</span>
          </div>
          <p className="relative z-10 text-3xl font-bold tracking-tight">{formatCurrency(totalIncome)}</p>
          <p className="relative z-10 text-xs mt-2 opacity-75">📈 This month</p>
        </Card>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <Card className="relative overflow-hidden p-6 gradient-expense text-primary-foreground shadow-premium hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 blur-2xl" />
          <div className="relative z-10 flex items-center gap-3 mb-3">
            <motion.div
              className="p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingDown className="w-5 h-5" />
            </motion.div>
            <span className="text-sm font-medium opacity-90">Total Expenses</span>
          </div>
          <p className="relative z-10 text-3xl font-bold tracking-tight">{formatCurrency(totalExpenses)}</p>
          <p className="relative z-10 text-xs mt-2 opacity-75">📊 This month</p>
        </Card>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <Card className="relative overflow-hidden p-6 bg-card shadow-premium hover:shadow-xl transition-all duration-300 border-2 border-primary/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12 blur-2xl" />
          <div className="relative z-10 flex items-center gap-3 mb-3">
            <motion.div
              className="p-2 rounded-lg bg-primary/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <PiggyBank className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-muted-foreground">Savings Rate</span>
          </div>
          <p className="relative z-10 text-3xl font-bold tracking-tight text-foreground">
            {savingsRate.toFixed(1)}%
          </p>
          <p className="relative z-10 text-xs mt-2 text-muted-foreground">
            {savingsRate >= 20 ? '🎯 Excellent!' : savingsRate >= 10 ? '💪 Good progress' : '🌱 Room to improve'}
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
}