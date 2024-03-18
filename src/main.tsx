import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import SideBarContextProvider from "./contexts/SideBarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SideBarContextProvider>
        <App />
      </SideBarContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
