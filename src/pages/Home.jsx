// ===================== HOME COMPONENT =====================
// Denna komponent renderar startsidan med hero-sektion, rubrik, beskrivande text
// och kategoriknappar för att navigera till resultaten.
// Bakgrunden innehåller dekorativa, flytande "lava blobs" för visuell effekt.

import { useNavigate } from "react-router-dom";
import "./Home.css";

/* Kategorier för hero-knappar */
const categories = [
  "Grafisk design",
  "Digital design",
  "UX/UI",
  "Marknadskommunikation",
];

export default function Home() {
  const navigate = useNavigate();

  /* Navigerar till results-sidan med valt kategori som query-param */
  const handleClick = (category) => {
    navigate(`/results?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="home">
      <section className="hero">
        {/* Dekorativ lava-bakgrund med flytande blobs */}
        <div className="lava-wrapper">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
          <div className="blob blob4"></div>
        </div>

        {/* Hero-rubrik med accentfärg på viktiga ord */}
        <h1>
          Hitta din nästa <span>creative role</span>
        </h1>

        {/* Kort beskrivande text */}
        <p>Jobb inom UX, design, marknad & digitalt – samlat på ett ställe.</p>

        {/* Knappar för kategorinavigering */}
        <div className="category-buttons">
          {categories.map((cat) => (
            <button key={cat} onClick={() => handleClick(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
