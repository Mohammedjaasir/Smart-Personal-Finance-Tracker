import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Transaction } from '@/types/finance';
import { format } from 'date-fns';

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

export function TransactionList({ transactions, onEdit, onDelete }: TransactionListProps) {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Card className="p-6 shadow-premium hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 border-primary/5">
      <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-5">
        Recent Transactions
      </h2>
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {sortedTransactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-secondary/50 to-secondary/30 hover:from-secondary hover:to-secondary/70 transition-all duration-300 group shadow-md hover:shadow-lg border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-full ${transaction.type === 'income'
                    ? 'bg-income/10 text-income'
                    : 'bg-expense/10 text-expense'
                    }`}
                >
                  {transaction.type === 'income' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.category} • {format(new Date(transaction.date), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`font-semibold ${transaction.type === 'income' ? 'text-income' : 'text-expense'
                    }`}
                >
                  {transaction.type === 'income' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                    onClick={() => onEdit(transaction)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => onDelete(transaction.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {transactions.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No transactions yet</p>
            <p className="text-sm">Add your first transaction to get started</p>
          </div>
        )}
      </div>
    </Card>
  );
}