/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { TabContentOverall } from "./overallData";
import { TabRangeContentDMY } from "./DMYDataTab";
import {
  TCard,
  ChartData,
  ChartConfig,
  TValues,
  ActionData,
  AreaChartData,
  CollaboratorData,
} from "@/lib/types";
import { useState } from "react";
import { Loader } from "@/components/Loader";

export default function DashboardPage(
  totalTimeCardDayArray,
  totalTimeCardMonthArray,
  totalTimeCardYearArray,
  projectsWorkedOnCardDayArray,
  projectsWorkedOnCardMonthArray,
  projectsWorkedOnCardYearArray,
  collaboratorsCardDayArray,
  collaboratorsCardMonthArray,
  collaboratorsCardYearArray,
  totalActionsPerformedCardDayArray,
  totalActionsPerformedCardMonthArray,
  totalActionsPerformedCardYearArray,
  areaChartDataDayArray,
  areaChartDataMonthArray,
  areaChartDataYearArray,
  areaChartConfigDayArray,
  areaChartConfigMonthArray,
  areaChartConfigYearArray,
  horizontalBarsChartDataDayArray,
  horizontalBarsChartDataMonthArray,
  horizontalBarsChartDataYearArray,
  horizontalBarsChartConfigDayArray,
  horizontalBarsChartConfigMonthArray,
  horizontalBarsChartConfigYearArray,
  pieChart3chartDataDayArray,
  pieChart3chartDataMonthArray,
  pieChart3chartDataYearArray,
  pieChart3chartConfigDayArray,
  pieChart3chartConfigMonthArray,
  pieChart3chartConfigYearArray,
  lineChart4chartDataDayArray,
  lineChart4chartDataMonthArray,
  lineChart4chartDataYearArray,
  lineChart4chartConfigDayArray,
  lineChart4chartConfigMonthArray,
  lineChart4chartConfigYearArray,
  pieChart5chartDataDayArray,
  pieChart5chartDataMonthArray,
  pieChart5chartDataYearArray,
  pieChart5chartConfigDayArray,
  pieChart5chartConfigMonthArray,
  pieChart5chartConfigYearArray,
) {
  const tabs: ("day" | "month" | "year")[] = ["day", "month", "year"];
  const [totalTimeCard, setTotalTimeCard] = useState<TCard | null>(null);
  const [projectsWorkedOnCard, setProjectsWorkedOnCard] =
    useState<TCard | null>(null);
  const [collaboratorsCard, setCollaboratorsCard] = useState<TCard | null>(
    null,
  );
  const [totalActionsPerformedCard, setTotalActionsPerformedCard] =
    useState<TCard | null>(null);
  const [pieChartAllProjects6ChartData, setPieChartAllProjects6ChartData] =
    useState<ChartData | null>(null);
  const [pieChartAllProjects6ChartConfig, setPieChartAllProjects6ChartConfig] =
    useState<ChartConfig | null>(null);
  const [calendarValues, setCalendarValues] = useState<TValues | null>(null);
  const [totalTimeCardDMY, setTotalTimeCardDMY] = useState<TCard | null>(null);
  const [projectsWorkedOnCardDMY, setProjectsWorkedOnCardDMY] =
    useState<TCard | null>(null);
  const [collaboratorsCardDMY, setCollaboratorsCardDMY] =
    useState<TCard | null>(null);
  const [totalActionsPerformedCardDMY, setTotalActionsPerformedCardDMY] =
    useState<TCard | null>(null);
  const [areaChartDataDMY, setAreaChartDataDMY] =
    useState<AreaChartData | null>(null);
  const [areaChartConfigDMY, setAreaChartConfigDMY] =
    useState<ChartConfig | null>(null);
  const [horizontalBarsChartDataDMY, setHorizontalBarsChartDataDMY] =
    useState<ChartData | null>(null);
  const [horizontalBarsChartConfigDMY, setHorizontalBarsChartConfigDMY] =
    useState<ChartConfig | null>(null);
  const [pieChart3chartDataDMY, setPieChart3chartDataDMY] =
    useState<ChartData | null>(null);
  const [pieChart3chartConfigDMY, setPieChart3chartConfigDMY] =
    useState<ChartConfig | null>(null);
  const [lineChart4chartDataDMY, setLineChart4chartDataDMY] =
    useState<CollaboratorData | null>(null);
  const [lineChart4chartConfigDMY, setLineChart4chartConfigDMY] =
    useState<ChartConfig | null>(null);
  const [pieChart5chartDataDMY, setPieChart5chartDataDMY] =
    useState<ActionData | null>(null);
  const [pieChart5chartConfigDMY, setPieChart5chartConfigDMY] =
    useState<ChartConfig | null>(null);
  const [range, setRange] = useState<string>("day");
  const [configIndex, setConfigIndex] = useState<string>("day");
  const allArePresent =
    !totalTimeCard ||
    !projectsWorkedOnCard ||
    !collaboratorsCard ||
    !totalActionsPerformedCard ||
    !pieChartAllProjects6ChartData ||
    !pieChartAllProjects6ChartConfig ||
    !calendarValues ||
    !totalTimeCardDMY ||
    !projectsWorkedOnCardDMY ||
    !collaboratorsCardDMY ||
    !totalActionsPerformedCardDMY ||
    !areaChartDataDMY ||
    !areaChartConfigDMY ||
    !horizontalBarsChartDataDMY ||
    !horizontalBarsChartConfigDMY ||
    !pieChart3chartDataDMY ||
    !pieChart3chartConfigDMY ||
    !lineChart4chartDataDMY ||
    !lineChart4chartConfigDMY ||
    !pieChart5chartDataDMY ||
    !pieChart5chartConfigDMY;
  if (allArePresent) return <Loader />;

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Chijioke's Penpot Activity
            </h2>
          </div>
          <Tabs
            defaultValue="overall"
            className="space-y-4"
            onValueChange={(value) => setRange(value)}
          >
            <TabsList>
              <TabsTrigger value="overall">Overall</TabsTrigger>
              <TabsTrigger value="day" disabled>
                Daily
              </TabsTrigger>
              <TabsTrigger value="month" disabled>
                Monthly
              </TabsTrigger>
              <TabsTrigger value="year" disabled>
                Yearly
              </TabsTrigger>
            </TabsList>
            <TabContentOverall
              totalTimeCard={totalTimeCard}
              projectsWorkedOnCard={projectsWorkedOnCard}
              collaboratorsCard={collaboratorsCard}
              totalActionsPerformedCard={totalActionsPerformedCard}
              pieChartAllProjects6ChartData={pieChartAllProjects6ChartData}
              pieChartAllProjects6ChartConfig={pieChartAllProjects6ChartConfig}
              calendarValues={calendarValues}
            />
            {tabs.map((value) => {
              return (
                <TabRangeContentDMY
                  range={value}
                  totalTimeCard={totalTimeCardDMY}
                  projectsWorkedOnCard={projectsWorkedOnCardDMY}
                  collaboratorsCard={collaboratorsCardDMY}
                  totalActionsPerformedCard={totalActionsPerformedCardDMY}
                  areaChartData={areaChartDataDMY}
                  areaChartConfig={areaChartConfigDMY}
                  horizontalBarsChartData={horizontalBarsChartDataDMY}
                  horizontalBarsChartConfig={horizontalBarsChartConfigDMY}
                  pieChart3chartData={pieChart3chartDataDMY}
                  pieChart3chartConfig={pieChart3chartConfigDMY}
                  lineChart4chartData={lineChart4chartDataDMY}
                  lineChart4chartConfig={lineChart4chartConfigDMY}
                  pieChart5chartData={pieChart5chartDataDMY}
                  pieChart5chartConfig={pieChart5chartConfigDMY}
                />
              );
            })}
          </Tabs>
        </div>
      </div>
    </>
  );
}
