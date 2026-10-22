import { useUIStore } from '../useUIStore';

// Atomic state selectors
export const useIsSidebarOpen = () => useUIStore((state) => state.isSidebarOpen);
export const useActiveModal = () => useUIStore((state) => state.activeModal);

// Atomic action selectors to prevent re-renders
export const useToggleSidebar = () => useUIStore((state) => state.toggleSidebar);
export const useSetSidebarOpen = () => useUIStore((state) => state.setSidebarOpen);
export const useOpenModal = () => useUIStore((state) => state.openModal);
export const useCloseModal = () => useUIStore((state) => state.closeModal);
