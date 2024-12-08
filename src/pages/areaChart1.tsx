import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChartData, ChartConfig } from "@/lib/types";
import { adjustLightness } from "@/processing";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { NoData } from "./no-data";

export function AreaChartTimeSpent1({
  chartData,
  chartConfig,
  range,
}: {
  chartData: AreaChartData | null;
  chartConfig: ChartConfig | null;
  range: "day" | "month" | "year";
}) {
  if (!chartData || !chartConfig) return <NoData />;
  const keys = [
    ...new Set(
      chartData
        .map((chartEntry) => {
          return Object.keys(chartEntry);
        })
        .flat(1),
    ),
  ].filter((value) => value != range);
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[250px] w-full"
    >
      <AreaChart data={chartData}>
        <defs>
          {keys.map((key_value, index) => {
            return (
              <ParametizedLinearGradient
                key={index}
                key_name={key_value}
                color={chartConfig[key_value].color!}
              />
            );
          })}
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={range}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        {keys.map((key_value, index) => {
          return (
            <ParametizedArea
              key={index}
              key_name={key_value}
              color={chartConfig[key_value].color!}
              stroke={adjustLightness(chartConfig[key_value].color!)}
            />
          );
        })}
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
}
function ParametizedArea({
  key_name,
  stroke,
  color,
}: {
  stroke: string;
  key_name: string;
  color: string;
}) {
  return (
    <Area
      dataKey={key_name}
      type="natural"
      fill={color}
      stroke={stroke}
      stackId="a"
    />
  );
}

function ParametizedLinearGradient({
  key_name,
  color,
}: {
  key_name: string;
  color: string;
}) {
  return (
    <linearGradient id={`fill${key_name}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={color} stopOpacity={0.8} />
      <stop offset="95%" stopColor={color} stopOpacity={0.1} />
    </linearGradient>
  );
}
