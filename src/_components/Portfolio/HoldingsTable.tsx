import React from 'react';
import Card from '../ui/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Holding {
  id: string;
  name: string;
  symbol: string;
  price: number;
  quantity: number;
  value: number;
  change24h: number;
  change7d: number;
}

const HoldingsTable: React.FC = () => {
  const holdings: Holding[] = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 65432.10,
      quantity: 0.025,
      value: 1635.80,
      change24h: 2.5,
      change7d: 5.8
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3456.78,
      quantity: 0.5,
      value: 1728.39,
      change24h: -1.2,
      change7d: 3.4
    },
    {
      id: '3',
      name: 'NEAR Protocol',
      symbol: 'NEAR',
      price: 5.67,
      quantity: 350,
      value: 1984.50,
      change24h: 4.3,
      change7d: -2.1
    },
    {
      id: '4',
      name: 'Solana',
      symbol: 'SOL',
      price: 123.45,
      quantity: 12,
      value: 1481.40,
      change24h: 6.7,
      change7d: 12.5
    }
  ];

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-xs font-medium text-gray-500">Name</th>
              <th className="text-right p-4 text-xs font-medium text-gray-500">Price</th>
              <th className="text-right p-4 text-xs font-medium text-gray-500">Holdings</th>
              <th className="text-right p-4 text-xs font-medium text-gray-500">Value</th>
              <th className="text-right p-4 text-xs font-medium text-gray-500">24h</th>
              <th className="text-right p-4 text-xs font-medium text-gray-500">7d</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <tr key={holding.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <span className="text-sm font-medium">{holding.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="font-medium">{holding.name}</div>
                      <div className="text-sm text-gray-500">{holding.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="font-medium">${holding.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">{holding.quantity} {holding.symbol}</div>
                </td>
                <td className="p-4 text-right font-medium">${holding.value.toLocaleString()}</td>
                <td className="p-4 text-right font-medium">${(holding.price * holding.quantity).toLocaleString()}</td>
                <td className="p-4 text-right">
                  <div className={`flex items-center justify-end ${holding.change24h >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {holding.change24h >= 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                    {Math.abs(holding.change24h)}%
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className={`flex items-center justify-end ${holding.change7d >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {holding.change7d >= 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                    {Math.abs(holding.change7d)}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default HoldingsTable;