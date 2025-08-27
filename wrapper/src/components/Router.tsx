import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Suspense } from "react";
import { LoadingSpinner } from "./LoadingSpinner.tsx";
import { Landing } from "../routes/Landing.tsx";
import Provider from "maths";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
            <Landing />
          </Suspense>
        }
      />

      <Route
        path="/maths/*"
        element={
          <Suspense
            fallback={<LoadingSpinner message="Loading workspace..." />}
          >
            <Provider />
          </Suspense>
        }
      />

      <Route path="/maths" element={<Navigate to="/maths/home" replace />} />
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
