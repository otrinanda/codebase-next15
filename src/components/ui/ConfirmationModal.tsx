"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/lib/stores/modalStore";
import { useToastStore } from "@/lib/stores/toastStore";

export default function ConfirmationModal() {
  const { confirmationModal, closeConfirmationModal } = useModalStore();
  const { addToast } = useToastStore();

  const handleConfirm = () => {
    try {
      confirmationModal.onConfirm();
      addToast({
        title: "Aksi Berhasil",
        description: `${confirmationModal.title} telah berhasil dilakukan.`,
        variant: "success",
      });
    } catch (error) {
      addToast({
        title: "Aksi Gagal",
        description: "Terjadi kesalahan saat melakukan aksi.",
        variant: "error",
      });
      console.error("Error during confirmation:", error);
    }
    closeConfirmationModal();
  };

  return (
    <Dialog
      open={confirmationModal.isOpen}
      onOpenChange={closeConfirmationModal}
    >
      <DialogContent className="sm:max-w-[425px] animate-scale-in duration-300">
        <DialogHeader>
          <DialogTitle className="text-heading text-xl text-primary-500">
            {confirmationModal.title}
          </DialogTitle>
          <DialogDescription className="text-body text-primary-900">
            {confirmationModal.description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={closeConfirmationModal}
            className="text-button animate-slide-in duration-300"
          >
            Batal
          </Button>
          <Button
            variant="default"
            onClick={handleConfirm}
            className="text-button bg-primary-500 hover:bg-primary-600 animate-slide-in duration-300 delay-100"
          >
            Konfirmasi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
