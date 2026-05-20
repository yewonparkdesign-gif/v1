"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/lib/navigation";
import { ease } from "@/lib/motion";
import { Search, Menu, Sun, Moon } from "lucide-react";
import { useMobileNav } from "./MobileNavProvider";
import { useTheme } from "./ThemeProvider";

function getBreadcrumb(pathname: string): string {
  if (pathname === "/") return "Introduction";
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === pathname) return item.label;
      if (item.children) {
        const child = item.children.find((c) => c.href === pathname);
        if (child) return child.label;
      }
    }
  }
  const segment = pathname.split("/").filter(Boolean).pop() ?? "";
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function TopBar() {
  const pathname = usePathname();
  const label = getBreadcrumb(pathname);
  const { toggle: toggleNav } = useMobileNav();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <motion.header
      className="h-12 shrink-0 flex items-center justify-between px-4 md:px-6 border-b border-[var(--border)] bg-[var(--canvas)]/80 backdrop-blur-sm sticky top-0 z-20"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease }}
    >
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={toggleNav}
          className="lg:hidden p-1.5 rounded-lg text-[var(--ink-subtle)] hover:text-[var(--ink)] hover:bg-[var(--border)] transition-colors"
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>

        <div className="text-[13px] text-[var(--ink-muted)]">
          <span className="text-[var(--ink-subtle)] hidden sm:inline">SAP Visual System</span>
          {label && (
            <>
              <span className="mx-2 text-[var(--ink-faint)] hidden sm:inline">/</span>
              <span className="text-[var(--ink)]">{label}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-subtle text-[12px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">
          <Search size={12} />
          <span className="hidden sm:inline">Search</span>
          <kbd className="ml-1 px-1 rounded text-[10px] bg-[var(--glass-subtle-bg)] text-[var(--ink-subtle)] hidden sm:inline">⌘K</kbd>
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg text-[var(--ink-subtle)] hover:text-[var(--ink)] hover:bg-[var(--border)] transition-colors"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </motion.header>
  );
}
