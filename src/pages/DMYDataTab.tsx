import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TCard } from "@/lib/types";
import { TabsContent } from "@radix-ui/react-tabs";
import { AreaChartTimeSpent1 } from "./areaChart1";

export function TabRangeContent({
  totalTimeCard,
  projectsWorkedOnCard,
  collaboratorsCard,
  totalActionsPerformedCard,
}: {
  totalTimeCard: TCard;
  projectsWorkedOnCard: TCard;
  collaboratorsCard: TCard;
  totalActionsPerformedCard: TCard;
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
            <CardTitle>Files worked on</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <HorizontalBarsProjectsWorkedOn2 />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Collaborators</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChartCollaborators3 />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-7">
          <CardHeader>
            <CardTitle>Time spent</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <AreaChartTimeSpent1 />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Actions Performed</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <PieChartActionsPerformed4 />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Files worked on</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChartProjectsWorkedOn3 />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
