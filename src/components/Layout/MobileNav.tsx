"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import { Home, DollarSign, BarChart, LineChart, HelpCircle, Building2, TrendingUp, FileText } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="p-2 rounded-md text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center mr-2">
                <div className="h-4 w-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold">Origin</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
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
        </div>
      )}
    </div>
  );
};

export default MobileNav;