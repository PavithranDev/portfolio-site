import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  techStack: string[];
  links: {
    live?: string;
    github?: string;
    linkedin: string;
  };
};

export const ProjectCard = ({
  src,
  title,
  description,
  techStack,
  links,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full group">
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority
          className="rounded-t-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="relative p-8">
        <h1 className="text-3xl font-semibold text-white mb-4">{title}</h1>
        <p className="text-lg text-gray-300 mb-4">{description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm text-gray-200 bg-[#2A0E61] rounded-full border border-[#7042f88b] hover:bg-[#7042f88b] transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <RxGithubLogo className="w-6 h-6" />
            </Link>
          )}
          {links.live && (
            <Link
              href={links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </Link>
          )}
          <Link
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <RxLinkedinLogo className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
