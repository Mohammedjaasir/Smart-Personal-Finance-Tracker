 export type TransactionType = 'income' | 'expense';
 
 export interface Transaction {
   id: string;
   description: string;
   amount: number;
   type: TransactionType;
   category: string;
   date: string;
 }
 
 export const EXPENSE_CATEGORIES = [
   'Food & Dining',
   'Transportation',
   'Shopping',
   'Entertainment',
   'Bills & Utilities',
   'Healthcare',
   'Education',
   'Other',
 ] as const;
 
 export const INCOME_CATEGORIES = [
   'Salary',
   'Freelance',
   'Investments',
   'Business',
   'Gifts',
   'Other',
 ] as const;
 
 export const CATEGORY_COLORS: Record<string, string> = {
   'Food & Dining': 'hsl(20 90% 55%)',
   'Transportation': 'hsl(200 80% 50%)',
   'Shopping': 'hsl(280 70% 55%)',
   'Entertainment': 'hsl(45 93% 47%)',
   'Bills & Utilities': 'hsl(174 62% 47%)',
   'Healthcare': 'hsl(340 75% 55%)',
   'Education': 'hsl(160 60% 45%)',
   'Other': 'hsl(210 20% 60%)',
   'Salary': 'hsl(142 71% 45%)',
   'Freelance': 'hsl(190 74% 45%)',
   'Investments': 'hsl(262 83% 58%)',
   'Business': 'hsl(210 80% 50%)',
   'Gifts': 'hsl(330 80% 60%)',
 };