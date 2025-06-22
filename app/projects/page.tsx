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
      <h1>PROJECTS</h1>
      <p>프로젝트를 클릭하면 해당 프로젝트의 상세 내용을 확인할 수 있습니다.</p>
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
