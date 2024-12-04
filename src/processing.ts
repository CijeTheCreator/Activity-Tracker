/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ActionDataMany,
  AreaChartData,
  AreaChartDataEntry,
  ChartData,
  ChartDataMany,
  CollaboratorData,
  CollaboratorDataEntry,
  PenpotDataProcessed,
  TCard,
  TValues,
} from "./lib/types";

//Client determines the range by passing equivalent segment data
export function getHorizontalBarChartProjectsWorkedOnData2(
  processedPenpotData: PenpotDataProcessed[][],
): ChartDataMany {
  return getProjectsWorkedOnData(processedPenpotData);
}

function getCollaboratorData(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): CollaboratorData {
  const collaboratorData = [];
  for (let i = 0; i < processedPenpotData.length; i++) {
    const penpotDataSegment = processedPenpotData[i];
    const collaboratorDataEntry: CollaboratorDataEntry = {
      collaborators: 0,
      day: "",
      fill: "",
    };
    collaboratorDataEntry[range] = penpotDataSegment[0].datetime!;
    const totalCollaborators = aggregateCollaborators(penpotDataSegment);
    collaboratorDataEntry["collaborators"] = totalCollaborators;
    collaboratorData.push(collaboratorDataEntry);
  }
  return collaboratorData;
}

function getActionsPerformedData(
  processedPenpotData: PenpotDataProcessed[][],
): ActionDataMany {
  return processedPenpotData.map((value) => {
    const actionsPerformed = aggregateActionsPerformedData(value);
    return actionsPerformed.map((innerValue) => {
      return {
        actionPerformed: innerValue.uniqueAction,
        hours: innerValue.totalTimespentOnAction,
        fill: "",
      };
    });
  });
}
function getProjectsWorkedOnData(
  processedPenpotData: PenpotDataProcessed[][],
): ChartDataMany {
  return processedPenpotData.map((value) => {
    const totalTimeSpentOnProject = aggregrateTotalTimeSpent(value);
    return totalTimeSpentOnProject.map((innerValue) => {
      return {
        project: innerValue.uniqueProject,
        hours: innerValue.totalTimeSpentOnProject,
        fill: "",
      };
    });
  });
}

export function getPieChartActionsPerformedData5(
  processedPenpotData: PenpotDataProcessed[][],
): ActionDataMany {
  return getActionsPerformedData(processedPenpotData);
}

//Client determines the range by passing equivalent segment data
export function getPieChartProjectsWorkedOnData3(
  processedPenpotData: PenpotDataProcessed[][],
): ChartDataMany {
  return getProjectsWorkedOnData(processedPenpotData);
}

export function getLineChartCollaboratorsData4(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): CollaboratorData {
  return getCollaboratorData(processedPenpotData, range);
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
    totalTimeSpent = totalTimeSpent + value.timespent;
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
): TValues {
  const calendarHeatMapArray = generateAreaChartData(
    "day",
    processedPenpotData,
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
): ChartData {
  return aggregrateTotalTimeSpent(processedPenpotData).map((value) => {
    return {
      project: value.uniqueProject,
      hours: value.totalTimeSpentOnProject,
      fill: "",
    };
  });
}

//The Client does the segmenting
export function getAreaChartTimeSpentData1(
  processedPenpotData: PenpotDataProcessed[][],
  range: "day" | "month" | "year",
): AreaChartData {
  const areaChartData = generateAreaChartData(range, processedPenpotData);
  return areaChartData;
}
function generateAreaChartData(
  range: "day" | "month" | "year",
  processedPenpotData: PenpotDataProcessed[][],
) {
  const areaChartData = [];
  for (let i = 0; i < processedPenpotData.length; i++) {
    const penpotDataSegment = processedPenpotData[i];
    const areaChartDataEntry: AreaChartDataEntry = { day: "" };
    areaChartDataEntry[range] = penpotDataSegment[0].datetime!;
    const totalTimeSpentOnProject = aggregrateTotalTimeSpent(penpotDataSegment);
    totalTimeSpentOnProject.forEach((value) => {
      areaChartDataEntry[value.uniqueProject] = value.totalTimeSpentOnProject;
    });
    areaChartData.push(areaChartDataEntry);
  }
  return areaChartData;
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
        totalTimespentOnAction = totalTimespentOnAction + value;
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
        totalTimeSpentOnProject = totalTimeSpentOnProject + value;
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
