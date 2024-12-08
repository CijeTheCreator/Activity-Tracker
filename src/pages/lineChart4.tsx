import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartConfig, CollaboratorData } from "@/lib/types";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { NoData } from "./no-data";
import { adjustLightness, PRIMARY_COLOR } from "@/processing";

export function LineChartCollaborators3({
  chartData,
  chartConfig,
  range,
}: {
  chartData: CollaboratorData | null;
  chartConfig: ChartConfig | null;
  range: "day" | "month" | "year";
}) {
  if (!chartData || !chartConfig) return <NoData />;
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={range}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="collaborators"
          type="natural"
          stroke={adjustLightness(PRIMARY_COLOR)}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
