import { Button } from "./ui/button";

export function Tracking() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div>
        <p>Tracking...</p>
      </div>
      <div>
        {/* TODO: Setup routing here */}
        <Button>View Stats</Button>
      </div>
    </div>
  );
}
