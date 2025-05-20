import React from 'react';
import { Home, DollarSign, BarChart, LineChart, HelpCircle, Building2, TrendingUp, FileText } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-200 flex flex-col py-6 hidden md:flex">
      <div className="px-4 mb-8 flex items-center">
        <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center mr-2">
          <div className="h-4 w-4 bg-white rounded-sm"></div>
        </div>
        <span className="text-xl font-semibold">Origin</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1 px-2">
          <NavLink href="#" icon={<Home size={20} />} label="Home" />
          <NavLink href="#" icon={<DollarSign size={20} />} label="Spending" />
          <NavLink href="#" icon={<BarChart size={20} />} label="Portfolio" active />
          <NavLink href="#" icon={<TrendingUp size={20} />} label="Invest" />
          <NavLink href="#" icon={<HelpCircle size={20} />} label="Advice" />
          <NavLink href="#" icon={<Building2 size={20} />} label="Estate Planning" />
          <NavLink href="#" icon={<LineChart size={20} />} label="Equity" />
          <NavLink href="#" icon={<FileText size={20} />} label="Tax" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;