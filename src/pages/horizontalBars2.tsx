import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { NoData } from "./no-data";
import { ChartData } from "@/lib/types";

export function HorizontalBarsProjectsWorkedOn2({
  chartData,
  chartConfig,
}: {
  chartData: ChartData;
  chartConfig: ChartConfig;
}) {
  if (!chartData || !chartConfig) return <NoData />;
  return (
    <ChartContainer config={chartConfig}>
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
