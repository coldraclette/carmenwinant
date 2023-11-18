import { useEffect } from 'react';
import { create } from 'zustand';

import { ProjectProps } from '../types';

interface ModalState {
  selectedProject: ProjectProps | null;
  isModalOpen: boolean;
  isIndexMenuOpen: boolean;
  toggleIndexMenu: () => void;
  openModal: (project: ProjectProps) => void;
  closeModal: () => void;
  projects: ProjectProps[];
  setProjects: (projects: ProjectProps[]) => void;
  scrollToProject: (projectId: string) => void;
}

const useModalStore = create<ModalState>((set) => ({
  projects: [],
  selectedProject: null,
  isModalOpen: false,
  isIndexMenuOpen: false,
  toggleIndexMenu: () =>
    set((state) => {
      return { isIndexMenuOpen: !state.isIndexMenuOpen };
    }),
  openModal: (project: ProjectProps) =>
    set({ selectedProject: project, isModalOpen: true }),
  closeModal: () => set({ selectedProject: null, isModalOpen: false }),
  setProjects: (projects: ProjectProps[]) => set({ projects }),
  scrollToProject: (projectId: string) => {
    const projectEl = document.getElementById(projectId);
    if (projectEl) {
      projectEl.scrollIntoView({ behavior: 'smooth' });
    }
  },
}));

export const useLockBodyScroll = () => {
  const { isIndexMenuOpen, isModalOpen } = useModalStore((state) => ({
    isIndexMenuOpen: state.isIndexMenuOpen,
    isModalOpen: state.isModalOpen,
  }));

  useEffect(() => {
    if (isIndexMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isIndexMenuOpen, isModalOpen]);
};

export default useModalStore;
