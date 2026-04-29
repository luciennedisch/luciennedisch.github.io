import portraitImg from "../assets/images/disch.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";

export const About = () => (
  <section className="px-6 py-12">
    <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="md:hidden flex justify-center w-full mb-8 relative">
        <img
          src={portraitImg}
          alt="portrait"
          className="w-full max-w-[240px] max-h-[420px] object-cover rounded-2xl shadow-xl"
        />
      </div>
      <div className="md:w-2/3 flex flex-col justify-between items-center md:items-start text-center md:text-left">
        <div className="flex flex-col justify-between h-full items-center md:items-start">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Lucienne N.Y. Disch
          </h1>
          <p className="text-lg text-gray-700 mt-4 md:mt-12">
            Grüezi! I am an economist with a primary research focus on human capital and labor economics.
          </p>
          <p className="mt-4 md:mt-12 text-lg text-gray-600 max-w-prose mx-auto md:mx-0">
            I currently work as a Postdoctoral Researcher at the Stone Center at the University of Chicago.
          </p>
          <p className="mt-4 md:mt-12 text-lg text-gray-600 max-w-prose mx-auto md:mx-0">
            I received my PhD in Economics from the University of Pennsylvania
            in 2025.
          </p>
          <p className="mt-6 md:mt-16 text-lg text-gray-600">
            Contact:{" "}
            <a
              href="mailto:disch@uchicago.edu"
              className="inline text-lg text-gray-900 hover:underline transition-colors duration-200"
            >
              disch@uchicago.edu
            </a>
          </p>
        </div>
        <div className="mt-10 md:mt-20 flex justify-center md:justify-start gap-6 text-2xl text-gray-700">
          <a
            href="https://github.com/luciennedisch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lucienne-n-y-disch-01250582"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://orcid.org/0000-0000-0000-0000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
            <SiOrcid />
          </a>
          <a
            href="https://x.com/luciennedisch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-end relative h-full md:block hidden">
        <img
          src={portraitImg}
          alt="portrait"
          className="w-full max-h-[520px] object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </section>
);
