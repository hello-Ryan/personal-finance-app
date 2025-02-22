import BalanceCard from '~/components/BalanceCard';
import IncomeExpenseCards from '~/components/IncomeExpenseCards';
import StatisticsChart from '~/components/StatisticsChart';
import ExpensesDonutChart from '~/components/ExpensesDonutChart';
import TransactionsTable from '~/components/TransactionsTable';

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Good morning, Jaylon</h1>
          <p className="text-gray-500">This is your finance report</p>
        </div>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4">
            <a href="#" className="text-green-600 border-b-2 border-green-600 pb-1">Overview</a>
            <a href="#" className="text-gray-500">Wallet</a>
            <a href="#" className="text-gray-500">Analytics</a>
            <a href="#" className="text-gray-500">Transaction</a>
            <a href="#" className="text-gray-500">Help</a>
            <a href="#" className="text-gray-500">Settings</a>
            <a href="#" className="text-gray-500">Report</a>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <BalanceCard />
        </div>
        <div className="col-span-4">
          <IncomeExpenseCards type="income" />
        </div>
        <div className="col-span-4">
          <IncomeExpenseCards type="expense" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-8">
          <StatisticsChart />
        </div>
        <div className="col-span-4">
          <ExpensesDonutChart />
        </div>
      </div>

      <div className="mt-6">
        <TransactionsTable />
      </div>
    </div>
  );
} 