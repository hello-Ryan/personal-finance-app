import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, icon, label, active }) => {
  return (
    <li>
      <a 
        href={href}
        className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
          active 
            ? 'bg-gray-200 text-gray-900' 
            : 'text-gray-600 hover:bg-gray-500/10'
        }`}
      >
        <span className="mr-3 text-gray-500">{icon}</span>
        {label}
      </a>
    </li>
  );
};