import { Card, CardContent } from "./ui/card";

interface IncomeExpenseCardsProps {
  type: 'income' | 'expense';
}

const IncomeExpenseCards = ({ type }: IncomeExpenseCardsProps) => {
  const data = {
    income: {
      amount: '$16,281.48',
      percentage: '+0.8%',
      title: 'Monthly income',
      icon: '💵',
      isPositive: true,
    },
    expense: {
      amount: '$6,638.72',
      percentage: '-8.6%',
      title: 'Monthly expenses',
      icon: '📊',
      isPositive: false,
    },
  }[type];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">{data.icon}</span>
        </div>
        <h3 className="text-gray-500 mb-2">{data.title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold">{data.amount}</span>
          <span className={data.isPositive ? 'text-green-500' : 'text-red-500'}>
            {data.percentage} compared to last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncomeExpenseCards; 