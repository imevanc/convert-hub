import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppWithRouter from "./AppWithRouter.tsx";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const isStandalone = process.env.REACT_APP_STANDALONE;
  root.render(
    <React.StrictMode>
      {isStandalone ? <AppWithRouter /> : <App />}
    </React.StrictMode>,
  );
}
