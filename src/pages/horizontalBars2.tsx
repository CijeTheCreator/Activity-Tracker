import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { NoData } from "./no-data";
import { ChartConfig, ChartData } from "@/lib/types";

export function HorizontalBarsProjectsWorkedOn2({
  chartData,
  chartConfig,
}: {
  chartData: ChartData | null;
  chartConfig: ChartConfig | null;
}) {
  if (!chartData || !chartConfig) return <NoData />;
  return (
    <ChartContainer
      config={chartConfig}
      // className="flex items-center justify-center"
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 0,
        }}
      >
        <YAxis
          dataKey="project"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <XAxis dataKey="hours" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="hours" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
