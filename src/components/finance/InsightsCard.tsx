import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface InsightsCardProps {
  balance: number;
  savingsRate: number;
  highestSpendingCategory: string;
  totalExpenses: number;
  categoryBreakdown: { category: string; amount: number }[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
};

export function InsightsCard({
  balance,
  savingsRate,
  highestSpendingCategory,
  totalExpenses,
  categoryBreakdown,
}: InsightsCardProps) {
  const highestExpense = categoryBreakdown[0]?.amount || 0;
  const highestPercentage = totalExpenses > 0 ? (highestExpense / totalExpenses) * 100 : 0;

  const getStatusInfo = () => {
    if (balance > 0 && savingsRate >= 20) {
      return {
        icon: TrendingUp,
        title: 'Great Financial Health!',
        message: `You're saving ${savingsRate.toFixed(0)}% of your income. Keep it up!`,
        color: 'text-income',
        bgColor: 'bg-income/10',
      };
    } else if (balance > 0) {
      return {
        icon: Lightbulb,
        title: 'Room for Improvement',
        message: `You're saving ${savingsRate.toFixed(0)}%. Try to reach 20% for better financial health.`,
        color: 'text-primary',
        bgColor: 'bg-primary/10',
      };
    } else {
      return {
        icon: AlertTriangle,
        title: 'Spending Alert',
        message: 'You\'re spending more than you earn. Consider cutting back on expenses.',
        color: 'text-expense',
        bgColor: 'bg-expense/10',
      };
    }
  };

  const status = getStatusInfo();
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="p-6 shadow-premium hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-primary/5">
        <div className="flex items-center gap-3 mb-5">
          <motion.div
            className={`p-2 rounded-lg ${status.bgColor}`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <StatusIcon className={`w-5 h-5 ${status.color}`} />
          </motion.div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Monthly Insights
          </h2>
        </div>

        <div className="space-y-4">
          <motion.div
            className={`p-4 rounded-xl ${status.bgColor} border border-${status.color}/20`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className={`font-semibold ${status.color}`}>{status.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{status.message}</p>
          </motion.div>

          {highestSpendingCategory !== 'N/A' && (
            <div className="p-4 rounded-lg bg-secondary">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-4 h-4 text-expense" />
                <p className="font-medium text-foreground">Highest Spending</p>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{highestSpendingCategory}</span> accounts for{' '}
                <span className="font-semibold text-expense">{highestPercentage.toFixed(0)}%</span> of your expenses
                ({formatCurrency(highestExpense)})
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-2">
            <motion.div
              className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 shadow-md hover:shadow-lg transition-all duration-300 border border-border/30"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <p className="text-2xl font-bold text-foreground">{categoryBreakdown.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Expense Categories</p>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 shadow-md hover:shadow-lg transition-all duration-300 border border-border/30"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <p className={`text-2xl font-bold ${balance >= 0 ? 'text-income' : 'text-expense'}`}>
                {formatCurrency(Math.abs(balance))}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {balance >= 0 ? 'Net Savings' : 'Over Budget'}
              </p>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}