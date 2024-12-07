import {
  generateRange,
  getAreaChartTimeSpentData1,
  getCalendarHeatMapData7,
  getHorizontalBarChartProjectsWorkedOnData2,
  getLineChartCollaboratorsData4,
  getPieChartActionsPerformedData5,
  getPieChartAllProjects6,
  getPieChartProjectsWorkedOnData3,
  getProjectsWorkedOn10,
  getTotalActions8,
  getTotalCollaborators9,
  getTotalTime11,
  processPenpotData,
  segmentPenpotData,
} from "@/processing";
import DashboardPage from "./dashboard";
import { PenpotDataRaw } from "@/lib/types";

export function CalculationCente({
  penpotDataRaw,
}: {
  penpotDataRaw: PenpotDataRaw[];
}) {
  const penpotDataProceessed = processPenpotData(penpotDataRaw);
  const generatedDayRange = generateRange("day", 1730986775000);
  const generatedMonthRange = generateRange("month", 1730986775000);
  const generatedYearRange = generateRange("year", 1730986775000);

  const yearSegment = segmentPenpotData(penpotDataProceessed, "year");
  const monthSegment = segmentPenpotData(penpotDataProceessed, "month");
  const daySegment = segmentPenpotData(penpotDataProceessed, "day");

  const totalTimeCardDayArray = daySegment.map((penpotDataProcessed) =>
    getTotalTime11(penpotDataProcessed),
  );
  const totalTimeCardMonthArray = monthSegment.map((penpotDataProcessed) =>
    getTotalTime11(penpotDataProcessed),
  );

  const totalTimeCardYearArray = yearSegment.map((penpotDataProcessed) =>
    getTotalTime11(penpotDataProcessed),
  );

  const projectsWorkedOnCardDayArray = daySegment.map((penpotDataProcessed) =>
    getProjectsWorkedOn10(penpotDataProcessed),
  );

  const projectsWorkedOnCardMonthArray = monthSegment.map(
    (penpotDataProcessed) => getProjectsWorkedOn10(penpotDataProcessed),
  );
  const projectsWorkedOnCardYearArray = yearSegment.map((penpotDataProcessed) =>
    getProjectsWorkedOn10(penpotDataProcessed),
  );
  const collaboratorsCardDayArray = daySegment.map((penpotDataProcessed) =>
    getTotalCollaborators9(penpotDataProcessed),
  );

  const collaboratorsCardMonthArray = monthSegment.map((penpotDataProcessed) =>
    getTotalCollaborators9(penpotDataProcessed),
  );
  const collaboratorsCardYearArray = yearSegment.map((penpotDataProcessed) =>
    getTotalCollaborators9(penpotDataProcessed),
  );
  const totalActionsPerformedCardDayArray = daySegment.map(
    (penpotDataProcessed) => getTotalActions8(penpotDataProcessed),
  );

  const totalActionsPerformedCardMonthArray = monthSegment.map(
    (penpotDataProcessed) => getTotalActions8(penpotDataProcessed),
  );
  const totalActionsPerformedCardYearArray = yearSegment.map(
    (penpotDataProcessed) => getTotalActions8(penpotDataProcessed),
  );
  const { data: areaChartDataMonth, config: areaChartConfigMonth } =
    getAreaChartTimeSpentData1(monthSegment, "month", generatedMonthRange);
  const { data: areaChartDataYear, config: areaChartConfigYear } =
    getAreaChartTimeSpentData1(yearSegment, "year", generatedYearRange);
  const { data: areaChartDataDay, config: areaChartConfigDay } =
    getAreaChartTimeSpentData1(daySegment, "day", generatedDayRange);
  const horizontalBarsChartDataDayArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      daySegment,
      "day",
      generatedDayRange,
    ).map((value) => value.chartData);
  const horizontalBarsChartDataMonthArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      monthSegment,
      "month",
      generatedMonthRange,
    ).map((value) => value.chartData);
  const horizontalBarsChartDataYearArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      yearSegment,
      "year",
      generatedYearRange,
    ).map((value) => value.chartData);
  const horizontalBarsChartConfigDayArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      daySegment,
      "day",
      generatedDayRange,
    ).map((value) => value.chartConfig);
  const horizontalBarsChartConfigMonthArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      monthSegment,
      "month",
      generatedDayRange,
    ).map((value) => value.chartConfig);
  const horizontalBarsChartConfigYearArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      yearSegment,
      "year",
      generatedYearRange,
    ).map((value) => value.chartConfig);
  const pieChart3chartDataDayArray = getPieChartProjectsWorkedOnData3(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartData);
  const pieChart3chartDataMonthArray = getPieChartProjectsWorkedOnData3(
    monthSegment,
    "month",
    generatedMonthRange,
  ).map((value) => value.chartData);
  const pieChart3chartDataYearArray = getPieChartProjectsWorkedOnData3(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartData);
  const pieChart3chartConfigDayArray = getPieChartProjectsWorkedOnData3(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  const pieChart3chartConfigMonthArray = getPieChartProjectsWorkedOnData3(
    monthSegment,
    "month",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  const pieChart3chartConfigYearArray = getPieChartProjectsWorkedOnData3(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartConfig);

  const { data: lineChart4chartDataMonth, config: lineChart4chartConfigMonth } =
    getLineChartCollaboratorsData4(monthSegment, "month", generatedMonthRange);
  const { data: lineChart4chartDataYear, config: lineChart4chartConfigYear } =
    getLineChartCollaboratorsData4(yearSegment, "year", generatedYearRange);
  const { data: lineChart4chartDataDay, config: lineChart4chartConfigDay } =
    getLineChartCollaboratorsData4(daySegment, "day", generatedDayRange);

  const pieChart5chartDataDayArray = getPieChartActionsPerformedData5(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartData);
  const pieChart5chartDataMonthArray = getPieChartActionsPerformedData5(
    monthSegment,
    "month",
    generatedMonthRange,
  ).map((value) => value.chartData);
  const pieChart5chartDataYearArray = getPieChartActionsPerformedData5(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartData);
  const pieChart5chartConfigDayArray = getPieChartActionsPerformedData5(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  const pieChart5chartConfigMonthArray = getPieChartActionsPerformedData5(
    monthSegment,
    "month",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  const pieChart5chartConfigYearArray = getPieChartActionsPerformedData5(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartConfig);

  const totalTimeCardOverall = getTotalTime11(penpotDataProceessed);
  const projectsWorkedOnCardOverall =
    getProjectsWorkedOn10(penpotDataProceessed);
  const collaboratorsCardOverall = getTotalCollaborators9(penpotDataProceessed);
  const totalActionsPerformedCardOverall =
    getTotalActions8(penpotDataProceessed);
  const pieChartAllProjects6ChartDataOverall =
    getPieChartAllProjects6(penpotDataProceessed).chartData;
  const pieChartAllProjects6ChartConfigOverall =
    getPieChartAllProjects6(penpotDataProceessed).chartConfig;
  const calendarValuesOverall = getCalendarHeatMapData7(
    daySegment,
    generatedDayRange,
  );
  return (
    <DashboardPage
      totalTimeCardDayArray={totalTimeCardDayArray}
      totalTimeCardMonthArray={totalTimeCardMonthArray}
      totalTimeCardYearArray={totalTimeCardYearArray}
      projectsWorkedOnCardDayArray={projectsWorkedOnCardDayArray}
      projectsWorkedOnCardMonthArray={projectsWorkedOnCardMonthArray}
      projectsWorkedOnCardYearArray={projectsWorkedOnCardYearArray}
      collaboratorsCardDayArray={collaboratorsCardDayArray}
      collaboratorsCardMonthArray={collaboratorsCardMonthArray}
      collaboratorsCardYearArray={collaboratorsCardYearArray}
      totalActionsPerformedCardDayArray={totalActionsPerformedCardDayArray}
      totalActionsPerformedCardMonthArray={totalActionsPerformedCardMonthArray}
      totalActionsPerformedCardYearArray={totalActionsPerformedCardYearArray}
      areaChartDataDay={areaChartDataDay}
      areaChartDataMonth={areaChartDataMonth}
      areaChartDataYear={areaChartDataYear}
      areaChartConfigDay={areaChartConfigDay}
      areaChartConfigMonth={areaChartConfigMonth}
      areaChartConfigYear={areaChartConfigYear}
      horizontalBarsChartDataDayArray={horizontalBarsChartDataDayArray}
      horizontalBarsChartDataMonthArray={horizontalBarsChartDataMonthArray}
      horizontalBarsChartDataYearArray={horizontalBarsChartDataYearArray}
      horizontalBarsChartConfigDayArray={horizontalBarsChartConfigDayArray}
      horizontalBarsChartConfigMonthArray={horizontalBarsChartConfigMonthArray}
      horizontalBarsChartConfigYearArray={horizontalBarsChartConfigYearArray}
      pieChart3chartDataDayArray={pieChart3chartDataDayArray}
      pieChart3chartDataMonthArray={pieChart3chartDataMonthArray}
      pieChart3chartDataYearArray={pieChart3chartDataYearArray}
      pieChart3chartConfigDayArray={pieChart3chartConfigDayArray}
      pieChart3chartConfigMonthArray={pieChart3chartConfigMonthArray}
      pieChart3chartConfigYearArray={pieChart3chartConfigYearArray}
      lineChart4chartDataDay={lineChart4chartDataDay}
      lineChart4chartDataMonth={lineChart4chartDataMonth}
      lineChart4chartDataYear={lineChart4chartDataYear}
      lineChart4chartConfigDay={lineChart4chartConfigDay}
      lineChart4chartConfigMonth={lineChart4chartConfigMonth}
      lineChart4chartConfigYear={lineChart4chartConfigYear}
      pieChart5chartDataDayArray={pieChart5chartDataDayArray}
      pieChart5chartDataMonthArray={pieChart5chartDataMonthArray}
      pieChart5chartDataYearArray={pieChart5chartDataYearArray}
      pieChart5chartConfigDayArray={pieChart5chartConfigDayArray}
      pieChart5chartConfigMonthArray={pieChart5chartConfigMonthArray}
      pieChart5chartConfigYearArray={pieChart5chartConfigYearArray}
      totalTimeCardOverall={totalTimeCardOverall}
      projectsWorkedOnCardOverall={projectsWorkedOnCardOverall}
      collaboratorsCardOverall={collaboratorsCardOverall}
      totalActionsPerformedCardOverall={totalActionsPerformedCardOverall}
      pieChartAllProjects6ChartDataOverall={
        pieChartAllProjects6ChartDataOverall
      }
      pieChartAllProjects6ChartConfigOverall={
        pieChartAllProjects6ChartConfigOverall
      }
      calendarValuesOverall={calendarValuesOverall}
    />
  );
}
