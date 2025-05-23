import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function AppLayout({
  children,
  showSidebar = false,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-heading text-2xl font-bold text-primary-500">
            Codebase App
          </h1>
          <nav className="flex gap-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="default">Login</Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div
        className={
          showSidebar ? "grid-sidebar container py-8" : "container py-8"
        }
      >
        {showSidebar && (
          <aside className="bg-[var(--muted)] p-4 rounded-lg">
            <h2 className="text-subheading text-lg font-medium text-primary-700">
              Sidebar
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="text-body w-full justify-start"
                >
                  Link 1
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-body w-full justify-start"
                >
                  Link 2
                </Button>
              </li>
            </ul>
          </aside>
        )}
        <main>{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--card)] border-t border-[var(--border)]">
        <div className="container py-4 text-center">
          <p className="text-caption text-primary-700">
            &copy; 2025 My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
