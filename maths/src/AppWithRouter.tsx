import "./App.css";
import { Router } from "./components";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
