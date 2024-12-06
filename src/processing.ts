/* eslint-disable @typescript-eslint/no-unused-vars */
import CryptoJS from "crypto-js";
import {
  ActionData,
  AreaChartData,
  AreaChartDataEntry,
  ChartConfig,
  ChartData,
  CollaboratorData,
  CollaboratorDataEntry,
  PenpotDataProcessed,
  PenpotDataRaw,
  TCard,
  TValues,
} from "./lib/types";

export const PRIMARY_COLOR = "hsl(164, 86%, 16%)";
export const PRIMARY_COLOR_HEX = "#064c39";
export const INACTIVE_THRESHOLD = 120000;

export const COLOR_PALLETE = [
  "hsl(173, 58%, 39%)",
  "hsl(43, 74%, 66%)",
  "hsl(197, 37%, 24%)",
  "hsl(27, 87%, 67%)",
  "hsl(12, 76%, 61%)",
  "hsl(186, 55%, 42%)",
  "hsl(47, 70%, 63%)",
  "hsl(202, 35%, 26%)",
  "hsl(30, 83%, 64%)",
  "hsl(14, 70%, 58%)",
  "hsl(165, 60%, 40%)",
  "hsl(50, 72%, 65%)",
  "hsl(210, 34%, 28%)",
  "hsl(33, 85%, 62%)",
  "hsl(16, 74%, 59%)",
];

export function mapItemToColor(items: string[]): { [key: string]: string } {
  const itemMap: { [key: string]: string } = {};
  items.forEach((value, index) => {
    let color;

    if (index >= COLOR_PALLETE.length) {
      color = COLOR_PALLETE[COLOR_PALLETE.length - 1];
    } else {
      color = COLOR_PALLETE[index];
    }

    itemMap[value] = color;

    return itemMap;
  });
  return itemMap;
}

//Client determines the range by passing equivalent segment data
//Client passes in generatedRangeAsAnArgument generatedWithGenerateRange
export function getHorizontalBarChartProjectsWorkedOnData2(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): {
  chartData: ChartData;
  chartConfig: ChartConfig;
  start: number;
  date: string;
}[] {
  return getProjectsWorkedOnData(processedPenpotData, range, generatedRange);
}

function getCollaboratorData(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): CollaboratorData {
  const collaboratorData: ({
    [key: string]: string | number;
    collaborators: number;
    fill: string;
  } & {
    day: string;
  })[] = [];
  for (let i = 0; i < processedPenpotData.length; i++) {
    const penpotDataSegment = processedPenpotData[i];
    const collaboratorDataEntry: CollaboratorDataEntry = {
      collaborators: 0,
      day: "",
      fill: PRIMARY_COLOR,
    };
    collaboratorDataEntry[range] = penpotDataSegment[0].datetime!;
    const totalCollaborators = aggregateCollaborators(penpotDataSegment);
    collaboratorDataEntry["collaborators"] = totalCollaborators;
    collaboratorData.push(collaboratorDataEntry);
  }
  const filledAndSortedData = fillAndSortCollaboratorChartData(
    generatedRange,
    collaboratorData,
    range,
  );
  return filledAndSortedData;
}

function getActionsPerformedData(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): {
  chartData: ActionData;
  chartConfig: ChartConfig;
  date: string;
  start: number;
}[] {
  const mapData = processedPenpotData.map((value) => {
    const actionsPerformed = aggregateActionsPerformedData(value);
    const start = value[0].start;
    const date = getFormattedDate(range, value);
    const fillMap = mapItemToColor(
      actionsPerformed.map((value) => value.uniqueAction),
    );
    const chartConfig: {
      [key: string]: { label: string; color?: string };
      hours: { label: string; color?: string };
    } = generateChartconfig(fillMap);
    const chartData = actionsPerformed.map((innerValue) => {
      return {
        actionPerformed: innerValue.uniqueAction,
        hours: innerValue.totalTimespentOnAction,
        fill: fillMap[innerValue.uniqueAction],
      };
    });
    return { chartData, chartConfig, date, start };
  });
  const filledAndSortedData = fillAndSortActionData(generatedRange, mapData);
  return filledAndSortedData;
}

function getProjectsWorkedOnData(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): {
  chartData: ChartData;
  chartConfig: ChartConfig;
  date: string;
  start: number;
}[] {
  const mapData = processedPenpotData.map((value) => {
    const totalTimeSpentOnProject = aggregrateTotalTimeSpent(value);
    const start = value[0].start;
    const date = getFormattedDate(range, value);
    const fillMap = mapItemToColor(
      totalTimeSpentOnProject.map((value) => value.uniqueProject),
    );
    const chartConfig: {
      [key: string]: { label: string; color?: string };
      hours: { label: string; color?: string };
    } = generateChartconfig(fillMap);
    const chartData = totalTimeSpentOnProject.map((innerValue) => {
      return {
        project: innerValue.uniqueProject,
        hours: innerValue.totalTimeSpentOnProject,
        fill: fillMap[innerValue.uniqueProject],
      };
    });
    return { chartData, chartConfig, date, start };
  });
  const filledAndSortedData = fillAndSortData(generatedRange, mapData);

  return filledAndSortedData;
}

function fillAndSortActionData(
  generatedRange: string[],
  mapData: {
    chartData: { actionPerformed: string; hours: number; fill: string }[];
    chartConfig: {
      [key: string]: { label: string; color?: string };
      hours: { label: string; color?: string };
    };
    date: string;
    start: number;
  }[],
) {
  return generatedRange.map((value) => {
    const equivalentMappedData = mapData.find((penpotdata) => {
      return penpotdata.date == value;
    });
    if (equivalentMappedData) return equivalentMappedData;
    return {
      chartData: null,
      chartConfig: null,
      date: value,
      start: getTimestamp(value),
    };
  });
}
function fillAndSortData(
  generatedRange: string[],
  mapData: {
    chartData: { project: string; hours: number; fill: string }[];
    chartConfig: {
      [key: string]: { label: string; color?: string };
      hours: { label: string; color?: string };
    };
    date: string;
    start: number;
  }[],
) {
  return generatedRange.map((value) => {
    const equivalentMappedData = mapData.find((penpotdata) => {
      return penpotdata.date == value;
    });
    if (equivalentMappedData) return equivalentMappedData;
    return {
      chartData: null,
      chartConfig: null,
      date: value,
      start: getTimestamp(value),
    };
  });
}

function getFormattedDate(range: string, value: PenpotDataProcessed[]) {
  if (range == "day") {
    return value[0].datetime!;
  } else if (range == "month") {
    const splitDate = value[0].datetime!.split("-");
    return `${splitDate[0]}-${splitDate[1]}`;
  } else {
    const splitDate = value[0].datetime!.split("-");
    return `${splitDate[0]}`;
  }
}

function generateChartconfigSingleData(key: string) {
  const chartConfig: {
    [key: string]: { label: string; color?: string };
  } = {};
  chartConfig[key] = {
    label: key, //TODO: Might need to do some formatting here
    color: PRIMARY_COLOR,
  };
  return chartConfig;
}
function generateChartconfig(fillMap: { [key: string]: string }) {
  const chartConfig: {
    [key: string]: { label: string; color?: string };
    hours: { label: string; color?: string };
  } = {
    hours: {
      label: "Hours",
    },
  };
  Object.keys(fillMap).forEach((value) => {
    chartConfig[value] = {
      label: value, //TODO: Might need to do some formatting here
      color: fillMap[value],
    };
  });
  return chartConfig;
}

export function getPieChartActionsPerformedData5(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): {
  chartData: ActionData;
  chartConfig: ChartConfig;
  start: number;
  date: string;
}[] {
  return getActionsPerformedData(processedPenpotData, range, generatedRange);
}

//Client determines the range by passing equivalent segment data
export function getPieChartProjectsWorkedOnData3(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): {
  chartData: ChartData;
  chartConfig: ChartConfig;
  start: number;
  date: string;
}[] {
  return getProjectsWorkedOnData(processedPenpotData, range, generatedRange);
}

export function getLineChartCollaboratorsData4(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): { chartData: CollaboratorData; chartConfig: ChartConfig } {
  const chartData = getCollaboratorData(
    processedPenpotData,
    range,
    generatedRange,
  );
  const chartConfig = generateChartconfigSingleData(range);
  return { chartData, chartConfig };
}

export function getTotalCollaborators9(
  processedPenpotData: PenpotDataProcessed[],
): TCard {
  const totalCollaboratorsWorkedWith = [
    ...new Set(processedPenpotData.map((value) => value.collaborators).flat(2)),
  ].length;
  return {
    title: "Total Collaborators worked with",
    content: `${totalCollaboratorsWorkedWith}`,
    icon: null,
  };
}

export function getProjectsWorkedOn10(
  processedPenpotData: PenpotDataProcessed[],
): TCard {
  const totalProjectsWorkedOn = [
    ...new Set(processedPenpotData.map((value) => value.project)),
  ].length;
  return {
    title: "Total Projects worked on",
    content: `${totalProjectsWorkedOn}`,
    icon: null,
  };
}

export function getTotalTime11(
  processedPenpotData: PenpotDataProcessed[],
): TCard {
  let totalTimeSpent = 0;
  processedPenpotData.forEach((value) => {
    totalTimeSpent = totalTimeSpent + value.timespent!;
  });
  return {
    title: "Total time spent",
    content: `${totalTimeSpent}`,
    icon: null,
  };
}

export function getTotalActions8(
  processedPenpotData: PenpotDataProcessed[],
): TCard {
  const totalActionsPerformed = processedPenpotData.length;
  return {
    title: "Actions Performed",
    content: `${totalActionsPerformed}`,
    icon: null,
  };
}

export function getCalendarHeatMapData7(
  processedPenpotData: PenpotDataProcessed[][],
  generatedRange: string[],
): TValues {
  const { chartData: calendarHeatMapArray } = generateAreaChartDataAndConfigs(
    "day",
    processedPenpotData,
    generatedRange,
  );
  return calendarHeatMapArray.map((value) => {
    return {
      date: value.day,
      count: value.hours as number,
    };
  });
}

export function getPieChartAllProjects6(
  processedPenpotData: PenpotDataProcessed[],
): { chartData: ChartData; chartConfig: ChartConfig } {
  const totalTimeSpentAggregated =
    aggregrateTotalTimeSpent(processedPenpotData);
  const fillMap = mapItemToColor(
    totalTimeSpentAggregated.map((value) => value.uniqueProject),
  );
  const chartConfig: {
    [key: string]: { label: string; color?: string };
    hours: { label: string; color?: string };
  } = generateChartconfig(fillMap);
  const chartData = totalTimeSpentAggregated.map((value) => {
    return {
      project: value.uniqueProject,
      hours: value.totalTimeSpentOnProject,
      fill: fillMap[value.uniqueProject],
    };
  });
  return { chartData, chartConfig };
}

//The Client does the segmenting
export function getAreaChartTimeSpentData1(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
  generatedRange: string[],
): { data: AreaChartData; config: ChartConfig } {
  const { chartData: areaChartData, chartConfigs: chartConfig } =
    generateAreaChartDataAndConfigs(range, processedPenpotData, generatedRange);
  return { data: areaChartData, config: chartConfig };
}
function generateAreaChartDataAndConfigs(
  range: "day" | "month" | "year",
  processedPenpotData: PenpotDataProcessed[][],
  generatedRange: string[],
) {
  const areaChartData: ({
    day: string;
  } & Record<string, string | number>)[] = [];
  const chartConfig: {
    [key: string]: { label: string; color?: string };
    hours: { label: string; color?: string };
  } = {
    hours: {
      label: "Hours",
    },
  };
  for (let i = 0; i < processedPenpotData.length; i++) {
    const penpotDataSegment = processedPenpotData[i];
    const areaChartDataEntry: AreaChartDataEntry = { day: "" };
    areaChartDataEntry[range] = penpotDataSegment[0].datetime!;
    const totalTimeSpentOnProject = aggregrateTotalTimeSpent(penpotDataSegment);

    const fillMap = mapItemToColor(
      totalTimeSpentOnProject.map((value) => value.uniqueProject),
    );
    Object.keys(fillMap).forEach((value) => {
      chartConfig[value] = {
        label: value, //TODO: Might need to do some formatting here
        color: fillMap[value],
      };
    });
    totalTimeSpentOnProject.forEach((value) => {
      areaChartDataEntry[value.uniqueProject] = value.totalTimeSpentOnProject;
    });
    areaChartData.push(areaChartDataEntry);
  }
  const filledAndSortedData = fillAndSortAreaChartData(
    generatedRange,
    areaChartData,
    range,
  );
  return { chartData: filledAndSortedData, chartConfigs: chartConfig };
}

function fillAndSortCollaboratorChartData(
  generatedRange: string[],
  collaboratorData: ({
    [key: string]: string | number;
    collaborators: number;
    fill: string;
  } & {
    day: string;
  })[],
  range: string,
) {
  return generatedRange.map((value) => {
    const equivalentMappedData = collaboratorData.find(
      (chartdata) => chartdata[range] == value,
    );
    if (equivalentMappedData) return equivalentMappedData;
    const collaboratorDataEntry: CollaboratorDataEntry = {
      collaborators: 0,
      day: "",
      fill: PRIMARY_COLOR,
    };
    collaboratorDataEntry[range] = value;
    return collaboratorDataEntry;
  });
}
function fillAndSortAreaChartData(
  generatedRange: string[],
  areaChartData: ({ day: string } & Record<string, string | number>)[],
  range: string,
) {
  return generatedRange.map((value) => {
    const equivalentMappedData = areaChartData.find(
      (chartdata) => chartdata[range] == value,
    );
    if (equivalentMappedData) return equivalentMappedData;
    const emptyEntry: AreaChartDataEntry = { day: "" };
    emptyEntry[range] = value;
    return emptyEntry;
  });
}

function aggregateCollaborators(processedPenpotData: PenpotDataProcessed[]) {
  return [
    ...new Set(processedPenpotData.map((value) => value.collaborators).flat(2)),
  ].length;
}

function aggregateActionsPerformedData(
  penpotDataSegment: PenpotDataProcessed[],
) {
  const uniqueActions = [
    ...new Set(penpotDataSegment.map((value) => value.change)),
  ];
  const totalTimeSpentPerformingAction = [];
  for (let i = 0; i < uniqueActions.length; i++) {
    const uniqueAction = uniqueActions[i];
    let totalTimespentOnAction = 0;
    penpotDataSegment
      .filter((value) => value.project == uniqueAction)
      .map((value) => value.timespent)
      .forEach((value) => {
        totalTimespentOnAction = totalTimespentOnAction + value!;
      });
    totalTimeSpentPerformingAction.push({
      uniqueAction,
      totalTimespentOnAction,
    });
  }
  return totalTimeSpentPerformingAction;
}
function aggregrateTotalTimeSpent(penpotDataSegment: PenpotDataProcessed[]) {
  const uniqueProjects = [
    ...new Set(penpotDataSegment.map((value) => value.project)),
  ];
  const totalTimeSpentOnAllProjects = [];
  for (let i = 0; i < uniqueProjects.length; i++) {
    const uniqueProject = uniqueProjects[i];
    let totalTimeSpentOnProject = 0;
    penpotDataSegment
      .filter((value) => value.project == uniqueProject)
      .map((value) => value.timespent)
      .forEach((value) => {
        totalTimeSpentOnProject = totalTimeSpentOnProject + value!;
      });
    totalTimeSpentOnAllProjects.push({
      uniqueProject,
      totalTimeSpentOnProject,
    });
  }
  return totalTimeSpentOnAllProjects;
}

export function segmentPenpotData(
  data: PenpotDataProcessed[],
  segmentBy: "year" | "month" | "day",
): PenpotDataProcessed[][] {
  const segmented: { [key: string]: PenpotDataProcessed[] } = {};

  data.forEach((item) => {
    const date = new Date(item.start);
    let key: string;
    const datetime = date.toISOString().split("T")[0]; // YYYY-MM-DD
    item["datetime"] = datetime;

    switch (segmentBy) {
      case "day":
        key = date.toISOString().split("T")[0]; // YYYY-MM-DD
        break;
      case "month":
        key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`; // YYYY-MM
        break;
      case "year":
        key = date.getFullYear().toString();
        break;
      default:
        throw new Error(`Unsupported segmentBy value: ${segmentBy}`);
    }

    if (!segmented[key]) {
      segmented[key] = [];
    }
    segmented[key].push(item);
  });

  const segmentedData = Object.values(segmented);
  const sortedInnerSegmentedData = segmentedData.map((segment) => {
    return segment.sort((a, b) => {
      return a.start - b.start;
    });
  });
  const sortedOuterSegmentedData = sortedInnerSegmentedData.sort((a, b) => {
    if (a.length == 0 || b.length == 0) return 0;
    return a[0].start - b[0].start;
  });
  return sortedOuterSegmentedData;
}

export function processPenpotData(
  rawPenpotData: PenpotDataRaw[],
): PenpotDataProcessed[] {
  const processedPenpotDataArray: PenpotDataProcessed[] = [];

  for (let i = 0; i < rawPenpotData.length; i++) {
    const rawPenpotDataUnit = rawPenpotData[i];
    const previousPenpotDataUnit = rawPenpotData[i - 1];
    const timedifference =
      rawPenpotDataUnit.start - previousPenpotDataUnit.start;
    const processedUnit: PenpotDataProcessed = {
      ...rawPenpotDataUnit,
      timespent: timedifference < INACTIVE_THRESHOLD ? timedifference : 0,
    };

    processedPenpotDataArray.push(processedUnit);
  }

  return processedPenpotDataArray.filter((value) => value.timespent! > 0);
}

export function encryptString(text: string, key: string) {
  if (!text || !key) {
    throw new Error("Both text and key are required for encryption.");
  }
  return CryptoJS.AES.encrypt(text, key).toString();
}

export function generateRange(
  range: "day" | "month" | "year",
  date: string,
): string[] {
  const result: string[] = [];
  const inputDate = new Date(date);
  const today = new Date();

  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date format. Use YYYY-MM-DD.");
  }

  switch (range) {
    case "day": {
      const currentDay = new Date(today);
      while (currentDay <= inputDate) {
        result.push(currentDay.toISOString().split("T")[0]);
        currentDay.setDate(currentDay.getDate() + 1);
      }
      break;
    }

    case "month": {
      const currentMonth = new Date(today.getFullYear(), today.getMonth());
      const targetMonth = new Date(
        inputDate.getFullYear(),
        inputDate.getMonth(),
      );
      while (currentMonth <= targetMonth) {
        const year = currentMonth.getFullYear();
        const month = (currentMonth.getMonth() + 1).toString().padStart(2, "0");
        result.push(`${year}-${month}`);
        currentMonth.setMonth(currentMonth.getMonth() + 1);
      }
      break;
    }

    case "year": {
      let currentYear = today.getFullYear();
      const targetYear = inputDate.getFullYear();
      while (currentYear <= targetYear) {
        result.push(currentYear.toString());
        currentYear++;
      }
      break;
    }
    default:
      throw new Error("Invalid range type. Use 'day', 'month', or 'year'.");
  }

  return result;
}

function getTimestamp(date: string): number {
  const yearPattern = /^\d{4}$/;
  const monthPattern = /^\d{4}-\d{2}$/;
  const dayPattern = /^\d{4}-\d{2}-\d{2}$/;

  let parsedDate: Date;

  if (yearPattern.test(date)) {
    parsedDate = new Date(`${date}-01-01T00:00:00Z`);
  } else if (monthPattern.test(date)) {
    parsedDate = new Date(`${date}-01T00:00:00Z`);
  } else if (dayPattern.test(date)) {
    parsedDate = new Date(`${date}T00:00:00Z`);
  } else {
    throw new Error("Invalid date format. Use YYYY, YYYY-MM, or YYYY-MM-DD.");
  }

  return parsedDate.getTime();
}
