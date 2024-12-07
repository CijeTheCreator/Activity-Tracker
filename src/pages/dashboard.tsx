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
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";

export default function DashboardPage({
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
  areaChartDataDay: areaChartDataDayArray,
  areaChartDataMonth: areaChartDataMonthArray,
  areaChartDataYear: areaChartDataYearArray,
  areaChartConfigDay: areaChartConfigDayArray,
  areaChartConfigMonth: areaChartConfigMonthArray,
  areaChartConfigYear: areaChartConfigYearArray,
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
  lineChart4chartDataDay: lineChart4chartDataDayArray,
  lineChart4chartDataMonth: lineChart4chartDataMonthArray,
  lineChart4chartDataYear: lineChart4chartDataYearArray,
  lineChart4chartConfigDay: lineChart4chartConfigDayArray,
  lineChart4chartConfigMonth: lineChart4chartConfigMonthArray,
  lineChart4chartConfigYear: lineChart4chartConfigYearArray,
  pieChart5chartDataDayArray,
  pieChart5chartDataMonthArray,
  pieChart5chartDataYearArray,
  pieChart5chartConfigDayArray,
  pieChart5chartConfigMonthArray,
  pieChart5chartConfigYearArray,

  totalTimeCardOverall,
  projectsWorkedOnCardOverall,
  collaboratorsCardOverall,
  totalActionsPerformedCardOverall,
  pieChartAllProjects6ChartDataOverall,
  pieChartAllProjects6ChartConfigOverall,
  calendarValuesOverall,
}: {
  totalTimeCardDayArray: TCard[];
  totalTimeCardMonthArray: TCard[];
  totalTimeCardYearArray: TCard[];
  projectsWorkedOnCardDayArray: TCard[];
  projectsWorkedOnCardMonthArray: TCard[];
  projectsWorkedOnCardYearArray: TCard[];
  collaboratorsCardDayArray: TCard[];
  collaboratorsCardMonthArray: TCard[];
  collaboratorsCardYearArray: TCard[];
  totalActionsPerformedCardDayArray: TCard[];
  totalActionsPerformedCardMonthArray: TCard[];
  totalActionsPerformedCardYearArray: TCard[];
  areaChartDataDay: AreaChartData;
  areaChartDataMonth: AreaChartData;
  areaChartDataYear: AreaChartData;
  areaChartConfigDay: ChartConfig;
  areaChartConfigMonth: ChartConfig;
  areaChartConfigYear: ChartConfig;
  horizontalBarsChartDataDayArray: ChartData[];
  horizontalBarsChartDataMonthArray: ChartData[];
  horizontalBarsChartDataYearArray: ChartData[];
  horizontalBarsChartConfigDayArray: ChartConfig[];
  horizontalBarsChartConfigMonthArray: ChartConfig[];
  horizontalBarsChartConfigYearArray: ChartConfig[];
  pieChart3chartDataDayArray: ChartData[];
  pieChart3chartDataMonthArray: ChartData[];
  pieChart3chartDataYearArray: ChartData[];
  pieChart3chartConfigDayArray: ChartConfig[];
  pieChart3chartConfigMonthArray: ChartConfig[];
  pieChart3chartConfigYearArray: ChartConfig[];
  lineChart4chartDataDay: CollaboratorData;
  lineChart4chartDataMonth: CollaboratorData;
  lineChart4chartDataYear: CollaboratorData;
  lineChart4chartConfigDay: ChartConfig;
  lineChart4chartConfigMonth: ChartConfig;
  lineChart4chartConfigYear: ChartConfig;
  pieChart5chartDataDayArray: ActionData[];
  pieChart5chartDataMonthArray: ActionData[];
  pieChart5chartDataYearArray: ActionData[];
  pieChart5chartConfigDayArray: ChartConfig[];
  pieChart5chartConfigMonthArray: ChartConfig[];
  pieChart5chartConfigYearArray: ChartConfig[];

  totalTimeCardOverall: TCard;
  projectsWorkedOnCardOverall: TCard;
  collaboratorsCardOverall: TCard;
  totalActionsPerformedCardOverall: TCard;
  pieChartAllProjects6ChartDataOverall: ChartData;
  pieChartAllProjects6ChartConfigOverall: ChartConfig;
  calendarValuesOverall: TValues;
}) {
  const tabs: ("day" | "month" | "year")[] = ["day", "month", "year"];
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
  const [configIndex, setConfigIndex] = useState<number>(0);

  useEffect(() => {
    setConfigIndex(0);
    switch (range) {
      case "day":
        setPieChart5chartConfigDMY(pieChart5chartConfigDayArray[configIndex]);
        setPieChart5chartDataDMY(pieChart5chartDataDayArray[configIndex]);
        setLineChart4chartConfigDMY(lineChart4chartConfigDayArray);
        setLineChart4chartDataDMY(lineChart4chartDataDayArray);
        setPieChart3chartConfigDMY(pieChart3chartConfigDayArray[configIndex]);
        setPieChart3chartDataDMY(pieChart3chartDataDayArray[configIndex]);
        setHorizontalBarsChartConfigDMY(
          horizontalBarsChartConfigDayArray[configIndex],
        );
        setHorizontalBarsChartDataDMY(
          horizontalBarsChartDataDayArray[configIndex],
        );
        setAreaChartConfigDMY(areaChartConfigDayArray);
        setAreaChartDataDMY(areaChartDataDayArray);
        setTotalActionsPerformedCardDMY(
          totalActionsPerformedCardDayArray[configIndex],
        );
        setCollaboratorsCardDMY(collaboratorsCardDayArray[configIndex]);
        setProjectsWorkedOnCardDMY(projectsWorkedOnCardDayArray[configIndex]);
        setTotalTimeCardDMY(totalTimeCardDayArray[configIndex]);
        break;
      case "month":
        setPieChart5chartConfigDMY(pieChart5chartConfigMonthArray[configIndex]);
        setPieChart5chartDataDMY(pieChart5chartDataMonthArray[configIndex]);
        setLineChart4chartConfigDMY(lineChart4chartConfigMonthArray);
        setLineChart4chartDataDMY(lineChart4chartDataMonthArray);
        setPieChart3chartConfigDMY(pieChart3chartConfigMonthArray[configIndex]);
        setPieChart3chartDataDMY(pieChart3chartDataMonthArray[configIndex]);
        setHorizontalBarsChartConfigDMY(
          horizontalBarsChartConfigMonthArray[configIndex],
        );
        setHorizontalBarsChartDataDMY(
          horizontalBarsChartDataMonthArray[configIndex],
        );
        setAreaChartConfigDMY(areaChartConfigMonthArray);
        setAreaChartDataDMY(areaChartDataMonthArray);
        setTotalActionsPerformedCardDMY(
          totalActionsPerformedCardMonthArray[configIndex],
        );
        setCollaboratorsCardDMY(collaboratorsCardMonthArray[configIndex]);
        setProjectsWorkedOnCardDMY(projectsWorkedOnCardMonthArray[configIndex]);
        setTotalTimeCardDMY(totalTimeCardMonthArray[configIndex]);
        break;
      case "year":
        setPieChart5chartConfigDMY(pieChart5chartConfigYearArray[configIndex]);
        setPieChart5chartDataDMY(pieChart5chartDataYearArray[configIndex]);
        setLineChart4chartConfigDMY(lineChart4chartConfigYearArray);
        setLineChart4chartDataDMY(lineChart4chartDataYearArray);
        setPieChart3chartConfigDMY(pieChart3chartConfigYearArray[configIndex]);
        setPieChart3chartDataDMY(pieChart3chartDataYearArray[configIndex]);
        setHorizontalBarsChartConfigDMY(
          horizontalBarsChartConfigYearArray[configIndex],
        );
        setHorizontalBarsChartDataDMY(
          horizontalBarsChartDataYearArray[configIndex],
        );
        setAreaChartConfigDMY(areaChartConfigYearArray);
        setAreaChartDataDMY(areaChartDataYearArray);
        setTotalActionsPerformedCardDMY(
          totalActionsPerformedCardYearArray[configIndex],
        );
        setCollaboratorsCardDMY(collaboratorsCardYearArray[configIndex]);
        setProjectsWorkedOnCardDMY(projectsWorkedOnCardYearArray[configIndex]);
        setTotalTimeCardDMY(totalTimeCardYearArray[configIndex]);
        break;
      default:
        throw new Error(`Unsupported range`);
    }
  }, [range, configIndex]);
  const allArePresent =
    !totalTimeCardOverall ||
    !projectsWorkedOnCardOverall ||
    !collaboratorsCardOverall ||
    !totalActionsPerformedCardOverall ||
    !pieChartAllProjects6ChartDataOverall ||
    !pieChartAllProjects6ChartConfigOverall ||
    !calendarValuesOverall ||
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
              totalTimeCard={totalTimeCardOverall}
              projectsWorkedOnCard={projectsWorkedOnCardOverall}
              collaboratorsCard={collaboratorsCardOverall}
              totalActionsPerformedCard={totalActionsPerformedCardOverall}
              pieChartAllProjects6ChartData={
                pieChartAllProjects6ChartDataOverall
              }
              pieChartAllProjects6ChartConfig={
                pieChartAllProjects6ChartConfigOverall
              }
              calendarValues={calendarValuesOverall}
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
