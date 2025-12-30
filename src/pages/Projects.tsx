export interface Project {
  name: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Project 1",
    description: "Short description",
    link: "https://github.com/yourname/project1",
  },
  {
    name: "Project 2",
    description: "Another cool project",
    link: "https://github.com/yourname/project2",
  },
];

export const Projects = () => (
  <section className="px-6 py-10 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((pr, index) => (
        <div
          key={index}
          className="
            border
            rounded-lg
            p-5
            transition
            duration-200
            hover:shadow-lg
          "
        >
          {pr.link ? (
            <a
              href={pr.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xl font-semibold text-blue-600
                hover:text-blue-800
                hover:underline
                transition
                duration-200
              "
            >
              {pr.name}
            </a>
          ) : (
            <span className="text-xl font-semibold text-gray-800">{pr.name}</span>
          )}

          <p className="mt-2 text-gray-700">{pr.description}</p>

          {pr.link && (
            <a
              href={pr.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm text-blue-600 font-semibold
                hover:text-blue-800
                hover:underline
                transition
                duration-200
                mt-2
                inline-block
              "
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);
