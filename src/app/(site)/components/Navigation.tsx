'use client';

import useModalStore from '../store/modalStore';
import Index from './Index';

export default function Navigation() {
  const {
    isModalOpen,
    selectedProject,
    isIndexMenuOpen,
    toggleIndexMenu,
    closeModal,
    scrollToProject,
    projects,
  } = useModalStore();

  const handleProjectSelect = (projectId: string) => {
    scrollToProject(projectId);
    toggleIndexMenu();
  };

  return (
    <>
      <div className="fixed z-50 flex h-16 w-full justify-between gap-5 bg-white px-4 py-4 text-xl md:h-24 md:px-12 md:py-8 md:text-2xl">
        <h1 className="shrink-0 ">Carmen Winant</h1>
        {isModalOpen && (
          <h3 className="text-center">{selectedProject?.title}</h3>
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
      <Index
        isIndexMenuOpen={isIndexMenuOpen}
        projects={projects}
        handleProjectSelect={handleProjectSelect}
      />
    </>
  );
}
