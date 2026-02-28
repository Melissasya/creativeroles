import { useState, useEffect } from "react";
import "./JobCard.css";

/* ===================== JOB CARD COMPONENT ===================== */
/* Denna komponent visar ett enskilt jobbkort med titel, företag, 
   typ av arbete (remote/onsite), arbetstid, kort beskrivning, 
   publiceringsdatum och länk till mer information. 
   Beskrivningen anpassas dynamiskt beroende på skärmstorlek. */

export default function JobCard({ job }) {
  // Tar bort HTML-taggar från jobbeskrivningen
  const fullDescription = job.description?.text || "";
  const cleanDescription = fullDescription.replace(/<[^>]*>/g, "");

  // State för att hålla den förkortade beskrivningen
  const [description, setDescription] = useState("");

  /* ===================== DYNAMISK BESKRIVNING ===================== */
  /* Förkortar texten beroende på skärmstorlek:
     - Desktop: 500 tecken
     - Tablet/Mobil: 200 tecken
     - Liten mobil: 120 tecken
     Beskrivningen uppdateras även vid fönsterstorleksändring. */
  useEffect(() => {
    const updateDescription = () => {
      const width = window.innerWidth;
      let maxChars = 500;
      if (width <= 768) maxChars = 200;
      else if (width <= 480) maxChars = 120;

      setDescription(
        cleanDescription.length > maxChars
          ? cleanDescription.slice(0, maxChars) + "..."
          : cleanDescription,
      );
    };

    updateDescription();
    window.addEventListener("resize", updateDescription);
    return () => window.removeEventListener("resize", updateDescription);
  }, [cleanDescription]);

  // Formaterat publiceringsdatum
  const date = job.publication_date
    ? new Date(job.publication_date).toLocaleDateString("sv-SE")
    : "Okänd datum";

  // Bestämmer om jobbet är remote/hybrid baserat på beskrivningen
  const descriptionText = cleanDescription.toLowerCase();
  const isRemote =
    descriptionText.includes("distans") ||
    descriptionText.includes("remote") ||
    descriptionText.includes("hybrid");

  const locationLabel = isRemote ? "Distans / Hybrid" : "Stockholm";
  const workType = job.working_hours_type?.label || "Okänd";

  return (
    <div className="job-card">
      {/* Jobbtitel och företag */}
      <h3>{job.headline}</h3>
      <p className="company">{job.employer?.name}</p>

      {/* Badges för arbetsplats och arbetstyp */}
      <div className="badges">
        <span className={`badge ${isRemote ? "remote" : "onsite"}`}>
          {locationLabel}
        </span>
        <span className="badge worktype">{workType}</span>
      </div>

      {/* Förkortad beskrivning */}
      <p className="description" style={{ marginBottom: "1rem" }}>
        {description}
      </p>

      {/* Publiceringsdatum */}
      <p className="date">Publicerad: {date}</p>

      {/* Länk till jobbsidan */}
      <a
        href={job.webpage_url}
        target="_blank"
        rel="noopener noreferrer"
        className="apply-link"
      >
        Läs mer →
      </a>
    </div>
  );
}
