import { Box } from "lucide-react";
export function NoData() {
  return (
    <div className="w-full h-full items-center flex justify-center">
      <div className="flex flex-col gap-2 items-center">
        <Box />
        <p>No Data</p>
      </div>
    </div>
  );
}
