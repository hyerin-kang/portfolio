import { CircleX, Github, House } from "lucide-react";
import { ProjectDataType } from "../data/projectData";
import { getDurationDays } from "../hooks/useChangeDuration";

interface ProjectModalProps {
  project: ProjectDataType;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-[90%] max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
        >
          <CircleX size={30} />
        </button>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            프로젝트 명 : {project.title}
          </h2>
          <p className="text-xl text-gray-800">{project.summary}</p>
          <p className="text-lg text-gray-800">
            개발 기간 : {project.duration} - {getDurationDays(project.duration)}
            일
          </p>
          <div className="text-base text-gray-500">
            사용 툴 : {project.stack?.join(", ")}
          </div>
          <div className="flex flex-col gap-4 w-[300px] max-w-[90%] ">
            <a
              href={project.github}
              target="_blank"
              className=" cursor-pointer flex items-center justify-center gap-5 text-xl bg-blue-950 text-white p-2 rounded-xl hover:bg-blue-800 duration-150"
            >
              <Github size={30} />
              깃허브 바로가기
            </a>
            <a
              href={project.live}
              target="_blank"
              className="cursor-pointer flex items-center justify-center gap-5 text-xl bg-blue-950 text-white p-2 rounded-xl hover:bg-blue-800 duration-150"
            >
              <House size={30} />
              사이트 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
