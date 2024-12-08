import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { ChartData, ChartConfig } from "@/lib/types";
import { Pie, PieChart } from "recharts";
import { NoData } from "./no-data";

export function PieChartProjectsWorkedOn3({
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
      className="mx-auto aspect-square max-h-[300px]"
    >
      <PieChart>
        <Pie data={chartData} dataKey="hours" />
        <ChartLegend
          content={<ChartLegendContent nameKey="projects" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
}
