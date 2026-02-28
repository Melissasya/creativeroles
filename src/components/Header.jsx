import { Link, useLocation } from "react-router-dom";
import "./Header.css";

/* ===================== HEADER COMPONENT ===================== */
/* Denna komponent renderar sidhuvudet (header) med logotyp och navigationslänkar.
   Navigationslänkarna ändras beroende på vilken sida användaren befinner sig på 
   (Home, Results eller About). */

export default function Header() {
  const location = useLocation(); // Hämtar aktuell URL-sökväg
  const path = location.pathname; // Sparar sökvägen för enkel användning

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logotyp som alltid länkar till startsidan */}
        <Link to="/" className="logo">
          CREATIVE ROLES
        </Link>

        {/* Navigation: ändras dynamiskt beroende på aktuell sida */}
        <nav className="nav">
          {/* Startsidan → visa endast "Om appen" */}
          {path === "/" && <Link to="/about">Om appen</Link>}

          {/* Jobbsidan → visa både "Lediga jobb" och "Om appen" */}
          {path === "/results" && (
            <>
              <Link to="/">Lediga jobb</Link>
              <Link to="/about">Om appen</Link>
            </>
          )}

          {/* About-sidan → visa endast "Lediga jobb" */}
          {path === "/about" && <Link to="/">Lediga jobb</Link>}
        </nav>
      </div>
    </header>
  );
}
