import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Suspense } from "react";
import MathsApp from "maths";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorPage, Landing } from "../routes";
import { FederatedErrorBoundary } from "./FederatedErrorBoundary";

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
          <FederatedErrorBoundary>
            <Suspense
              fallback={<LoadingSpinner message="Loading workspace..." />}
            >
              <MathsApp />
            </Suspense>
          </FederatedErrorBoundary>
        }
      />

      <Route path="/maths" element={<Navigate to="/maths/home" replace />} />
      <Route path="/" element={<Navigate to="/" replace />} />

      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage type="404" />} />
    </Routes>
  </BrowserRouter>
);
