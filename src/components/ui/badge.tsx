import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center rounded-full border border-gold/60 bg-gold/12 px-3.5 text-sm font-medium text-gold-bright",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
