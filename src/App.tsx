/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { Toaster, toast } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plugin from "./Plugin";
import { DashboardLandingKeyEntryPage } from "./pages/DashboardLanding";
import { DashbaordLanding } from "./pages/fetchingArea";

function App() {
  const url = new URL(window.location.href);
  const initialTheme = url.searchParams.get("theme");
  const [theme] = useState(initialTheme || null);
  return (
    <div
      data-theme={theme}
      className="flex flex-col gap-4 items-center p-4 dark"
    >
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Plugin />}></Route>
          <Route path="/dashboard" element={<DashbaordLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
