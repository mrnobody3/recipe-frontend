import { create } from 'zustand';

// 1. Define the purely data-driven state
interface UIState {
  isSidebarOpen: boolean;
  activeModal: 'login' | 'filters' | 'recipeDraft' | null;
}

// 2. Define the actions that mutate the state
interface UIActions {
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  openModal: (modal: UIState['activeModal']) => void;
  closeModal: () => void;
}

// 3. Combine them for the Zustand store type
type UIStore = UIState & UIActions;

// 4. Create the store
export const useUIStore = create<UIStore>()((set) => ({
  // Initial State
  isSidebarOpen: false,
  activeModal: null,

  // Actions
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
}));
