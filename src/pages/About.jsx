import "./About.css";

/* ===================== ABOUT COMPONENT ===================== */
/* Denna komponent renderar "About"-sektionen på sidan.
   Den innehåller en rubrik, inledande text och huvudtext om plattformen.
   Syftet är att ge besökaren en tydlig introduktion till vad Creative Roles erbjuder. */

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Huvudrubrik med accentfärg på en del av texten */}
        <h1>
          För <span>creatives</span> som vill vidare
        </h1>

        {/* Inledande text (lead) som sammanfattar plattformen */}
        <p className="about-lead">
          Creative roles är en plattform för dig som söker nästa steg inom UX,
          design, marknad och digitala roller.
        </p>

        {/* Huvudinnehållet: förklarar funktion, källor och designfokus */}
        <div className="about-content">
          <p>
            Vi samlar relevanta tjänster på ett ställe och gör det enkelt att
            hitta rätt. Inga onödiga filter, inget brus – bara möjligheter som
            faktiskt passar kreativa profiler.
          </p>

          <p>
            Plattformen samlar aktuella jobbannonser via Arbetsförmedlingens API
            och presenterar dem i ett tydligt, modernt gränssnitt där du enkelt
            kan filtrera efter plats och anställningsform.
          </p>

          <p>
            Designen är byggd med fokus på enkelhet, visuell hierarki och en
            lugn användarupplevelse, så att du kan fokusera på det som faktiskt
            spelar roll.
          </p>
        </div>
      </div>
    </section>
  );
}
