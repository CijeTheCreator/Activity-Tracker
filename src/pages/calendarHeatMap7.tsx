import { ResponsiveContainer } from "recharts";
import CalendarHeatmap from "react-calendar-heatmap";
import { TValues } from "@/lib/types";

export function CalendarHeatMap7({ values }: { values: TValues }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <CalendarHeatmap values={values} />
    </ResponsiveContainer>
  );
}
