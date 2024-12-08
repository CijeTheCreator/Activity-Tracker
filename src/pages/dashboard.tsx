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
import { generateRange } from "@/processing";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";

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
  const [datetime, setDateTime] = useState<string>("");
  const [configIndex, setConfigIndex] = useState<number>(0);
  const [maxConfigIndex, setMaxConfigIndex] = useState<number>(0);

  useEffect(() => {
    updateCharts(
      range,
      setPieChart5chartConfigDMY,
      pieChart5chartConfigDayArray,
      configIndex,
      setPieChart5chartDataDMY,
      pieChart5chartDataDayArray,
      setLineChart4chartConfigDMY,
      lineChart4chartConfigDayArray,
      setLineChart4chartDataDMY,
      lineChart4chartDataDayArray,
      setPieChart3chartConfigDMY,
      pieChart3chartConfigDayArray,
      setPieChart3chartDataDMY,
      pieChart3chartDataDayArray,
      setHorizontalBarsChartConfigDMY,
      horizontalBarsChartConfigDayArray,
      setHorizontalBarsChartDataDMY,
      horizontalBarsChartDataDayArray,
      setAreaChartConfigDMY,
      areaChartConfigDayArray,
      setAreaChartDataDMY,
      areaChartDataDayArray,
      setTotalActionsPerformedCardDMY,
      totalActionsPerformedCardDayArray,
      setCollaboratorsCardDMY,
      collaboratorsCardDayArray,
      setProjectsWorkedOnCardDMY,
      projectsWorkedOnCardDayArray,
      setTotalTimeCardDMY,
      totalTimeCardDayArray,
      pieChart5chartConfigMonthArray,
      pieChart5chartDataMonthArray,
      lineChart4chartConfigMonthArray,
      lineChart4chartDataMonthArray,
      pieChart3chartConfigMonthArray,
      pieChart3chartDataMonthArray,
      horizontalBarsChartConfigMonthArray,
      horizontalBarsChartDataMonthArray,
      areaChartConfigMonthArray,
      areaChartDataMonthArray,
      totalActionsPerformedCardMonthArray,
      collaboratorsCardMonthArray,
      projectsWorkedOnCardMonthArray,
      totalTimeCardMonthArray,
      pieChart5chartConfigYearArray,
      pieChart5chartDataYearArray,
      lineChart4chartConfigYearArray,
      lineChart4chartDataYearArray,
      pieChart3chartConfigYearArray,
      pieChart3chartDataYearArray,
      horizontalBarsChartConfigYearArray,
      horizontalBarsChartDataYearArray,
      areaChartConfigYearArray,
      areaChartDataYearArray,
      totalActionsPerformedCardYearArray,
      collaboratorsCardYearArray,
      projectsWorkedOnCardYearArray,
      totalTimeCardYearArray,
      setDateTime,
      setMaxConfigIndex,
    );
  }, [configIndex]);

  useEffect(() => {
    setConfigIndex(0);
    updateCharts(
      range,
      setPieChart5chartConfigDMY,
      pieChart5chartConfigDayArray,
      configIndex,
      setPieChart5chartDataDMY,
      pieChart5chartDataDayArray,
      setLineChart4chartConfigDMY,
      lineChart4chartConfigDayArray,
      setLineChart4chartDataDMY,
      lineChart4chartDataDayArray,
      setPieChart3chartConfigDMY,
      pieChart3chartConfigDayArray,
      setPieChart3chartDataDMY,
      pieChart3chartDataDayArray,
      setHorizontalBarsChartConfigDMY,
      horizontalBarsChartConfigDayArray,
      setHorizontalBarsChartDataDMY,
      horizontalBarsChartDataDayArray,
      setAreaChartConfigDMY,
      areaChartConfigDayArray,
      setAreaChartDataDMY,
      areaChartDataDayArray,
      setTotalActionsPerformedCardDMY,
      totalActionsPerformedCardDayArray,
      setCollaboratorsCardDMY,
      collaboratorsCardDayArray,
      setProjectsWorkedOnCardDMY,
      projectsWorkedOnCardDayArray,
      setTotalTimeCardDMY,
      totalTimeCardDayArray,
      pieChart5chartConfigMonthArray,
      pieChart5chartDataMonthArray,
      lineChart4chartConfigMonthArray,
      lineChart4chartDataMonthArray,
      pieChart3chartConfigMonthArray,
      pieChart3chartDataMonthArray,
      horizontalBarsChartConfigMonthArray,
      horizontalBarsChartDataMonthArray,
      areaChartConfigMonthArray,
      areaChartDataMonthArray,
      totalActionsPerformedCardMonthArray,
      collaboratorsCardMonthArray,
      projectsWorkedOnCardMonthArray,
      totalTimeCardMonthArray,
      pieChart5chartConfigYearArray,
      pieChart5chartDataYearArray,
      lineChart4chartConfigYearArray,
      lineChart4chartDataYearArray,
      pieChart3chartConfigYearArray,
      pieChart3chartDataYearArray,
      horizontalBarsChartConfigYearArray,
      horizontalBarsChartDataYearArray,
      areaChartConfigYearArray,
      areaChartDataYearArray,
      totalActionsPerformedCardYearArray,
      collaboratorsCardYearArray,
      projectsWorkedOnCardYearArray,
      totalTimeCardYearArray,
      setDateTime,
      setMaxConfigIndex,
    );
  }, [range]);
  const allArePresent =
    !totalTimeCardOverall ||
    !projectsWorkedOnCardOverall ||
    !collaboratorsCardOverall ||
    !totalActionsPerformedCardOverall ||
    !totalTimeCardDMY ||
    !projectsWorkedOnCardDMY ||
    !collaboratorsCardDMY ||
    !totalActionsPerformedCardDMY;
  if (allArePresent) return <Loader />;

  function handlePreviousDate(): void {
    if (configIndex + 1 > maxConfigIndex) {
      toast.error("You can't go further than this");
      return;
    }
    setConfigIndex(configIndex + 1);
  }

  function handleNextDate(): void {
    if (configIndex == 0) {
      toast.error("You can't go further than this");
      return;
    }
    setConfigIndex(configIndex - 1);
  }

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Your Penpot Activity
            </h2>
          </div>
          <Tabs
            defaultValue="day"
            className="space-y-4"
            onValueChange={(value) => setRange(value)}
          >
            <TabsList className="flex flex-row gap-4">
              <TabsTrigger value="overall">Overall</TabsTrigger>
              <TabsTrigger value="day">Daily</TabsTrigger>
              <TabsTrigger value="month">Monthly</TabsTrigger>
              <TabsTrigger value="year">Yearly</TabsTrigger>
            </TabsList>
            <div className="flex flex-row gap-4">
              <div className="cursor-pointer" onClick={handlePreviousDate}>
                <ArrowLeft />
              </div>
              <div>
                <h4>{datetime}</h4>
              </div>
              <div>
                <ArrowRight
                  className="cursor-pointer"
                  onClick={handleNextDate}
                />
              </div>
            </div>
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
function updateCharts(
  range: string,
  setPieChart5chartConfigDMY: React.Dispatch<React.SetStateAction<ChartConfig>>,
  pieChart5chartConfigDayArray: ChartConfig[],
  configIndex: number,
  setPieChart5chartDataDMY: React.Dispatch<React.SetStateAction<ActionData>>,
  pieChart5chartDataDayArray: ActionData[],
  setLineChart4chartConfigDMY: React.Dispatch<
    React.SetStateAction<ChartConfig>
  >,
  lineChart4chartConfigDayArray: ChartConfig,
  setLineChart4chartDataDMY: React.Dispatch<
    React.SetStateAction<CollaboratorData | null>
  >,
  lineChart4chartDataDayArray: CollaboratorData,
  setPieChart3chartConfigDMY: React.Dispatch<React.SetStateAction<ChartConfig>>,
  pieChart3chartConfigDayArray: ChartConfig[],
  setPieChart3chartDataDMY: React.Dispatch<React.SetStateAction<ChartData>>,
  pieChart3chartDataDayArray: ChartData[],
  setHorizontalBarsChartConfigDMY: React.Dispatch<
    React.SetStateAction<ChartConfig>
  >,
  horizontalBarsChartConfigDayArray: ChartConfig[],
  setHorizontalBarsChartDataDMY: React.Dispatch<
    React.SetStateAction<ChartData>
  >,
  horizontalBarsChartDataDayArray: ChartData[],
  setAreaChartConfigDMY: React.Dispatch<React.SetStateAction<ChartConfig>>,
  areaChartConfigDayArray: ChartConfig,
  setAreaChartDataDMY: React.Dispatch<
    React.SetStateAction<AreaChartData | null>
  >,
  areaChartDataDayArray: AreaChartData,
  setTotalActionsPerformedCardDMY: React.Dispatch<
    React.SetStateAction<TCard | null>
  >,
  totalActionsPerformedCardDayArray: TCard[],
  setCollaboratorsCardDMY: React.Dispatch<React.SetStateAction<TCard | null>>,
  collaboratorsCardDayArray: TCard[],
  setProjectsWorkedOnCardDMY: React.Dispatch<
    React.SetStateAction<TCard | null>
  >,
  projectsWorkedOnCardDayArray: TCard[],
  setTotalTimeCardDMY: React.Dispatch<React.SetStateAction<TCard | null>>,
  totalTimeCardDayArray: TCard[],
  pieChart5chartConfigMonthArray: ChartConfig[],
  pieChart5chartDataMonthArray: ActionData[],
  lineChart4chartConfigMonthArray: ChartConfig,
  lineChart4chartDataMonthArray: CollaboratorData,
  pieChart3chartConfigMonthArray: ChartConfig[],
  pieChart3chartDataMonthArray: ChartData[],
  horizontalBarsChartConfigMonthArray: ChartConfig[],
  horizontalBarsChartDataMonthArray: ChartData[],
  areaChartConfigMonthArray: ChartConfig,
  areaChartDataMonthArray: AreaChartData,
  totalActionsPerformedCardMonthArray: TCard[],
  collaboratorsCardMonthArray: TCard[],
  projectsWorkedOnCardMonthArray: TCard[],
  totalTimeCardMonthArray: TCard[],
  pieChart5chartConfigYearArray: ChartConfig[],
  pieChart5chartDataYearArray: ActionData[],
  lineChart4chartConfigYearArray: ChartConfig,
  lineChart4chartDataYearArray: CollaboratorData,
  pieChart3chartConfigYearArray: ChartConfig[],
  pieChart3chartDataYearArray: ChartData[],
  horizontalBarsChartConfigYearArray: ChartConfig[],
  horizontalBarsChartDataYearArray: ChartData[],
  areaChartConfigYearArray: ChartConfig,
  areaChartDataYearArray: AreaChartData,
  totalActionsPerformedCardYearArray: TCard[],
  collaboratorsCardYearArray: TCard[],
  projectsWorkedOnCardYearArray: TCard[],
  totalTimeCardYearArray: TCard[],
  setDateTime: React.Dispatch<React.SetStateAction<string>>,
  setMaxConfigIndex: React.Dispatch<React.SetStateAction<number>>,
) {
  const generatedDayRange = generateRange("day", 1730986775000);
  const generatedMonthRange = generateRange("month", 1730986775000);
  const generatedYearRange = generateRange("year", 1730986775000);
  switch (range) {
    case "day":
      setMaxConfigIndex(generatedDayRange.length - 1);
      setDateTime(generatedDayRange[configIndex]);
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
      setMaxConfigIndex(generatedMonthRange.length - 1);
      setDateTime(generatedMonthRange[configIndex]);
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
      setMaxConfigIndex(generatedYearRange.length - 1);
      setDateTime(generatedYearRange[configIndex]);
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
      break;
  }
}
