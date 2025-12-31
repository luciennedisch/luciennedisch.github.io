import resumeUrl from "../assets/resume/disch_cv.pdf";
import portraitImg from "../assets/images/disch.jpg";
import avatarImg from "../assets/images/disch_avatar.png";

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
            Postdoctoral Scholar at the Stone Center, University of Chicago
          </p>
          <p className="mt-4 md:mt-12 text-gray-600 max-w-prose mx-auto md:mx-0">
            I am working on how family, school, and neighborhood factors shape
            child development, including the effects of family disruption and
            residential relocation on children’s test scores.
          </p>
          <p className="mt-4 md:mt-12 text-gray-600 max-w-prose mx-auto md:mx-0">
            I received my PhD in Economics from the University of Pennsylvania
            in May 2025.
          </p>
          <p className="mt-6 md:mt-16 text-gray-600">
            Contact:{" "}
            <a
              href="mailto:disch@uchicago.com"
              className="inline text-lg text-gray-900 hover:underline transition-colors duration-200"
            >
              disch@uchicago.com
            </a>
          </p>

          <div className="mt-6 md:hidden flex justify-center">
            <a
              href={resumeUrl}
              download
              className="relative flex items-center bg-gray-50 border border-gray-300 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition px-3 py-0.5"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-300 shadow">
                <img
                  src={avatarImg}
                  alt="Download CV"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="ml-4 text-gray-700 font-medium text-base">
                Download CV
              </span>
            </a>
          </div>
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
