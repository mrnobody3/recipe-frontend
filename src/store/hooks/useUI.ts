import { useUIStore } from '../useUIStore';

// Atomic selectors prevent components from re-rendering unless this specific value changes
export const useIsSidebarOpen = () => useUIStore((state) => state.isSidebarOpen);
export const useActiveModal = () => useUIStore((state) => state.activeModal);

// Export actions as a single object so components don't re-render when state changes
export const useUIActions = () =>
  useUIStore((state) => ({
    toggleSidebar: state.toggleSidebar,
    openModal: state.openModal,
    closeModal: state.closeModal,
  }));
