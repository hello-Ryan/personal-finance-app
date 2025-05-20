import React from 'react';
import Card from '../ui/Card';
import { getUserSavings, getUserTransactions } from '~/server/queries';

const PortfolioChart = async () => {
  
  const userTransactions = await getUserTransactions()
  const savings = await getUserSavings()
  return (
    <Card>
      <div>
        Portfolio chart
      </div>
      <div className='flex flex-col'>
        {userTransactions.map(t => <div key={t.id}>{t.amount}</div>)}
        {savings.map(s => <div key={s.id}>{s.title}</div>)}
      </div>
    </Card>
  );
};

export default PortfolioChart;