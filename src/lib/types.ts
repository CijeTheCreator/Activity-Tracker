import { ReactNode } from "react";

export type TCard = {
  title: string;
  content: string;
  icon: ReactNode;
  subtext: string;
};

type TValue = {
  date: string;
  count: number;
};
export type TValues = TValue[];

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

export type AreaDayChartDataEntry = {
  day: string;
} & Record<string, number>;
export type AreaDayChartData = AreaDayChartDataEntry[];
export type AreaDayChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

export type AreaMonthChartDataEntry = {
  month: string;
} & Record<string, number>;
export type AreaMonthChartData = AreaMonthChartDataEntry[];
export type AreaMonthChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

export type AreaYearChartDataEntry = {
  year: string;
} & Record<string, number>;
export type AreaYearChartData = AreaYearChartDataEntry[];
export type AreaYearChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

export type LineDayChartDataEntry = {
  day: string;
} & Record<string, number>;
export type LineDayChartData = LineDayChartDataEntry[];
export type LineDayChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

export type LineMonthChartDataEntry = {
  month: string;
} & Record<string, number>;
export type LineMonthChartData = LineMonthChartDataEntry[];
export type LineMonthChartConfig = {
  hours: { label: string };
} & Record<string, ChartConfigEntry>;

export type LineYearChartDataEntry = {
  year: string;
} & Record<string, number>;
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
  datetime?: string;
};
