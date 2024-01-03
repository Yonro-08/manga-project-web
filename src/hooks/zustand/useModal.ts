import { create } from "zustand";

interface useModalProps {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const useModal = create<useModalProps>((set) => ({
	isOpen: false,
	openModal: () =>
		set(() => {
			document.body.classList.add("is-modal");
			return { isOpen: true };
		}),
	closeModal: () =>
		set(() => {
			document.body.classList.remove("is-modal");
			return { isOpen: false };
		}),
}));
