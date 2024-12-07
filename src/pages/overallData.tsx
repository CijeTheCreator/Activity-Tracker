import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartData, TCard, TValues } from "@/lib/types";
import { TabsContent } from "@radix-ui/react-tabs";
import { PieChartAllProjects6 } from "./pieChartallProjects6";
import { CalendarHeatMap7 } from "./calendarHeatMap7";

export function TabContentOverall({
  totalTimeCard,
  projectsWorkedOnCard,
  collaboratorsCard,
  totalActionsPerformedCard,
  pieChartAllProjects6ChartData,
  pieChartAllProjects6ChartConfig,
  calendarValues,
}: {
  totalTimeCard: TCard;
  projectsWorkedOnCard: TCard;
  collaboratorsCard: TCard;
  totalActionsPerformedCard: TCard;
  pieChartAllProjects6ChartData: ChartData;
  pieChartAllProjects6ChartConfig: ChartConfig;
  calendarValues: TValues;
}) {
  return (
    <TabsContent value="overview" className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {totalTimeCard.title}
            </CardTitle>
            {totalTimeCard.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTimeCard.content}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {projectsWorkedOnCard.title}
            </CardTitle>
            {projectsWorkedOnCard.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projectsWorkedOnCard.content}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {collaboratorsCard.title}
            </CardTitle>
            {collaboratorsCard.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {collaboratorsCard.content}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {totalActionsPerformedCard.title}
            </CardTitle>
            {totalActionsPerformedCard.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalActionsPerformedCard.content}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Your days on Penpot</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <CalendarHeatMap7 values={calendarValues} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Projects Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChartAllProjects6
              chartData={pieChartAllProjects6ChartData}
              chartConfig={pieChartAllProjects6ChartConfig}
            />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
