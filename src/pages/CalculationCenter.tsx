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

  const yearSegment = segmentPenpotData(
    penpotDataProceessed,
    "year",
    generatedYearRange,
  );
  const monthSegment = segmentPenpotData(
    penpotDataProceessed,
    "month",
    generatedMonthRange,
  );
  const daySegment = segmentPenpotData(
    penpotDataProceessed,
    "day",
    generatedDayRange,
  );

  console.log("daySegment :", daySegment);
  console.log("monthSegment :", monthSegment);
  console.log("yearSegment :", yearSegment);

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
  console.log(`getAreaChartTimeSpentData1`);
  const { data: areaChartDataDay, config: areaChartConfigDay } =
    getAreaChartTimeSpentData1(daySegment, "day", generatedDayRange);
  console.log(`horizontalBarsChartDataDayArray`);
  const horizontalBarsChartDataDayArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      daySegment,
      "day",
      generatedDayRange,
    ).map((value) => value.chartData);
  console.log(`horizontalBarsChartDataMonthArray`);
  const horizontalBarsChartDataMonthArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      monthSegment,
      "month",
      generatedMonthRange,
    ).map((value) => value.chartData);
  console.log(`horizontalBarsChartDataYearArray`);
  const horizontalBarsChartDataYearArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      yearSegment,
      "year",
      generatedYearRange,
    ).map((value) => value.chartData);
  console.log(`horizontalBarsChartConfigDayArray`);
  const horizontalBarsChartConfigDayArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      daySegment,
      "day",
      generatedDayRange,
    ).map((value) => value.chartConfig);
  console.log(`horizontalBarsChartConfigMonthArray`);
  const horizontalBarsChartConfigMonthArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      monthSegment,
      "month",
      generatedDayRange,
    ).map((value) => value.chartConfig);
  console.log(`horizontalBarsChartConfigYearArray`);
  const horizontalBarsChartConfigYearArray =
    getHorizontalBarChartProjectsWorkedOnData2(
      yearSegment,
      "year",
      generatedYearRange,
    ).map((value) => value.chartConfig);
  console.log(`pieChart3chartDataDayArray`);
  const pieChart3chartDataDayArray = getPieChartProjectsWorkedOnData3(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartData);
  console.log(`pieChart3chartDataMonthArray`);
  const pieChart3chartDataMonthArray = getPieChartProjectsWorkedOnData3(
    monthSegment,
    "month",
    generatedMonthRange,
  ).map((value) => value.chartData);
  console.log(`pieChart3chartDataYearArray`);
  const pieChart3chartDataYearArray = getPieChartProjectsWorkedOnData3(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartData);
  console.log(`pieChart3chartConfigDayArray`);
  const pieChart3chartConfigDayArray = getPieChartProjectsWorkedOnData3(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  console.log(`pieChart3chartConfigMonthArray`);
  const pieChart3chartConfigMonthArray = getPieChartProjectsWorkedOnData3(
    monthSegment,
    "month",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  console.log(`pieChart3chartConfigYearArray`);
  const pieChart3chartConfigYearArray = getPieChartProjectsWorkedOnData3(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartConfig);

  console.log(`{`);
  const { data: lineChart4chartDataMonth, config: lineChart4chartConfigMonth } =
    getLineChartCollaboratorsData4(monthSegment, "month", generatedMonthRange);
  console.log(`{`);
  const { data: lineChart4chartDataYear, config: lineChart4chartConfigYear } =
    getLineChartCollaboratorsData4(yearSegment, "year", generatedYearRange);
  console.log(`{`);
  const { data: lineChart4chartDataDay, config: lineChart4chartConfigDay } =
    getLineChartCollaboratorsData4(daySegment, "day", generatedDayRange);

  console.log(`pieChart5chartDataDayArray`);
  const pieChart5chartDataDayArray = getPieChartActionsPerformedData5(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartData);
  console.log(`pieChart5chartDataMonthArray`);
  const pieChart5chartDataMonthArray = getPieChartActionsPerformedData5(
    monthSegment,
    "month",
    generatedMonthRange,
  ).map((value) => value.chartData);
  console.log(`pieChart5chartDataYearArray`);
  const pieChart5chartDataYearArray = getPieChartActionsPerformedData5(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartData);
  console.log(`pieChart5chartConfigDayArray`);
  const pieChart5chartConfigDayArray = getPieChartActionsPerformedData5(
    daySegment,
    "day",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  console.log(`pieChart5chartConfigMonthArray`);
  const pieChart5chartConfigMonthArray = getPieChartActionsPerformedData5(
    monthSegment,
    "month",
    generatedDayRange,
  ).map((value) => value.chartConfig);
  console.log(`pieChart5chartConfigYearArray`);
  const pieChart5chartConfigYearArray = getPieChartActionsPerformedData5(
    yearSegment,
    "year",
    generatedYearRange,
  ).map((value) => value.chartConfig);

  console.log(`totalTimeCardOverall`);
  const totalTimeCardOverall = getTotalTime11(penpotDataProceessed);
  console.log(`projectsWorkedOnCardOverall`);
  const projectsWorkedOnCardOverall =
    getProjectsWorkedOn10(penpotDataProceessed);
  console.log(`collaboratorsCardOverall`);
  const collaboratorsCardOverall = getTotalCollaborators9(penpotDataProceessed);
  console.log(`totalActionsPerformedCardOverall`);
  const totalActionsPerformedCardOverall =
    getTotalActions8(penpotDataProceessed);
  console.log(`pieChartAllProjects6ChartDataOverall`);
  const pieChartAllProjects6ChartDataOverall =
    getPieChartAllProjects6(penpotDataProceessed).chartData;
  console.log(`pieChartAllProjects6ChartConfigOverall`);
  const pieChartAllProjects6ChartConfigOverall =
    getPieChartAllProjects6(penpotDataProceessed).chartConfig;
  console.log(`calendarValuesOverall`);
  const calendarValuesOverall = getCalendarHeatMapData7(
    daySegment,
    generatedDayRange,
  );
  console.log("Total time day array: ", totalTimeCardDayArray);

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
