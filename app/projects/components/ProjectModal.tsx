import { ProjectDataType } from "../data/projectData";

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
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p>{project.description}</p>
        <div className="mt-4 text-sm text-gray-500">
          {project.stack?.join(", ")}
        </div>
      </div>
    </div>
  );
};
