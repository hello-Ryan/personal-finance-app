import React from "react";
import { Globe, Bell, Plus } from "lucide-react";
import Button from "../ui/Button";
import { UserButton, UserProfile } from "@clerk/nextjs";

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:pl-40 md:pr-6">
      <h1 className="text-2xl font-bold">Portfolio</h1>

      <div className="flex items-center space-x-2">
        <Button variant="primary" size="sm" className="hidden md:flex">
          <Globe size={16} className="mr-2" />
          Get $25
        </Button>

        <Button variant="outline" size="sm">
          <Plus size={16} className="mr-2" />
          ACCOUNT
        </Button>

        <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-sm font-medium text-gray-700">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
