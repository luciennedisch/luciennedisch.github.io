import resumeUrl from "../assets/resume/disch_cv.pdf";
import portraitImg from "../assets/images/disch.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";

export const About = () => (
  <section className="py-16 px-4">
    <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-start gap-8">
      <div className="md:hidden flex justify-center w-full mb-8 relative">
        <img
          src={portraitImg}
          alt="portrait"
          className="w-full max-w-[320px] max-h-[520px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      <div className="md:w-2/3 flex flex-col justify-between text-center md:text-left">
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-4xl font-bold">Lucienne N.Y. Disch</h1>
          <p className="text-lg text-gray-700 mt-2 md:mt-12">
            Postdoctoral Scholar at the Stone Center, University of Chicago
          </p>
          <p className="mt-6 text-gray-600 max-w-prose md:mt-8">
            I am working on ...
          </p>
          <p className="mt-4 text-gray-600 max-w-prose  md:mt-8">
            I received my PhD in Economics from the University of Pennsylvania
            in May 2025.
          </p>
          <p className="mt-4 text-gray-600 md:mt-16">
            Contact:{" "}
            <a
              href="mailto:disch@uchicago.com"
              className="inline text-lg text-black hover:text-gray-800 hover:underline transition-colors duration-200"
            >
              disch@uchicago.com
            </a>
          </p>
          <a
            href={resumeUrl}
            download
            className="md:hidden inline-block mt-6 px-6 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-600 rounded-md transition hover:bg-gray-100 hover:shadow-md hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
        <div className="mt-10 md:mt-24 flex justify-center md:justify-start gap-6 text-2xl text-gray-700">
          <a
            href="https://github.com/luciennedisch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lucienne-n-y-disch-01250582"
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
          <a
            href="https://x.com/luciennedisch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center md:justify-end relative h-full md:block hidden">
        <div className="w-full md:w-auto flex justify-center items-start md:justify-end">
          <img
            src={portraitImg}
            alt="portrait"
            className="w-full max-h-[520px] object-cover rounded-2xl shadow-xl"
          />
        </div>
        <a
          href={resumeUrl}
          download
          className="absolute -bottom-5 -left-5 px-5 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-600 rounded-full shadow-lg transition hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
);
