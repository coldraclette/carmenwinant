'use client';

import useModalStore from '../store/modalStore';
import { ProjectProps } from '../types';
import Index from './Index';

export default function Navigation() {
  const {
    isModalOpen,
    selectedProject,
    isIndexMenuOpen,
    toggleIndexMenu,
    closeModal,
    scrollToProject,
    openModal,
    projects,
  } = useModalStore();

  const handleProjectSelect = (projectId: string) => {
    const project = projects.find((p: ProjectProps) => p._id === projectId);

    if (project) {
      openModal(project);
    }

    scrollToProject(projectId);
    toggleIndexMenu();
  };

  return (
    <>
      <div className="fixed z-50 flex h-16 w-full flex-col bg-white px-4 py-4 text-xl lg:h-24 lg:px-12 lg:py-8 lg:text-2xl">
        <div className="flex w-full gap-2 justify-between">
          <h1 className="shrink-0 ">Carmen Winant</h1>
          {isModalOpen && (
            <h3 className="hidden text-center lg:flex">
              {selectedProject?.title}
            </h3>
          )}
          {isModalOpen ? (
            <button className="flex shrink-0" onClick={closeModal}>
              Close Artwork
            </button>
          ) : (
            <button className="flex shrink-0" onClick={toggleIndexMenu}>
              {isIndexMenuOpen && 'close '}index
            </button>
          )}
        </div>
        {isModalOpen && (
          <div className="mt-2 flex w-full flex-col justify-center text-sm lg:mt-0">
            <h3 className="flex justify-center lg:hidden">
              {selectedProject?.title}
            </h3>
            {selectedProject?.subtitle && (
              <p className="hidden lg:flex justify-center">{selectedProject?.subtitle}</p>
            )}
          </div>
        )}
      </div>
      <Index
        isIndexMenuOpen={isIndexMenuOpen}
        projects={projects}
        handleProjectSelect={handleProjectSelect}
      />
    </>
  );
}
