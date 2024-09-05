import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UsersProvider } from "./context/context.tsx";

createRoot(document.getElementById("root")!).render(
  <UsersProvider>
    <App />
  </UsersProvider>
);
