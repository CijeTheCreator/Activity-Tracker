import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ActionData, ChartConfig } from "@/lib/types";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { NoData } from "./no-data";

export function PieChartActionsPerformed4({
  chartData,
  chartConfig,
}: {
  chartData: ActionData | null;
  chartConfig: ChartConfig | null;
}) {
  if (!chartData || !chartConfig) return <NoData />;
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="hours"
          nameKey="actionPerformed"
          innerRadius={60}
          strokeWidth={5}
          activeIndex={0}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
        />
      </PieChart>
    </ChartContainer>
  );
}
