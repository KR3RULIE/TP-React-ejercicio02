import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HolaMyFriends from "./components/HolaMyFriends.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <HolaMyFriends />
  </StrictMode>
);
