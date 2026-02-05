import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    TransactionType,
    EXPENSE_CATEGORIES,
    INCOME_CATEGORIES,
} from '@/types/finance';

export default function AddTransaction() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const editId = searchParams.get('edit');

    const [type, setType] = useState<TransactionType>('expense');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        // Load transaction data if editing
        if (editId) {
            const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
            const transaction = transactions.find((t: any) => t.id === editId);
            if (transaction) {
                setType(transaction.type);
                setDescription(transaction.description);
                setAmount(transaction.amount.toString());
                setCategory(transaction.category);
                setDate(transaction.date);
            }
        }
    }, [editId]);

    const categories = type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description || !amount || !category) return;

        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        const transactionData = {
            id: editId || Date.now().toString(),
            type,
            description,
            amount: parseFloat(amount),
            category,
            date,
        };

        if (editId) {
            const index = transactions.findIndex((t: any) => t.id === editId);
            transactions[index] = transactionData;
        } else {
            transactions.push(transactionData);
        }

        localStorage.setItem('transactions', JSON.stringify(transactions));
        // Trigger custom event to update main page
        window.dispatchEvent(new Event('transactionsUpdated'));
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            {/* Subtle Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/')}
                        className="mb-4 hover:bg-secondary"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>
                    <h1 className="text-3xl font-bold text-foreground">
                        {editId ? 'Edit Transaction' : 'Add New Transaction'}
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Fill in the details below to {editId ? 'update' : 'add'} a transaction
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="bg-card rounded-lg shadow-lg border border-border p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Type Toggle */}
                            <div>
                                <Label className="mb-3 block">Transaction Type</Label>
                                <div className="flex gap-3">
                                    <Button
                                        type="button"
                                        variant={type === 'expense' ? 'default' : 'outline'}
                                        className={`flex-1 ${type === 'expense' ? 'gradient-expense border-0 text-white' : ''
                                            }`}
                                        onClick={() => {
                                            setType('expense');
                                            setCategory('');
                                        }}
                                    >
                                        Expense
                                    </Button>
                                    <Button
                                        type="button"
                                        variant={type === 'income' ? 'default' : 'outline'}
                                        className={`flex-1 ${type === 'income' ? 'gradient-income border-0 text-white' : ''
                                            }`}
                                        onClick={() => {
                                            setType('income');
                                            setCategory('');
                                        }}
                                    >
                                        Income
                                    </Button>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    placeholder="e.g., Grocery shopping, Salary payment"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="h-11"
                                />
                            </div>

                            {/* Amount */}
                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount ($)</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    placeholder="0.00"
                                    min="0.01"
                                    step="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className="h-11 text-lg"
                                />
                            </div>

                            {/* Category */}
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select value={category} onValueChange={setCategory} required>
                                    <SelectTrigger className="h-11">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem key={cat} value={cat}>
                                                {cat}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Date */}
                            <div className="space-y-2">
                                <Label htmlFor="date">Date</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    className="h-11"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => navigate('/')}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 gradient-primary border-0 text-white"
                                >
                                    {editId ? 'Update' : 'Add'} Transaction
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
