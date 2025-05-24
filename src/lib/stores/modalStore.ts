import { create } from "zustand";

interface ConfirmationModal {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
}

interface ModalState {
  confirmationModal: ConfirmationModal;
  openConfirmationModal: (
    title: string,
    description: string,
    onConfirm: () => void
  ) => void;
  closeConfirmationModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  confirmationModal: {
    isOpen: false,
    title: "",
    description: "",
    onConfirm: () => {},
  },
  openConfirmationModal: (title, description, onConfirm) =>
    set({
      confirmationModal: { isOpen: true, title, description, onConfirm },
    }),
  closeConfirmationModal: () =>
    set({
      confirmationModal: {
        isOpen: false,
        title: "",
        description: "",
        onConfirm: () => {},
      },
    }),
}));
