import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const BalanceCard = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">My balance</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-semibold">$83,172.64</h2>
              <span className="text-green-500 text-sm">+6.7% compare to last month</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span>6549 7329 9821 2472</span>
            <button className="text-sm text-gray-500">Copy</button>
          </div>

          <div className="flex gap-3">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Send money
            </Button>
            <Button variant="outline" className="w-full">
              Request money
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard; 