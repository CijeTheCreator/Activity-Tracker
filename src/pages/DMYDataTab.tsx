import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ActionData,
  AreaChartData,
  ChartConfig,
  ChartData,
  CollaboratorData,
  TCard,
} from "@/lib/types";
import { TabsContent } from "@radix-ui/react-tabs";
// import { AreaChartTimeSpent1 } from "./areaChart1";
// import { HorizontalBarsProjectsWorkedOn2 } from "./horizontalBars2";
import { LineChartCollaborators3 } from "./lineChart4";
import { PieChartProjectsWorkedOn3 } from "./pieChart3";
// import { PieChartProjectsWorkedOn3 } from "./pieChart3";
// import { PieChartActionsPerformed4 } from "./pieChart5";

export function TabRangeContentDMY({
  totalTimeCard,
  projectsWorkedOnCard,
  collaboratorsCard,
  totalActionsPerformedCard,
  // areaChartData,
  // areaChartConfig,
  // horizontalBarsChartData,
  // horizontalBarsChartConfig,
  pieChart3chartData,
  pieChart3chartConfig,
  lineChart4chartData,
  lineChart4chartConfig,
  // pieChart5chartData,
  // pieChart5chartConfig,
  range,
}: {
  totalTimeCard: TCard;
  projectsWorkedOnCard: TCard;
  collaboratorsCard: TCard;
  totalActionsPerformedCard: TCard;
  areaChartData: AreaChartData | null;
  areaChartConfig: ChartConfig | null;
  horizontalBarsChartData: ChartData | null;
  horizontalBarsChartConfig: ChartConfig | null;
  pieChart3chartData: ChartData | null;
  pieChart3chartConfig: ChartConfig | null;
  lineChart4chartData: CollaboratorData | null;
  lineChart4chartConfig: ChartConfig | null;
  pieChart5chartData: ActionData | null;
  pieChart5chartConfig: ChartConfig | null;
  range: "day" | "month" | "year";
}) {
  return (
    <TabsContent value={range} className="space-y-4">
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
            <CardTitle>Files worked on</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 flex items-center justify-center">
            <PieChartProjectsWorkedOn3
              chartData={pieChart3chartData}
              chartConfig={pieChart3chartConfig}
            />
            {/* <HorizontalBarsProjectsWorkedOn2 */}
            {/*   chartData={horizontalBarsChartData} */}
            {/*   chartConfig={horizontalBarsChartConfig} */}
            {/* /> */}
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Collaborators</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChartCollaborators3
              chartData={lineChart4chartData}
              chartConfig={lineChart4chartConfig}
              range={range}
            />
          </CardContent>
        </Card>
      </div>
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"> */}
      {/*   <Card className="col-span-7"> */}
      {/*     <CardHeader> */}
      {/*       <CardTitle>Time spent</CardTitle> */}
      {/*     </CardHeader> */}
      {/*     <CardContent className="pl-2"> */}
      {/*       <AreaChartTimeSpent1 */}
      {/*         chartData={areaChartData} */}
      {/*         chartConfig={areaChartConfig} */}
      {/*         range={range} */}
      {/*       /> */}
      {/*     </CardContent> */}
      {/*   </Card> */}
      {/* </div> */}
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"> */}
      {/*   <Card className="col-span-4"> */}
      {/*     <CardHeader> */}
      {/*       <CardTitle>Actions Performed</CardTitle> */}
      {/*     </CardHeader> */}
      {/*     <CardContent className="pl-2"> */}
      {/*       <PieChartActionsPerformed4 */}
      {/*         chartData={pieChart5chartData} */}
      {/*         chartConfig={pieChart5chartConfig} */}
      {/*       /> */}
      {/*     </CardContent> */}
      {/*   </Card> */}
      {/*   <Card className="col-span-3"> */}
      {/*     <CardHeader> */}
      {/*       <CardTitle>Files worked on</CardTitle> */}
      {/*     </CardHeader> */}
      {/*     <CardContent> */}
      {/*       <PieChartProjectsWorkedOn3 */}
      {/*         chartData={pieChart3chartData} */}
      {/*         chartConfig={pieChart3chartConfig} */}
      {/*       /> */}
      {/*     </CardContent> */}
      {/*   </Card> */}
      {/* </div> */}
    </TabsContent>
  );
}
