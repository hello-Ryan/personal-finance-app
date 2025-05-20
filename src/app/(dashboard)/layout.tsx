export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  );
} 