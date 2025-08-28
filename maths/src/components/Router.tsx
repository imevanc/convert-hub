import { Route, Routes } from "react-router";
import { Dashboard } from "./Dashboard";
import { Landing } from "../routes";

export const Router = () => (
  <Routes>
    <Route path="/home" element={<Landing />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);
