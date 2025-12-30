import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { About } from "./pages/About";
import { Research } from "./pages/Research";
import { Teaching } from "./pages/Teaching";
import { Publications } from "./pages/Publications";
import { Projects } from "./pages/Projects";
import { Talks } from "./pages/Talks";
import { Repositories } from "./pages/Repositories";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
