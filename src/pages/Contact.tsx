import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

export const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Get in Touch
      </h1>
      <p className="mt-4 md:mt-12 text-gray-600">
        I’d love to hear from you! Whether you have a question, a research idea,
        or just want to connect, feel free to reach out.
      </p>

      <div className="mt-6 md:mt-16 flex flex-col items-center gap-6">
        <a
          href="mailto:disch@uchicago.com"
          className="text-lg text-gray-900 hover:underline transition-colors duration-200"
        >
          disch@uchicago.com
        </a>

        <div className="flex gap-6 text-2xl text-gray-700">
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
      </div>
    </section>
  );
};
