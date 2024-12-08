import { ResponsiveContainer } from "recharts";
import CalendarHeatmap from "react-calendar-heatmap";
import { TValue, TValues } from "@/lib/types";

export function CalendarHeatMap7({ values }: { values: TValues }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <div className="w-full h-full flex items-center justify-center">
        <CalendarHeatmap
          values={values}
          classForValue={(value: TValue) => {
            if (!value || value.count === 0) {
              return "color-empty";
            }

            if (value.count <= 1) {
              return "color-scale-1";
            } else if (value.count <= 3) {
              return "color-scale-2";
            } else if (value.count <= 6) {
              return "color-scale-3";
            } else {
              return "color-scale-4";
            }
          }}
        />
      </div>
    </ResponsiveContainer>
  );
}
