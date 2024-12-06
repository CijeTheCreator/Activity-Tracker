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
            ? `Dui, lectus urna nisl dignissim diam rhoncus quam sed gravida. Duis
          metus, dolor etiam pellentesque tellus, gravida aliquet pulvinar
          vulputate.`
            : `In et sed nullam tellus tortor, sit tincidunt tristique posuere. Ultrices ut aenean quis vel nulla nunc vel, tempus sed.`}
        </p>
      </div>
      <div className="w-full">
        <KeyForm setUserKey={setUserKey} isPresent={isPresent} />
      </div>
    </div>
  );
}
