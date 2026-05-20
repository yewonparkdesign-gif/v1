import { cn } from "@/lib/utils";

interface SpecTableProps {
  rows: Array<{ property: string; value: string; notes?: string }>;
  className?: string;
}

export function SpecTable({ rows, className }: SpecTableProps) {
  return (
    <div className={cn("my-8 rounded-xl overflow-hidden border border-border", className)}>
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-border bg-canvas-raised">
            <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-ink-subtle w-1/4">
              Property
            </th>
            <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-ink-subtle w-1/3">
              Value
            </th>
            <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-border last:border-0",
                i % 2 === 0 ? "bg-transparent" : "bg-canvas-soft"
              )}
            >
              <td className="px-5 py-3.5 font-mono text-accent text-[12px]">{row.property}</td>
              <td className="px-5 py-3.5 text-ink font-medium">{row.value}</td>
              <td className="px-5 py-3.5 text-ink-muted">{row.notes ?? "--"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
