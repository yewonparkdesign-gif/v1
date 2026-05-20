"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, fadeIn, staggerContainer, viewport } from "@/lib/motion";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  prose?: boolean;
}

export function PageWrapper({ children, className, prose }: PageWrapperProps) {
  return (
    <div
      className={cn(
        "px-8 py-12 mx-auto",
        prose ? "max-w-[960px]" : "max-w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  badge?: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  status?: "draft" | "published" | "wip";
  lastUpdated?: string;
}

const statusColors = {
  published: "bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  draft: "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20",
  wip: "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
};

export function PageHeader({
  title,
  badge,
  subtitle,
  description,
  tags,
  status,
  lastUpdated,
}: PageHeaderProps) {
  return (
    <motion.div
      className="mb-16 pb-12 border-b border-border"
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="show"
    >
      {/* Meta row */}
      {(status || lastUpdated) && (
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          {status && (
            <span
              className={cn(
                "text-[11px] font-medium px-2.5 py-1 rounded-full border",
                statusColors[status]
              )}
            >
              {status === "wip" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          )}
          {lastUpdated && (
            <span className="text-[11px] text-ink-subtle">
              Updated{" "}
              {new Date(lastUpdated).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </motion.div>
      )}

      {/* Title */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
        <h1 className="text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-gradient">
          {title}
        </h1>
        {badge && (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-accent/20 text-accent self-center mt-1">
            {badge}
          </span>
        )}
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-[1.25rem] text-ink-muted font-light leading-relaxed mb-6 max-w-[600px]"
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          variants={fadeUp}
          className="text-[0.9375rem] text-ink-subtle leading-relaxed max-w-[640px]"
        >
          {description}
        </motion.p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-canvas-overlay text-ink-subtle border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
