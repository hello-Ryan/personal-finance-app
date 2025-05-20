import Header from "~/components/Layout/Header";
import Sidebar from "~/components/Layout/Sidebar";
import PortfolioOverview from "~/components/Portfolio/PortfolioOverview";


export default async function Page() {

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Sidebar />
      
      <div className="md:pl-56">
        <Header />
        
        <main className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between md:hidden mb-4">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            {/* <MobileNav /> */}
          </div>
          
          <PortfolioOverview />
        </main>
      </div>
    </div>
  );
}
