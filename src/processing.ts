/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AreaDayChartData,
  AreaMonthChartData,
  AreaYearChartData,
  ChartData,
  PenpotDataProcessed,
  TCard,
  TValues,
} from "./lib/types";

export function getHorizontalBarChartProjectsWorkedOnData2(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): ChartData {
  switch (range) {
    case "day":
      return [];
    case "month":
      return [];
    case "year":
      return [];
    default:
      return [];
  }
}

export function getPieChartActionsPerformedData5(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): ChartData {
  switch (range) {
    case "day":
      return [];
    case "month":
      return [];
    case "year":
      return [];
    default:
      return [];
  }
}

export function getPieChartProjectsWorkedOnData3(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): ChartData {
  switch (range) {
    case "day":
      return [];
    case "month":
      return [];
    case "year":
      return [];
    default:
      return [];
  }
}

export function getLineChartCollaboratorsData4(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): ChartData {
  switch (range) {
    case "day":
      return [];
    case "month":
      return [];
    case "year":
      return [];
    default:
      return [];
  }
}

export function getTotalCollaborators9(
  processedPenpotData: PenpotDataProcessed,
): TCard {
  return {
    title: "",
    content: "",
    subtext: "",
    icon: null,
  };
}

export function getProjectsWorkedOn10(
  processedPenpotData: PenpotDataProcessed,
): TCard {
  return {
    title: "",
    content: "",
    subtext: "",
    icon: null,
  };
}

export function getTotalTime11(
  processedPenpotData: PenpotDataProcessed,
): TCard {
  return {
    title: "",
    content: "",
    subtext: "",
    icon: null,
  };
}

export function getTotalActions8(
  processedPenpotData: PenpotDataProcessed,
): TCard {
  return {
    title: "",
    content: "",
    subtext: "",
    icon: null,
  };
}

export function getCalendarHeatMapData7(
  processedPenpotData: PenpotDataProcessed[][],
): TValues {
  return [];
}

export function getPieChartAllProjects6(
  processedPenpotData: PenpotDataProcessed[][],
): ChartData {
  return [];
}

export function getAreaChartTimeSpentData1(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): AreaDayChartData | AreaMonthChartData | AreaYearChartData {
  switch (range) {
    case "day":
      for (let i = 0; i < processedPenpotData.length; i++) {
        const penpotDataSegment = processedPenpotData[i];
        const areaDayChartData = { day: penpotDataSegment[0].datetime! };
        const uniqueProjects = [
          ...new Set(penpotDataSegment.map((value) => value.project)),
        ];
        for (let i = 0; i < uniqueProjects.length; i++) {
          const uniqueProject = uniqueProjects[i];
        }
      }
      return [];
    case "month":
      return [];
    case "year":
      return [];
    default:
      return [];
  }
}

function segmentPenpotData(
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
