# 💰 Money Maestro - Smart Personal Finance Tracker

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Money Maestro** is a beautifully designed, feature-rich personal finance tracking application that helps you master your finances with intelligent tracking, insightful analytics, and a stunning user interface.

<img width="1919" height="959" alt="Screenshot 2026-02-05 134733" src="https://github.com/user-attachments/assets/73bfa9e0-2744-4a27-b0f0-3692a4502700" />


## ✨ Features

### 🎨 **Premium User Experience**
- **Vibrant Colorful Animations** - Eye-catching floating orbs with pulsing glows in multiple colors
- **Rainbow Gradient Effects** - Animated color-shifting title and text elements
- **Smooth Micro-Interactions** - Hover effects, scale animations, and transitions throughout
- **Glass Morphism Design** - Modern translucent cards with backdrop blur
- **Premium Shadows** - Multi-layer shadow system for depth and elegance
- **Shimmer Effects** - Subtle light sweeps across interactive elements

### 📊 **Financial Management**
- **Transaction Tracking** - Add, edit, and delete income/expense transactions
- **Category Management** - Organize transactions by categories (Food, Bills, Entertainment, etc.)
- **Real-time Balance** - See your current financial status at a glance
- **Monthly Insights** - Track savings rate and spending patterns
- **Interactive Charts** - Visual representation of income vs expenses
- **Expense Breakdown** - Pie chart showing spending by category
- **Smart Insights** - AI-like suggestions based on your financial behavior

### 🎯 **Key Highlights**
- **Dedicated Transaction Page** - Full-screen, scrollable form for adding/editing transactions
- **LocalStorage Persistence** - Your data is saved locally and persists across sessions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Live Statistics Badge** - Real-time monthly overview with animated badges
- **Professional Branding** - Clean, investor-ready interface

## 🚀 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.6.2** - Type-safe development
- **Vite 6.0.5** - Lightning-fast build tool and dev server

### **Styling & Design**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.18.0** - Production-ready animation library
- **Shadcn/ui** - High-quality, accessible UI components
- **Google Fonts (Inter)** - Modern, professional typography

### **Additional Libraries**
- **React Router 7.1.3** - Client-side routing
- **Recharts 2.15.0** - Composable charting library
- **Lucide React** - Beautiful icon library
- **TanStack Query 5.64.2** - Data fetching and state management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Mohammedjaasir/Smart-Personal-Finance-Tracker.git
cd Smart-Personal-Finance-Tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:8080`

## 🎯 Usage

### Adding a Transaction
1. Click the **"Add Transaction"** button on the dashboard
2. Select transaction type (Income or Expense)
3. Fill in description, amount, category, and date
4. Click **"Add"** to save

### Editing a Transaction
1. Click the **edit icon** on any transaction in the list
2. Update the details in the form
3. Click **"Update"** to save changes

### Deleting a Transaction
1. Click the **delete icon** on any transaction
2. Confirm the deletion

### Viewing Analytics
- **Summary Cards** - View total balance, income, expenses, and savings rate
- **Charts** - Analyze income vs expenses over time
- **Insights Card** - Get personalized financial insights and recommendations

## 📁 Project Structure

```
money-maestro/
├── src/
│   ├── components/
│   │   ├── finance/
│   │   │   ├── Charts.tsx           # Income/Expense charts
│   │   │   ├── InsightsCard.tsx     # Financial insights
│   │   │   ├── SummaryCards.tsx     # Balance/Income/Expense cards
│   │   │   ├── TransactionList.tsx  # Transaction history
│   │   │   └── TransactionDialog.tsx # Legacy modal (not used)
│   │   └── ui/                      # Shadcn UI components
│   ├── pages/
│   │   ├── Index.tsx                # Main dashboard
│   │   ├── AddTransaction.tsx       # Add/Edit transaction page
│   │   └── NotFound.tsx             # 404 page
│   ├── hooks/
│   │   └── useTransactions.ts       # Transaction state management
│   ├── types/
│   │   └── finance.ts               # TypeScript type definitions
│   ├── index.css                    # Global styles & animations
│   ├── App.tsx                      # Root component
│   └── main.tsx                     # Application entry point
├── public/                          # Static assets
├── index.html                       # HTML template
├── tailwind.config.ts               # Tailwind configuration
├── vite.config.ts                   # Vite configuration
└── package.json                     # Dependencies & scripts
```

## 🎨 Design Features

### **Colorful Animations**
- **5 Floating Orbs** - Teal, green, purple, orange, and pink orbs with pulsing effects
- **Gradient Text** - Rainbow color-shifting animations on titles
- **Shimmer Effects** - Light sweeps across buttons and cards
- **Hover Transformations** - Scale, rotate, and translate effects

### **Professional UI Elements**
- **Custom Scrollbars** - Sleek, minimal scrollbar design
- **Staggered Animations** - Sequential entrance effects for cards
- **Live Badges** - Pulsing "Live" indicator on statistics
- **Icon Animations** - 360° rotation on hover

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Quality Assurance
```bash
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🌟 Key Differentiators

1. **Investor-Ready Design** - Professional, polished interface that wows on first glance
2. **Performance Optimized** - Smooth 60fps animations using CSS transforms
3. **Accessibility** - Semantic HTML and proper ARIA labels
4. **Data Persistence** - LocalStorage integration for offline capability
5. **Modern Stack** - Latest technologies and best practices
6. **Type Safety** - Full TypeScript coverage for reliability

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohammed Jaasir**
- GitHub: [@Mohammedjaasir](https://github.com/Mohammedjaasir)

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the charting library
- [Framer Motion](https://www.framer.com/motion/) for the animation framework
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

## 🚀 Future Enhancements

- [ ] Budget planning and goals
- [ ] Recurring transaction support
- [ ] Multi-currency support
- [ ] Export to CSV/PDF
- [ ] Dark/Light theme toggle
- [ ] Cloud sync with authentication
- [ ] Mobile app (React Native)
- [ ] Bill reminders and notifications

---

<div align="center">
  <strong>Built with ❤️ using React, TypeScript, and Tailwind CSS</strong>
</div>
