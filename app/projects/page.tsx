"use client";
import React, { useState } from "react";
import { projectData, ProjectDataType } from "./data/projectData";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataType | null>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="text-blue-900 font-extrabold text-3xl">PROJECTS</h1>
        <p className="text-gray-700 text-xl font-medium">
          프로젝트를 클릭하면 해당 깃허브 / 사이트로 이동할수 있습니다.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
}
