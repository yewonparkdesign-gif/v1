"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { slideInLeft, staggerContainer, ease } from "@/lib/motion";
import { ChevronDown, X } from "lucide-react";
import { useMobileNav } from "./MobileNavProvider";

function SapLogo() {
  return (
    <motion.img
      src="/sap-logo.svg"
      alt="SAP"
      className="h-8 w-auto"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ opacity: 0.75, scale: 1.04 }}
      whileTap={{ scale: 0.97, opacity: 0.6 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    />
  );
}

function NavContent({ onLinkClick, mobile }: { onLinkClick?: () => void; mobile?: boolean }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  function toggleSection(title: string) {
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <motion.nav
      className={cn(
        "flex-1 overflow-y-auto scrollbar-none",
        mobile ? "px-6 py-6 space-y-2" : "px-3 py-4 space-y-1"
      )}
      variants={staggerContainer(0.04, 0.1)}
      initial="hidden"
      animate="show"
    >
      {navigation.map((section, sectionIdx) => {
        const isCollapsed = collapsed[section.title];

        if (section.pinned) {
          return (
            <motion.div key={section.title} variants={slideInLeft} className={mobile ? "mb-4" : "mb-2"}>
              <ul className={mobile ? "space-y-1" : "space-y-0.5"}>
                {section.items.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onLinkClick}
                        className={cn(
                          "flex items-center justify-between rounded-xl transition-all duration-150 uppercase tracking-widest",
                          mobile
                            ? "px-4 py-3.5 text-[22px] font-bold tracking-tight"
                            : "px-3 py-2 text-[11px] font-extrabold",
                          isActive
                            ? "bg-accent/10 text-[var(--ink)]"
                            : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--border)]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        }

        return (
          <motion.div key={section.title} variants={slideInLeft}>
            {sectionIdx > 0 && (
              <div className={cn("h-px bg-[var(--border)]", mobile ? "mx-4 my-4" : "mx-3 my-3")} />
            )}
            <button
              onClick={() => toggleSection(section.title)}
              className={cn(
                "flex items-center justify-between w-full group",
                mobile ? "px-4 py-2 mb-1" : "px-3 py-1.5 mb-1"
              )}
            >
              <span className={cn(
                "font-extrabold uppercase tracking-widest text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors",
                mobile ? "text-[11px]" : "text-[11px]"
              )}>
                {section.title}
              </span>
              <ChevronDown
                size={mobile ? 15 : 13}
                className={cn(
                  "text-[var(--ink-subtle)] group-hover:text-[var(--ink-muted)] transition-all duration-200",
                  isCollapsed && "-rotate-90"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={cn("overflow-hidden", mobile ? "space-y-0.5" : "space-y-0.5")}
                >
                  {section.items.map((item) => {
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onLinkClick}
                          className={cn(
                            "flex items-center justify-between rounded-xl transition-all duration-150",
                            mobile
                              ? "px-4 py-3 text-[18px] font-medium"
                              : "px-3 py-2 text-[13px]",
                            isActive
                              ? "bg-accent/10 text-[var(--ink)] font-semibold"
                              : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--border)]"
                          )}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-accent/20 text-accent">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}

// Desktop sidebar
export function Sidebar() {
  return (
    <motion.aside
      className="hidden lg:flex flex-col w-[260px] shrink-0 h-full border-r border-[var(--border)] bg-[var(--canvas)] overflow-y-auto scrollbar-none"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="px-5 pt-6 pb-5 border-b border-[var(--border)] shrink-0">
        <Link href="/" className="block">
          <SapLogo />
        </Link>
      </div>

      <NavContent />

      <motion.div
        className="px-6 py-4 border-t border-[var(--border)] shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="text-[11px] text-[var(--ink-subtle)]">
          SAP.com Visual Uplift
          <span className="ml-2 px-1.5 py-0.5 rounded bg-[var(--border)] text-[10px]">v1.0</span>
        </div>
      </motion.div>
    </motion.aside>
  );
}

// Mobile drawer — rendered at layout level, triggered from TopBar
export function MobileDrawer() {
  const { open, close } = useMobileNav();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Full-screen overlay */}
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-[var(--canvas)] lg:hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-6 pb-5 border-b border-[var(--border)] shrink-0">
              <Link href="/" onClick={close}>
                <SapLogo />
              </Link>
              <button
                onClick={close}
                className="p-2 rounded-lg text-[var(--ink-subtle)] hover:text-[var(--ink)] hover:bg-[var(--border)] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <NavContent onLinkClick={close} />

            <div className="px-6 py-4 border-t border-[var(--border)] shrink-0">
              <div className="text-[11px] text-[var(--ink-subtle)]">
                SAP.com Visual Uplift
                <span className="ml-2 px-1.5 py-0.5 rounded bg-[var(--border)] text-[10px]">v1.0</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
