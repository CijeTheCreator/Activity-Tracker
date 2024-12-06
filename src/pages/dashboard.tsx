import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { TabRangeContent } from "./overallData";

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Chijioke's Penpot Activity
            </h2>
          </div>
          <Tabs defaultValue="overall" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overall">Overall</TabsTrigger>
              <TabsTrigger value="daily" disabled>
                Daily
              </TabsTrigger>
              <TabsTrigger value="monthly" disabled>
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" disabled>
                Yearly
              </TabsTrigger>
            </TabsList>
            <TabRangeContent />
          </Tabs>
        </div>
      </div>
    </>
  );
}
