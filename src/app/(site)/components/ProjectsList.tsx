'use client';

import React, { useEffect } from 'react';

import useModalStore from '../store/modalStore';
import { ProjectProps } from '../types';
import ProjectModal from './ProjectModal';
import ProjectRow from './ProjectRow';

interface ProjectListProps {
  projects: ProjectProps[];
}

export default function ProjectsList({ projects }: ProjectListProps) {
  const { openModal, setProjects } = useModalStore();

  useEffect(() => {
    setProjects(projects);
  }, [projects, setProjects]);

  const handleProjectClick = (project: ProjectProps) => {
    openModal(project);
  };

  return (
    <>
      {projects.map((project: ProjectProps) => (
        <div
          id={project._id}
          key={project._id}
          onClick={() => handleProjectClick(project)}
        >
          <ProjectRow project={project} />
        </div>
      ))}

      <ProjectModal />
    </>
  );
}
