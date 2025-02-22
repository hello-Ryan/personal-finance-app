interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

const TransactionsTable = () => {
  const transactions: Transaction[] = [
    { id: 1, date: '2024-03-15', description: 'Salary', amount: 3000, type: 'income' },
    { id: 2, date: '2024-03-14', description: 'Groceries', amount: -150, type: 'expense' },
    { id: 3, date: '2024-03-13', description: 'Utilities', amount: -200, type: 'expense' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.description}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable; 