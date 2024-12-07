import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { CalculationCente } from "./CalculationCenter";
import { PenpotDataRaw, TUserKeyForm } from "@/lib/types";
import { fetchUserActivity } from "@/lib/server";
import { DashboardLandingKeyEntryPage } from "./DashboardLanding";
import { toast } from "sonner";

export function DashbaordLanding() {
  const [penpotDataRaw, setPenpotDataRaw] = useState<PenpotDataRaw[] | null>(
    null,
  );
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const handleSubmitKey = async (data: TUserKeyForm) => {
    try {
      const toastId = toast.loading("Fetching Data");
      if (!userId) return <>No userId</>;
      const rawDataResponse = await fetchUserActivity(userId, data.key);
      toast.dismiss(toastId);
      toast.success("Activity Fetched");
      setPenpotDataRaw(rawDataResponse);
    } catch (error) {
      console.log("Error fetching data");
    }
  };
  if (!penpotDataRaw)
    return <DashboardLandingKeyEntryPage onSubmit={handleSubmitKey} />;
  return <CalculationCente penpotDataRaw={penpotDataRaw} />;
}
