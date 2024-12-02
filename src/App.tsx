/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const url = new URL(window.location.href);
  const initialTheme = url.searchParams.get("theme");

  const [theme] = useState(initialTheme || null);
  window.addEventListener("message", (event) => {});

  return (
    <div
      data-theme={theme}
      className="flex flex-col gap-4 items-center py-4 dark"
    >
      Plugin
    </div>
  );
}

export default App;
