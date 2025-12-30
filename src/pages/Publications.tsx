import disruptionPdf from "../assets/publications/disch_disruption.pdf";
import neighborhoodPdf from "../assets/publications/disch_neighborhood.pdf";

export interface Publication {
  title: string;
  journal: string;
  year: number;
  url?: string;
  file?: string;
}

export const publications: Publication[] = [
  {
    title: "Disruption in …",
    journal: "Journal A",
    year: 2023,
    file: "disch_disruption.pdf",
  },
  {
    title: "Neighborhood Effects …",
    journal: "Journal B",
    year: 2025,
    file: "disch_neighborhood.pdf",
  },
  {
    title: "Example paper title",
    journal: "Journal Name",
    year: 2024,
    url: "https://example.com",
  },
];

const localFiles: Record<string, string> = {
  "disch_disruption.pdf": disruptionPdf,
  "disch_neighborhood.pdf": neighborhoodPdf,
};

export const Publications = () => (
  <section className="px-6 py-10 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Publications</h2>

    <ul className="space-y-4">
      {publications.map((p, i) => {
        const href = p.file ? localFiles[p.file] : p.url;
        const isLocal = !!p.file;

        return (
          <li
            key={i}
            className="flex items-center justify-between border-b pb-3"
          >
            <div className="flex flex-col">
              <span className="text-xl font-medium text-gray-800">
                {p.title}
              </span>
              <span className="text-sm text-gray-600">
                {p.journal} — {p.year}
              </span>
            </div>

            {href && (
              <a
                href={href}
                {...(isLocal ? { download: true } : {})}
                target={isLocal ? undefined : "_blank"}
                rel={isLocal ? undefined : "noopener noreferrer"}
                className="
                  text-blue-600
                  text-sm font-semibold
                  hover:text-blue-800
                  hover:underline
                  transition
                  duration-200
                  ease-in-out
                "
              >
                {isLocal ? "Download" : "View"}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  </section>
);
