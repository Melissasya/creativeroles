import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* ===================== ENTRY POINT ===================== */
/* Denna fil är ingångspunkten för React-appen. 
   Den kopplar React-komponenter till HTML-sidan och renderar huvudkomponenten App. */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode används för att fånga problem i utveckling */}
    <App />
  </StrictMode>,
);
