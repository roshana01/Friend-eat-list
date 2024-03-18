import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider.jsx";
// import First from "./page/First";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
    {/* <First /> */}
  </ContextProvider>
);
