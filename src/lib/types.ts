import { ReactNode } from "react";

// Card: Total time
// Card: Total projects
// Card: Total collaborators
// Card: Total actions
export type TCard = {
  title: string;
  content: string;
  icon: ReactNode;
  subtext: string;
};

// Calendar Heatmap : We will be using react-calendar-heatmap
// <CalendarHeatmap
//   values={[
//     { date: '2016-01-01', count: 12 },
//     { date: '2016-01-22', count: 122 },
//     { date: '2016-01-30', count: 38 },
//     // ...and so on
//   ]}
// />

type TValue = {
  date: string; // ISO 8601 date string
  count: number; // Numerical count
};
export type TValues = TValue[]; // Array of Value objects

// Piechart: All projects
type ChartDataEntry = {
  project: string;
  hours: number;
  fill: string;
};
export type ChartData = ChartDataEntry[];

type ChartConfigEntry = {
  label: string;
  color?: string;
};

export type ChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

// Area Chart Day: Total Time spent
export type AreaDayChartDataEntry = {
  day: string;
} & Record<string, string>;
export type AreaDayChartData = AreaDayChartDataEntry[];
export type AreaDayChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

// Area Chart Month: Total Time spent
export type AreaMonthChartDataEntry = {
  month: string;
} & Record<string, string>;
export type AreaMonthChartData = AreaMonthChartDataEntry[];
export type AreaMonthChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

// Area Chart Year: Total Time spent
export type AreaYearChartDataEntry = {
  year: string;
} & Record<string, string>;
export type AreaYearChartData = AreaYearChartDataEntry[];
export type AreaYearChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

// Line Chart Day: Total Time spent
export type LineDayChartDataEntry = {
  day: string;
} & Record<string, string>;
export type LineDayChartData = LineDayChartDataEntry[];
export type LineDayChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

// Area Chart Month: Total Time spent
export type LineMonthChartDataEntry = {
  month: string;
} & Record<string, string>;
export type LineMonthChartData = LineMonthChartDataEntry[];
export type LineMonthChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

// Area Chart Year: Total Time spent
export type LineYearChartDataEntry = {
  year: string;
} & Record<string, string>;
export type LineYearChartData = LineYearChartDataEntry[];
export type LineYearChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;
export type PenpotDataProcessed = {
  timespent: number;
  start: number;
  project: string;
  page: string;
  change: string;
  collaborators: string[];
};
