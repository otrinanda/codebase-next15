"use client";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function AppLayout({
  children,
  showSidebar = false,
}: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[var(--card)] border-b border-[var(--border)] animate-fade-in duration-300">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-heading text-2xl font-bold text-primary-500">
            My App
          </h1>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-4">
              <Button variant="ghost" className="text-button">
                Home
              </Button>
              <Button variant="ghost" className="text-button">
                About
              </Button>
              <Button variant="default" className="text-button">
                Login
              </Button>
            </nav>
            <DarkModeToggle />
            <Button
              variant="ghost"
              className="md:hidden text-button"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div
        className={
          showSidebar ? "grid-sidebar container py-8" : "container py-8"
        }
      >
        {showSidebar && (
          <aside
            className={`bg-[var(--muted)] p-4 rounded-lg transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static top-0 left-0 h-full md:h-auto z-50 w-64 md:w-auto animate-slide-in`}
          >
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-subheading text-lg font-medium text-primary-700">
                Sidebar
              </h2>
              <Button variant="ghost" onClick={toggleSidebar}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <h2 className="text-subheading text-lg font-medium text-primary-700 hidden md:block">
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
        <main className="animate-fade-in duration-300">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--card)] border-t border-[var(--border)] animate-slide-up duration-300">
        <div className="container py-4 text-center">
          <p className="text-caption text-primary-700">
            © 2025 My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
