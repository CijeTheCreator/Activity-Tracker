import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CalculationCente } from "./CalculationCenter";
import { PenpotDataRaw, TUserKeyForm } from "@/lib/types";
import { fetchUserActivity } from "@/lib/server";
import { DashboardLandingKeyEntryPage } from "./DashboardLanding";
import { toast } from "sonner";
import { LOGGERA as LOGGERA, LOGGERB } from "@/tests/debug";

export function DashbaordLanding() {
  const [penpotDataRaw, setPenpotDataRaw] = useState<PenpotDataRaw[] | null>(
    null,
  );
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  useEffect(() => {
    handleSubmitKey({ key: "1234" });
  }, []);
  const handleSubmitKey = async (data: TUserKeyForm): Promise<void> => {
    let toastId;
    try {
      toastId = toast.message("Fetching Data");
      if (!userId) {
        toast.dismiss(toastId);
        throw new Error("No User ID");
      }
      const rawDataResponse = await fetchUserActivity(userId, data.key);
      toast.dismiss(toastId);
      toast.success("Activity Fetched");
      setPenpotDataRaw(rawDataResponse);
    } catch (error) {
      const error_ = error as Error;
      toast.error(error_.message);
      toast.dismiss(toastId);
      console.log("Error fetching data");
    }
  };
  if (!penpotDataRaw)
    return <DashboardLandingKeyEntryPage onSubmit={handleSubmitKey} />;
  return <CalculationCente penpotDataRaw={penpotDataRaw} />;
}
