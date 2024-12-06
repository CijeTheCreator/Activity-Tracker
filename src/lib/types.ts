import { Board, Shape } from "@penpot/plugin-types";
import { z } from "zod";
import { ReactNode } from "react";

export type TCard = {
  title: string;
  content: string;
  icon: ReactNode;
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
  [key: string]: { label: string; color?: string };
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

export type PenpotDataRaw = {
  start: number;
  project: string;
  page: string;
  change: string;
  collaborators: string[];
};
export type PenpotDataProcessed = {
  timespent?: number;
  start: number;
  project: string;
  page: string;
  change: string;
  collaborators: string[];
  //Date time is inserted during segmentation
  datetime?: string;
};

export type ExtendedShape = Shape & { Da: { Lf: string } };
export type ExtendedBoard = Board & { Da: { Lf: string } };
//Lf is the changed shapes Id
export function hasDaProperty(
  event: Shape | Board,
): event is
  | (Shape & { Da: { Lf: string } })
  | (Board & { Da: { Lf: string } }) {
  return event && typeof event === "object" && "Da" in event;
}

export const UserKeyForm = z.object({
  key: z.string().min(4, {
    message: "Key must be at least 4 characters",
  }),
});
export type TUserKeyForm = z.infer<typeof UserKeyForm>;
