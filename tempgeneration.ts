/* eslint-disable @typescript-eslint/no-unused-vars */
type PenpotDataProcessed = {
  timespent: number;
  start: number; // starting timestamp
  end: number; // ending timestamp
  project: string;
  page: string;
  change: string;
  collaborators: string[];
};

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
