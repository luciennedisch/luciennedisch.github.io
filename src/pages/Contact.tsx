import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

export const Contact = () => {
  return (
    <section className="px-6 py-12 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      <p className="text-gray-700 mb-6">
        I’d love to hear from you! Whether you have a question, a research idea,
        or just want to connect, feel free to reach out.
      </p>

      <a
        href="mailto:disch@uchicago.com"
        className="block text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 mb-4"
      >
        disch@uchicago.com
      </a>

      <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-700">
        <a
          href="https://github.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://orcid.org/0000-0000-0000-0000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition-colors duration-200"
        >
          <SiOrcid />
        </a>
      </div>
    </section>
  );
};
