"use client"

import Link from "next/link"

function NavItem({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: any
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
    >
      <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
      {children}
    </Link>
  )
}

export default function Sidebar() {
  
}