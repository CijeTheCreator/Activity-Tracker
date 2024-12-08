import { TUserKeyForm } from "@/lib/types";
import { KeyForm } from "./KeyForm";

export function FormContainer({
  isPresent,
  setUserKey,
}: {
  isPresent: boolean;
  setUserKey: (data: TUserKeyForm) => void;
}) {
  return (
    <div className="flex flex-col gap-y-4 items-center w-full">
      <div className="w-full">
        <p className="text-center">
          {isPresent
            ? `Enter your decryption key to create and access logs.`
            : `Generate a secure key for tracking and protecting your activities.`}
        </p>
      </div>
      <div className="w-full">
        <KeyForm setUserKey={setUserKey} isPresent={isPresent} />
      </div>
    </div>
  );
}
