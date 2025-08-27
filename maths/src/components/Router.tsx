import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";

export const Router = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);
