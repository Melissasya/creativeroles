import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/JobCard";

/* ===================== RESULTS COMPONENT ===================== */
/* Denna komponent visar jobbsökresultat baserat på den valda kategorin.
   Den hämtar data från Jobtech API, filtrerar automatiskt för plats/distans,
   och renderar varje jobb som ett JobCard. */

export default function Results() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || ""; // kategori från URL
  const [jobs, setJobs] = useState([]); // state för jobblistan
  const [loading, setLoading] = useState(true); // state för laddning

  /* ===================== HÄMTA JOBB ===================== */
  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        // Hämta jobb från API med kategori och begränsning på 30 resultat
        const response = await fetch(
          `https://jobsearch.api.jobtechdev.se/search?q=${encodeURIComponent(
            category,
          )}&limit=30`,
        );

        const data = await response.json();
        let hits = data.hits || [];

        /* ===================== AUTOMATISK FILTRERING ===================== */
        hits = hits.filter((job) => {
          const municipality =
            job.workplace_address?.municipality?.toLowerCase() || "";

          const descriptionText = job.description?.text?.toLowerCase() || "";

          const employmentTypes =
            job.employment_type?.label?.toLowerCase() || "";

          // Identifiera distans/hybrid
          const isRemote =
            descriptionText.includes("distans") ||
            descriptionText.includes("remote") ||
            descriptionText.includes("hybrid");

          // Om remote → visa oavsett plats
          if (isRemote) return true;

          // Annars måste jobbet ligga i Stockholm
          return municipality === "stockholm";
        });

        setJobs(hits);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [category]);

  // Laddningsindikator
  if (loading) return <p>Laddar jobb...</p>;

  return (
    <div style={{ margin: "1.7rem auto", padding: "0.8rem" }}>
      {/* Titel med vald kategori */}
      <h2
        style={{
          marginBottom: "2rem",
          color: "#49797adc",
          fontSize: "1rem",
          marginLeft: "1rem",
        }}
      >
        Resultat för {category}
      </h2>

      {/* Meddelande om inga jobb hittades */}
      {jobs.length === 0 && <p>Inga jobb hittades.</p>}

      {/* Lista av JobCards */}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
