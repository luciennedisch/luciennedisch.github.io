import resumeUrl from "../assets/resume/disch_cv.pdf";
import avatarImg from "../assets/images/disch_avatar.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

export interface Profile {
  name: string;
  title: string;
  description: string;
  avatarUrl?: string;
  socials: Record<string, string>;
}

export const profile: Profile = {
  name: "Lucienne Disch",
  title: "Postdoctoral Scholar",
  description: "Write your biography here. Tell the world about yourself.",
  avatarUrl: avatarImg,
  socials: {
    GitHub: "https://github.com/yourname",
    LinkedIn: "https://linkedin.com/in/yourname",
    ORCID: "https://orcid.org/0000-0000-0000-0000",
  },
};

export const About = () => (
  <section className="text-center py-16 px-4 max-w-2xl mx-auto">
    <img
      src={profile.avatarUrl}
      alt={`${profile.name} avatar`}
      className="
        w-32 h-32
        rounded-full
        mx-auto
        object-cover
        border-4 border-gray-100
        transition-transform duration-300 ease-in-out
        hover:scale-105
        hover:shadow-lg
      "
    />

    <h1 className="text-4xl font-bold mt-4">{profile.name}</h1>
    <p className="text-lg text-gray-700">{profile.title}</p>

    <p className="mt-4 text-gray-600">{profile.description}</p>

    <a
      href={resumeUrl}
      download
      className="
        inline-block
        mt-6
        px-6 py-2
        text-sm font-medium
        text-gray-800
        bg-gray-100
        border border-gray-300
        rounded-md
        transition
        duration-300 ease-in-out
        hover:bg-gray-200
        hover:shadow-md
        hover:-translate-y-1
      "
    >
      Download CV
    </a>

    <div className="mt-6 flex justify-center gap-6 text-2xl text-gray-700">
      {profile.socials.GitHub && (
        <a
          href={profile.socials.GitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>
      )}
      {profile.socials.LinkedIn && (
        <a
          href={profile.socials.LinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
      )}
      {profile.socials.ORCID && (
        <a
          href={profile.socials.ORCID}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition-colors duration-200"
        >
          <SiOrcid />
        </a>
      )}
    </div>
  </section>
);
