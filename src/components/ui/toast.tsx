"use client";

import { useState, useEffect } from "react";
import { useToastStore } from "@/lib/stores/toastStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: "success" | "error";
  duration?: number;
}

export default function Toast({
  id,
  title,
  description,
  variant = "success",
  duration = 3000,
}: ToastProps) {
  const { removeToast } = useToastStore();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (isClosing) {
      const animationTimer = setTimeout(() => {
        removeToast(id);
      }, 300); // Sesuai durasi animate-fade-out
      return () => clearTimeout(animationTimer);
    }
  }, [isClosing, id, removeToast]);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <div
      className={cn(
        "w-full max-w-xs rounded-lg border p-4 shadow-lg transition-all",
        variant === "success" && "bg-primary text-white border-primary-600",
        variant === "error" &&
          "bg-destructive text-white border-destructive-foreground",
        isClosing
          ? "animate-slide-out-bottom opacity-0"
          : "animate-slide-in-bottom"
      )}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-heading text-base font-semibold">{title}</h3>
          {description && (
            <p className="text-body text-sm mt-1">{description}</p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-white hover:bg-white/20"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
