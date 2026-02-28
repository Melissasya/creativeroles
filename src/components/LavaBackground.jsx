import "./LavaBackground.css";

/* ===================== LAVA BACKGROUND COMPONENT ===================== */
/* Denna komponent renderar en dekorativ bakgrund med flytande färgblobs
   (lava-liknande animation) bakom övrigt innehåll på sidan. 
   Används för visuellt djup och dynamik. */

export default function LavaBackground() {
  return (
    <div className="lava-wrapper">
      {/* Fyra individuella flytande blobs med olika färg och position */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
    </div>
  );
}
