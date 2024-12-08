declare module "react-calendar-heatmap" {
  import * as React from "react";

  export interface HeatmapValue {
    date: string | Date;
    count?: number;
  }

  export interface ReactCalendarHeatmapProps {
    values: HeatmapValue[];
    startDate?: string | Date;
    endDate?: string | Date;
    gutterSize?: number;
    horizontal?: boolean;
    showWeekdayLabels?: boolean;
    onClick?: (value: HeatmapValue) => void;
    classForValue?: (value: HeatmapValue) => string;
    titleForValue?: (value: HeatmapValue) => string;
    tooltipDataAttrs?: (
      value: HeatmapValue,
    ) => React.HTMLAttributes<HTMLDivElement>;
    monthLabels?: string[];
    weekdayLabels?: string[];
    transformDayElement?: (
      element: React.ReactElement,
      value: HeatmapValue,
    ) => React.ReactNode;
  }

  export default class ReactCalendarHeatmap extends React.Component<ReactCalendarHeatmapProps> {}
}
