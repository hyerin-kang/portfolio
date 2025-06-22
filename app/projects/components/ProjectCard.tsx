import Image from "next/image";
import { ProjectDataType } from "../data/projectData";
import { getDurationDays } from "../hooks/useChangeDuration";

interface ProjectCardProps {
  project: ProjectDataType;
  onClick?: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border border-gray-200 rounded-lg shadow-sm hover:shadow-lg overflow-hidden bg-white transform transition-transform duration-300 hover:-translate-y-4 "
    >
      <div className="w-full h-[300px] overflow-hidden relative">
        <Image
          src={project.coverImg}
          alt={`${project.title} 이미지`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700">{project.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{project.summary}</p>
        {project.duration.includes("진행중") ? (
          <p className="text-sm text-gray-600 mt-2">{project.duration}</p>
        ) : (
          <p className="text-sm text-gray-600 mt-2">
            {project.duration} / {getDurationDays(project.duration)}일
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
