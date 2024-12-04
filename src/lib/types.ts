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
export type ChartDataMany = ChartData[];

export type ActionDataEntry = {
  actionPerformed: string;
  hours: number;
  fill: string;
};
export type ActionData = ActionDataEntry[];
export type ActionDataMany = ActionData[];

export type CollaboratorDataEntry = {
  collaborators: number;
  fill: string;
  [key: string]: string | number;
} & ({ day: string } | { month: string } | { year: string });
export type CollaboratorData = CollaboratorDataEntry[];
export type CollaboratorDataMany = CollaboratorData[];

type ChartConfigEntry = {
  label: string;
  color?: string;
};

export type ChartConfig = {
  hours: { label: string };
} & Partial<Record<string, ChartConfigEntry>>;

export type AreaChartDataEntry = (
  | { day: string }
  | { month: string }
  | { year: string }
) &
  Record<string, string | number>;
export type AreaChartData = AreaChartDataEntry[];
export type AreaChartConfig = {
  hours: { label: string };
} & Partial<Record<string, ChartConfigEntry>>;

export type LineDayChartDataEntry = AreaChartDataEntry;
export type LineDayChartData = LineDayChartDataEntry[];
export type LineDayChartConfig = {
  hours: { label: string };
} & Partial<Record<string, ChartConfigEntry>>;

export type PenpotDataProcessed = {
  timespent: number;
  start: number;
  project: string;
  page: string;
  change: string;
  collaborators: string[];
  datetime?: string;
};
