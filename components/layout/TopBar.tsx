"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/lib/navigation";
import { ease } from "@/lib/motion";
import { Search, Menu } from "lucide-react";
import { useMobileNav } from "./MobileNavProvider";

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
  const { toggle } = useMobileNav();

  return (
    <motion.header
      className="h-12 shrink-0 flex items-center justify-between px-4 md:px-6 border-b border-white/[0.07] bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-20"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease }}
    >
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={toggle}
          className="lg:hidden p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>

        <div className="text-[13px] text-ink-muted">
          <span className="text-ink-subtle hidden sm:inline">SAP Visual System</span>
          {label && (
            <>
              <span className="mx-2 text-ink-faint hidden sm:inline">/</span>
              <span className="text-ink">{label}</span>
            </>
          )}
        </div>
      </div>

      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-subtle text-[12px] text-ink-muted hover:text-ink transition-colors">
        <Search size={12} />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-1 px-1 rounded text-[10px] bg-white/[0.06] text-ink-subtle hidden sm:inline">⌘K</kbd>
      </button>
    </motion.header>
  );
}
