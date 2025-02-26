import Sidebar from '~/_components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full p-8 overflow-hidden">
        {children}
      </div>
    </div>
  );
} 