import React from 'react';
import Tabs from '../ui/Tabs';
import AccountsSection from './AccountsSection';
import PortfolioChart from './PortfolioChart';
import HoldingsTable from './HoldingsTable';

const PortfolioOverview: React.FC = () => {
  const portfolioTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'holdings', label: 'Holdings' },
  ];

  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="py-4">
        {/* <Tabs tabs={portfolioTabs} defaultTab="overview">
          {(activeTab) => (
            <div>
              {activeTab === 'overview' ? (
                <div className="grid grid-rows-2 gap-5">
                    
                    <AccountsSection />
                </div>
              ) : (
                <HoldingsTable />
              )}
            </div>
          )}
        </Tabs> */}
        <div className="grid grid-rows-2 gap-5">
                    
        <PortfolioChart />
                </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;