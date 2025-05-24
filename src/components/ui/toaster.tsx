"use client";

import { useToastStore } from "@/lib/stores/toastStore";
import Toast from "@/components/ui/toast";

export default function Toaster() {
  const { toasts } = useToastStore();

  return (
    <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-50">
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ zIndex: 50 + index }}>
          <Toast
            id={toast.id}
            title={`${toast.title} - ${index + 1}`}
            description={toast.description}
            variant={toast.variant}
            duration={toast.duration}
          />
        </div>
      ))}
    </div>
  );
}
