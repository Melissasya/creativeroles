import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import "./App.css";

/* ===================== MAIN APP COMPONENT ===================== */
/* Denna komponent är huvudkomponenten i appen. 
   Den ansvarar för routing mellan sidor och renderar gemensamma komponenter
   såsom Header och container för sidinnehåll. */

function App() {
  return (
    <Router>
      {/* Huvudnavigering */}
      <Header />

      {/* Huvudinnehåll */}
      <main className="container">
        {/* Routing till olika sidor */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Startsidan */}
          <Route path="/results" element={<Results />} /> {/* Resultatsidan */}
          <Route path="/about" element={<About />} /> {/* About-sidan */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
