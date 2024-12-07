import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Tracking() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div>
        <p>Tracking...</p>
      </div>
      <div>
        {/* TODO: Setup routing here */}
        <Link to={"/dashboard"} target="_blank" rel="noopener noreferrer">
          <Button>View Stats</Button>
        </Link>
      </div>
    </div>
  );
}
