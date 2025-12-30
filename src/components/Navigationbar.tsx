import { Link } from "react-router-dom";

export const Navigationbar = () => (
  <nav className="bg-white dark:bg-gray-900 px-6 py-4 shadow">
    <div className="flex space-x-4">
      <Link to="/" className="font-semibold">Lucienne Disch</Link>
      <Link to="/publications" className="font-semibold">Publications</Link>
      <Link to="/projects" className="font-semibold">Projects</Link>
      <Link to="/talks" className="font-semibold">Talks</Link>
      <Link to="/repositories" className="font-semibold">Repositories</Link>
      <Link to="/contact" className="font-semibold">Contact</Link>
    </div>
  </nav>
);