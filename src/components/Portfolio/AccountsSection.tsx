import React from 'react';
import Card from '../ui/Card';
import { Plus, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';

interface Account {
  id: string;
  name: string;
  icon: React.ReactNode;
  balance: number;
  change: number;
  lastUpdated: string;
}

const AccountsSection: React.FC = () => {
  const accounts: Account[] = [

  ];

  return (
    <Card>
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <h2 className="font-medium text-xs text-gray-500">ACCOUNTS</h2>
        <Button variant="outline" size="sm">
          ADD
        </Button>
      </div>
      
      <div>
        <h3 className="p-4 text-sm font-medium text-gray-700">Investments</h3>
        <ul>
          {accounts.map(account => (
            <li 
              key={account.id}
              className="px-4 py-3 flex items-center justify-between border-t border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                {account.icon}
                <div className="ml-3">
                  <div className="font-medium text-sm">{account.name}</div>
                  <div className="text-xs text-gray-500">{account.lastUpdated}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="font-medium">${account.balance.toFixed(2)}</div>
                {account.change > 0 && (
                  <div className="flex items-center text-xs text-emerald-500">
                    <TrendingUp size={12} className="mr-1" /> +{account.change}%
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default AccountsSection;